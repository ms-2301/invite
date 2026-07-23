import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const highlights = [
  {
    metric: "9:00 AM",
    text: "Ceremony begins with our cherished traditions, soft smiles, and hearts full of joy.",
  },
  
  {
    metric: "Dress Code",
    text: "Embrace traditions with vibrant, colorful palettes that capture the spirit of celebration.",
  },
  {
    metric: "Venue",
    text: "SVS Balaji Temple, Aroura",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white">Come join the beginning of our story</span>
          </h2>
          <div className="h-1 w-20 mb-12 mx-auto bg-rose-400 rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-rose-50 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            We invite you to witness the moment our hearts finally become one.
            Your presence will make our wedding day even more beautiful.
          </p>

          

          <div className="mt-10">
            <p className="text-rose-50 text-xl md:text-2xl font-semibold mb-4 text-center">
              Wedding details
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {highlights.map((h, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-xl border border-rose-200/20 bg-white/5 p-5 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.08 }}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-amber-200">{h.metric}</span>
                    <span className="text-rose-50 text-sm md:text-base leading-relaxed">{h.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-rose-500/40 hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHeart /> RSVP with Love
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}