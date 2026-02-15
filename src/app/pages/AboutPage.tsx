import { About } from "../components/About";
import { motion } from "motion/react";
import {
  Award,
  Lightbulb,
  Rocket,
  Target,
  TrendingUp,
  Users,
  Zap,
  Heart,
  GraduationCap,
  Briefcase,
  Mic,
  HeartPulse,
  DollarSign,
  PenTool,
  BarChart3,
  BookOpen,
} from "lucide-react";
import heroImage from "/assets/e60a4dd4498e683b03e03b374f6c6c4cf08fbe36.png";
import { GetStartedModal } from "../components/GetStartedModal";
import { useGetStartedModal } from "../stores/getStartedStore";

const timeline = [
  {
    year: "1998 – 2011",
    title: "Marketing, Banking & Insurance Foundation",
    description:
      "Built a strong professional foundation with 25+ years of experience in marketing, along with 8–9 years in the banking sector and 6–7 years in the insurance industry. Developed deep expertise in sales strategy, customer relationship management, financial products, and market-driven business growth.",
    icon: Briefcase,
    stats: { value: "Multi-Industry", label: "Experience" },
  },
  {
    year: "2011 – 2019",
    title: "Education Guidance & Career Counselling",
    description:
      "Transitioned into the education sector, providing one-to-one guidance to students and parents. Successfully guided 25,000–30,000 students and parents in career planning, academic decision-making, and future readiness.",
    icon: GraduationCap,
    stats: { value: "25,000+", label: "Students Mentored" },
  },
  {
    year: "2014 – 2016",
    title: "Network Marketing & Team Development",
    description:
      "Worked in a network marketing organization, focusing on business development, team building, leadership training, and performance growth. Played a key role in developing systems and mentoring teams.",
    icon: Users,
    stats: { value: "Development", label: "Role" },
  },
  {
    year: "2016 – 2018",
    title: "Marketing Strategy & Business Expansion",
    description:
      "Strengthened expertise in strategic marketing, sales leadership, and financial consulting, helping businesses improve outreach, conversion, and long-term sustainability.",
    icon: BarChart3,
    stats: { value: "Senior-Level", label: "Responsibility" },
  },
  {
    year: "2019 – 2026",
    title: "Coach, Trainer & Business Development – WRM Company",
    description:
      "Associated with WRM Consultant as a Coach, Mentor, Motivational Trainer, and Business Development Leader. Delivered training programs in motivation, leadership, personal growth, and business expansion, helping individuals and organizations achieve clarity, confidence, and consistent results.",
    icon: Target,
    stats: { value: "Key Focus", label: "Coaching & Training" },
  },
  {
    year: "Present",
    title: "Leadership, Coaching & Transformation",
    description:
      "Continuing the journey as a coach, mentor, and motivational leader, empowering professionals, entrepreneurs, students, and organizations to unlock their true potential and build sustainable success.",
    icon: Rocket,
    stats: { value: "Coach", label: "Mentor & Strategist" },
  },
];

const achievements = [
  { icon: Users, value: "50,000+", label: "Lives Impacted" },
  { icon: Zap, value: "1,000+", label: "Sessions Delivered" },
  { icon: Award, value: "74+", label: "Custom Programs" },
  { icon: Target, value: "15+", label: "Years Experience" },
];

const coreValues = [
  {
    title: "Transformation",
    description:
      "Not just inspiration, but actionable strategies that create lasting change",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Excellence",
    description:
      "Commitment to delivering world-class training and coaching experiences",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Impact",
    description:
      "Measuring success by the lives transformed and goals achieved",
    gradient: "from-purple-500 to-pink-500",
  },
];

export function AboutPage() {
  const { isOpen, open, close } = useGetStartedModal();

  return (
    <div>
      <GetStartedModal isOpen={isOpen} onClose={close} />
      <About />

      {/* Journey Story Section */}
      <section
        id="journey-story"
        className="pt-16 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 relative overflow-hidden bg-gray-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
          {/* Story Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/50 rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8">
              <Heart className="w-4 h-4 text-purple-300" />
              <span className="text-xs sm:text-sm font-medium text-purple-200">
                Breaking Barriers, Building Legends
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6">
              From Humble Beginnings to
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Extraordinary Impact
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed px-4">
              A 25+ years journey across Education, Sales, Marketing, Finance,
              Content Writing, and Business Development. With over 74 customized
              training and coaching programs delivered for leading brands,
              institutions, and professionals across the world, transforming
              diverse industry experience into powerful leadership and coaching
              expertise.
            </p>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12 sm:mb-16 lg:mb-20 text-center"
          >
            <div className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-widest mb-4">
              The Journey
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Journey Timeline
            </h3>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform -translate-x-1/2 hidden lg:block" />

            <div className="space-y-12 sm:space-y-16 lg:space-y-20">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`${isEven ? "lg:text-right lg:pr-16" : "lg:col-start-2 lg:pl-16"}`}
                    >
                      <div
                        className={`inline-block ${isEven ? "lg:float-right" : ""} w-full lg:w-auto`}
                      >
                        <div className="bg-gray-800 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-purple-500/50 transition-colors group">
                          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
                            <div
                              className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shrink-0`}
                            >
                              <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-400 mb-1 sm:mb-2">
                                {item.year}
                              </div>
                              <h4 className="text-xl sm:text-2xl font-bold text-white">
                                {item.title}
                              </h4>
                            </div>
                          </div>
                          <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                            {item.description}
                          </p>
                          <div className="inline-flex items-center gap-2 bg-gray-900 px-3 sm:px-4 py-2 rounded-full border border-gray-700">
                            <div className="text-xl sm:text-2xl font-bold text-white">
                              {item.stats.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-400">
                              {item.stats.label}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-gray-950 shadow-lg"
                      />
                    </div>

                    {/* Mobile year indicator */}
                    <div className="lg:hidden absolute -left-4 top-0">
                      <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Impact in Numbers
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Measurable results, lasting transformation
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <div className="bg-gray-800 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:border-purple-500/50 transition-all hover:shadow-2xl hover:shadow-purple-500/20">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
                    >
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </motion.div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">
                      {item.value}
                    </div>
                    <div className="text-gray-400 uppercase text-xs sm:text-sm tracking-wider">
                      {item.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 text-center"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Core Values
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Principles that guide every session
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-800 border border-gray-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full hover:border-purple-500/50 transition-all">
                  <div
                    className={`w-full h-2 bg-gradient-to-r ${value.gradient} rounded-full mb-4 sm:mb-6`}
                  />
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {value.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-400">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6">
              Ready to Write
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Your Success Story?
              </span>
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 px-4">
              Join thousands who have transformed their lives and organizations
              through powerful coaching and training.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3.5 rounded-full font-semibold shadow-2xl hover:shadow-purple-500/50 transition-shadow text-base"
              onClick={open}
            >
              Start Your Transformation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
