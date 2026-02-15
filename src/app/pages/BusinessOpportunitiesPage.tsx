import { motion } from 'motion/react';
import { TrendingUp, Users, Award, Shield, DollarSign, Heart, Stethoscope, Phone, Mail, MapPin, CheckCircle, ArrowRight, Package } from 'lucide-react';
import { useBookingModal } from '../components/BookingModal';

const opportunities = [
  {
    id: 1,
    title: 'All Women Healthcare Products',
    icon: Heart,
    description: 'Comprehensive range of premium quality healthcare solutions designed specifically for women\'s wellness, hygiene, and health needs.',
    benefits: [
      'Complete women wellness product line',
      'High-quality certified healthcare products',
      'Growing market demand & awareness',
      'Comprehensive training & support',
      'Attractive profit margins',
      'Recurring customer base & loyalty',
    ],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 2,
    title: 'Healthcare Products',
    icon: Stethoscope,
    description: 'Wide range of premium healthcare and wellness products for comprehensive health management and preventive care solutions.',
    benefits: [
      'Diverse healthcare product portfolio',
      'Trusted and certified brands',
      'Consistent market demand',
      'Complete business training provided',
      'Strong profit potential',
      'Marketing support included',
    ],
    color: 'from-purple-500 to-violet-500',
  },
];

const whyJoinReasons = [
  {
    icon: CheckCircle,
    title: '100% Quality Assured',
    description: '100% quality-assured, skin-friendly & high-absorbency products',
  },
  {
    icon: Package,
    title: '3 Core Product Lines',
    description: '3 core product lines: Napkins, Diapers & Hygiene Products',
  },
  {
    icon: DollarSign,
    title: 'Lucrative Commission',
    description: 'Lucrative commission structure with performance incentives',
  },
  {
    icon: Award,
    title: 'Complete Training',
    description: 'Complete training, tools & ongoing business support',
  },
  {
    icon: TrendingUp,
    title: 'Growing Market',
    description: 'Growing market with strong repeat demand',
  },
  {
    icon: Users,
    title: 'Build & Grow',
    description: 'Build your MLM network and scale your income with structured guidance',
  },
];

export function BusinessOpportunitiesPage() {
  const { open } = useBookingModal();

  return (
    <div className="bg-gray-950">
      {/* Hero Section */}
      <section className="pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16 bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
            >
              <DollarSign className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Partnership Opportunities</span>
            </motion.div>

            {/* Title - 2 lines, same size */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-5 leading-tight max-w-4xl mx-auto">
              Business Opportunity –<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Women Healthcare Products
              </span>
            </h1>

            {/* Designation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
            </motion.div>

            {/* Description - 3 lines */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
              Partner with a trusted women healthcare products marketing company offering premium sanitary napkins, baby diapers, and hygiene products. Built on international quality standards, this opportunity combines high-demand products with a profitable MLM business model to help you grow income while making a positive impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Opportunities Cards */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-widest mb-3">
              Available Opportunities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              Premium Product{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Partnerships
              </span>
            </h2>
          </motion.div>

          {/* Opportunities Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {opportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <motion.div
                  key={opportunity.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-8 sm:p-10 h-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700 relative overflow-hidden group"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${opportunity.color} p-4 mb-6 shadow-lg`}>
                        <IconComponent className="w-full h-full text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                        {opportunity.title}
                      </h3>

                      {/* Description */}
                      <p className="text-base sm:text-lg text-gray-400 mb-8 leading-relaxed">
                        {opportunity.description}
                      </p>

                      {/* Benefits List */}
                      <div className="space-y-3">
                        {opportunity.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm sm:text-base text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-widest mb-3">
              Partnership Benefits
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
              Why Join{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Our Network?
              </span>
            </h2>
          </motion.div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyJoinReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 h-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700 text-center"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3.5 mx-auto mb-4 shadow-lg">
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality You Can Trust Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-widest mb-3">
              Our Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
              Quality You Can{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Trust
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Every product is thoroughly inspected before dispatch and manufactured under strict quality control to ensure hygiene, comfort, and reliability for everyday use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Thorough Inspection
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Every product is carefully inspected by quality controllers before dispatch to ensure excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Quality Control
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Manufactured under strict quality control processes to maintain international standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Hygiene & Comfort
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Designed for hygiene, comfort, and reliability for everyday use with trusted quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Build & Grow Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <div className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-widest mb-3">
              Your Success Path
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-6">
              Build &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Grow
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Start your journey with a simple onboarding process, sell premium products, build your MLM network, and scale your income with structured guidance and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700 text-center relative"
            >
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Simple Onboarding
              </h3>
              <p className="text-gray-400 text-sm">
                Easy registration process to get you started quickly
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700 text-center relative"
            >
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Sell Premium Products
              </h3>
              <p className="text-gray-400 text-sm">
                Market high-quality products customers trust and love
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700 text-center relative"
            >
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Build Your Network
              </h3>
              <p className="text-gray-400 text-sm">
                Create and manage your MLM team for exponential growth
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-700 text-center relative"
            >
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Scale Your Income
              </h3>
              <p className="text-gray-400 text-sm">
                Grow earnings with structured guidance and support
              </p>
            </motion.div>
          </div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Create your future by building a business that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                improves lives.
              </span>
            </p>
            <motion.button
              onClick={open}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/50 transition-shadow inline-flex items-center gap-3"
            >
              Schedule a Consultation
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Success Journey?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-12">
              Connect with us today to explore partnership opportunities and transform your business dreams into reality.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-3 gap-6">
              <motion.a
                href="tel:+917719871047"
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
              >
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-sm text-gray-500 mb-1">Call Us</div>
                <div className="text-white font-semibold">+91 77198 71047</div>
              </motion.a>

              <motion.a
                href="mailto:dineshinde23@gmail.com"
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all"
              >
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-sm text-gray-500 mb-1">Email Us</div>
                <div className="text-white font-semibold">dineshinde23@gmail.com</div>
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6"
              >
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-sm text-gray-500 mb-1">Location</div>
                <div className="text-white font-semibold">Pune, Maharashtra</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}