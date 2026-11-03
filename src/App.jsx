import { useRef, useState } from 'react'
import backgroundImage from './assets/Img/fondo_2.png'
import envelopeBody from './assets/Img/Sobre_2.png'
import envelopeFlap from './assets/Img/Sobre_3.png'
import waxSeal from './assets/Img/Sobre_4.png'
import backgroundMusic from './assets/cancionFondo.mp3'
import InvitationHero from './components/InvitationHero.jsx'
import LoveMessageSection from './components/LoveMessageSection.jsx'
import PhotoSection1 from './components/Photo_Section1.jsx'
import DressCode from './components/DressCode.jsx'
import SeatsSection from './components/SeatsSection.jsx'
import Gift from './components/Gifts.jsx'
import PhotoSection2 from './components/Photo_Section2.jsx'

import './App.css'

function App() {
  const [envelopeState, setEnvelopeState] = useState('closed')
  const musicRef = useRef(null)

  const openEnvelope = () => {
    if (envelopeState !== 'closed') return

    const music = musicRef.current
    if (music) {
      void music.play().catch((error) => {
        console.error('No se pudo reproducir la música de la invitación.', error)
      })
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setEnvelopeState('open')
      return
    }

    setEnvelopeState('opening')
  }

  const finishOpening = (event) => {
    if (event.propertyName === 'transform' && envelopeState === 'opening') {
      setEnvelopeState('open')
    }
  }

  const stateLabel = {
    closed: 'Sobre cerrado. Pulsa para abrir la invitación.',
    opening: 'Abriendo la invitación.',
    open: 'Invitación abierta.',
  }[envelopeState]
  const isOpening = envelopeState !== 'closed'

  return (
    <main className="relative min-h-svh">
      <audio ref={musicRef} src={backgroundMusic} loop preload="auto" />
      <section
        className="relative isolate grid min-h-svh place-items-center overflow-visible bg-wedding-paper bg-cover bg-center px-5 py-[clamp(28px,6vh,68px)] text-wedding-ink"
        style={{
          backgroundImage: `linear-gradient(var(--color-wedding-page-overlay-soft),var(--color-wedding-page-overlay)),url("${backgroundImage}")`,
        }}
        aria-labelledby="page-title"
      >
        <div
          className="flex w-full max-w-[680px] flex-col items-center text-center"
          data-state={envelopeState}
        >
   
  


          <div className="relative aspect-[1559/1009] w-[min(86vw,560px)] [perspective:1300px] max-[480px]:w-[min(91vw,560px)]">
            <div
              className={`invitation-card absolute top-[8%] left-[13%] z-[1] grid h-[58%] w-[74%] content-center justify-items-center border border-[var(--color-wedding-card-border)] bg-[linear-gradient(135deg,var(--color-wedding-card-top),var(--color-wedding-card-bottom))] p-4 text-wedding-card-ink shadow-[0_5px_16px_var(--color-wedding-card-shadow)] opacity-0 invisible translate-y-3 transition-[opacity,transform,visibility] duration-[650ms] delay-[550ms] max-[480px]:p-[0.55rem] ${isOpening ? 'visible translate-y-0 opacity-100 delay-0' : ''}`}
              id="wedding-invitation"
              aria-hidden={envelopeState !== 'open'}
            >
              <p className="m-0 leading-[1.5] font-semibold tracking-[0.15em] text-wedding-label uppercase">
                TEXTO DE EJEMPLO · REEMPLAZAR
              </p>
              <p className="my-[0.2em] font-serif leading-[1.1]">
                Arantxa <span className="text-wedding-accent italic">&amp;</span>{' '}
                Samuel
              </p>
              <p className="mt-[0.22em] mb-0 font-serif">
                Sábado, 00 de mes · 20XX
              </p>
              <p className="mt-[0.22em] mb-0 font-serif italic">
                Ciudad · lugar por confirmar
              </p>
            </div>

            <img
              className="pointer-events-none absolute inset-0 z-[2] size-full object-contain select-none"
              src={envelopeBody}
              alt=""
              draggable="false"
            />

            <div
              className={`envelope-flap absolute top-[1%] left-0 z-[4] aspect-[1774/887] w-full [transform:rotateX(0deg)] [transform-origin:50%_0%] [transform-style:preserve-3d] transition-transform duration-[1250ms] ease-[cubic-bezier(0.66,0,0.24,1)] pointer-events-none ${isOpening ? '[transform:rotateX(180deg)]' : ''}`}
              aria-hidden="true"
              onTransitionEnd={finishOpening}
            >
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <img
                  className="block size-full object-contain select-none"
                  src={envelopeFlap}
                  alt=""
                  draggable="false"
                />
                <span
                  className={`wax-seal absolute top-1/2 left-1/2 block aspect-[1307/1203] w-[22.5%] [transform:translateX(-50%)] transition-[opacity,transform] duration-[320ms] ${isOpening ? 'opacity-0 [transform:translate(-50%,-8%)_scale(0.76)_rotate(-8deg)]' : ''}`}
                >
                  <img
                    className="block size-full object-contain select-none"
                    src={waxSeal}
                    alt=""
                    draggable="false"
                  />
                </span>
              </div>
              <div className="absolute inset-0 overflow-hidden [transform:rotateX(180deg)] [backface-visibility:hidden] [clip-path:polygon(0_0,100%_0,50%_78%)] [background:radial-gradient(ellipse_at_50%_4%,var(--color-wedding-flap-highlight),transparent_58%),linear-gradient(160deg,var(--color-wedding-flap-top),var(--color-wedding-flap-bottom))] shadow-[inset_0_0_18px_var(--color-wedding-flap-shadow)]" />
            </div>

            <button
              className="absolute inset-0 z-[5] size-full cursor-pointer touch-manipulation rounded-lg border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-wedding-focus focus-visible:outline-offset-[7px] disabled:cursor-default"
              type="button"
              onClick={openEnvelope}
              disabled={envelopeState !== 'closed'}
              aria-label="Abrir el sobre y descubrir la invitación de boda de S · A"
              aria-controls="wedding-invitation"
              aria-expanded={envelopeState === 'open'}
            />
          </div>

          <p className="mt-[clamp(14px,2.5vh,22px)] mb-0 min-h-[1.5em] font-serif italic text-wedding-hint [text-shadow:0_1px_10px_var(--color-wedding-glow-strong)]">
            {envelopeState === 'closed' ? 'Toca para abrir' : stateLabel}
          </p>
          <p className="sr-only" role="status" aria-live="polite">
            {stateLabel}
          </p>
        </div>
      </section>

      <InvitationHero visible={envelopeState === 'open'} />
      {envelopeState === 'open' && <LoveMessageSection />}
      {envelopeState === 'open' && <PhotoSection1 />}
      {envelopeState === 'open' && <DressCode />}
      {envelopeState === 'open' && <SeatsSection />}
      {envelopeState === 'open' && <Gift />}
      {envelopeState === 'open' && <PhotoSection2 />}
    </main>
  )
}

export default App
