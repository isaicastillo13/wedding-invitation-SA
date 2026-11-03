import couplePhoto from '../assets/Img/IMG_4.JPG.jpeg'
import marco from '../assets/Img/marco.png'

function SeatsSection({ invitation }) {
  return (
    <section
      className="grid min-h-svh grid-rows-[minmax(19rem,45svh)_minmax(32rem,1fr)] overflow-hidden md:h-svh md:min-h-[680px] md:grid-cols-[0.95fr_1.05fr] md:grid-rows-1"
      aria-labelledby="seats-title"
    >
      <img
        className="size-full object-cover object-[center_38%]"
        src={couplePhoto}
        alt="Arantxa y Samuel abrazados y sonriendo"
        draggable="false"
        loading="lazy"
      />

      <div className="grid grid-rows-[auto_1fr_auto] justify-items-center bg-wedding-separator-wine px-5 py-[clamp(1.5rem,4vh,3rem)] text-wedding-white">
        <h2
          className="m-0 leading-tight font-medium"
          id="seats-title"
        >
          Para ti
        </h2>

        <div className="relative my-6 grid aspect-[427/580] w-[clamp(180px,29vw,280px)] max-w-[72vw] place-items-center text-wedding-separator-wine">
          <img
            className="absolute inset-0 size-full object-contain"
            src={marco}
            alt=""
            draggable="false"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-center text-center">
            <span className="font-wedding-script leading-none text-3xl">
              {invitation?.puestosAsignados ?? '—'}
            </span>
            <p className="mt-2 mb-0 font-wedding-body leading-none">
              Puesto
            </p>
          </div>
        </div>

        <p className="m-0 max-w-[32ch] text-center font-wedding-body leading-[1.25]">
          Fecha límite para confirmar asistencia
          <br />
          18 de noviembre 2026
        </p>
      </div>
    </section>
  )
}

export default SeatsSection
