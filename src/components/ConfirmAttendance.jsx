import { useState } from 'react'
import { guardarRespuestas } from '../services/invitacionesApi'

function ConfirmAttendance({
  token,
  invitation,
  loadState,
  loadError,
  onInvitationUpdated,
}) {
  const [responses, setResponses] = useState({})
  const [isSaving, setIsSaving] = useState(false)
  const [saveError, setSaveError] = useState('')
  const [isSaved, setIsSaved] = useState(false)

  const selectedResponses =
    invitation?.invitados
      .map(({ invitadoId, confirmacion }) => ({
        invitadoId,
        confirmacion: responses[invitadoId] ?? confirmacion,
      }))
      .filter(({ confirmacion }) => confirmacion === 'Sí' || confirmacion === 'No') ??
    []

  const updateResponse = (invitadoId, confirmacion, checked) => {
    setResponses((current) => ({
      ...current,
      [invitadoId]: checked ? confirmacion : 'Pendiente',
    }))
    setSaveError('')
    setIsSaved(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!selectedResponses.length || isSaving) return

    setIsSaving(true)
    setSaveError('')
    setIsSaved(false)
    try {
      const updatedInvitation = await guardarRespuestas(
        token,
        selectedResponses,
      )
      setResponses(
        Object.fromEntries(
          updatedInvitation.invitados.map(({ invitadoId, confirmacion }) => [
            invitadoId,
            confirmacion,
          ]),
        ),
      )
      onInvitationUpdated(updatedInvitation)
      setIsSaved(true)
    } catch (error) {
      setSaveError(error.message)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <section
      className="bg-wedding-separator-wine px-5 py-[clamp(2.5rem,7vh,5rem)] text-wedding-white"
      aria-labelledby="confirm-attendance-title"
    >
      <div className="mx-auto w-full max-w-[680px]">
        <h2
          className="m-0 text-center font-wedding-body text-[clamp(1.75rem,4vw,2.25rem)] leading-tight font-semibold"
          id="confirm-attendance-title"
        >
          Confirma tu asistencia
        </h2>

        {loadState === 'loading' && (
          <p className="mt-6 mb-0 text-center" role="status">
            Cargando los datos de tu invitación…
          </p>
        )}
        {loadState === 'missing' && (
          <p className="mt-6 mb-0 text-center" role="status">
            Para consultar tus puestos y confirmar asistencia, abre el enlace
            personalizado de tu invitación.
          </p>
        )}
        {loadState === 'error' && (
          <p className="mt-6 mb-0 text-center" role="alert">
            {loadError}
          </p>
        )}

        {loadState === 'loaded' && invitation && (
          <>
            {invitation.puestosSinNombre > 0 && (
              <p className="mt-6 mb-0 text-center text-sm text-wedding-white/80">
                Hay {invitation.puestosSinNombre}{' '}
                {invitation.puestosSinNombre === 1
                  ? 'puesto pendiente'
                  : 'puestos pendientes'}{' '}
                de completar con un nombre; no es posible responder por esos
                puestos.
              </p>
            )}

            {invitation.invitados.length === 0 ? (
              <p className="mt-6 mb-0 text-center" role="status">
                Aún no hay invitados con nombre para confirmar.
              </p>
            ) : (
              <form className="mt-6" onSubmit={handleSubmit}>
                <ul className="m-0 list-none p-0">
                  {invitation.invitados.map((guest) => (
                    <li
                      className="border-b border-wedding-white/20 py-5 text-center"
                      key={guest.invitadoId}
                    >
                      <p className="m-0 font-wedding-body text-xl font-semibold">
                        {guest.nombre}
                      </p>
                      <fieldset
                        className="mt-3 flex flex-col items-center gap-3 border-0 p-0"
                        disabled={isSaving}
                      >
                        <legend className="sr-only">
                          Respuesta para {guest.nombre}
                        </legend>
                        <label className="inline-flex cursor-pointer items-center gap-2">
                          <input
                            className="size-4 accent-[var(--color-wedding-paper)]"
                            type="checkbox"
                            value="Sí"
                            checked={
                              (responses[guest.invitadoId] ??
                                guest.confirmacion) === 'Sí'
                            }
                            onChange={(event) =>
                              updateResponse(
                                guest.invitadoId,
                                'Sí',
                                event.target.checked,
                              )
                            }
                          />
                          <span>Sí asistiré</span>
                        </label>
                        <label className="inline-flex cursor-pointer items-center gap-2">
                          <input
                            className="size-4 accent-[var(--color-wedding-paper)]"
                            type="checkbox"
                            value="No"
                            checked={
                              (responses[guest.invitadoId] ??
                                guest.confirmacion) === 'No'
                            }
                            onChange={(event) =>
                              updateResponse(
                                guest.invitadoId,
                                'No',
                                event.target.checked,
                              )
                            }
                          />
                          <span>No podré asistir</span>
                        </label>
                      </fieldset>
                    </li>
                  ))}
                </ul>

                {saveError && (
                  <p className="mt-5 mb-0 text-center" role="alert">
                    {saveError}
                  </p>
                )}
                {isSaved && (
                  <p className="mt-5 mb-0 text-center" role="status">
                    Tus respuestas se guardaron correctamente.
                  </p>
                )}

                <button
                  className="mx-auto mt-6 block rounded border border-wedding-white bg-transparent px-6 py-3 font-wedding-body font-semibold text-wedding-white transition-colors duration-200 hover:bg-wedding-white hover:text-wedding-separator-wine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wedding-white disabled:cursor-not-allowed disabled:opacity-50"
                  type="submit"
                  disabled={isSaving || selectedResponses.length === 0}
                >
                  {isSaving ? 'Guardando…' : 'Guardar respuestas'}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default ConfirmAttendance
