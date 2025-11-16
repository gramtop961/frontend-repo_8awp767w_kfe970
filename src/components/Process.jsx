import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Consult & Inspection",
    desc: "We assess your vehicle's paint, interior, and goals to recommend the ideal package.",
  },
  {
    title: "Decontaminate & Correct",
    desc: "Foam wash, iron removal, clay bar, and multi-stage correction for swirl-free gloss.",
  },
  {
    title: "Protect & Finish",
    desc: "Ceramic coating or sealant application and meticulous interior finishing.",
  },
  {
    title: "Maintain the Shine",
    desc: "Care instructions and maintenance plan options to keep it flawless.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-gradient-to-b from-black to-zinc-950 py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-red-400 tracking-widest uppercase text-xs">Our Process</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-white">Precision in every step</h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            We blend premium products, safe techniques, and craftsmanship to deliver a finish that turns heads day and night.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl border border-red-900/30 bg-zinc-950/60 p-8 ring-1 ring-white/5"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-400" />
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
