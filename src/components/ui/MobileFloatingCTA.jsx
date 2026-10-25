import { useState } from 'react';
import { Phone, Mail, Navigation, MoreHorizontal } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useInView';
import { contactInfo } from '../../data/services';

export default function MobileFloatingCTA() {
  const scrollY = useScrollPosition();
  const [expanded, setExpanded] = useState(false);

  /* Hide on desktop (md+), or before 300px scroll */
  if (scrollY < 300) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] border-t border-border bg-white/95 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="flex gap-2">
        <a
          href={contactInfo.phoneTel}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent py-3.5 font-heading text-[15px] font-bold text-white no-underline animate-pulse-ring"
        >
          <Phone size={18} />
          Appeler maintenant
        </a>
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-white"
          aria-label="Plus d'options"
        >
          <MoreHorizontal size={20} className="text-text-secondary" />
        </button>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mt-2 flex gap-2 overflow-hidden"
          >
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-[13px] font-semibold text-primary no-underline"
            >
              <Mail size={14} /> Email
            </a>
            <a
              href={contactInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2.5 text-[13px] font-semibold text-primary no-underline"
            >
              <Navigation size={14} /> Itinéraire
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
