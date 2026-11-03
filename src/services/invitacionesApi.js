const API_URL = import.meta.env.VITE_INVITACIONES_API_URL

function validarInvitacion(result) {
  if (result?.ok !== true) {
    throw new Error(
      result?.error || 'No se pudo completar la solicitud de invitación.',
    )
  }

  const invitation = result.invitation
  if (
    !invitation ||
    typeof invitation.nombrePrincipal !== 'string' ||
    !Number.isFinite(invitation.puestosAsignados) ||
    !Number.isFinite(invitation.puestosSinNombre) ||
    !Array.isArray(invitation.invitados)
  ) {
    throw new Error('La respuesta del servicio de invitaciones no es válida.')
  }

  const invalidGuest = invitation.invitados.some(
    (guest) =>
      typeof guest.invitadoId !== 'string' ||
      typeof guest.nombre !== 'string' ||
      !['Sí', 'No', 'Pendiente'].includes(guest.confirmacion),
  )
  if (invalidGuest) {
    throw new Error('La respuesta contiene datos de invitados no válidos.')
  }

  return invitation
}

async function solicitar(url, options, fallbackMessage) {
  let response
  try {
    response = await fetch(url, options)
  } catch (error) {
    throw new Error(
      'No se pudo conectar con el servicio de invitaciones. Verifica la conexión y la configuración CORS del endpoint.',
      { cause: error },
    )
  }

  let result
  try {
    result = await response.json()
  } catch (error) {
    throw new Error(
      `El servicio de invitaciones devolvió una respuesta no válida (HTTP ${response.status}).`,
      { cause: error },
    )
  }

  if (!response.ok) {
    throw new Error(result?.error || `${fallbackMessage} (HTTP ${response.status}).`)
  }

  return validarInvitacion(result)
}

function obtenerApiUrl() {
  if (!API_URL) throw new Error('Falta configurar la URL de la API.')
  return API_URL
}

export async function consultarInvitacion(token) {
  if (!token) throw new Error('El enlace no contiene un token de invitación.')

  const url = new URL(obtenerApiUrl())
  url.searchParams.set('token', token)

  return solicitar(url, undefined, 'No se pudo consultar la invitación')
}

export async function guardarRespuestas(token, responses) {
  if (!token) throw new Error('El enlace no contiene un token de invitación.')
  if (!Array.isArray(responses) || responses.length === 0) {
    throw new Error('Selecciona al menos una respuesta antes de guardar.')
  }

  return solicitar(obtenerApiUrl(), {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ token, responses }),
  }, 'No se pudieron guardar las respuestas')
}