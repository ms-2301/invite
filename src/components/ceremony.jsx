import { motion } from "framer-motion";
import {
  FaHeart,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarDay,
  FaGlassCheers,
  FaMusic,
  FaHeartbeat,
  FaSmileWink,
  FaSmileBeam,
} from "react-icons/fa";


const eventGroups = [


  {
    title: "Sangeeth",
    items: [
      { name: "21 Nov 2026", icon: FaCalendarDay, color: "text-emerald-300" },
      { name: "6:00 PM", icon: FaClock, color: "text-amber-200" },
      { name: "Dinner ,Music, Dance & Toasts", icon: FaGlassCheers, color: "text-rose-300" },
      {
        name: "The Barn at Timper Point",
        icon: FaMapMarkerAlt,
        color: "text-cyan-300",
        location: "https://www.google.com/maps/search/?api=1&query=The+Barn+at+Timper+Point",
      },
    ],
  },

  {
    title: "Haldi and Mehendi",
    items: [
      { name: "24 Nov 2026", icon: FaCalendarDay, color: "text-emerald-300" },
      { name: "6:00 PM", icon: FaClock, color: "text-amber-200" },
      { name: "Games, Dinner & Toasts", icon: FaGlassCheers, color: "text-rose-300" },
      {
        name: "The Social LOFT",
        icon: FaMapMarkerAlt,
        color: "text-cyan-300",
        location: "https://www.google.com/maps/search/?api=1&query=The+Social+LOFT",
      },
    ],
  },


  {
    title: "Ceremony",
    items: [
      { name: "26 Nov 2026", icon: FaCalendarDay, color: "text-emerald-300" },
      { name: "10:01 AM", icon: FaClock, color: "text-amber-200" },
      { name: "Muhurtam", icon: FaHeart, color: "text-rose-300" },
      {
        name: "SVS Balaji Temple",
        icon: FaMapMarkerAlt,
        color: "text-emerald-300",
        location: "https://www.google.com/maps/search/?api=1&query=SVS+Balaji+Temple",
      },
    ],
  },

  {
    title: "Guest Notes",
    items: [
      { name: "Sangeeth & Cocktail", icon: FaSmileWink, color: "text-yellow-300" },
      { name: "Dress Code: Dance Friendly", icon: FaHeart, color: "text-pink-300" },
      { name: "Arrive by 6:00 PM", icon: FaClock, color: "text-amber-200" },
      { name: "Music: Live Performance", icon: FaMapMarkerAlt, color: "text-emerald-300" },

      { name: "Haldi and Mehendi", icon: FaSmileBeam, color: "text-yellow-300" },
      { name: "Dress Code: colorful", icon: FaHeart, color: "text-pink-300" },
      { name: "Arrive by 5:00 PM", icon: FaClock, color: "text-amber-200" },
      { name: "Music: Brides Playlist", icon: FaMapMarkerAlt, color: "text-emerald-300" },

      { name: "wedding", icon: FaHeartbeat, color: "text-red-300" },
      { name: "Dress Code: Traditional", icon: FaHeart, color: "text-pink-300" },
      { name: "Arrive by 9:00 AM", icon: FaClock, color: "text-amber-200" },
      { name: "", icon: FaMapMarkerAlt, color: "text-emerald-300" },

    ],
  },
];

function SectionHeader({ title }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-white text-lg md:text-xl font-semibold">{title}</h3>
      <div className="h-px flex-1 ml-4 bg-gradient-to-r from-rose-300/40 to-transparent" />
    </div>
  );
}

export default function ceremony() {
  return (
    <section
      id="ceremony"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-gray-900/30 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-white">Wedding Details</span>
          </h2>
          <div className="h-1 w-20 mb-12 mx-auto bg-rose-400 rounded-full" />
        </motion.div>

        <div className="space-y-10">
          {eventGroups.map((group, gIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: gIndex * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-7 backdrop-blur-sm"
            >
              <SectionHeader title={group.title} />

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {group.items.map((item, index) => {
                  const Icon = item.icon;
                  const isLocation = item.icon === FaMapMarkerAlt && item.location;

                  const cardContent = (
                    <div className="h-full bg-gray-800/50 border border-gray-700/60 rounded-xl p-4 hover:border-rose-300/50 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/20 flex flex-col items-center justify-center gap-2 cursor-pointer">
                      <div className="relative">
                        <Icon className={`text-3xl ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                        <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                      </div>

                      <span className="text-gray-300 text-xs sm:text-sm font-medium group-hover:text-white transition-colors text-center leading-snug">
                        {item.name}
                      </span>
                    </div>
                  );

                  return (
                    <motion.div
                      key={`${group.title}-${item.name}-${index}`}
                      className="group relative"
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 + index * 0.03, duration: 0.45 }}
                    >
                      {isLocation ? (
                        <a
                          href={item.location}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open location for ${item.name}`}
                        >
                          {cardContent}
                        </a>
                      ) : (
                        cardContent
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-rose-100 text-lg">
            We can't wait to celebrate this beautiful day with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}