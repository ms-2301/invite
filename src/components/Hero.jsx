import { motion } from "framer-motion";
import { FaEnvelope } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 relative overflow-visible pb-8">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-transparent to-amber-300/15" />

      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.p
          className="text-rose-200 text-lg md:text-xl mb-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          You are invited to celebrate
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-[1.12] pb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-rose-200 to-amber-100"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          Mithila and Kapardi
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-6 text-rose-50"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
        >
          Join us for our wedding celebration on 26th November 2026.
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-rose-100/90 max-w-3xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
        >
          With love, laughter, and boundless joy, we invite you to witness the start of our new journey.
          A morning steeped in traditions filled with music, laughter, and the warmth of family and friends.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55 }}
        >
          <motion.a
            href="#contact"
            className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-rose-500/40 hover:shadow-xl hover:shadow-rose-500/50"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            RSVP Now
          </motion.a>

          <motion.a
            href="#about"
            className="border-2 border-rose-200/70 hover:border-amber-200 text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-white/10"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            See the Details
          </motion.a>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >

          <motion.a
            href="mailto:mithila12320@gmail.com"
            className="text-rose-100 hover:text-amber-200 transition-colors"
            whileHover={{ scale: 1.18, y: -3 }}
            aria-label="Email"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        <motion.p
          className="text-rose-100/70 text-sm md:text-base mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
        >
          10:01 AM Ceremony • SVS balaji Temple • Aroura • Illinois
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
      >
        <a href="#about" className="text-rose-100 hover:text-amber-200 transition-colors" aria-label="Scroll to About">
          <HiArrowDown className="text-3xl" />
        </a>
      </motion.div>
    </section>
  );
}