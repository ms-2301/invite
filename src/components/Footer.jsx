import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-900/40 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-rose-100 text-sm">
              With love, <span className="text-amber-200 font-semibold">Mithila and Kapardi</span>
            </p>
            <p className="text-rose-200/70 text-xs mt-1">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-rose-100 text-sm"
          >
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-rose-300" />
            </motion.span>
            <span>and a lot of joy</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 text-xl"
          >
            <motion.a
              href="https://github.com/ms-2301"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-100 hover:text-amber-200 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
            
            <motion.a
              href="mailto:mithila12320@gmail.com"
              className="text-rose-100 hover:text-amber-200 transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              aria-label="Email"
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-rose-900/40 text-center"
        >
          <p className="text-rose-200/70 text-xs">
            Thank you for celebrating this unforgettable moment with us.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
