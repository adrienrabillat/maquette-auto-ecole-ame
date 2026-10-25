import { motion } from 'framer-motion';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = service.icon;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl cursor-default h-full"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay: index * 0.07,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Accent line on hover */}
      <div className="accent-line-top" />

      {/* Icon */}
      <div className="mb-4 flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-gradient-to-br from-primary to-primary-light">
        <Icon size={24} className="text-white" />
      </div>

      {/* Tag badge */}
      {service.tag && (
        <span
          className={`absolute top-4 right-4 rounded-md px-2.5 py-1 font-heading text-[11px] font-bold ${
            service.popular
              ? 'bg-accent/8 text-accent'
              : 'bg-bg-alt text-primary'
          }`}
        >
          {service.tag}
        </span>
      )}

      {/* Content */}
      <h3 className="mb-2 font-heading text-[17px] font-bold text-text-main">
        {service.title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">
        {service.description}
      </p>
    </motion.div>
  );
}
