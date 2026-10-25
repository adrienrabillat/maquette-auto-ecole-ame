import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

import { BreadcrumbSchema } from '../components/seo/StructuredData';
import { contactInfo, seoMeta } from '../data/services';

const ease = [0.22, 1, 0.36, 1];

const contactCards = [
  {
    icon: MapPin,
    title: 'Adresse',
    text: `${contactInfo.address}, ${contactInfo.postalCode} ${contactInfo.city}`,
    href: contactInfo.googleMapsUrl,
    external: true,
  },
  {
    icon: Phone,
    title: 'Téléphone',
    text: contactInfo.phone,
    href: contactInfo.phoneTel,
  },
  {
    icon: Mail,
    title: 'Email',
    text: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: Clock,
    title: 'Horaires',
    text: `${contactInfo.hours.weekdays}\n${contactInfo.hours.saturday}`,
  },
];

export default function ContactPage() {

  return (
    <>
      <Helmet>
        <title>{seoMeta.contact.title}</title>
        <meta name="description" content={seoMeta.contact.description} />
        <link rel="canonical" href="https://www.ame-levallois.fr/contact" />
        <meta property="og:title" content={seoMeta.contact.title} />
        <meta property="og:description" content={seoMeta.contact.description} />
      </Helmet>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Contact', path: '/contact' }]} />

      {/* ── PAGE HEADER ── */}
      <div className="page-header-gradient relative px-5 pt-28 pb-16">
        <div className="dot-pattern" />
        <div className="relative mx-auto max-w-[1200px] text-center">
          <span className="font-heading text-[13px] font-bold tracking-[0.08em] uppercase text-accent">
            CONTACT
          </span>
          <h1 className="mt-2 font-heading text-[clamp(1.7rem,4vw,2.5rem)] font-extrabold leading-tight text-white">
            Parlons de votre projet
          </h1>
          <p className="mx-auto mt-3 max-w-[540px] text-base leading-relaxed text-white/70">
            Une question ? Besoin d'un devis ? Contactez-nous par téléphone, email ou passez directement en agence.
          </p>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <section className="px-5 py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[900px]">
          <div className="flex flex-col gap-6">
            
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    className="group flex items-start gap-4 rounded-[14px] border border-border bg-white px-6 py-5 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease }}
                  >
                    <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-xl bg-primary/6">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-heading text-sm font-bold">{card.title}</h4>
                      {card.href ? (
                        <a
                          href={card.href}
                          target={card.external ? '_blank' : undefined}
                          rel={card.external ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-primary-light no-underline transition-colors hover:text-primary"
                        >
                          {card.text}
                        </a>
                      ) : (
                        <p className="whitespace-pre-line text-sm leading-snug text-text-secondary">
                          {card.text}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Google Maps */}
            <motion.div
              className="mt-4 overflow-hidden rounded-[14px] border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease }}
            >
              <iframe
                title="AME Levallois — Google Maps"
                src={contactInfo.googleMapsEmbed}
                className="h-[380px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </motion.div>

            {/* Mobile CTA */}
            <motion.div
              className="sm:hidden"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5, ease }}
            >
              <a
                href={contactInfo.phoneTel}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 font-heading text-base font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
              >
                <Phone size={18} />
                {contactInfo.phone}
              </a>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
