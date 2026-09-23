import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import cherryBlossom from './assets/cherry_blossom.avif'
import shubhaJapani from './assets/shubha_japani.png'
import meghnaJapani from './assets/meghna_japani.png'
import coupleJapani from './assets/couple_japani.jpeg'
import shrineBackground from './assets/shrine_background.png'
import gardenVow from './assets/garden_vow.png'
import cocktailParty from './assets/cocktail_party.png'
import coupleDoodle from './assets/couple_doodle.png'
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
          scrub: 1,
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
          scrub: 1,
        },
      })

      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: page.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })

      gsap.from('.hero-copy', {
        y: 32,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
      })

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((card, index) => {
        gsap.fromTo(card, {
          y: 56,
          opacity: 0,
          scale: 0.96,
        }, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: index * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      gsap.fromTo('.detail-mark', { scaleX: 0 }, {
        scaleX: 1,
        transformOrigin: 'left center',
        ease: 'none',
        scrollTrigger: {
          trigger: '.details',
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: 1,
        },
      })

      gsap.fromTo('.timeline-line', { scaleX: 0 }, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.details',
          start: 'top 80%',
          end: 'bottom 55%',
          scrub: 1,
        },
      })

      gsap.fromTo('.pattern-band', { backgroundPositionX: '-24px' }, {
        backgroundPositionX: '24px',
        ease: 'none',
        scrollTrigger: {
          trigger: '.pattern-band',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      })

      gsap.to('.rose-one', {
        y: -90,
        rotation: 24,
        ease: 'none',
        scrollTrigger: {
          trigger: '.details',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
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
          scrub: 1.2,
        },
      })

      gsap.from('.shrine-copy', {
        y: 24,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.shrine-copy',
          start: 'top 90%',
        },
      })

      gsap.fromTo('.shrine-copy', { scale: 0.82 }, {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.shrine-copy',
          start: 'top bottom',
          end: 'top 65%',
          scrub: 1,
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

      gsap.from('.story-heading', {
        y: 34,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.story-heading',
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      })

      gsap.utils.toArray<HTMLElement>('.story-panel').forEach((panel, index) => {
        gsap.fromTo(panel, {
          y: 80,
          opacity: 0,
          rotateY: index === 1 ? -8 : 8,
        }, {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: panel,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.story-image').forEach((image, index) => {
        gsap.to(image, {
          xPercent: index === 1 ? -3 : 3,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        })
      })

      gsap.utils.toArray<HTMLElement>('.event-image').forEach((image, index) => {
        gsap.fromTo(image, {
          scale: 1.18,
          filter: 'grayscale(0.7)',
        }, {
          scale: 1,
          filter: 'grayscale(0)',
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top 88%',
            end: 'bottom 55%',
            scrub: 1,
          },
        })
        gsap.to(image, {
          yPercent: index === 1 ? 8 : -8,
          ease: 'none',
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      })

      gsap.from('.shrine-copy', {
        y: 36,
        duration: 1,
        scrollTrigger: {
          trigger: '.shrine-footer',
          start: 'top 75%',
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

      <section className="story-section mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="story-heading mb-12 text-center sm:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-700">二人の物語 · Our story</p>
          <h2 className="japanese-brush mt-4 text-4xl text-stone-900 sm:text-5xl">A little about us</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <article className="story-panel story-card group bg-white/70 p-5 transition duration-500 hover:-translate-y-3 hover:bg-white sm:p-7">
            <div className="story-image relative overflow-hidden border border-rose-200 bg-rose-100 transition duration-700 group-hover:border-rose-500">
              <img className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-72" src={shubhaJapani} alt="Illustration of Shubha" />
              <div className="pointer-events-none absolute inset-0 bg-rose-900/0 transition duration-700 group-hover:bg-rose-900/10" />
            </div>
            <p className="story-label mt-6 min-h-10 text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">The groom · 新郎</p>
            <h3 className="japanese-brush mt-2 text-3xl leading-tight text-stone-900">Shubha</h3>
            <p className="mt-4 leading-7 text-stone-600">A sharp, nerdy lad from Barrackpore with a deep archive of life, humor, and, naturally, football.</p>
          </article>
          <article className="story-panel story-card group bg-white/70 p-5 transition duration-500 hover:-translate-y-3 hover:bg-white sm:p-7">
            <div className="story-image relative overflow-hidden border border-rose-200 bg-rose-100 transition duration-700 group-hover:border-rose-500">
              <img className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-72" src={meghnaJapani} alt="Illustration of Meghna" />
              <div className="pointer-events-none absolute inset-0 bg-rose-900/0 transition duration-700 group-hover:bg-rose-900/10" />
            </div>
            <p className="story-label mt-6 min-h-10 text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">The bride · 新婦</p>
            <h3 className="japanese-brush mt-2 text-3xl leading-tight text-stone-900">Meghna</h3>
            <p className="mt-4 leading-7 text-stone-600">A bubbly, pretty lass, Bollywood devotee, and certified fashionista. Shubha: proceed with caution.</p>
          </article>
          <article className="story-panel story-card group bg-white/70 p-5 transition duration-500 hover:-translate-y-3 hover:bg-white sm:p-7">
            <div className="story-image relative overflow-hidden border border-rose-200 bg-rose-100 transition duration-700 group-hover:border-rose-500">
              <img className="h-64 w-full object-cover transition duration-700 ease-out group-hover:scale-105 sm:h-72" src={coupleJapani} alt="Illustration of the couple" />
              <div className="pointer-events-none absolute inset-0 bg-rose-900/0 transition duration-700 group-hover:bg-rose-900/10" />
            </div>
            <p className="story-label mt-6 min-h-10 text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">How they met · 出会い</p>
            <h3 className="japanese-brush mt-2 text-3xl leading-tight text-stone-900">Opposites attract</h3>
            <p className="mt-4 leading-7 text-stone-600">Post-pandemic, under clear skies and drifting clouds, two hearts became opposite poles and pulled each other close.</p>
          </article>
        </div>
      </section>

      <section
        className="details shrine-events relative mx-auto grid max-w-6xl gap-4 overflow-hidden px-4 py-20 sm:gap-6 sm:px-6 sm:py-28 md:grid-cols-3"
        style={{ backgroundImage: `url(${shrineBackground})` }}
      >
        <div className="shrine-events-wash absolute inset-0" aria-hidden="true" />
        <div className="timeline-line pointer-events-none absolute left-1/2 hidden h-px w-[calc(100%-3rem)] max-w-4xl origin-left -translate-x-1/2 bg-rose-300 sm:block" />
        <article className="reveal relative overflow-hidden border-t border-rose-300 bg-white/60 p-6 sm:p-8">
          <div className="detail-mark absolute left-0 top-0 h-1 w-full origin-left bg-rose-700" />
          <div className="event-image mb-6 h-48 overflow-hidden bg-rose-100 sm:h-56"><img className="h-full w-full object-cover" src={gardenVow} alt="Garden vow illustration" /></div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">The ceremony</p>
          <h2 className="japanese-brush mt-4 text-2xl text-stone-900 sm:mt-5 sm:text-3xl">Garden vows</h2>
          <p className="mt-3 leading-7 text-stone-600 sm:mt-4">A quiet afternoon ceremony beneath the old elm trees at Prospect Park.</p>
        </article>
        <article className="reveal relative overflow-hidden border-t border-rose-300 bg-white/60 p-6 sm:p-8">
          <div className="detail-mark absolute left-0 top-0 h-1 w-full origin-left bg-rose-700" />
          <div className="event-image mb-6 h-48 overflow-hidden bg-rose-100 sm:h-56"><img className="h-full w-full object-cover" src={cocktailParty} alt="Cocktail party illustration" /></div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">The reception</p>
          <h2 className="japanese-brush mt-4 text-2xl text-stone-900 sm:mt-5 sm:text-3xl">Dinner &amp; dancing</h2>
          <p className="mt-3 leading-7 text-stone-600 sm:mt-4">Join us for seasonal plates, champagne, and a dance floor that stays warm.</p>
        </article>
        <article className="reveal relative overflow-hidden border-t border-rose-300 bg-white/60 p-6 sm:p-8">
          <div className="detail-mark absolute left-0 top-0 h-1 w-full origin-left bg-rose-700" />
          <div className="event-image doodle-image mb-6 h-48 overflow-hidden bg-rose-100 sm:h-56"><img className="h-full w-full object-contain" src={coupleDoodle} alt="Couple doodle illustration" /></div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">The details</p>
          <h2 className="japanese-brush mt-4 text-2xl text-stone-900 sm:mt-5 sm:text-3xl">Come as you are</h2>
          <p className="mt-3 leading-7 text-stone-600 sm:mt-4">Cocktail attire, comfortable shoes, and your best stories encouraged.</p>
        </article>
      </section>

      <footer className="shrine-footer relative overflow-hidden border-t border-rose-200 bg-rose-950 px-4 py-20 text-center text-sm text-white sm:px-6 sm:py-28">
        <div className="shrine-copy relative z-10 mx-auto max-w-xl">
          <p className="japanese-brush text-5xl text-rose-100 sm:text-6xl" lang="ja">ようこそ</p>
          <p className="mt-4 font-serif text-xs uppercase tracking-[0.35em] text-rose-200">末永く · For all our days</p>
          <p className="mt-5 font-serif text-2xl text-white sm:text-3xl">Welcome, with love.</p>
          <p className="mt-3 font-serif text-base text-rose-100/90 sm:text-lg">We can&apos;t wait to celebrate with you.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
