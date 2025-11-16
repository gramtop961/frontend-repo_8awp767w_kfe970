import { motion } from "framer-motion";

const tiers = [
  {
    name: "Express Wash",
    price: 69,
    features: [
      "Foam pre-soak",
      "Two-bucket hand wash",
      "Wheel & tire clean",
      "Air dry + detail spray",
    ],
    highlight: false,
  },
  {
    name: "Premium Detail",
    price: 249,
    features: [
      "Exterior decon + clay",
      "Interior vacuum & wipe-down",
      "Windows, jambs, trim dressed",
      "Spray sealant protection",
    ],
    highlight: true,
  },
  {
    name: "Ceramic Pro",
    price: 899,
    features: [
      "Single-stage correction",
      "2-year ceramic coating",
      "Glass + wheels optional",
      "Aftercare kit included",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-red-400 tracking-widest uppercase text-xs">Pricing</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">Transparent packages, premium results</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Choose the right level of clean and protection for your car. All services are paint-safe and professionally executed.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-3xl border ${
                t.highlight ? "border-red-700/60" : "border-red-900/30"
              } bg-gradient-to-br from-zinc-900 to-black p-8 ring-1 ring-white/5 shadow-2xl`}
            >
              {t.highlight && (
                <span className="absolute right-4 top-4 rounded-full border border-red-700/50 bg-red-900/40 px-3 py-1 text-[10px] uppercase tracking-wider text-red-200">
                  Best Value
                </span>
              )}

              <h3 className="text-xl font-bold text-white">{t.name}</h3>
              <p className="mt-6 text-5xl font-black text-white">
                <span className="text-red-500">${""}</span>{t.price}
                <span className="text-base text-zinc-400"> / starting</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold transition-all ${
                  t.highlight
                    ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-red-700"
                    : "border border-white/15 text-white/90 hover:bg-white/10"
                }`}
              >
                Book This
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
