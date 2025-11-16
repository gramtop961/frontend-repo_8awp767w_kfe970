import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-red-900/30 bg-gradient-to-br from-zinc-900 to-black p-10 ring-1 ring-white/5"
          >
            <p className="text-red-400 tracking-widest uppercase text-xs">Get in touch</p>
            <h3 className="mt-3 text-3xl font-extrabold text-white">Book your premium detail</h3>
            <p className="mt-3 text-zinc-400">
              Tell us about your vehicle and goals. We’ll confirm availability and recommend the best package.
            </p>

            <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input className="rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-700/50" placeholder="Name" />
              <input className="rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-700/50" placeholder="Email" />
              <input className="rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-700/50" placeholder="Phone" />
              <input className="rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-700/50" placeholder="Vehicle (Make/Model)" />
              <textarea rows={5} className="sm:col-span-2 rounded-xl border border-white/10 bg-zinc-900/60 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-700/50" placeholder="How can we help?" />

              <button type="button" className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 text-white font-semibold shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-red-700 transition-all">
                Request Quote
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between gap-6"
          >
            <div className="rounded-3xl border border-red-900/30 bg-gradient-to-br from-zinc-900 to-black p-8 ring-1 ring-white/5">
              <h4 className="text-white font-semibold">Contact</h4>
              <div className="mt-4 space-y-3 text-zinc-300">
                <p className="flex items-center gap-3"><Phone className="text-red-400" size={18}/> (555) 012-3456</p>
                <p className="flex items-center gap-3"><Mail className="text-red-400" size={18}/> hello@autodetail.pro</p>
                <p className="flex items-center gap-3"><MapPin className="text-red-400" size={18}/> 456 Performance Ave, Motorcity</p>
              </div>
            </div>

            <div className="rounded-3xl border border-red-900/30 bg-gradient-to-br from-zinc-900 to-black p-8 ring-1 ring-white/5">
              <h4 className="text-white font-semibold">Hours</h4>
              <ul className="mt-4 space-y-2 text-zinc-300">
                <li>Mon–Fri: 9am – 6pm</li>
                <li>Sat: 10am – 4pm</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
