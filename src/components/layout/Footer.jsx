import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Stars } from '../ui/ReviewCard';
import { contactInfo } from '../../data/services';

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/formations', label: 'Formations' },
  { to: '/avis', label: 'Avis' },
  { to: '/contact', label: 'Contact' },
];

const formationLinks = [
  'Permis B',
  'Permis Moto',
  'Conduite Accompagnée',
  'Code en Ligne',
  'Stage Points',
];

const contactItems = [
  {
    icon: MapPin,
    text: `${contactInfo.address}, ${contactInfo.postalCode} ${contactInfo.city}`,
  },
  { icon: Phone, text: contactInfo.phone },
  { icon: Mail, text: contactInfo.email },
  { icon: Clock, text: 'Lun–Ven 9h–19h, Sam 9h–13h' },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg pb-28 md:pb-8">
      {/* Gradient line */}
      <div className="footer-gradient-line" />

      <div className="mx-auto max-w-[1200px] px-5 pt-16 pb-8">
        {/* Columns */}
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div>
            <Link to="/" className="mb-4 inline-flex items-center gap-2">
              <img
                src="/images/ameauto.png"
                alt="AME Levallois"
                className="h-12 w-auto object-contain brightness-0 invert"
                width={98}
                height={48}
              />
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-white/50">
              Auto Moto École à Levallois-Perret. Votre réussite, notre priorité.
            </p>
            <div className="flex items-center gap-1.5">
              <Stars count={5} size={12} />
              <span className="text-xs text-white/50">4.9/5 — 222+ avis</span>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div className="hidden md:block">
            <h4 className="mb-4 font-heading text-sm font-bold tracking-[0.04em] text-white">
              NAVIGATION
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Formations */}
          <div className="hidden md:block">
            <h4 className="mb-4 font-heading text-sm font-bold tracking-[0.04em] text-white">
              FORMATIONS
            </h4>
            <ul className="space-y-2">
              {formationLinks.map((label) => (
                <li key={label}>
                  <Link
                    to="/formations"
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold tracking-[0.04em] text-white">
              CONTACT
            </h4>
            <ul className="space-y-3">
              {contactItems.map((item, i) => (
                <li key={i} className="flex gap-2.5 items-start">
                  <item.icon
                    size={14}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="text-[13px] leading-snug text-white/50">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/8 pt-6 text-center">
          <p className="text-[13px] text-white/30">
            © {new Date().getFullYear()} AME Levallois — Auto Moto École. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
