import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

    try {
      if (
        serviceID === "YOUR_SERVICE_ID" ||
        templateID === "YOUR_TEMPLATE_ID" ||
        publicKey === "YOUR_PUBLIC_KEY"
      ) {
        const subject = encodeURIComponent(formData.subject || "Wedding RSVP");
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const contactEmail = process.env.REACT_APP_CONTACT_EMAIL || "mithila12320@gmail.com";
        window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
        setStatus({
          type: "info",
          message: "Opening your email client so you can send your RSVP.",
        });
      } else {
        await emailjs.send(
          serviceID,
          templateID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        );

        setStatus({
          type: "success",
          message: "Thank you! Your RSVP has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: "Sorry, there was an error sending your RSVP. Please try again or email us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 relative bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white">RSVP</span>
          </h2>
          <div className="h-1 w-20 mx-auto mb-6 bg-rose-400"></div>
          <p className="text-rose-100 text-lg max-w-3xl mx-auto leading-relaxed">
            Please let us know if you&apos;ll be joining us for our wedding celebration. We would be honored to share this day with you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Your Invitation</h3>
              <p className="text-rose-50 mb-8 leading-relaxed">
                Join us for an evening of love, laughter, and celebration. We would love to have you there as we begin this new chapter together.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-rose-50 hover:text-amber-200 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-rose-400/20 transition-colors">
                  <FaPhone className="text-rose-300" />
                </div>
                <div>
                  <p className="text-sm text-rose-100"> Groom Phone</p>
                  <p className="font-medium">+1 (571) 474-8371</p>
                </div>
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-rose-50 hover:text-amber-200 transition-colors group"
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-rose-400/20 transition-colors">
                  <FaPhone className="text-rose-300" />
                </div>
                <div>
                  <p className="text-sm text-rose-100">Bride Phone</p>
                  <p className="font-medium">+1 (630) 697-2580</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-rose-50">
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-rose-300" />
                </div>
                <div>
                  <p className="text-sm text-rose-100">Venue</p>
                  <p className="font-medium">SVS Balaji temple, Aurora</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-rose-100 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-rose-300/20 rounded-lg focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-300/20 text-white placeholder-gray-500 transition-all"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-rose-100 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-rose-300/20 rounded-lg focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-300/20 text-white placeholder-gray-500 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="attendance" className="block text-sm font-medium text-rose-100 mb-2">
                Attending
              </label>
              <select
                id="attendance"
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-rose-300/20 rounded-lg focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-300/20 text-white transition-all"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-rose-100 mb-2">
                Guest Count
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.guest_count}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800/50 border border-rose-300/20 rounded-lg focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-300/20 text-white placeholder-gray-500 transition-all"
                placeholder="2 guests"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-rose-100 mb-2">
                A Note for Us
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-gray-800/50 border border-rose-300/20 rounded-lg focus:outline-none focus:border-rose-300 focus:ring-2 focus:ring-rose-300/20 text-white placeholder-gray-500 transition-all resize-none"
                placeholder="Tell us how excited you are..."
              />
            </div>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-500/20 border border-green-500/50 text-green-400"
                    : status.type === "error"
                    ? "bg-red-500/20 border border-red-500/50 text-red-400"
                    : "bg-blue-500/20 border border-blue-500/50 text-blue-400"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg shadow-rose-500/30 hover:shadow-xl"
              whileHover={{ scale: 1.01, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Sending RSVP..." : "Send RSVP"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
  