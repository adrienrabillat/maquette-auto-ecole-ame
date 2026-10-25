import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionTitle({ label, title, description, light = false, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto';

  return (
    <motion.div
      className={`mb-12 max-w-xl ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ staggerChildren: 0.08 }}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-accent font-heading font-bold text-[13px] tracking-[0.08em] uppercase"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`font-heading font-extrabold text-[clamp(1.5rem,4vw,2.2rem)] leading-tight mt-2 ${
          light ? 'text-white' : 'text-text-main'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-3 text-base leading-relaxed ${
            light ? 'text-white/70' : 'text-text-secondary'
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
