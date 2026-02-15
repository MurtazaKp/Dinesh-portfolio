import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import vikasGopalImage from '/assets/53c8870f41b906b0dce878fe3209004be2ef1c7c.png';
import priyaKadImage from '/assets/b72ad46c233b10ac7f6905bf0ed7ce23c4052e09.png';
import tusharWaghmaleImage from '/assets/ecd8b16aa1812a3a736b19d8985ecb77874f0341.png';
import mansiPatyaneImage from '/assets/0af62ed174513a98f28c18b988d14202e5fd07f6.png';
import rajnandiniAandreImage from '/assets/28b5ccc7ba0e4ae2760c31adcf5594dd450fbb58.png';
import sahilSawantImage from '/assets/90c0e514c32af03763050b7508eff0358cd1be67.png';
import shahinKaziImage from '/assets/4eda6add15ea067bb3d289e26bfa40880cb69ba0.png';
import kedaarSankkpalImage from '/assets/b87c04ff85a6107f19a4e97c35a968689d66b0e7.png';

const testimonials = [
  {
    name: 'Vikas Gopal',
    role: 'Founder & Chairman, WERmore Solution Pvt.Ltd',
    content: 'Dinesh\'s training programs have been instrumental in developing our leadership team. His unique approach to business coaching and motivational speaking has transformed our organizational culture and driven remarkable growth.',
    image: vikasGopalImage,
  },
  {
    name: 'Priya Sandesh Kad',
    role: 'Managing Director, WERmore Solution Pvt.Ltd',
    content: 'Working with Dinesh has been a game-changer for our company. His insights on leadership, strategy, and team development have elevated our performance to new heights. His sessions are always impactful and results-driven.',
    image: priyaKadImage,
  },
  {
    name: 'Tushar Waghmale',
    role: 'UI/UX & AI-driven Software Designer',
    content: 'Dinesh\'s career counseling and coaching helped me unlock my true potential. His practical guidance and motivational approach gave me the clarity and confidence to excel in my field and pursue my professional goals.',
    image: tusharWaghmaleImage,
  },
  {
    name: 'Mansi Mahendra Patyane',
    role: 'Sapphire DS, WeRmore Solution Pvt.Ltd',
    content: 'The two-day LDP by Dinesh Shinde Sir was impactful, practical, and inspiring, clearly explaining true leadership, common mistakes, team communication, and growth, making it highly valuable for every leader.',
    image: mansiPatyaneImage,
  },
  {
    name: 'Rajnandini Santosh Aandre',
    role: 'Star Sapphire DS, WeRmore Solution Pvt.Ltd',
    content: '2-day LDP by Dinesh Shinde Sir was life-changing, offering clear direction, powerful EEEERFP insights, and deep understanding of Network Marketing, inspiring career growth, teamwork, and transformation with WeRmore Solutions.',
    image: rajnandiniAandreImage,
  },
  {
    name: 'Sahil Sawant',
    role: 'Associate – WeRmore Solutions Pvt. Ltd.',
    content: 'Guru Dinesh Shinde Sir shares deep knowledge, practical guidance, and real-life examples. Every training and even driving with him brings new learning, valuable experiences, and clear career-growth steps that shape mindset, skills, and direction.',
    image: sahilSawantImage,
  },
  {
    name: 'Shahin Altaf Kazi',
    role: 'Sapphire DS, WERmore Solution Pvt.Ltd',
    content: 'The 2-day LDP by Dinesh Shinde Sir was truly impactful. His guidance on challenges, solutions, motivation, business planning, and personal consulting helped my growth and increased my payout. Heartfelt thanks to WeRmore and respected Shinde Sir.',
    image: shahinKaziImage,
  },
  {
    name: 'Kedaar R Sankkpal',
    role: 'Senior Hardware & Networking Engineer – MNC-Based Company Pune',
    content: 'Dinesh Shinde Sir is a motivating leader and true friend. His heartfelt teaching inspires deeply. Every day with him brings new learning, real-life insights, and clear career direction—keep learning daily, keep walking, and success will surely come one day.',
    image: kedaarSankkpalImage,
  },
];

export function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const [offset, setOffset] = useState(0);

  // Apple Services-style continuous smooth scrolling (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setOffset((prev) => {
        // Calculate card width including gap (33.333% + 16px gap on desktop)
        // Smoothly increment by small amounts for continuous motion
        const newOffset = prev + 0.1; // Slower increment for comfortable viewing (~10 seconds per card)
        
        // Reset seamlessly when we've scrolled through one set of testimonials
        // At 100%, we've moved through all original testimonials, reset to 0
        if (newOffset >= (100 / 3) * testimonials.length) {
          return newOffset - (100 / 3) * testimonials.length;
        }
        
        return newOffset;
      });
    }, 30); // Smooth 30ms updates for fluid motion like Apple

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
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
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
            Leadership Reviews
          </h2>
        </motion.div>

        {/* Horizontal Scrolling Testimonials - Apple Services Style Continuous Scroll */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden -mx-4 sm:-mx-6 px-4 sm:px-6">
            <motion.div
              className="flex gap-4 sm:gap-6"
              style={{
                x: `calc(-${offset}% - ${(offset / (100 / 3)) * 16}px)`,
              }}
              transition={{
                type: "tween",
                ease: "linear",
                duration: 0,
              }}
            >
              {/* Double the testimonials array for seamless infinite loop */}
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 border border-gray-700 flex flex-col">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 sm:mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed flex-grow">
                      "{testimonial.content}"
                    </p>

                    {/* Divider Line */}
                    <div className="border-t border-gray-700 mb-4 sm:mb-6"></div>

                    {/* Author */}
                    <div className="flex items-center gap-3 sm:gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-bold text-white text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-gray-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicator - Apple Style */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => {
              const progress = (offset / (100 / 3)) % testimonials.length;
              const isActive = Math.floor(progress) === index;
              
              return (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-purple-500 w-8'
                      : 'bg-gray-600 w-2'
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}