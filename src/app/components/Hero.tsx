import { motion } from "motion/react";
import { Sparkles, Calendar } from "lucide-react";
import heroImage from "/assets/da605094cb31f2234ddc211b461c4f629644f6f1.png";
import { useBookingModal } from "./BookingModal";

export function Hero() {
  const { open } = useBookingModal();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-36 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 relative z-10 max-w-[1440px]">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">
          {/* Left content - order-2 on mobile to show after image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-5 lg:space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Name */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight"
              >
                <span className="text-gray-400 font-medium block mb-2 text-[42px]">
                  Hi, I am
                </span>
                <span className="text-white">Dinesh </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                  Shinde
                </span>
              </motion.h1>

              {/* Professions - INCREASED SIZE FOR DESKTOP */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm sm:text-base md:text-base lg:text-xl xl:text-xl font-medium leading-relaxed mt-4 max-w-3xl mx-auto lg:mx-0"
              >
                <p className="text-gray-200">
                  Sr. Business Coach & Training and Development Leader at
                  WeRmore <br />
                  Motivational Speaker | Career & Education Counselor <br />
                  Leadership Development Coach | Corporate Trainer
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-sm sm:text-base lg:text-xl max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Empowering leaders and teams through strategy, <br />
                discipline, and mindset transformation
              </span>
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 py-2"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-1">
                  Years Experience
                </div>
              </div>
              <div className="border-l border-gray-700 pl-6 sm:pl-8 lg:pl-12">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  800+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-1">
                  Sessions Delivered
                </div>
              </div>
              <div className="border-l border-gray-700 pl-6 sm:pl-8 lg:pl-12">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  15K+
                </div>
                <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider mt-1">
                  Lives Impacted
                </div>
              </div>
            </motion.div>

            {/* Book a Session Button - Added after stats */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={open}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2 mx-auto lg:mx-0"
            >
              <Calendar className="w-5 h-5" />
              Book a Session
            </motion.button>
          </motion.div>

          {/* Right Image - order-1 on mobile to show first */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mx-auto lg:mx-0 mt-8 lg:mt-0 order-1 lg:order-2"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-purple-600 to-pink-600 blur-3xl opacity-20" />

            {/* Image container - Bigger on mobile */}
            <div className="relative w-[340px] h-[460px] sm:w-[400px] sm:h-[530px] lg:w-[450px] lg:h-[600px] xl:w-[500px] xl:h-[665px]">
              <img
                src={heroImage}
                alt="Dinesh Shinde - Motivational Speaker"
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-900/30"
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gray-900 border border-gray-800 rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      74+
                    </div>
                    <div className="text-xs text-gray-400">Programs</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-600"
        >
          <div className="text-xs uppercase tracking-widest">Scroll</div>
          <div className="w-[2px] h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
