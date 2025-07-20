'use client'; // Required for client-side components like motion
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-red-900 to-black text-white flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold">SURGE 2025</h1>
          <p className="text-xl md:text-2xl">SPORTS FEST OF SHIV NADAR IoE</p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded hover:bg-yellow-600">Know More</button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 text-3xl md:text-4xl font-bold"
        >
          COMPETE <span className="text-yellow-500">•</span> CONQUER <span className="text-yellow-500">•</span> CELEBRATE
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 text-6xl md:text-9xl opacity-10">COMPETE CONQUER</div>
      </section>

      {/* Statistics Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {[
            { stat: '109+', label: 'TEAMS', img: 'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2Fchess.avif&w=828&q=75' },
            { stat: '25+', label: 'EVENTS', img: 'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2Fttm.webp&w=828&q=75' },
            { stat: '2500+', label: 'PLAYERS', img: 'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2FcricMen.webp&w=828&q=75' },
            { stat: '15K+', label: 'FOOTFALL', img: 'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2Ffutsal.jpeg&w=828&q=75' },
            { stat: 'SWEAT', label: 'SWEAT', img: 'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2Fwoten.webp&w=828&q=75' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-yellow-500">{item.stat}</h2>
              <p>{item.label}</p>
              <img src={item.img} alt={item.label} className="mt-4 mx-auto w-20 h-20 object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sports Images Section */}
      <section className="bg-black py-16">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
    {[
      'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2Fchess.avif&w=828&q=75',
      'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2Fttm.webp&w=828&q=75',
      'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2FcricMen.webp&w=828&q=75',
      'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2Ffutsal.jpeg&w=828&q=75',
      'https://www.surgesnu.in/_next/image?url=%2Fimages%2Flanding%2Fsports%2Fwoten.webp&w=828&q=75',
    ].map((imgUrl, index) => (
      <motion.img
        key={index}
        src={imgUrl}
        alt={`sport-${index + 1}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="w-full h-32 object-cover"
      />
    ))}
  </div>
      </section>
    </>
  );
}