import { motion } from "motion/react";
import { Bell, Radio } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/ba9b8e948adf0142a12813e777f4031853a0550f.png";

interface PermissionsScreenProps {
  onGrantPermissions: () => void;
}

export function PermissionsScreen({ onGrantPermissions }: PermissionsScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-b from-[#010621] via-[#010621] via-80% to-orange-600/30 flex items-center justify-center p-6"
    >
      <div className="max-w-md w-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-28 h-28 mb-4">
              <img 
                src={logoImage} 
                alt="Radio Kameng Logo" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Radio Kameng 88.8</h1>
            <p className="text-amber-200/80 text-sm">Your Community Voice from the Himalayas</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
            <h2 className="text-xl font-semibold text-white mb-4">We need a few permissions</h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Radio className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Audio Playback</h3>
                  <p className="text-sm text-gray-300">To stream live radio and podcasts seamlessly</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Notifications</h3>
                  <p className="text-sm text-gray-300">Stay updated with your favorite shows and news</p>
                </div>
              </div>
            </div>
          </div>

          <Button
            onClick={onGrantPermissions}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 rounded-full text-lg shadow-lg shadow-amber-900/50"
          >
            Grant Permissions
          </Button>

          <p className="mt-4 text-xs text-gray-400">
            Your privacy matters. We only ask for what's essential.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}