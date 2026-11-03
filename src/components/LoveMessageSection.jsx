import separatorImage from '../assets/Img/Separador_3.png'

function LoveMessageSection() {
  return (
    <section
      className="grid place-items-center overflow-hidden bg-wedding-separator-wine text-wedding-separator-wine h-[300px]"
      aria-labelledby="love-message-title"
    >
      <div className="relative aspect-[2020/1437] w-full max-w-[760px]">
        <img
          className="absolute inset-0 size-full object-contain"
          src={separatorImage}
          alt=""
          draggable="false"
        />
        <div className="absolute top-[19%] right-[20%] bottom-[18%] left-[20%] flex flex-col items-center justify-center text-center">
          <h2
            className="m-0 max-w-[32ch] leading-[1.35] font-semibold tracking-[0.12em] uppercase"
            id="love-message-title"
          >
            Una sola vida no basta, para decirte cuanto te amo
          </h2>
          <p className="mt-[clamp(1rem,4vw,2.5rem)] mb-0 font-wedding-body leading-[1.6] font-medium tracking-[0.15em] uppercase">
            Con amor, queremos compartir este día tan especial y celebrar juntos
            el comienzo de nuestra historia para siempre.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LoveMessageSection
