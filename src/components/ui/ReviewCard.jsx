import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

function Stars({ count = 5, size = 14 }) {
  return (
    <span className="inline-flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} fill="#FBBF24" stroke="#FBBF24" />
      ))}
    </span>
  );
}

export default function ReviewCard({ review, index = 0 }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-7 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl h-full"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="accent-line-top" />

      <Quote size={28} className="mb-3 text-accent/15" />
      <Stars count={review.rating} size={14} />

      <p className="mt-3 text-[15px] leading-[1.7] text-text-main">
        {review.text}
      </p>

      <div className="mt-5 flex items-center gap-3">
        {/* Avatar initial */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary-light font-heading text-base font-bold text-white">
          {review.name[0]}
        </div>
        <div>
          <div className="text-sm font-semibold">{review.name}</div>
          <div className="text-xs text-text-secondary">{review.date}</div>
        </div>
        <span className="ml-auto rounded-md bg-bg-alt px-2.5 py-1 text-xs font-semibold text-primary">
          {review.formation}
        </span>
      </div>
    </motion.div>
  );
}

export { Stars };
