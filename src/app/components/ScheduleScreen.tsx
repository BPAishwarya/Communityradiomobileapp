import { motion } from "motion/react";
import { Clock, Calendar } from "lucide-react";

const scheduleBackground = "https://images.unsplash.com/photo-1626418613494-a74db9505f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBmbGFncyUyMGhpbWFsYXlhfGVufDF8fHx8MTc2Nzk3NjUwNHww&ixlib=rb-4.1.0&q=80&w=1080";

interface ScheduleScreenProps {
  onMenuClick: () => void;
}

const scheduleData = [
  { time: "06:00 AM", show: "Morning Melodies", host: "RJ Tenzin", type: "Music" },
  { time: "08:00 AM", show: "Breakfast Beats", host: "RJ Karma", type: "Talk & Music" },
  { time: "10:00 AM", show: "Valley Voices", host: "RJ Dorjee", type: "Community" },
  { time: "12:00 PM", show: "Midday Mix", host: "RJ Pema", type: "Music" },
  { time: "02:00 PM", show: "Afternoon Acoustic", host: "RJ Sonam", type: "Acoustic" },
  { time: "04:00 PM", show: "Himalayan Hits", host: "RJ Tashi", type: "Popular Music" },
  { time: "06:00 PM", show: "Evening Echoes", host: "RJ Lhamo", type: "Classical" },
  { time: "08:00 PM", show: "Night Vibes", host: "RJ Norbu", type: "Chill" },
  { time: "10:00 PM", show: "Midnight Melodies", host: "Auto DJ", type: "Music" },
];

const typeColors: Record<string, string> = {
  "Music": "bg-amber-600/20 text-amber-300 border-amber-600/30",
  "Talk & Music": "bg-emerald-600/20 text-emerald-300 border-emerald-600/30",
  "Community": "bg-blue-600/20 text-blue-300 border-blue-600/30",
  "Acoustic": "bg-purple-600/20 text-purple-300 border-purple-600/30",
  "Popular Music": "bg-pink-600/20 text-pink-300 border-pink-600/30",
  "Classical": "bg-orange-600/20 text-orange-300 border-orange-600/30",
  "Chill": "bg-indigo-600/20 text-indigo-300 border-indigo-600/30",
};

export function ScheduleScreen({ onMenuClick }: ScheduleScreenProps) {
  const currentHour = new Date().getHours();
  
  const isCurrentShow = (timeStr: string) => {
    const hour = parseInt(timeStr.split(":")[0]);
    const isPM = timeStr.includes("PM");
    const hour24 = isPM && hour !== 12 ? hour + 12 : !isPM && hour === 12 ? 0 : hour;
    
    // Check if current show (2-hour blocks)
    return currentHour >= hour24 && currentHour < hour24 + 2;
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#010621] via-[#010621] via-80% to-orange-600/30">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={scheduleBackground}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010621]/80 via-[#010621]/85 via-80% to-orange-600/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header - Transparent */}
        <div className="bg-[#010621]/60 backdrop-blur-lg border-b border-white/10 p-6">
          <h1 className="text-white text-2xl font-bold text-center">Program Schedule</h1>
          <p className="text-amber-200 text-sm text-center mt-1">Radio Kameng 88.8 FM</p>
        </div>

        {/* Schedule List */}
        <div className="p-6 space-y-3 pb-24">
          {scheduleData.map((item, index) => {
            const isCurrent = isCurrentShow(item.time);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`relative ${
                  isCurrent 
                    ? "bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-2 border-amber-600/40" 
                    : "bg-white/5 border border-white/10"
                } backdrop-blur-sm rounded-2xl p-4 transition-all hover:bg-white/10`}
              >
                {isCurrent && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 bg-red-600 px-2 py-1 rounded-full text-xs text-white font-semibold">
                      <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1.5 h-1.5 bg-white rounded-full"
                      />
                      ON AIR
                    </span>
                  </div>
                )}
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                      isCurrent ? "bg-amber-600/30" : "bg-white/10"
                    }`}>
                      <Clock className="w-4 h-4 text-amber-400" />
                      <span className="text-white font-semibold text-sm">{item.time}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold mb-1 ${
                      isCurrent ? "text-amber-300 text-lg" : "text-white"
                    }`}>
                      {item.show}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">with {item.host}</p>
                    <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium border ${
                      typeColors[item.type] || "bg-gray-600/20 text-gray-300 border-gray-600/30"
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}