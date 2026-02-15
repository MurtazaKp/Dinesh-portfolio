import { motion } from 'motion/react';
import { Mic, Briefcase, Users, Award, TrendingUp, GraduationCap, Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    icon: Mic,
    title: 'Motivational Speaking & Corporate Training',
    subtitle: 'High-Energy Leadership Development Sessions',
    description: 'Transform your team with powerful motivational sessions focused on mindset, success strategies, and leadership excellence through engaging interactive methods.',
    gradient: 'from-purple-500 to-pink-500',
    slug: 'motivational-speaking-training',
  },
  {
    icon: Briefcase,
    title: 'Business Coaching & Career Counseling',
    subtitle: 'Strategic Growth & Career Advancement',
    description: 'Achieve your professional goals with expert guidance in business strategy, career planning, and educational pathways for long-term success.',
    gradient: 'from-purple-500 to-pink-500',
    slug: 'coaching-counseling',
  },
  {
    icon: TrendingUp,
    title: 'Money Manifestation & Wealth Building',
    subtitle: 'Financial Success & Abundance Mindset',
    description: 'Unlock the secrets to achieving financial freedom and building sustainable wealth through proven strategies and mindset transformation techniques.',
    gradient: 'from-purple-500 to-pink-500',
    slug: 'money-manifestation',
  },
  {
    icon: Package,
    title: 'Business Opportunities & Partnerships',
    subtitle: 'Women Healthcare Products Marketing',
    description: 'Build a thriving business with premium healthcare products and lucrative opportunities with comprehensive support and proven marketing systems.',
    gradient: 'from-purple-500 to-pink-500',
    slug: 'business-opportunities',
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-16 lg:mb-20 text-center lg:text-left"
        >
          <div className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-widest mb-3">
            What I Offer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
            My Expertise
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link to={`/services/${service.slug}`}>
                  <div className="bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700 hover:border-white/30 flex flex-col">
                    {/* Number */}
                    <div className="text-4xl sm:text-5xl font-black text-gray-700 mb-3 sm:mb-4">
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-purple-300 font-semibold mb-3 leading-snug">
                      {service.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mb-4 flex-grow leading-relaxed">
                      {service.description}
                    </p>

                    {/* Arrow - Always visible on mobile and web - Pushed to bottom */}
                    <div className={`flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} font-semibold text-sm mt-auto`}>
                      <span>Explore</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 text-purple-400 group-hover:text-pink-400 transition-colors" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 sm:mt-16 lg:mt-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="relative z-10 grid sm:grid-cols-3 gap-6 sm:gap-8 text-white text-center">
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">25+</div>
              <div className="text-purple-100 uppercase text-xs sm:text-sm tracking-wider">Years Experience</div>
            </div>
            <div className="sm:border-l sm:border-r border-white/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">74+</div>
              <div className="text-purple-100 uppercase text-xs sm:text-sm tracking-wider">Custom Programs</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2">1000+</div>
              <div className="text-purple-100 uppercase text-xs sm:text-sm tracking-wider">Sessions Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}