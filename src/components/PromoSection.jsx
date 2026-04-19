import { motion } from 'framer-motion'

const promos = [
  {
    icon: '👑',
    title: 'VIP Transfer',
    badge: 'EXCLUSIVE',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    description:
      'Transfer your existing VIP status from any casino directly to Roobet. Keep your perks — no grinding required.',
    cta: 'Claim VIP Transfer',
    href: 'https://roobet.com/?ref=oeg',
    glow: 'hover:glow-purple',
    btnStyle: 'bg-violet-600 hover:bg-violet-500 text-white',
  },
  {
    icon: '💎',
    title: 'Deposit Bonus',
    badge: 'POPULAR',
    badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
    description:
      'Get a massive deposit bonus on your first deposit. Use our link and receive an exclusive bonus unavailable anywhere else.',
    cta: 'Get Deposit Bonus',
    href: 'https://roobet.com/?ref=oeg',
    glow: 'hover:glow-purple',
    btnStyle: 'bg-violet-600 hover:bg-violet-500 text-white',
    featured: true,
  },
  {
    icon: '🎰',
    title: 'Join Roobet',
    badge: 'NEW USERS',
    badgeColor: 'bg-green-500/20 text-green-300 border-green-500/30',
    description:
      "New to Roobet? Sign up through our affiliate link to unlock welcome bonuses and instant access to VIP rewards from day one.",
    cta: 'Join Roobet Now',
    href: 'https://roobet.com/?ref=oeg',
    glow: 'hover:glow-purple',
    btnStyle: 'bg-violet-600 hover:bg-violet-500 text-white',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function PromoSection() {
  return (
    <section id="promo" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-violet-400 text-sm font-semibold tracking-widest uppercase">Exclusive Offers</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 mb-4">
            Pick Your Bonus
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            All bonuses are exclusively available through our affiliate links. Click below to claim instantly.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, i) => (
            <motion.div
              key={promo.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`relative glass rounded-2xl p-6 flex flex-col gap-5 transition-all duration-300 ${promo.glow} ${
                promo.featured ? 'neon-border' : 'border border-white/5'
              }`}
            >
              {promo.featured && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
              )}

              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-violet-600/20 rounded-xl text-2xl">
                {promo.icon}
              </div>

              {/* Badge + Title */}
              <div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${promo.badgeColor} mb-2`}>
                  {promo.badge}
                </span>
                <h3 className="text-xl font-bold text-white">{promo.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed flex-1">{promo.description}</p>

              {/* CTA */}
              <motion.a
                href={promo.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`block text-center py-3 px-5 rounded-xl font-semibold text-sm transition-all duration-200 glow-purple-sm ${promo.btnStyle}`}
              >
                {promo.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
