import couplePhoto from '../assets/Img/IMG_1.JPG.jpeg'

function PhotoSection2() {
  return (
    <section
      className="grid min-h-svh place-items-center overflow-hidden bg-wedding-photo-edge"
      aria-labelledby="closing-verse"
    >
      <div className="relative h-svh w-full max-w-[min(72svh,700px)] overflow-hidden">
        <img
          className="absolute inset-0 size-full object-cover object-center"
          src={couplePhoto}
          alt="Arantxa y Samuel tomados de la mano frente a una puerta de madera"
          draggable="false"
          loading="lazy"
        />
        <div className="absolute inset-x-0 top-[14%] bg-wedding-white px-[clamp(1rem,5vw,3rem)] py-[clamp(2rem,5vh,3rem)] text-center text-wedding-separator-wine">
          <h2 className="sr-only" id="closing-verse">
            Cita bíblica
          </h2>
          <blockquote className="mx-auto my-0 max-w-[58ch] font-wedding-body text-[clamp(1rem,2vw,1.25rem)] leading-[1.45]">
            <p className="m-0">
              Y ahora permanecen la fe, la esperanza y el amor, estos tres; pero
              el mayor de ellos es el amor.
            </p>
            <cite className="mt-2 block not-italic">
              1ra Corintios 13:13
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default PhotoSection2
