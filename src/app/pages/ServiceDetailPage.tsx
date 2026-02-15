import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import {
  Mic,
  Users,
  Briefcase,
  TrendingUp,
  CheckCircle,
  Quote,
  ArrowLeft,
  Sparkles,
  Target,
  Trophy,
  Award,
  Lightbulb,
  Zap,
  Brain,
  DollarSign,
  Building,
  GraduationCap,
  Rocket,
  MessageCircle,
  Shield,
  Star,
  Heart,
  Eye,
  Map,
  Mountain,
  Compass,
  Flame,
  Crown,
  Key,
  Package,
  ShoppingBag,
  BarChart3,
  Network,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useGetStartedModal } from "../stores/getStartedStore";
import { useBookingModal } from "../components/BookingModal";
import motivationalSpeakingImage from "/assets/e1937c6adae6bf559090e418acb7846ae1a7a759.png";
import businessCoachingImage from "/assets/aebd46221746336d6884b1ce366d7f82fed3f235.png";
import businessOpportunitiesImage from "/assets/0748d828b2088cfe7b90a8be05d3b9512e819965.png";

const serviceData = {
  "motivational-speaking-training": {
    icon: Mic,
    title: "Motivational Speaking & Corporate Training",
    subtitle: "High-Energy Sessions & Leadership Development",
    description:
      "Delivers powerful sessions on mindset, success, and leadership development with engaging interactive methods",
    gradient: "from-purple-500 to-indigo-600",
    image: motivationalSpeakingImage,
    quote:
      '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    quoteAuthor: "- Winston Churchill",
    overview:
      "Transform your events and organizations with high-energy motivational sessions combined with expert corporate training. With over 15 years of experience, Dinesh Shinde delivers powerful keynotes and leadership development programs that ignite passion, drive action, build high-performing teams, and create lasting change.",
    benefits: [
      "Boost team morale and motivation instantly",
      "Develop confident, capable leaders at all levels",
      "Overcome mental barriers and limiting beliefs",
      "Improve team collaboration and communication",
      "Ignite passion and purpose in your team",
      "Drive productivity and business performance",
    ],
    benefitIcons: [Zap, Award, Brain, MessageCircle, Heart, TrendingUp],
    results: [
      {
        metric: "95%",
        label: "Audience Engagement Rate",
        description:
          "Attendees actively participate and connect with the message",
      },
      {
        metric: "300+",
        label: "Successful Events & Programs",
        description:
          "Keynotes and training sessions delivered across industries",
      },
      {
        metric: "15,000+",
        label: "Lives Transformed",
        description: "Individuals inspired and teams developed",
      },
    ],
    topics: [
      "Mindset Mastery: Breaking Through Mental Barriers",
      "Leadership Development: Inspiring Self & Others",
      "Resilience & Grit: Thriving Through Challenges",
      "High-Performance Team Building & Collaboration",
      "The Success Blueprint: Turning Vision into Reality",
      "Strategic Communication & Effective Leadership",
    ],
    topicIcons: [Brain, Crown, Mountain, Users, Map, MessageCircle],
    process: [
      {
        step: "01",
        title: "Discovery & Consultation",
        description:
          "Understand your organization goals, audience, and desired outcomes",
      },
      {
        step: "02",
        title: "Custom Program Design",
        description:
          "Tailor the content to resonate with your specific needs and culture",
      },
      {
        step: "03",
        title: "Delivery & Execution",
        description:
          "High-energy sessions with interactive elements and practical tools",
      },
      {
        step: "04",
        title: "Follow-Up & Support",
        description:
          "Post-event resources and implementation strategies for lasting impact",
      },
    ],
  },
  "coaching-counseling": {
    icon: Briefcase,
    title: "Coaching & Counseling",
    subtitle: "Business & Career",
    description:
      "Professional guidance in business strategy, career advancement, and educational planning",
    gradient: "from-cyan-500 to-blue-600",
    image: businessCoachingImage,
    quote: '"The only way to do great work is to love what you do."',
    quoteAuthor: "- Steve Jobs",
    overview:
      "Navigate your career and business journey with expert coaching and counseling tailored to your unique goals. Whether you are advancing your career, building a business, or planning your educational path, receive personalized guidance that drives real results.",
    benefits: [
      "Clarify your career vision and goals",
      "Develop strategic business plans",
      "Overcome professional challenges",
      "Make informed educational choices",
      "Build confidence in decision-making",
      "Accelerate career growth and success",
    ],
    benefitIcons: [Target, Building, Shield, GraduationCap, Brain, Rocket],
    results: [
      {
        metric: "92%",
        label: "Goal Achievement Rate",
        description: "Clients successfully reach their defined objectives",
      },
      {
        metric: "500+",
        label: "Individuals Coached",
        description: "Professionals guided to career and business success",
      },
      {
        metric: "15+",
        label: "Years Experience",
        description: "Proven track record in coaching and counseling",
      },
    ],
    topics: [
      "Career Planning & Advancement Strategies",
      "Business Strategy & Development",
      "Educational Path Selection & Planning",
      "Professional Skill Development",
      "Work-Life Balance & Personal Growth",
      "Overcoming Career Transitions & Challenges",
    ],
    topicIcons: [Target, Building, GraduationCap, Lightbulb, Heart, Mountain],
    process: [
      {
        step: "01",
        title: "Assessment",
        description: "Evaluate your current situation, goals, and aspirations",
      },
      {
        step: "02",
        title: "Strategy Development",
        description: "Create a customized action plan tailored to your goals",
      },
      {
        step: "03",
        title: "Implementation Support",
        description: "Ongoing guidance and accountability as you take action",
      },
      {
        step: "04",
        title: "Progress Review",
        description:
          "Regular check-ins to celebrate wins and adjust strategies",
      },
    ],
  },
  "money-manifestation": {
    icon: TrendingUp,
    title: "Money Manifestation",
    subtitle: "Financial Success",
    description:
      "Unlock the secrets to achieving your financial goals and building wealth",
    gradient: "from-orange-500 to-amber-600",
    image:
      "https://images.unsplash.com/photo-1769676391642-de7d70147636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    quote: '"Wealth is the ability to fully experience life."',
    quoteAuthor: "- Henry David Thoreau",
    overview:
      "Transform your relationship with money and unlock your financial potential. Learn proven strategies to attract abundance, build wealth, and achieve your financial goals through mindset shifts and practical action.",
    benefits: [
      "Develop a wealth-attracting mindset",
      "Overcome limiting beliefs about money",
      "Create multiple streams of income",
      "Master financial planning and management",
      "Build sustainable wealth for the future",
      "Achieve financial freedom and security",
    ],
    benefitIcons: [Brain, Shield, DollarSign, Lightbulb, Building, Trophy],
    results: [
      {
        metric: "80%",
        label: "Income Increase",
        description: "Participants report significant financial improvements",
      },
      {
        metric: "300+",
        label: "Success Stories",
        description: "Individuals who achieved financial breakthroughs",
      },
      {
        metric: "50+",
        label: "Workshops Delivered",
        description: "Money manifestation programs conducted",
      },
    ],
    topics: [
      "Abundance Mindset: Shifting from Scarcity to Prosperity",
      "The Psychology of Wealth Creation",
      "Passive Income Strategies & Opportunities",
      "Financial Goal Setting & Achievement",
      "Money Management & Investment Basics",
      "Manifesting Wealth Through Action",
    ],
    topicIcons: [Brain, Lightbulb, DollarSign, Target, Building, Rocket],
    process: [
      {
        step: "01",
        title: "Money Mindset Audit",
        description: "Identify and transform limiting financial beliefs",
      },
      {
        step: "02",
        title: "Wealth Blueprint",
        description: "Design your personalized financial success plan",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Take aligned action with proven wealth-building strategies",
      },
      {
        step: "04",
        title: "Abundance Tracking",
        description: "Measure progress and celebrate financial wins",
      },
    ],
  },
  "business-opportunities": {
    icon: Package,
    title: "Business Opportunities",
    subtitle: "Women Healthcare Products Marketing",
    description:
      "Join our mission to bring happy and prosperous life through meaningful business associations",
    gradient: "from-emerald-500 to-teal-600",
    image: businessOpportunitiesImage,
    quote: '\\\"The best way to predict the future is to create it.\\\"',
    quoteAuthor: "- Peter Drucker",
    overview:
      "Partner with a leading Women Healthcare Products Marketing Company offering premium healthcare products and hygiene solutions. Enjoy international quality standards, lucrative MLM opportunities, and comprehensive support to build a thriving business while improving lives.",
    benefits: [
      "International quality standards - skin friendly & highly absorbent",
      "Lucrative commission structure and incentives",
      "Comprehensive training and ongoing support",
      "Thoroughly inspected products before dispatch",
      "Growing market with high demand products",
      "Build your own team through MLM opportunities",
    ],
    benefitIcons: [Package, DollarSign, Users, Shield, TrendingUp, Network],
    results: [
      {
        metric: "100%",
        label: "Quality Assurance",
        description:
          "Products inspected by quality controllers before dispatch",
      },
      {
        metric: "2",
        label: "Product Lines",
        description:
          "Women healthcare products and general healthcare solutions",
      },
      {
        metric: "₹50L+",
        label: "Annual Revenue Potential",
        description: "Top performers earning substantial income",
      },
    ],
    topics: [
      "High Quality Products - Skin Friendly & High Absorbency",
      "International Quality Standards & Certifications",
      "Complete Women Healthcare & General Healthcare Products",
      "MLM Network Building & Team Management",
      "Sales & Marketing Strategies for Success",
      "Distribution Partnership & Business Growth",
    ],
    topicIcons: [Award, Shield, Package, Network, BarChart3, TrendingUp],
    process: [
      {
        step: "01",
        title: "Initial Inquiry",
        description:
          "Contact us to learn about partnership opportunities and requirements",
      },
      {
        step: "02",
        title: "Business Briefing",
        description:
          "Understand product portfolio, pricing, and commission structure",
      },
      {
        step: "03",
        title: "Partnership Setup",
        description:
          "Complete registration and receive starter kit with training",
      },
      {
        step: "04",
        title: "Launch & Grow",
        description:
          "Start selling, build your network, and scale your business",
      },
    ],
  },
};

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug as keyof typeof serviceData] : null;
  const { open: openGetStarted } = useGetStartedModal();
  const { open: openBooking } = useBookingModal();

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-950 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">
            Service Not Found
          </h1>
          <Link
            to="/services"
            className="text-purple-400 hover:text-purple-300"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section - Redesigned */}
      <section className="relative overflow-hidden min-h-[85vh] sm:min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlays for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950/95" />
          <div
            className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-20`}
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px] pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32">
          {/* Back Button */}
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8 transition-colors backdrop-blur-sm bg-gray-900/30 px-4 py-2 rounded-full border border-purple-500/30"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Icon Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.gradient} rounded-2xl p-4 shadow-2xl`}
              >
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                {service.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 font-bold drop-shadow-lg">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed drop-shadow-lg">
                {service.overview}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={openGetStarted}
                  className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-full font-bold shadow-2xl hover:shadow-purple-500/50 transition-shadow flex items-center gap-2`}
                >
                  <Sparkles className="w-5 h-5" />
                  Get Started
                </motion.button>
                <motion.a
                  href="#process"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold border-2 border-white/20 hover:bg-white/20 transition-all"
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>

            {/* Right: Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6"
            >
              {service.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-2xl hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}
                    >
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl sm:text-4xl font-black text-white mb-1">
                        {result.metric}
                      </div>
                      <div className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                        {result.label}
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-400"
            >
              <div className="text-xs uppercase tracking-widest">Scroll</div>
              <div className="w-[2px] h-12 bg-gradient-to-b from-gray-400 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-12 sm:py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Quote className="w-96 h-96 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Quote
              className={`w-12 h-12 sm:w-16 sm:h-16 text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mx-auto mb-6`}
            />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 italic">
              {service.quote}
            </p>
            <p className="text-lg text-purple-400">{service.quoteAuthor}</p>
          </motion.div>
        </div>
      </section>

      {/* Quality Commitment Section - Only for Business Opportunities */}
      {slug === "business-opportunities" && (
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-4">
                <Award className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-medium text-emerald-300">
                  Quality Commitment
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                Our Quality Standards
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We strictly follow international quality standards to deliver
                excellence in every product
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-700/50 rounded-2xl p-6 sm:p-8"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Skin Friendly & High Hygiene
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Our products are highly acclaimed for being gentle on skin
                  while maintaining the highest hygiene standards. Comfortable
                  for everyday use.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-700/50 rounded-2xl p-6 sm:p-8"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Quality Inspection
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  All products are thoroughly inspected by quality controllers
                  before dispatch. The entire process from raw materials to
                  delivery is personally monitored by management.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-700/50 rounded-2xl p-6 sm:p-8"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  High Absorbency
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Highly experienced & skilled professionals ensure superior
                  absorbency in all products, making them reliable and
                  cost-effective for customers.
                </p>
              </motion.div>
            </div>

            {/* Manufacturing Excellence */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Manufacturing Excellence
              </h3>
              <p className="text-gray-300 text-center max-w-4xl mx-auto">
                The entire process from raw materials to manufacturing,
                packaging & delivery is personally taken care & monitored by
                management to make better quality & cost effective sanitary
                napkins. Our highly experienced & skilled professionals put in
                their best possible efforts to fulfill targets with
                international quality standards.
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-gray-400">
              Transform your life with proven results
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {service.benefits.map((benefit, index) => {
                const BenefitIcon = service.benefitIcons[index];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-gray-800 border border-gray-700 rounded-xl p-4 sm:p-5 hover:border-purple-500/50 transition-colors group"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}
                    >
                      <BenefitIcon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {benefit}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] border border-gray-700 shadow-2xl">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-20`}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Topics Covered
            </h2>
            <p className="text-gray-400">
              Comprehensive content tailored to your needs
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {service.topics.map((topic, index) => {
              const TopicIcon = service.topicIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-gray-800 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-purple-500/50 transition-colors group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center shrink-0`}
                  >
                    <TopicIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-semibold">{topic}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-900" id="process">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Our Process
            </h2>
            <p className="text-gray-400">A proven framework for success</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 h-full hover:border-purple-500/50 transition-colors">
                  <div
                    className={`text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} mb-4`}
                  >
                    {step.step}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8">
              Take the first step towards transformation. Book a consultation to
              discuss your goals and how we can help you achieve them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${service.gradient} text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-purple-500/50 transition-shadow w-full sm:w-auto`}
                >
                  Book a Consultation
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gray-800 border border-gray-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:border-purple-500/50 transition-colors w-full sm:w-auto"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
