import couplePhoto from "../assets/Img/IMG_3.JPG.jpeg";
import "./InvitationHero.css";

function InvitationHero({ visible }) {
  return (
    <section
      className={`invitation-hero absolute inset-x-0 top-0 z-20 isolate grid h-svh min-h-svh place-items-center overflow-hidden bg-wedding-hero-background text-wedding-white opacity-0 invisible pointer-events-none ${visible ? "invitation-hero-visible visible opacity-100 pointer-events-auto" : ""}`}
      id="invitation-hero"
      aria-labelledby="couple-names"
      aria-hidden={!visible}
    >
      <img
        className="absolute inset-0 -z-10 size-full object-cover object-[center_38%] max-[600px]:object-[54%_40%]"
        src={couplePhoto}
        alt="Pareja de novios compartiendo un momento juntos en una escalera"
        draggable="false"
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-wedding-hero-overlay-strong),var(--color-wedding-hero-overlay-light)_68%),linear-gradient(0deg,var(--color-wedding-hero-overlay-soft),transparent_42%)] max-[600px]:bg-[linear-gradient(90deg,var(--color-wedding-hero-overlay-medium),var(--color-wedding-hero-overlay-faint)_92%),linear-gradient(0deg,var(--color-wedding-hero-overlay),transparent_50%)]"
        aria-hidden="true"
      />
      <div className="absolute top-2/3 left-[clamp(24px,6vw,88px)] w-[min(52vw,630px)] -translate-y-1/2 max-[600px]:top-[66%] max-[600px]:left-10 max-[600px]:w-[62vw]">
        <h1
          className="m-0 flex flex-col items-start font-wedding-script text-wedding-hero leading-[0.88] tracking-normal text-wedding-white [text-shadow:0_2px_18px_var(--color-wedding-hero-shadow)] max-[600px]:text-[clamp(2.6rem,12vw,4.5rem)]"
          id="couple-names"
        >
          <span>Arantxa</span>
          <span className="my-[0.12em] self-center text-[0.66em]">&amp;</span>
          <span>Samuel</span>
        </h1>
      </div>
      <p className="absolute bottom-[clamp(38px,9vh,82px)] left-1/2 m-0 -translate-x-1/2 px-[1.15em] py-[0.55em] font-wedding-body leading-[1.35] text-wedding-white">
        ¡Nos casamos!
      </p>
    </section>
  );
}

export default InvitationHero;
