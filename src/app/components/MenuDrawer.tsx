import { motion, AnimatePresence } from "motion/react";
import { X, Phone, MessageSquare, Share2, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: string) => void;
}

export function MenuDrawer({ isOpen, onClose, onNavigate }: MenuDrawerProps) {
  const menuItems = [
    { id: "contact", icon: Phone, label: "Contact Us", color: "text-blue-400" },
    { id: "feedback", icon: MessageSquare, label: "Feedback", color: "text-green-400" },
    { id: "share", icon: Share2, label: "Share App", color: "text-purple-400" },
  ];

  const socialItems = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com/radiokameng", 
      color: "text-pink-400",
      bg: "bg-pink-600/20 hover:bg-pink-600/30 border-pink-600/30"
    },
    { 
      name: "WhatsApp", 
      icon: MessageSquare, 
      url: "https://wa.me/919876543210", 
      color: "text-green-400",
      bg: "bg-green-600/20 hover:bg-green-600/30 border-green-600/30"
    },
    { 
      name: "X (Twitter)", 
      icon: Twitter, 
      url: "https://twitter.com/radiokameng", 
      color: "text-blue-400",
      bg: "bg-blue-600/20 hover:bg-blue-600/30 border-blue-600/30"
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#010621] shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#010621]/95 backdrop-blur-lg border-b border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-white text-xl font-bold">Menu</h2>
                  <p className="text-gray-400 text-sm">Radio Kameng 88.8</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className="w-full flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                  >
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <span className="text-white font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Divider */}
            <div className="px-6 py-4">
              <div className="border-t border-white/10" />
            </div>

            {/* Social Links */}
            <div className="px-6 pb-6">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Connect With Us
              </h3>
              <div className="space-y-2">
                {socialItems.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full flex items-center gap-4 p-4 border rounded-xl transition-all group ${social.bg}`}
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className={`w-5 h-5 ${social.color}`} />
                      </div>
                      <span className="text-white font-medium">{social.name}</span>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-gray-400 text-xs mb-2">Broadcasting from</p>
                <p className="text-white font-semibold">Bomdilla, Arunachal Pradesh</p>
                <p className="text-amber-400 text-sm mt-2">88.8 FM</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}