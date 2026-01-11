import { motion } from "motion/react";
import { Play, Pause, Radio as RadioIcon, Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { useState, useEffect } from "react";
import monasteryImage1 from "figma:asset/ae32aa8b3523b0fb9f29a29c050c7699125d6c71.png";
import monasteryImage2 from "figma:asset/114c28dad8a3d34ed367692490dbb050730d5d5e.png";
import logoImage from "figma:asset/ba9b8e948adf0142a12813e777f4031853a0550f.png";

interface HomeScreenProps {
  onMenuClick: () => void;
}

const backgrounds = [
  monasteryImage1,
  monasteryImage2,
  "https://images.unsplash.com/photo-1534493873344-7c8f4b7e77e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBtaXN0fGVufDF8fHx8MTc2ODAzMTA0NHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1626418613494-a74db9505f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBmbGFncyUyMGhpbWFsYXlhfGVufDF8fHx8MTc2Nzk3NjUwNHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1683041132892-0fe990b3afc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHBlYWNlZnVsfGVufDF8fHx8MTc2ODAzMTA0NXww&ixlib=rb-4.1.0&q=80&w=1080",
];

export function HomeScreen({ onMenuClick }: HomeScreenProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [currentBg, setCurrentBg] = useState(0);
  const [currentShow, setCurrentShow] = useState("Morning Melodies");

  // Rotate backgrounds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Simulate show rotation
  useEffect(() => {
    const shows = ["Morning Melodies", "Valley Voices", "Himalayan Hits", "Evening Echoes"];
    const interval = setInterval(() => {
      setCurrentShow(shows[Math.floor(Math.random() * shows.length)]);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#010621] via-[#010621] via-80% to-orange-600/30">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {backgrounds.map((bg, index) => (
          <motion.div
            key={bg}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBg ? 1 : 0 }}
            transition={{ duration: 2 }}
          >
            <img
              src={bg}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#010621]/70 via-[#010621]/75 via-80% to-orange-600/40" />
          </motion.div>
        ))}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 50 
            }}
            animate={{
              y: -50,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-0">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white shadow-lg flex-shrink-0">
              <img src={logoImage} alt="Radio Kameng" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">Radio Kameng</h1>
              <p className="text-amber-200 text-xs">88.8 FM</p>
            </div>
          </div>
          <button
            onClick={onMenuClick}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Now Playing Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center mb-8"
          >
            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 bg-white rounded-full"
              />
              <span className="text-white text-sm font-semibold">LIVE</span>
            </div>

            {/* Album Art / Station Logo with Animated Radio Icon */}
            <motion.div
              animate={{ 
                scale: isPlaying ? [1, 1.05, 1] : 1,
                rotate: isPlaying ? [0, 1, -1, 0] : 0,
              }}
              transition={{ 
                repeat: isPlaying ? Infinity : 0, 
                duration: 3,
                ease: "easeInOut" 
              }}
              className="w-56 h-56 bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl shadow-2xl shadow-amber-900/50 flex items-center justify-center mb-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
              
              {/* Animated Radio Icon */}
              <motion.div
                animate={isPlaying ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                } : {}}
                transition={isPlaying ? {
                  repeat: Infinity,
                  duration: 1.5,
                  ease: "easeInOut"
                } : {}}
              >
                <RadioIcon className="w-24 h-24 text-white/90" />
              </motion.div>

              {/* Pulsing rings when playing */}
              {isPlaying && (
                <>
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-white/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-white/30"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeOut",
                      delay: 1,
                    }}
                  />
                </>
              )}
            </motion.div>

            {/* Now Playing Info */}
            <motion.div
              key={currentShow}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-2"
            >
              <p className="text-gray-400 text-sm mb-1">Now Playing</p>
              <h2 className="text-white text-2xl font-bold mb-1">{currentShow}</h2>
              <p className="text-amber-300 text-sm">with RJ Tenzin</p>
            </motion.div>
          </motion.div>

          {/* Media Controls */}
          <div className="w-full max-w-sm space-y-6">
            {/* Play/Pause Button - Larger and more prominent */}
            <div className="flex justify-center">
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-24 h-24 rounded-full bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 shadow-2xl shadow-orange-900/60 transition-all"
              >
                {/* Glow effect when playing */}
                {isPlaying && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 blur-xl opacity-50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                )}
                
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-white" fill="white" />
                  ) : (
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  )}
                </div>

                {/* Spinning border when playing */}
                {isPlaying && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-amber-400/50"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                )}
              </motion.button>
            </div>

            {/* Volume Control - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Compact Volume Control */}
              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-900/30 via-stone-900/40 to-orange-900/30 backdrop-blur-xl rounded-full p-3 border border-orange-500/20">
                {/* Mute/Unmute Toggle */}
                <motion.button
                  onClick={() => setVolume(volume[0] === 0 ? [70] : [0])}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-orange-600/20 hover:bg-orange-600/30 flex items-center justify-center transition-colors flex-shrink-0 border border-orange-500/30"
                >
                  {volume[0] === 0 ? (
                    <VolumeX className="w-5 h-5 text-orange-400" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-orange-400" />
                  )}
                </motion.button>

                {/* Volume Slider */}
                <div className="flex-1 px-1">
                  <Slider
                    value={volume}
                    onValueChange={setVolume}
                    max={100}
                    step={1}
                    className="flex-1"
                  />
                </div>

                {/* Volume Percentage Badge */}
                <div className="bg-orange-600/30 border border-orange-500/40 rounded-full px-3 py-1 min-w-[48px] text-center">
                  <span className="text-white text-sm font-bold">{volume[0]}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom spacing for navigation */}
        <div className="h-20" />
      </div>
    </div>
  );
}