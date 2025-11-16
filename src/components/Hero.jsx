import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black to-zinc-950">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gradient overlays for depth and readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block rounded-full border border-red-700/40 bg-red-900/30 px-4 py-1 text-xs tracking-widest text-red-300 uppercase">
            Premium Car Detailing • Ceramic Coating • Wash
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight text-white">
            Shine that lasts, quality you can trust
          </h1>
          <p className="mt-5 text-lg text-zinc-300">
            Elevate your drive with automotive-grade protection and a show-car finish.
            Our expert team delivers meticulous detailing, long-lasting ceramic coatings,
            and maintenance plans tailored to your vehicle.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-red-800 px-6 py-3 text-white font-semibold shadow-lg shadow-red-900/30 hover:from-red-500 hover:to-red-700 transition-all"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white/90 hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span>Certified Ceramic Pro Installers</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
