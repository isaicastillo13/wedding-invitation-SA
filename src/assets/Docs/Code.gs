const SPREADSHEET_ID = '1Bhk6QuhmWatwLHfmOWHpOen06RpSt_9kYQ02ZoQkqHI';
const INVITATIONS_SHEET = 'Invitaciones';
const GUESTS_SHEET = 'Invitados';

function doGet(e) {
  try {
    const token = String(e?.parameter?.token || '').trim();
    if (!token) return json_({ ok: false, error: 'Falta el token de invitación.' });

    const data = getInvitation_(token);
    if (!data) return json_({ ok: false, error: 'Invitación no encontrada.' });
    return json_({ ok: true, invitation: data });
  } catch (error) {
    return json_({ ok: false, error: 'No se pudo consultar la invitación.' });
  }
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    const payload = JSON.parse(e?.postData?.contents || '{}');
    const token = String(payload.token || '').trim();
    const responses = payload.responses;
    if (!token || !Array.isArray(responses) || responses.length === 0) {
      return json_({ ok: false, error: 'Solicitud incompleta.' });
    }

    const invitation = findInvitation_(token);
    if (!invitation) return json_({ ok: false, error: 'Invitación no encontrada.' });

    const guestsSheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(GUESTS_SHEET);
    const rows = guestsSheet.getDataRange().getValues();
    const guestRows = new Map();
    for (let i = 1; i < rows.length; i++) {
      if (String(rows[i][1]) === invitation.code && String(rows[i][2] || '').trim()) {
        guestRows.set(String(rows[i][0]), { row: i + 1, name: String(rows[i][2]) });
      }
    }

    const seen = new Set();
    const updates = [];
    for (const item of responses) {
      const guestId = String(item?.invitadoId || '');
      const answer = String(item?.confirmacion || '');
      if (!guestRows.has(guestId) || seen.has(guestId) || !['Sí', 'No'].includes(answer)) {
        return json_({ ok: false, error: 'Una respuesta no es válida para esta invitación.' });
      }
      seen.add(guestId);
      updates.push({ row: guestRows.get(guestId).row, answer });
    }

    updates.forEach(update => guestsSheet.getRange(update.row, 6).setValue(update.answer));
    SpreadsheetApp.flush();
    return json_({ ok: true, invitation: getInvitation_(token) });
  } catch (error) {
    return json_({ ok: false, error: 'No se pudieron guardar las respuestas.' });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function findInvitation_(token) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(INVITATIONS_SHEET);
  const rows = sheet.getDataRange().getValues();
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][9]) === token) {
      return { row: i + 1, code: String(rows[i][0]), name: String(rows[i][1]), seats: Number(rows[i][2]) || 0 };
    }
  }
  return null;
}

function getInvitation_(token) {
  const invitation = findInvitation_(token);
  if (!invitation) return null;
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(GUESTS_SHEET);
  const rows = sheet.getDataRange().getValues();
  const guests = [];
  let unassignedSeats = 0;
  for (let i = 1; i < rows.length; i++) {
    if (String(rows[i][1]) !== invitation.code) continue;
    const name = String(rows[i][2] || '').trim();
    if (!name) {
      unassignedSeats++;
      continue;
    }
    guests.push({
      invitadoId: String(rows[i][0]),
      nombre: name,
      esPrincipal: rows[i][3] === true,
      puesto: Number(rows[i][4]) || null,
      confirmacion: String(rows[i][5] || 'Pendiente')
    });
  }
  return {
    nombrePrincipal: invitation.name,
    puestosAsignados: invitation.seats,
    puestosSinNombre: unassignedSeats,
    invitados: guests
  };
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
