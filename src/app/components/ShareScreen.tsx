import { motion } from "motion/react";
import { Share2, ArrowLeft, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logoImage from "figma:asset/ba9b8e948adf0142a12813e777f4031853a0550f.png";

interface ShareScreenProps {
  onBack: () => void;
}

export function ShareScreen({ onBack }: ShareScreenProps) {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = "https://radiokameng.in";
  const shareText = "Listen to Radio Kameng 88.8 FM - Your community voice from the Himalayas! 🏔️📻";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Radio Kameng 88.8 FM",
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="absolute inset-0 bg-[#010621] z-40 overflow-y-auto"
    >
      <div className="min-h-full">
        {/* Header */}
        <div className="sticky top-0 bg-[#010621]/95 backdrop-blur-lg border-b border-white/10 p-6 z-10">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <div>
              <h1 className="text-white text-xl font-bold">Share Radio Kameng</h1>
              <p className="text-gray-400 text-sm">Spread the word!</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pb-24 space-y-6">
          {/* Share Preview Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/20 rounded-3xl p-6 text-center"
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <img 
                src={logoImage} 
                alt="Radio Kameng Logo" 
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
            <h2 className="text-white text-2xl font-bold mb-2">Radio Kameng</h2>
            <p className="text-amber-300 text-lg mb-3">88.8 FM</p>
            <p className="text-gray-300 text-sm">
              Your community voice from the Himalayas
            </p>
          </motion.div>

          {/* Share Message */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              {shareText}
            </p>
          </motion.div>

          {/* Share Buttons */}
          <div className="space-y-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                onClick={handleNativeShare}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-6 rounded-full text-lg shadow-lg shadow-purple-900/50"
              >
                <Share2 className="w-5 h-5 mr-2" />
                Share with Friends
              </Button>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button
                onClick={handleCopyLink}
                variant="outline"
                className="w-full border-white/20 bg-white/5 hover:bg-white/10 text-white py-6 rounded-full text-lg"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 mr-2 text-green-400" />
                    Link Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 mr-2" />
                    Copy Link
                  </>
                )}
              </Button>
            </motion.div>
          </div>

          {/* Share Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-white font-semibold mb-4 text-center">Why Share Radio Kameng?</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-amber-400 text-lg">🎵</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Support Local Radio</h4>
                  <p className="text-gray-400 text-xs">Help us reach more listeners in the community</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-emerald-400 text-lg">🏔️</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Share Culture</h4>
                  <p className="text-gray-400 text-xs">Spread the voice of Bomdilla across the world</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-lg">🤝</span>
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">Build Community</h4>
                  <p className="text-gray-400 text-xs">Connect people through stories and music</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* QR Code Placeholder */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
          >
            <div className="w-40 h-40 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center">
              <div className="text-center">
                <Share2 className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <p className="text-xs text-gray-600">QR Code</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">Scan to visit radiokameng.in</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}