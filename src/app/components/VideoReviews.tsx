import { motion } from 'motion/react';
import { Play } from 'lucide-react';

const videos = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800',
    title: 'Corporate Keynote 2024',
    duration: '12:45',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800',
    title: 'Leadership Masterclass',
    duration: '18:30',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    title: 'Coaching Insights',
    duration: '8:15',
  },
];

export function VideoReviews() {
  return (
    <section id="reviews" className="py-16 sm:py-24 lg:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1440px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 lg:mb-20 text-center lg:text-left"
        >
          <div className="text-xs sm:text-sm text-purple-400 font-semibold uppercase tracking-widest mb-4">
            Videos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
            Watch & Learn
          </h2>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors">
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                    >
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded-lg text-sm font-semibold">
                    {video.duration}
                  </div>
                </div>
              </div>
              
              {/* Title */}
              <h3 className="mt-4 text-lg font-bold group-hover:text-purple-400 transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}