import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useInView';
import { contactInfo } from '../../data/services';

const NAV_ITEMS = [
  { to: '/', label: 'Accueil' },
  { to: '/formations', label: 'Formations' },
  { to: '/avis', label: 'Avis' },
];

export default function Header() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === '/';
  const isScrolled = scrollY > 30;
  const showSolid = !isHome || isScrolled;

  /* Lock scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          showSolid
            ? 'border-b border-border bg-white/92 backdrop-blur-2xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5">
          {/* Logo */}
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img
              src="/images/ameauto.png"
              alt="AME Levallois — Auto Moto École"
              className={`h-11 w-auto object-contain transition-all duration-500 ${
                showSolid ? '' : 'brightness-0 invert'
              }`}
              width={90}
              height={44}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Navigation principale"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative pb-1 font-heading text-sm font-semibold transition-colors duration-300 ${
                    showSolid
                      ? isActive
                        ? 'text-text-main'
                        : 'text-text-secondary hover:text-text-main'
                      : isActive
                        ? 'text-white'
                        : 'text-white/60 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-4.5 py-2.5 font-heading text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/25"
            >
              Nous contacter
            </Link>
          </nav>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={contactInfo.phoneTel}
              className={`p-2 transition-colors ${
                showSolid ? 'text-text-main' : 'text-white'
              }`}
              aria-label="Appeler"
            >
              <Phone size={24} />
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className={`p-2 transition-colors ${
                showSolid ? 'text-text-main' : 'text-white'
              }`}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-primary-dark/97 backdrop-blur-2xl"
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navigation"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-5 p-2 text-white"
              aria-label="Fermer le menu"
            >
              <X size={28} />
            </button>

            {NAV_ITEMS.map((item, i) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `font-heading text-xl font-semibold transition-colors ${
                      isActive ? 'text-white' : 'text-white/60'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-7 py-3.5 font-heading text-base font-bold text-white no-underline"
              >
                Contactez-nous
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
