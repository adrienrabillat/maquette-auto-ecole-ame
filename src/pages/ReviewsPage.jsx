import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import ReviewCard, { Stars } from '../components/ui/ReviewCard';
import Button from '../components/ui/Button';
import { BreadcrumbSchema } from '../components/seo/StructuredData';
import { reviews, contactInfo, seoMeta } from '../data/services';

const ease = [0.22, 1, 0.36, 1];

export default function ReviewsPage() {
  return (
    <>
      <Helmet>
        <title>{seoMeta.reviews.title}</title>
        <meta name="description" content={seoMeta.reviews.description} />
        <link rel="canonical" href="https://www.ame-levallois.fr/avis" />
        <meta property="og:title" content={seoMeta.reviews.title} />
        <meta property="og:description" content={seoMeta.reviews.description} />
      </Helmet>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Avis', path: '/avis' }]} />

      {/* ── PAGE HEADER ── */}
      <div className="page-header-gradient relative px-5 pt-28 pb-16">
        <div className="dot-pattern" />
        <div className="relative mx-auto max-w-[1200px] text-center">
          <span className="font-heading text-[13px] font-bold tracking-[0.08em] uppercase text-accent">
            AVIS CLIENTS
          </span>
          <h1 className="mt-2 font-heading text-[clamp(1.7rem,4vw,2.5rem)] font-extrabold leading-tight text-white">
            Ce que nos élèves pensent de nous
          </h1>
          <p className="mx-auto mt-3 max-w-[540px] text-base leading-relaxed text-white/70">
            222+ avis sur Google avec une note moyenne de 4.9/5.
          </p>
        </div>
      </div>

      <section className="px-5 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          {/* Summary block */}
          <motion.div
            className="mb-12 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-border bg-white px-10 py-8 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="font-heading text-5xl font-extrabold text-primary">
              4.9
            </div>
            <div>
              <Stars count={5} size={20} />
              <div className="mt-1 text-sm text-text-secondary">
                222+ avis sur Google Reviews
              </div>
            </div>
          </motion.div>

          {/* Reviews grid */}
          <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} index={i} />
            ))}
          </div>

          {/* External link */}
          <div className="text-center">
            <Button href={contactInfo.googleReviewsUrl} iconRight={ExternalLink}>
              Voir tous les avis sur Google
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
