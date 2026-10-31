import DressCodeIllustration from "../assets/Img/dressCode.png";
import couplePhoto from "../assets/Img/IMG_2.JPG.jpeg";
import backgroundImage from "../assets/Img/fondo_1.png";

function DressCode() {
  return (
    <>
      <section
        className="relative isolate flex  flex-col overflow-hidden bg-wedding-paper text-wedding-separator-wine py-6"
        aria-labelledby="dress-code-title"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url("${backgroundImage}")` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-wedding-paper/75"
          aria-hidden="true"
        />

        <header className="px-4 text-center">
          <h2
            className="m-0 text-[clamp(1.75rem,7.5vw,5.25rem)] leading-[0.95] font-normal text-wedding-separator-wine text-6xl"
            id="dress-code-title"
          >
            Código de vestimenta
          </h2>
          <p className="mt-[clamp(0.75rem,2.5vh,1.5rem)] mb-0 font-wedding-body text-[clamp(1.25rem,3.6vw,2.25rem)] leading-tight">
            Formal, elegante
          </p>
        </header>

        <div className="relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-[1fr_minmax(180px,0.85fr)_1fr] items-center gap-x-[clamp(0.75rem,3vw,2.5rem)] px-[clamp(1rem,3vw,3rem)] max-[640px]:grid-cols-2 max-[640px]:grid-rows-[auto_auto] max-[640px]:gap-x-3 max-[640px]:gap-y-0 max-[640px]:px-4">
          <div className="text-center max-[640px]:row-start-2">
            <h3 className="m-0 font-wedding-body text-[clamp(1.3rem,3.8vw,2.3rem)] leading-tight font-medium">
              Hombres
            </h3>
            <p className="mt-3 mb-0 font-wedding-body text-[clamp(0.85rem,2.4vw,1.3rem)] leading-[1.4] ">
              Traje y corbata
              <br />
              No usar gatito
            </p>
          </div>

          <img
            className="mx-auto max-h-[44svh] w-full max-w-[300px] object-contain mix-blend-multiply max-[640px]:col-span-2 max-[640px]:row-start-1 max-[640px]:h-[38svh] max-[640px]:w-auto max-[640px]:max-h-[320px] max-[640px]:max-w-[52vw]"
            src={DressCodeIllustration}
            alt=""
            draggable="false"
          />

          <div className="max-[640px]:row-start-2 text-center">
            <h3 className="m-0 font-wedding-body text-[clamp(1.3rem,3.8vw,2.3rem)] leading-tight font-medium">
              Mujeres
            </h3>
            <p className="mt-3 mb-0 font-wedding-body text-[clamp(0.85rem,2.4vw,1.3rem)] leading-[1.4]">
              Vestido largo
              <br />
              No usar color blanco o rojo
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative min-h-[45svh] overflow-hidden bg-wedding-hero-background"
        aria-label="Fotografía de la pareja"
      >
        <img
          className="absolute inset-0 size-full object-cover object-[right_80%]"
          src={couplePhoto}
          alt="Arantxa y Samuel compartiendo un momento juntos"
          draggable="false"
          loading="lazy"
        />
      </section>
    </>
  );
}

export default DressCode;
