import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, ArrowLeft, Search } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-pink-900/20" />
      
      {/* Animated circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <h1 className="text-[150px] sm:text-[200px] lg:text-[250px] font-black leading-none">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
                404
              </span>
            </h1>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Page Not Found
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-lg mx-auto">
              Oops! The page you're looking for seems to have wandered off. Let's get you back on track.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </motion.button>
            </Link>

            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-3 transition-all"
              >
                <Search className="w-5 h-5" />
                Explore Services
              </motion.button>
            </Link>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Home
              </Link>
              <Link to="/services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Services
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                About
              </Link>
              <Link to="/reviews" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Reviews
              </Link>
              <Link to="/gallery" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
