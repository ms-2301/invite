import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

const moments = [
  {
    title: "The First Hello",
    description: "A story that started with a glance and a little confusion on a summer day in 2017 and turned into choosing each other every day since.",
    tag: "Our beginning",
  },
  {
    title: "The Proposal",
    description: "A moment of love, laughter, and a promise to cherish each other forever, on a rainy day.",
    tag: "The proposal",
  },
  {
    title: "The Promise",
    description: "A promise to love, honor, and cherish each other through all of life's adventures, made on a spring day in 2023.",
    tag: "The promise",
  },
  {
    title: "The Strength of Our Bond",
    description: "A bond that has grown stronger with each passing day, built on trust, respect, and unwavering support.",
    tag: "The bond",
  },
  {
    title: "The Big Moment",
    description: "On a winter morning in 2026, a wedding — the start of our beautiful journey together.",
    tag: "Wedding day",
  },
  {
    title: "The Celebration",
    description: "A joyful evening filled with laughter, lunch, dancing, and a little love to close the night beautifully.",
    tag: "Reception",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white">Our Journey</span>
          </h2>
          <div className="h-1 w-20 mb-12 mx-auto bg-rose-400 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className={`grid md:grid-cols-1 gap-8 items-center `}>
                

                <div className={`${index % 2 === 0 ? "md:order-2 text-left md:text-right" : "md:order-1 text-left"}`}>
                  <p className="text-amber-200 text-sm font-medium mb-2">
                    {moment.tag}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-amber-200 transition-colors">
                    {moment.title}
                  </h3>
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-rose-200/10 rounded-lg p-6 mb-4">
                    <p className="text-rose-50 leading-relaxed mb-4">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}