import backgroundImage from '../assets/Img/fondo_1.png'

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

      <div className="relative z-10 flex w-full max-w-[1000px] translate-y-[5vh] flex-col items-center gap-8 text-center">
        <h2
          className="m-0 text-[clamp(3rem,14vw,8rem)] leading-[0.85] font-normal text-wedding-separator-wine"
          id="gift-title"
        >
          Muestra de cariño
        </h2>
        <div className="font-wedding-body text-[clamp(1.65rem,5vw,3rem)] leading-[1.45]">
          <p className="m-0">lluvia de sobres</p>
          <p className="m-0">Yappy: 6676-6109</p>
          <p className="mb-8">ACH:</p>
        </div>
      </div>
    </section>
  )
}

export default Gifts
