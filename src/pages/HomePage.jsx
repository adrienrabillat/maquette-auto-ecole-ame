import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import {
  MapPin, ChevronDown, ArrowRight, Users, Award, BookOpen,
} from 'lucide-react';

import { Stars } from '../components/ui/ReviewCard';
import ReviewCard from '../components/ui/ReviewCard';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { DrivingSchoolSchema, BreadcrumbSchema } from '../components/seo/StructuredData';
import { useInView } from '../hooks/useInView';
import {
  contactInfo, quickFormations, reviews, stats, seoMeta,
} from '../data/services';

/* ── ease preset ── */
const ease = [0.22, 1, 0.36, 1];

/* ── Animated counter ── */
function AnimatedStat({ value, suffix, label, delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const num = parseFloat(value);
    const isDecimal = value.includes('.');
    const duration = 1200;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * num;
      setDisplay(isDecimal ? current.toFixed(1) : Math.floor(current).toString());
      if (progress < 1) requestAnimationFrame(step);
    };
    const timer = setTimeout(() => requestAnimationFrame(step), delay);
    return () => clearTimeout(timer);
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="py-6 text-center">
      <div className="font-heading text-[clamp(2rem,5vw,2.8rem)] font-extrabold leading-none">
        <span className="text-primary">{display}</span>
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-text-secondary">{label}</div>
    </div>
  );
}

/* ── Why-us card ── */
const whyUsCards = [
  {
    icon: Users,
    title: "Équipe à l'écoute",
    text: "Des moniteurs patients et pédagogues qui s'adaptent à votre rythme et vos besoins.",
    accent: false,
  },
  {
    icon: Award,
    title: '4.9★ sur Google',
    text: "222+ avis positifs de nos élèves. Notre meilleure publicité, c'est votre satisfaction.",
    accent: true,
  },
  {
    icon: BookOpen,
    title: 'Toutes les formations',
    text: 'Auto, moto, conduite accompagnée, code en ligne, bateau… Tout sous un même toit.',
    accent: false,
  },
];

/* ═══════════════════════════════════════════
   HOME PAGE COMPONENT
   ═══════════════════════════════════════════ */
export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>{seoMeta.home.title}</title>
        <meta name="description" content={seoMeta.home.description} />
        <link rel="canonical" href="https://www.ame-levallois.fr/" />
        <meta property="og:title" content={seoMeta.home.title} />
        <meta property="og:description" content={seoMeta.home.description} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content="https://www.ame-levallois.fr/images/og-image.jpg" />
      </Helmet>
      <DrivingSchoolSchema />
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }]} />

      {/* ── HERO ── */}
      <section className="hero-gradient relative flex min-h-screen items-center px-5 pt-24 pb-16">
        <div className="dot-pattern" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="max-w-[640px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6, ease }}
              className="glass-badge mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
            >
              <Stars count={5} size={13} />
              <span className="text-[13px] font-medium text-white/80">
                4.9/5 — 222+ avis Google
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6, ease }}
              className="mb-5 font-heading text-[clamp(2.2rem,6vw,3.5rem)] font-extrabold leading-[1.08] text-white"
            >
              Passez la{' '}
              <span className="underline-accent">vitesse supérieure</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease }}
              className="mb-8 max-w-[520px] text-[clamp(1rem,2.5vw,1.15rem)] leading-[1.7] text-white/70"
            >
              Auto Moto École à{' '}
              <strong className="text-white">Levallois-Perret</strong>. Une équipe
              jeune et à l'écoute pour vous accompagner vers la réussite.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6, ease }}
              className="mb-9 flex flex-wrap gap-3"
            >
              <Button to="/formations" iconRight={ArrowRight} className="text-base">
                Voir les formations
              </Button>
            </motion.div>

            {/* Micro info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-1.5 text-[13px] text-white/35"
            >
              <MapPin size={14} />
              <span>4 bis rue Louise Michel, 92300 Levallois-Perret</span>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 animate-bounce-slow text-white/25">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ── QUICK FORMATIONS ── */}
      <section className="relative z-10 -mt-10 px-5 pb-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {quickFormations.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease }}
                >
                  <Link
                    to="/formations"
                    className="flex flex-col items-center gap-2 rounded-[14px] border border-border bg-white p-5 text-center no-underline transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-light">
                      <Icon size={20} className="text-white" />
                    </div>
                    <span className="font-heading text-sm font-bold text-text-main">{f.title}</span>
                    <span className="text-xs text-text-secondary">{f.sub}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-bg-main px-5 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle
            label="POURQUOI NOUS CHOISIR"
            title="L'auto-école qui vous ressemble"
            description="Une équipe passionnée, des formations adaptées et un accompagnement personnalisé pour chaque élève."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUsCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  className="group rounded-2xl border border-border bg-white p-8 text-center transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease }}
                >
                  <div
                    className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${
                      card.accent ? 'bg-accent/8' : 'bg-primary/6'
                    }`}
                  >
                    <Icon
                      size={26}
                      className={card.accent ? 'text-accent' : 'text-primary'}
                    />
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-bold">{card.title}</h3>
                  <p className="text-[15px] leading-relaxed text-text-secondary">{card.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-bg-alt px-5 py-10">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-2">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} {...s} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="px-5 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle label="TÉMOIGNAGES" title="Ce que disent nos élèves" />
          <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 3).map((r, i) => (
              <ReviewCard key={r.name} review={r} index={i} />
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" to="/avis" iconRight={ArrowRight}>
              Voir tous les avis
            </Button>
          </div>
        </div>
      </section>


    </>
  );
}
