import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import cherryBlossom from './assets/cherry_blossom.avif'
import petal1 from './assets/petal1.png'
import petal2 from './assets/petal2.png'
import petal3 from './assets/petal3.png'
import petal4 from './assets/petal4.png'
import petal5 from './assets/petal5.png'
import petal6 from './assets/petal6.png'
import petal7 from './assets/petal7.png'
import petal8 from './assets/petal8.png'
import petal9 from './assets/petal9.png'
import petal10 from './assets/petal10.png'

gsap.registerPlugin(ScrollTrigger)

const petalImages = [petal1, petal2, petal3, petal4, petal5, petal6, petal7, petal8, petal9, petal10]
const petals = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  image: petalImages[index % petalImages.length],
  left: (index / 24 * 100 + ((index * 13) % 17) - 8 + 100) % 100,
  size: 14 + ((index * 7) % 15),
  opacity: 0.55 + ((index * 11) % 35) / 100,
}))

function App() {
  const page = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      gsap.from('.blossom-image', {
        opacity: 0,
        scale: 1.18,
        duration: 2.2,
        ease: 'power3.out',
      })

      gsap.from('.blossom-wash', {
        opacity: 1,
        duration: 1.8,
        delay: 0.35,
        ease: 'power2.inOut',
      })

      gsap.fromTo('.petal', {
        y: '-15vh',
        rotation: () => gsap.utils.random(-180, 180),
      }, {
        y: '115vh',
        x: () => gsap.utils.random(-120, 120),
        rotation: () => gsap.utils.random(180, 540),
        duration: () => gsap.utils.random(5, 10),
        delay: () => gsap.utils.random(0, 4),
        repeat: -1,
        repeatDelay: 1,
        ease: 'none',
      })

      gsap.to('.blossom-image', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-stage',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.hero-content', {
        yPercent: -18,
        scale: 0.86,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero-stage',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: page.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      gsap.from('.hero-copy', {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      })

      gsap.from('.reveal', {
        y: 80,
        opacity: 0,
        scale: 0.86,
        rotationX: -12,
        transformPerspective: 700,
        duration: 1,
        stagger: 0.15,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.details',
          start: 'top 85%',
        },
      })

      gsap.fromTo('.detail-mark', { scaleX: 0 }, {
        scaleX: 1,
        transformOrigin: 'left center',
        ease: 'none',
        scrollTrigger: {
          trigger: '.details',
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: 0.8,
        },
      })

      gsap.fromTo('.timeline-line', { scaleX: 0 }, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.details',
          start: 'top 80%',
          end: 'bottom 55%',
          scrub: true,
        },
      })

      gsap.fromTo('.pattern-band', { xPercent: -35 }, {
        xPercent: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.pattern-band',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((card, index) => {
        gsap.to(card, {
          y: index === 1 ? -42 : 26,
          rotation: index === 1 ? 1.5 : index === 0 ? -1.5 : 1,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      gsap.to('.rose-one', {
        y: -90,
        rotation: 24,
        ease: 'none',
        scrollTrigger: {
          trigger: '.details',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.to('.rose-two', {
        y: 70,
        rotation: -18,
        ease: 'none',
        scrollTrigger: {
          trigger: '.details',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      gsap.from('.footer-copy', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.footer-copy',
          start: 'top 90%',
        },
      })

      gsap.fromTo('.footer-copy', { scale: 0.82 }, {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.footer-copy',
          start: 'top bottom',
          end: 'top 65%',
          scrub: true,
        },
      })

      gsap.to('.japanese-seal', {
        rotation: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: '.details',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, page)

    return () => context.revert()
  }, [])

  return (
    <main ref={page} className="rose-background relative min-h-screen overflow-hidden bg-rose-50 text-stone-800">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="rose rose-one" aria-hidden="true" />
      <div className="rose rose-two" aria-hidden="true" />
      <div className="petal-rain" aria-hidden="true">
        {petals.map((petal) => (
          <img
            key={petal.id}
            className="petal"
            src={petal.image}
            alt=""
            style={{ left: `${petal.left}%`, width: `${petal.size}px`, opacity: petal.opacity }}
          />
        ))}
      </div>
      <section className="hero-stage relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-20">
        <img className="blossom-image absolute inset-0 h-full w-full object-cover opacity-70" src={cherryBlossom} alt="Cherry blossoms in bloom" />
        <div className="blossom-wash absolute inset-0 bg-rose-50/75" />
        <div className="hero-content relative z-10 flex w-full max-w-6xl flex-col items-center">
        <div className="japanese-seal mb-5 flex h-12 w-12 items-center justify-center border border-rose-700/60 text-xl text-rose-800 sm:mb-7 sm:h-14 sm:w-14 sm:text-2xl" aria-label="Together">
          結
        </div>
        <p className="hero-copy mb-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rose-700 sm:mb-6 sm:text-xs sm:tracking-[0.35em]">
          結び · Together with their families
        </p>
        <h1 className="hero-copy japanese-brush max-w-none whitespace-nowrap text-[clamp(1.45rem,8.5vw,4.75rem)] font-normal leading-none text-stone-900">
          Shubhajit <span className="text-rose-600">&amp;</span> Meghna
        </h1>
        <p className="hero-copy mt-6 text-base text-stone-600 sm:mt-8 sm:text-lg">invite you to celebrate their wedding</p>
        <div className="hero-copy mt-10 h-px w-20 bg-rose-400 sm:mt-14 sm:w-24" />
        <p className="hero-copy mt-6 font-serif text-xl text-stone-900 sm:mt-8 sm:text-2xl">October 18, 2026</p>
        <p className="hero-copy mt-2 text-[0.65rem] uppercase tracking-[0.18em] text-stone-500 sm:text-sm sm:tracking-[0.25em]">Brooklyn, New York</p>
        <span className="hero-copy mt-14 text-[0.65rem] uppercase tracking-[0.2em] text-stone-400 sm:mt-20 sm:text-xs sm:tracking-[0.3em]">Scroll to explore</span>
        </div>
      </section>

      <div className="pattern-band japanese-pattern flex items-center justify-center px-4 py-4 text-[0.65rem] tracking-[0.45em] text-rose-800/70 sm:px-6 sm:py-5 sm:text-xs sm:tracking-[0.8em]" aria-hidden="true">
        花 · 縁 · 花
      </div>
      <section className="details mx-auto grid max-w-5xl gap-4 px-4 pb-20 sm:gap-6 sm:px-6 sm:pb-28 md:grid-cols-3">
        <div className="timeline-line pointer-events-none absolute left-1/2 hidden h-px w-[calc(100%-3rem)] max-w-4xl origin-left -translate-x-1/2 bg-rose-300 sm:block" />
        <article className="reveal relative border-t border-rose-300 bg-white/60 p-6 sm:p-8">
          <div className="detail-mark absolute left-0 top-0 h-1 w-full origin-left bg-rose-700" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">The ceremony</p>
          <h2 className="mt-4 font-serif text-2xl text-stone-900 sm:mt-5 sm:text-3xl">Garden vows</h2>
          <p className="mt-3 leading-7 text-stone-600 sm:mt-4">A quiet afternoon ceremony beneath the old elm trees at Prospect Park.</p>
        </article>
        <article className="reveal relative border-t border-rose-300 bg-white/60 p-6 sm:p-8">
          <div className="detail-mark absolute left-0 top-0 h-1 w-full origin-left bg-rose-700" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">The reception</p>
          <h2 className="mt-4 font-serif text-2xl text-stone-900 sm:mt-5 sm:text-3xl">Dinner &amp; dancing</h2>
          <p className="mt-3 leading-7 text-stone-600 sm:mt-4">Join us for seasonal plates, champagne, and a dance floor that stays warm.</p>
        </article>
        <article className="reveal relative border-t border-rose-300 bg-white/60 p-6 sm:p-8">
          <div className="detail-mark absolute left-0 top-0 h-1 w-full origin-left bg-rose-700" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">The details</p>
          <h2 className="mt-4 font-serif text-2xl text-stone-900 sm:mt-5 sm:text-3xl">Come as you are</h2>
          <p className="mt-3 leading-7 text-stone-600 sm:mt-4">Cocktail attire, comfortable shoes, and your best stories encouraged.</p>
        </article>
      </section>

      <footer className="footer-copy border-t border-rose-200 px-4 py-8 text-center text-sm text-stone-500 sm:px-6 sm:py-10">
        We can&apos;t wait to see you there.
      </footer>
    </main>
  )
}

export default App
