// import React from 'react'
// import video from "../assets/video.mp4";
// import { ACHIEVEMENT } from '../constants';

// const AchievementShowcase = () => {
//   return (
//     <div id='award' >
//         <h2 className='mb-12 mt-20 text-center text-4xl fotn-semibold'>Award</h2>
//         <div className='mx-auto flex max-w-6xl flex-wrap'>
//             <div className='w-full p-2 sm:w-1/2'>
//                 <video className="w-full rounded-lg" autoPlay muted loop playsInline>
//                     <source src={video} type='video/mp4'/>
//                 </video>
//             </div>
//             <div className='w-full p-4 text-center sm:w-1/2'>
//                 <h2 className='mb-4 text-3xl'>{ACHIEVEMENT.title}</h2>
//                 <span className='mt-4 border-b border-yellow-400 py-2 text-xl font-semibold uppercase text-yellow-400'>{ACHIEVEMENT.award}</span>
//                 <p className='m-4 p-2 italic'>{ACHIEVEMENT.description}</p>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default AchievementShowcase


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';
import video from "../assets/video.mp4";
import { ACHIEVEMENT } from '../constants';

const AchievementShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextAchievement = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ACHIEVEMENT.length);
  };

  const prevAchievement = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ACHIEVEMENT.length) % ACHIEVEMENT.length);
  };

  const currentAchievement = ACHIEVEMENT[currentIndex];

  useEffect(() => {
    const timer = setInterval(nextAchievement, 10000); // Auto-advance every 10 seconds
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div id='award' className="bg-gradient-to-r from-black-700 to-indigo-800 text-white py-16">
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className='mb-12 text-center text-5xl font-bold'
      >
        Achievements
      </motion.h2>
      <div className='mx-auto flex max-w-6xl flex-wrap items-center'>
        <div className='w-full p-4 sm:w-1/2'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden shadow-2xl"
          >
            <video className="w-full" autoPlay muted loop playsInline>
              <source src={video} type='video/mp4'/>
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <Award size={80} className="text-yellow-400" />
            </div>
          </motion.div>
        </div>
        <div className='w-full p-8 sm:w-1/2'>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <h3 className='mb-4 text-4xl font-bold text-yellow-400'>{currentAchievement.title}</h3>
              <div className='mb-6 text-2xl font-semibold'>
                <span className='mr-2'>🏆</span>
                {currentAchievement.award}
              </div>
              <p className='mb-8 text-lg italic'>{currentAchievement.description}</p>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between items-center mt-8">
            <button onClick={prevAchievement} className="p-2 rounded-full bg-white text-purple-700 hover:bg-yellow-400 transition-colors duration-300">
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2">
              {ACHIEVEMENT.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-yellow-400' : 'bg-white bg-opacity-50'}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>
            <button onClick={nextAchievement} className="p-2 rounded-full bg-white text-purple-700 hover:bg-yellow-400 transition-colors duration-300">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementShowcase;
