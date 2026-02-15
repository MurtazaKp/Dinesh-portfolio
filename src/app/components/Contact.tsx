import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Package, TrendingUp, ShoppingBag } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5 sm:space-y-8 order-2 lg:order-1"
          >
            <div className="text-center lg:text-left">
              <div className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-widest mb-3">
                Get In Touch
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
                Let's Work
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Together
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-xl text-gray-400">
                Ready to transform your organization? Let's start the conversation.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6 pt-2">
              <motion.a
                href="mailto:contact@dineshinde.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 sm:gap-4 group mx-auto lg:mx-0 max-w-md"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Email</div>
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-white group-hover:text-purple-400 transition-colors truncate">
                    connect@dineshinde.com
                  </div>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919771987104"
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 sm:gap-4 group mx-auto lg:mx-0 max-w-md"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Phone</div>
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                    +91 77198 71047
                  </div>
                </div>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3 sm:gap-4 mx-auto lg:mx-0 max-w-md"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">Location</div>
                  <div className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                    Mumbai, India
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <form 
              action="mailto:dineshinde23@gmail.com"
              method="post"
              encType="text/plain"
              className="bg-gray-800 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 space-y-4 sm:space-y-6"
            >
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 border-2 border-gray-700 text-white rounded-xl sm:rounded-2xl focus:border-purple-500 focus:outline-none transition-colors placeholder:text-gray-500 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 border-2 border-gray-700 text-white rounded-xl sm:rounded-2xl focus:border-purple-500 focus:outline-none transition-colors placeholder:text-gray-500 text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Service Interested In
                </label>
                <div className="relative">
                  <select 
                    name="service"
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 border-2 border-gray-700 text-white rounded-xl sm:rounded-2xl focus:border-purple-500 focus:outline-none transition-colors text-sm sm:text-base appearance-none pr-12"
                  >
                    <option>Select a service</option>
                    <option>Motivational Speaking & Corporate Training</option>
                    <option>Coaching & Counseling</option>
                    <option>Money Manifestation</option>
                    <option>Business Opportunities - MLM & Product Marketing</option>
                  </select>
                  <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell me about your needs..."
                  required
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 border-2 border-gray-700 text-white rounded-xl sm:rounded-2xl focus:border-purple-500 focus:outline-none transition-colors resize-none placeholder:text-gray-500 text-sm sm:text-base"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-purple-500/50 transition-shadow text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}