import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import inspiringExcellenceImage from "/assets/56066520f7567143e3a7522842776da95bd9af68.png";

export function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-32 bg-gray-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main image */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-2xl shadow-purple-900/50">
                <img
                  src={inspiringExcellenceImage}
                  alt="Dinesh Shinde - Celebrating Excellence"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small images grid */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 grid grid-cols-2 gap-2 sm:gap-3">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-gray-900"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400"
                    alt="Training"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border-2 sm:border-4 border-gray-900"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400"
                    alt="Coaching"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -z-10 -inset-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-[4rem] opacity-20 blur-2xl" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left"
          >
            {/* Quote icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto lg:mx-0 w-fit"
            >
              <Quote className="w-10 h-10 sm:w-16 sm:h-16 text-purple-500/30" />
            </motion.div>

            {/* Title */}
            <div>
              <div className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-widest mb-3">
                About Me
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                Inspiring
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Excellence
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              With expertise in training, business development, and career
              counseling, I empower individuals and organizations through
              leadership, strategy, and mindset transformation. My approach
              combines high-energy sessions with practical methods to drive real
              results.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 max-w-md mx-auto lg:mx-0">
              <div className="border-l-4 border-purple-500 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  25+
                </div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
                  Years Experience
                </div>
              </div>
              <div className="border-l-4 border-pink-500 pl-4 sm:pl-6">
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  50K+
                </div>
                <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider">
                  Lives Impacted
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start pt-2">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const journeySection =
                    document.getElementById("journey-story");
                  if (journeySection) {
                    journeySection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3.5 rounded-full font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-purple-500/50 text-base cursor-pointer"
              >
                Read My Story
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
