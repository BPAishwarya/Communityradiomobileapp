import { motion } from "motion/react";
import { Home, Calendar, Podcast, Radio } from "lucide-react";

interface BottomNavigationProps {
  activeScreen: "home" | "schedule" | "podcast";
  onNavigate: (screen: "home" | "schedule" | "podcast") => void;
}

export function BottomNavigation({ activeScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { id: "home" as const, icon: Home, label: "Home" },
    { id: "schedule" as const, icon: Calendar, label: "Schedule" },
    { id: "podcast" as const, icon: Podcast, label: "Podcast" },
  ];

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="relative">
        {/* Gradient fade effect */}
        <div className="absolute bottom-full left-0 right-0 h-20 bg-gradient-to-t from-stone-950 to-transparent pointer-events-none" />
        
        {/* Navigation bar */}
        <div className="bg-stone-950/95 backdrop-blur-xl border-t border-white/10">
          <div className="max-w-md mx-auto px-6 py-3">
            <div className="flex items-center justify-around">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeScreen === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className="relative flex flex-col items-center gap-1 py-2 px-4 transition-all"
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-amber-600/20 rounded-2xl"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    
                    <div className="relative z-10">
                      <Icon
                        className={`w-6 h-6 transition-colors ${
                          isActive ? "text-amber-400" : "text-gray-500"
                        }`}
                      />
                    </div>
                    
                    <span
                      className={`relative z-10 text-xs font-medium transition-colors ${
                        isActive ? "text-amber-400" : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Active dot */}
                    {isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
