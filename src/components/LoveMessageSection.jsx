import separatorImage from "../assets/Img/Separador_3.png";

function LoveMessageSection() {
  return (
    <section
      className="grid place-items-center overflow-hidden bg-wedding-separator-wine text-wedding-separator-wine"
      aria-labelledby="love-message-title"
    >
      <div className="relative aspect-[1503/1047] w-full max-w-[760px]">
        <img
          className="absolute inset-0 size-full object-contain"
          src={separatorImage}
          alt=""
          draggable="false"
        />
        <div className="absolute top-[16%] right-[20%] bottom-[16%] left-[20%] flex flex-col items-center justify-center gap-[clamp(0.5rem,2vw,1.25rem)] text-center">
          <h2
            className="m-0 max-w-[32ch] text-[clamp(1rem,4vw,2rem)] leading-[1.15] font-semibold tracking-[0.1em] font-wedding-body"
            id="love-message-title"
          >
            Una sola vida no basta, para decirte cuanto te amo.
          </h2>
          <p className="m-0 text-[clamp(0.75rem,2.6vw,1.2rem)] leading-[1.4] font-wedding-body font-medium tracking-[0.12em]">
            Con amor, queremos compartir este día tan especial y celebrar juntos
            el comienzo de nuestra historia para siempre.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoveMessageSection;
