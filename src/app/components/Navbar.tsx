import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Briefcase } from "lucide-react";
import { Link, useLocation } from "react-router";
import logoImage from "/assets/cd569c1b98a32d16ed7ebec4def29ae85ef15756.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/70 backdrop-blur-2xl shadow-xl shadow-black/30 border-b border-white/10"
          : "bg-gray-900/30 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-[1440px]">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center h-full py-3"
          >
            <img
              src={logoImage}
              alt="Dinesh Shinde Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link key={link.name} to={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`relative group ${
                    location.pathname === link.href
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  } transition-colors`}
                >
                  {link.name}
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 ${
                      location.pathname === link.href
                        ? "opacity-100"
                        : "opacity-0"
                    } group-hover:opacity-100 transition-opacity`}
                  />
                </motion.div>
              </Link>
            ))}

            {/* Business Opportunities Button - Purple/Pink Ghost Style */}
            <Link to="/business-opportunities">
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 ${
                  location.pathname === "/business-opportunities"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 border-2 border-transparent"
                    : "border-2 border-purple-500/50 text-white bg-purple-500/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent shadow-lg hover:shadow-purple-500/30"
                }`}
              >
                <Briefcase className="w-5 h-5" />
                Business Opportunity
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-6 space-y-1 flex flex-col items-center">
            {navLinks.map((link, index) => (
              <Link key={link.name} to={link.href} className="w-full">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-3 px-6 text-center text-lg font-medium rounded-xl transition-all ${
                    location.pathname === link.href
                      ? "text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </motion.div>
              </Link>
            ))}

            {/* Business Opportunities - Mobile */}
            <Link to="/business-opportunities" className="w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{ delay: navLinks.length * 0.05 }}
                whileHover={{ x: 5 }}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-3 px-6 text-center text-lg font-bold rounded-xl transition-all ${
                  location.pathname === "/business-opportunities"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                    : "border-2 border-purple-500/50 text-white bg-purple-500/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-purple-500/0"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Business Opportunity
                </span>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
