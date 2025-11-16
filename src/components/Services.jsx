import { motion } from "framer-motion";
import { Shield, Sparkles, Droplets, Clock } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Premium Detail",
    desc: "Deep clean inside and out with paint-safe methods and luxury finishes.",
    badge: "Most Popular",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    desc: "Years of gloss and protection. Hydrophobic and UV-resistant.",
    badge: "Up to 5 Years",
  },
  {
    icon: Droplets,
    title: "Hand Wash",
    desc: "Two-bucket method, foam pre-soak, and premium microfiber drying.",
    badge: "Safe Touch",
  },
  {
    icon: Clock,
    title: "Maintenance Plan",
    desc: "Keep your car flawless with scheduled washes and quick details.",
    badge: "Subscriptions",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-red-400 tracking-widest uppercase text-xs">Our Craft</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">Services designed for enthusiasts</h2>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-red-900/30 bg-gradient-to-br from-zinc-900 to-black p-6 shadow-2xl ring-1 ring-white/5"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-red-900/30 p-3 text-red-300 ring-1 ring-inset ring-red-700/40">
                  <s.icon size={24} />
                </div>
                <span className="rounded-full border border-red-800/40 bg-red-900/20 px-3 py-1 text-[10px] tracking-wider text-red-300 uppercase">
                  {s.badge}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{s.desc}</p>

              <div className="mt-6 h-1 w-0 bg-gradient-to-r from-red-500 to-red-800 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
