import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import corporateSeminarImage from "/assets/e1937c6adae6bf559090e418acb7846ae1a7a759.png";
import leadershipWorkshopImage from "/assets/6f166b2928e714b52302148ffae7bced0dd80dcd.png";
import teamBuildingImage from "/assets/5de950c0ecca9b840848a76298e63996b1e57443.png";
import corporateTrainingImage from "/assets/802c18ee80c002b25e6b9d978b0d96f667ea751f.png";
import coachingSessionImage from "/assets/1c58e0d46a83aacbebb642f9c3824e9ad487f6de.png";
import keynoteEventImage from "/assets/ecfcec8b05d298936b59f56cda17ab7189cb11e3.png";
import quote1 from "/assets/da9e809faec283a42ba101a64cc6e5d0241f5835.png";
import quote2 from "/assets/646e785a5b8e0b576c4353ccdb80829c3e516de3.png";
import quote3 from "/assets/fc4411f93c7fe5cf212529fa2de4f32325dc15a4.png";
import quote4 from "/assets/428a2c4a4ee8f220f61076f44af9bae5a1391b39.png";
import quote5 from "/assets/ea9b159c21461b4bdbe29e72cadf499389e4048e.png";
import quote6 from "/assets/378a5a9009baca5da507b4c17e61d6077c3556d6.png";

const galleryItems = [
  {
    url: corporateSeminarImage,
    title: "Corporate Seminar",
    category: "Speaking",
    isLocal: true,
  },
  {
    url: leadershipWorkshopImage,
    title: "Leadership Workshop",
    category: "Training",
    isLocal: true,
  },
  {
    url: coachingSessionImage,
    title: "Coaching Session",
    category: "Coaching",
    isLocal: true,
  },
  {
    url: teamBuildingImage,
    title: "Team Building",
    category: "Workshop",
    isLocal: true,
  },
  {
    url: keynoteEventImage,
    title: "Keynote Event",
    category: "Speaking",
    isLocal: true,
  },
  {
    url: corporateTrainingImage,
    title: "Corporate Training",
    category: "Training",
    isLocal: true,
  },
];

// Sample YouTube videos - replace with actual video IDs
const videoItems = [
  {
    id: "C4_2pW_CKF0",
    title: "Transforming Lives Through Motivation",
    category: "Motivational Speaking",
    thumbnail: "https://img.youtube.com/vi/C4_2pW_CKF0/maxresdefault.jpg",
  },
  {
    id: "EFM7aDE3-Ww",
    title: "Leadership in a Fun Way",
    category: "Training",
    thumbnail: "https://img.youtube.com/vi/EFM7aDE3-Ww/maxresdefault.jpg",
  },
  {
    id: "EcmC3W3Gp9U",
    title: "Strategy & Discipline",
    category: "Business",
    thumbnail: "https://img.youtube.com/vi/EcmC3W3Gp9U/maxresdefault.jpg",
  },
];

// Motivational Quotes
const motivationalQuotes = [
  { image: quote1, alt: "Risk is Real, but Strategy gives you Power" },
  { image: quote2, alt: "Set the Goal, Master the Preparation" },
  { image: quote3, alt: "Inspire the mindset, Equip the skills" },
  { image: quote4, alt: "Leadership quote in Marathi" },
  { image: quote5, alt: "Winning mindset quote in Marathi" },
  { image: quote6, alt: "Great Leaders Create more Leaders" },
];

export function Gallery() {
  const [selectedQuote, setSelectedQuote] = useState<{
    image: string;
    alt: string;
  } | null>(null);

  const openYouTubeVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
  };

  return (
    <section
      id="gallery"
      className="pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 bg-gray-900 relative overflow-hidden"
    >
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
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
            Recent Work
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
                {/* Image */}
                {item.isLocal ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <ImageWithFallback
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {item.category}
                  </p>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gray-900/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold text-white border border-gray-700">
                  {item.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 text-center lg:text-left"
        >
          <div className="text-xs sm:text-sm text-pink-400 font-semibold uppercase tracking-widest mb-4">
            Video Content
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white">
            Watch & Learn
          </h2>
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {videoItems.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
              onClick={() => openYouTubeVideo(video.id)}
            >
              <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500">
                {/* Video Thumbnail */}
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl group-hover:shadow-pink-500/50 transition-all"
                  >
                    <Play
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1"
                      fill="white"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    {video.category}
                  </p>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-pink-900/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold text-white border border-pink-700">
                  Video
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Motivational Quotes Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 lg:mt-24 mb-10 sm:mb-12 lg:mb-14 text-center lg:text-left"
        >
          <div className="text-xs sm:text-sm text-green-400 font-semibold uppercase tracking-widest mb-3">
            Motivational Quotes
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white">
            Inspiring Words
          </h2>
        </motion.div>

        {/* Quotes Grid - Smaller Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
          {motivationalQuotes.map((quote, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedQuote(quote)}
            >
              <div className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-500 border-2 border-transparent hover:border-green-500/50">
                {/* Image */}
                <img
                  src={quote.image}
                  alt={quote.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Hover Text - Click to Preview */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs sm:text-sm font-semibold bg-green-500/90 px-3 py-1.5 rounded-full">
                    Click to Preview
                  </span>
                </div>

                {/* Category badge */}
                <div className="absolute top-2 right-2 bg-gray-900/90 backdrop-blur-sm px-2 py-1 rounded-full text-[10px] sm:text-xs font-semibold text-white border border-gray-700">
                  Quote
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quote Preview Modal */}
      <AnimatePresence>
        {selectedQuote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedQuote(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-10 bg-gray-800/90 hover:bg-red-600 text-white rounded-full p-2 sm:p-3 transition-colors shadow-xl"
                onClick={() => setSelectedQuote(null)}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Quote Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6 sm:p-8 z-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white text-center">
                  {selectedQuote.alt}
                </h3>
              </div>

              {/* Quote Image */}
              <div className="w-full max-h-[90vh] flex items-center justify-center">
                <img
                  src={selectedQuote.image}
                  alt={selectedQuote.alt}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
