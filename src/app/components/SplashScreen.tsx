import { motion } from "motion/react";
import { useEffect, useState } from "react";
import monasteryImage1 from "figma:asset/ae32aa8b3523b0fb9f29a29c050c7699125d6c71.png";
import logoImage from "figma:asset/ba9b8e948adf0142a12813e777f4031853a0550f.png";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate audio jingle playing
    const audio = new Audio();
    // In a real app, this would be an actual jingle file
    // For now, we'll simulate the jingle duration
    
    const duration = 3000; // 3 seconds jingle duration
    const interval = 30;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#010621] via-[#010621] via-80% to-orange-600/30 flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={monasteryImage1}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010621]/80 via-[#010621]/85 via-80% to-orange-600/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Logo */}
          <div className="mb-6">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }}
              className="inline-flex items-center justify-center w-40 h-40 mb-4"
            >
              <img 
                src={logoImage} 
                alt="Radio Kameng Logo" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-white mb-2"
          >
            Radio Kameng
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-amber-200 mb-1"
          >
            88.8 FM
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-gray-400 mb-8"
          >
            Voice of Bomdilla
          </motion.p>

          {/* Loading Bar */}
          <div className="w-48 h-1 bg-white/20 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-amber-500 to-orange-500"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 text-xs text-gray-500"
          >
            Broadcasting from the Himalayas...
          </motion.p>
        </motion.div>
      </div>

      {/* Animated Waves */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 left-0 right-0 h-32"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{
              delay: i * 0.2,
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            style={{
              background: `radial-gradient(ellipse at center bottom, rgba(251, 191, 36, ${0.3 - i * 0.1}) 0%, transparent 70%)`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}