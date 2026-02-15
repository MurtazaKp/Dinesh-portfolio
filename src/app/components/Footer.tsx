import { motion } from "motion/react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router";
import logoImage from "/assets/cd569c1b98a32d16ed7ebec4def29ae85ef15756.png";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/sk_dineshinde/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100045732739988",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@DineshShinde-MotivationalTrain",
    label: "YouTube",
  },
];

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10 max-w-[1440px]">
        {/* Main Footer */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-6 sm:gap-10 lg:gap-12 mb-6 sm:mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center sm:text-left"
          >
            <div className="flex items-center gap-3 mb-6 justify-center sm:justify-start">
              <img
                src={logoImage}
                alt="Dinesh Shinde Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-sm leading-relaxed mx-auto sm:mx-0">
              Empowering leaders through strategy, discipline, and mindset
              transformation.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3 justify-center sm:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center sm:text-left"
          >
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {links.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link
                    to={link.href}
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left sm:col-span-2 lg:col-span-1"
          >
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6">
              Newsletter
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              Get inspired weekly
            </p>
            <div className="flex gap-2 max-w-sm mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-xs sm:text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-sm sm:text-base"
              >
                →
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © 2026 Dinesh Shinde. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 sm:w-10 sm:h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 border border-white/10"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
