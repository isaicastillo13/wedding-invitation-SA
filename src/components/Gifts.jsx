import backgroundImage from "../assets/Img/fondo_1.png";

function Gifts() {
  return (
    <section
      className="relative isolate grid min-h-[240px] place-items-center overflow-hidden bg-wedding-paper px-5 py-12 text-wedding-separator-wine"
      aria-labelledby="gift-title"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-wedding-paper/65"
        aria-hidden="true"
      />

      <div className="relative z-10 flex w-full max-w-250 flex-col items-center gap-8 text-center">
        <h2
          className="m-0 leading-[1.1] font-normal text-wedding-separator-wine"
          id="dress-code-title"
        >
          Muestra de Cariño
        </h2>
        <div className="font-wedding-body leading-[1.45]">
          <p className="m-0">Lluvia de sobres</p>
          <p className="m-0">
            <span className="font-bold">Yappy:</span> <br />
            6676-6109
          </p>
          <p className="mb-8">
            <span className="font-bold">ACH:</span> <br /> Samuel y Arantxa{" "}
            <br />
            Banco general <br />
            Cuenta de ahorros
            <br />
            04-01-98-356275-3
          </p>
        </div>
      </div>
    </section>
  );
}

export default Gifts;
