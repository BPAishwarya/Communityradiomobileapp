import { motion } from "motion/react";
import { Podcast, Play, Clock } from "lucide-react";
import { Button } from "./ui/button";

const podcastBackground = "https://images.unsplash.com/photo-1534493873344-7c8f4b7e77e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBtaXN0fGVufDF8fHx8MTc2ODAzMTA0NHww&ixlib=rb-4.1.0&q=80&w=1080";

interface PodcastScreenProps {
  onMenuClick: () => void;
}

const podcasts = [
  {
    title: "Stories from Bomdilla",
    host: "RJ Tenzin",
    duration: "45 min",
    date: "Jan 8, 2026",
    description: "Local legends and folklore from the Kameng valley",
    image: "https://images.unsplash.com/photo-1534493873344-7c8f4b7e77e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBtaXN0fGVufDF8fHx8MTc2ODAzMTA0NHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    title: "Himalayan Wellness",
    host: "Dr. Karma Dorjee",
    duration: "32 min",
    date: "Jan 7, 2026",
    description: "Traditional healing practices and modern health tips",
    image: "https://images.unsplash.com/photo-1626418613494-a74db9505f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBmbGFncyUyMGhpbWFsYXlhfGVufDF8fHx8MTc2Nzk3NjUwNHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    title: "Local Business Spotlight",
    host: "RJ Pema",
    duration: "28 min",
    date: "Jan 6, 2026",
    description: "Featuring entrepreneurs making a difference",
    image: "https://images.unsplash.com/photo-1683041132892-0fe990b3afc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHBlYWNlZnVsfGVufDF8fHx8MTc2ODAzMTA0NXww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    title: "Music of Arunachal",
    host: "RJ Sonam",
    duration: "50 min",
    date: "Jan 5, 2026",
    description: "Exploring traditional instruments and melodies",
    image: "https://images.unsplash.com/photo-1534493873344-7c8f4b7e77e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBtaXN0fGVufDF8fHx8MTc2ODAzMTA0NHww&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    title: "Youth Voices",
    host: "RJ Norbu",
    duration: "38 min",
    date: "Jan 4, 2026",
    description: "Young leaders sharing their vision for tomorrow",
    image: "https://images.unsplash.com/photo-1626418613494-a74db9505f41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBmbGFncyUyMGhpbWFsYXlhfGVufDF8fHx8MTc2Nzk3NjUwNHww&ixlib=rb-4.1.0&q=80&w=400",
  },
];

export function PodcastScreen({ onMenuClick }: PodcastScreenProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gradient-to-b from-[#010621] via-[#010621] via-80% to-orange-600/30">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={podcastBackground}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010621]/80 via-[#010621]/85 via-80% to-orange-600/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header - Transparent */}
        <div className="bg-[#010621]/60 backdrop-blur-lg border-b border-white/10 p-6">
          <h1 className="text-white text-2xl font-bold text-center">Podcasts & Shows</h1>
          <p className="text-amber-200 text-sm text-center mt-1">Listen to past episodes</p>
        </div>

        {/* Featured Podcast */}
        <div className="p-6 pb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl overflow-hidden border border-purple-500/20"
          >
            <div className="absolute inset-0">
              <img
                src={podcasts[0].image}
                alt=""
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-purple-950/60 to-transparent" />
            </div>
            
            <div className="relative z-10 p-6">
              <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                FEATURED
              </span>
              <h2 className="text-white text-2xl font-bold mb-2">{podcasts[0].title}</h2>
              <p className="text-gray-300 text-sm mb-4">{podcasts[0].description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-purple-300">{podcasts[0].host}</span>
                  <span className="text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {podcasts[0].duration}
                  </span>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
                  <Play className="w-4 h-4 mr-2" fill="white" />
                  Play
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recent Episodes */}
        <div className="px-6 pb-24">
          <h3 className="text-white font-semibold text-lg mb-4">Recent Episodes</h3>
          <div className="space-y-3">
            {podcasts.slice(1).map((podcast, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-all group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-purple-900/40 to-pink-900/40 relative">
                      <img
                        src={podcast.image}
                        alt=""
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play className="w-4 h-4 text-purple-900 ml-0.5" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold mb-1">{podcast.title}</h4>
                    <p className="text-gray-400 text-xs mb-2 line-clamp-2">{podcast.description}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span>{podcast.host}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {podcast.duration}
                      </span>
                      <span>•</span>
                      <span>{podcast.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}