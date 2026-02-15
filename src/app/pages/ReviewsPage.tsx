import { motion } from "motion/react";
import { Star, Quote, TrendingUp, Award, ChevronDown } from "lucide-react";
import vikasGopalImage from "/assets/53c8870f41b906b0dce878fe3209004be2ef1c7c.png";
import priyaKadImage from "/assets/b72ad46c233b10ac7f6905bf0ed7ce23c4052e09.png";
import tusharWaghmaleImage from "/assets/ecd8b16aa1812a3a736b19d8985ecb77874f0341.png";
import mansiPatyaneImage from "/assets/0af62ed174513a98f28c18b988d14202e5fd07f6.png";
import rajnandiniAandreImage from "/assets/28b5ccc7ba0e4ae2760c31adcf5594dd450fbb58.png";
import sahilSawantImage from "/assets/90c0e514c32af03763050b7508eff0358cd1be67.png";
import shahinKaziImage from "/assets/4eda6add15ea067bb3d289e26bfa40880cb69ba0.png";
import kedaarSankkpalImage from "/assets/b87c04ff85a6107f19a4e97c35a968689d66b0e7.png";

const testimonials = [
  {
    id: 1,
    name: "Vikas Gopal",
    role: "Founder & Chairman",
    company: "WERmore Solution Pvt.Ltd",
    content:
      "Dinesh's training programs have been instrumental in developing our leadership team. His unique approach to business coaching and motivational speaking has transformed our organizational culture and driven remarkable growth.",
    image: vikasGopalImage,
    rating: 5,
    category: "Leadership",
  },
  {
    id: 2,
    name: "Priya Sandesh Kad",
    role: "Managing Director",
    company: "WERmore Solution Pvt.Ltd",
    content:
      "Working with Dinesh has been a game-changer for our company. His insights on leadership, strategy, and team development have elevated our performance to new heights. His sessions are always impactful and results-driven.",
    image: priyaKadImage,
    rating: 5,
    category: "Strategy",
  },
  {
    id: 3,
    name: "Tushar Waghmale",
    role: "CEO Virtual TechX Solution Ltd",
    company: "UI/UX & AI-driven Software Designer",
    content:
      "Dinesh's career counseling and coaching helped me unlock my true potential. His practical guidance and motivational approach gave me the clarity and confidence to excel in my field and pursue my professional goals.",
    image: tusharWaghmaleImage,
    rating: 4.9,
    category: "Career Coaching",
  },
  {
    id: 4,
    name: "Mansi Mahendra Patyane",
    role: "Sapphire DS",
    company: "WeRmore Solution Pvt.Ltd",
    content:
      "The two-day LDP by Dinesh Shinde Sir was impactful, practical, and inspiring, clearly explaining true leadership, common mistakes, team communication, and growth, making it highly valuable for every leader.",
    image: mansiPatyaneImage,
    rating: 5,
    category: "Training",
  },
  {
    id: 5,
    name: "Rajnandini Santosh Aandre",
    role: "Star Sapphire DS",
    company: "WeRmore Solution Pvt.Ltd",
    content:
      "2-day LDP by Dinesh Shinde Sir was life-changing, offering clear direction, powerful EEEERFP insights, and deep understanding of Network Marketing, inspiring career growth, teamwork, and transformation with WeRmore Solutions.",
    image: rajnandiniAandreImage,
    rating: 5,
    category: "Training",
  },
  {
    id: 6,
    name: "Sahil Sawant",
    role: "Associate",
    company: "WeRmore Solutions Pvt. Ltd.",
    content:
      "Guru Dinesh Shinde Sir shares deep knowledge, practical guidance, and real-life examples. Every training and even driving with him brings new learning, valuable experiences, and clear career-growth steps that shape mindset, skills, and direction.",
    image: sahilSawantImage,
    rating: 5,
    category: "Mentorship",
  },
  {
    id: 7,
    name: "Shahin Altaf Kazi",
    role: "Sapphire DS",
    company: "WERmore Solution Pvt.Ltd",
    content:
      "The 2-day LDP by Dinesh Shinde Sir was truly impactful. His guidance on challenges, solutions, motivation, business planning, and personal consulting helped my growth and increased my payout. Heartfelt thanks to WeRmore and respected Shinde Sir.",
    image: shahinKaziImage,
    rating: 5,
    category: "Business",
  },
  {
    id: 8,
    name: "Kedaar R Sankkpal",
    role: "Senior Hardware & Networking Engineer",
    company: "MNC-Based Company Pune",
    content:
      "Dinesh Shinde Sir is a motivating leader and true friend. His heartfelt teaching inspires deeply. Every day with him brings new learning, real-life insights, and clear career direction—keep learning daily, keep walking, and success will surely come one day.",
    image: kedaarSankkpalImage,
    rating: 5,
    category: "Mentorship",
  },
];

export function ReviewsPage() {
  return (
    <div className="bg-gray-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-6"
            >
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">
                Client Success Stories
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
              Leadership{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Reviews
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover how leaders, professionals, and organizations have
              transformed their growth journey through strategic coaching,
              motivational training, and powerful mentorship.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  50K+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-2 uppercase tracking-wider">
                  Lives Impacted
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  4.9
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-2 uppercase tracking-wider">
                  Average Rating
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  1000+
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mt-2 uppercase tracking-wider">
                  Success Stories
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700 flex flex-col relative overflow-hidden group"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 sm:w-20 sm:h-20 text-purple-400" />
                  </div>

                  <div className="relative z-10">
                    {/* Category badge */}
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-3 py-1 mb-4">
                      <span className="text-xs font-semibold text-purple-300">
                        {testimonial.category}
                      </span>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4 sm:mb-6">
                      {[...Array(5)].map((_, i) => {
                        const isFilled = i < Math.floor(testimonial.rating);
                        const isHalf =
                          i === Math.floor(testimonial.rating) &&
                          testimonial.rating % 1 !== 0;

                        return (
                          <div key={i} className="relative">
                            <Star
                              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                isFilled
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-600"
                              }`}
                            />
                            {isHalf && (
                              <div
                                className="absolute inset-0 overflow-hidden"
                                style={{ width: "50%" }}
                              >
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Content */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed flex-grow mb-6 sm:mb-8">
                      "{testimonial.content}"
                    </p>

                    {/* Divider */}
                    <div className="w-full border-t border-gray-700/50 mb-6 sm:mb-6"></div>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-gray-700"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-white text-base sm:text-lg mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                          {testimonial.role}
                        </div>
                        <div className="text-xs text-purple-400 mt-1">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-950 via-purple-950/30 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px] relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Leadership Journey?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-8">
              Join thousands of successful leaders who have elevated their
              performance through strategic coaching and motivational training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-3 shadow-lg hover:shadow-purple-500/50 transition-shadow"
              >
                Get Started Today
                <TrendingUp className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-3 transition-all"
              >
                Explore Services
                <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
