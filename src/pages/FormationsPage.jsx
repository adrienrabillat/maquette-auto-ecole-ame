import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import { BreadcrumbSchema } from '../components/seo/StructuredData';
import { mainServices, otherServices, seoMeta } from '../data/services';

const ease = [0.22, 1, 0.36, 1];

export default function FormationsPage() {
  return (
    <>
      <Helmet>
        <title>{seoMeta.formations.title}</title>
        <meta name="description" content={seoMeta.formations.description} />
        <link rel="canonical" href="https://www.ame-levallois.fr/formations" />
        <meta property="og:title" content={seoMeta.formations.title} />
        <meta property="og:description" content={seoMeta.formations.description} />
      </Helmet>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Formations', path: '/formations' }]} />

      {/* ── PAGE HEADER ── */}
      <div className="page-header-gradient relative px-5 pt-28 pb-16">
        <div className="dot-pattern" />
        <div className="relative mx-auto max-w-[1200px] text-center">
          <span className="font-heading text-[13px] font-bold tracking-[0.08em] uppercase text-accent">
            NOS FORMATIONS
          </span>
          <h1 className="mt-2 font-heading text-[clamp(1.7rem,4vw,2.5rem)] font-extrabold leading-tight text-white">
            Trouvez la formation qu'il vous faut
          </h1>
          <p className="mx-auto mt-3 max-w-[540px] text-base leading-relaxed text-white/70">
            Du permis B au permis bateau, nous proposons des formations adaptées à tous les profils et tous les budgets.
          </p>
        </div>
      </div>

      {/* ── MAIN FORMATIONS ── */}
      <section className="px-5 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <SectionTitle label="FORMATIONS PRINCIPALES" title="Nos formations phares" />

          <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((s, i) => (
              <ServiceCard key={s.id} service={s} index={i} />
            ))}
          </div>

          {/* ── OTHER FORMATIONS ── */}
          <SectionTitle label="AUTRES FORMATIONS" title="Et bien plus encore" />

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.id}
                  className="group flex items-center gap-4 rounded-xl border border-border bg-white px-5 py-4.5 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06, duration: 0.5, ease }}
                >
                  <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] bg-bg-alt">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-[15px] font-bold">{s.title}</h4>
                    <p className="text-[13px] text-text-secondary">{s.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
}
