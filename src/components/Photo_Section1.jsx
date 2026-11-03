import hotelIllustration from "../assets/Img/hotel.png";
import couplePhoto from "../assets/Img/IMG_7.jpg.jpeg";
import fondo from "../assets/Img/fondo_1.png";

function PhotoSection1() {
  return (
    <section
      className="grid h-svh min-h-160 grid-rows-[1fr_1fr] overflow-hidden"
      aria-labelledby="celebration-details-title"
    >
      <div className="relative min-h-0 overflow-hidden bg-wedding-hero-background">
        <img
          className="absolute inset-0 size-full scale-[1.12] object-cover object-[center_62%]"
          src={couplePhoto}
          alt="Arantxa y Samuel juntos hojeando una revista con su historia"
          draggable="false"
        />
      </div>

      <div className="relative isolate grid min-h-0 grid-rows-[38%_62%] items-center bg-wedding-paper text-wedding-separator-wine">
        <div
          className="absolute inset-0 bg-center bg-cover opacity-80"
          style={{ backgroundImage: `url(${fondo})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-wedding-paper/70"
          aria-hidden="true"
        />
        <img
          className="relative z-10 mx-auto h-full max-w-[42vw] object-contain mix-blend-multiply mt-25"
          src={hotelIllustration}
          alt=""
          draggable="false"
        />

        <div className="relative z-10 flex min-h-0 flex-col items-center justify-center px-4 text-center text-[clamp(1rem,3.4vw,1.75rem)] font-wedding-body leading-[1.35] tracking-[0.06em] font-bold uppercase">
          <h2 className="sr-only" id="celebration-details-title">
            Detalles de la celebración
          </h2>
          <p className="m-0">
            Fecha: 19 de diciembre 2026
            <br />
            Hora: 4:00 PM
          </p>
          <p className="mt-[clamp(0.65rem,2vh,1.25rem)] mb-0 max-w-[70ch]">
            Lugar: Hotel Hyatt Regency Panamá
            <br />
            Piso M - Mezanine (Ceremonia / Terraza)
            <br />
            Piso RT - Torre 2 (Recepción)
          </p>
        </div>
      </div>
    </section>
  );
}

export default PhotoSection1;
