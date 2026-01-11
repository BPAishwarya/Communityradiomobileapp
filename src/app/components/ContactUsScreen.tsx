import { motion } from "motion/react";
import { Phone, Mail, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/ba9b8e948adf0142a12813e777f4031853a0550f.png";

interface ContactUsScreenProps {
  onBack: () => void;
}

export function ContactUsScreen({ onBack }: ContactUsScreenProps) {
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
              <h1 className="text-white text-xl font-bold">Contact Us</h1>
              <p className="text-gray-400 text-sm">Get in touch with us</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pb-24 space-y-6">
          {/* Station Info Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/20 rounded-3xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-lg flex-shrink-0">
                <img src={logoImage} alt="Radio Kameng" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold">Radio Kameng</h2>
                <p className="text-amber-300 text-lg">88.8 FM</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your community radio station, bringing you closer to the heart of Bomdilla and the Kameng valley.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="space-y-3">
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              href="tel:+919876543210"
              className="flex items-start gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <p className="text-blue-400 font-medium">+91 98765 43210</p>
                <p className="text-gray-400 text-sm mt-1">Studio Hotline: Call us live on air</p>
              </div>
            </motion.a>

            <motion.a
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              href="mailto:hello@radiokameng.in"
              className="flex items-start gap-4 p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all group"
            >
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-purple-400 font-medium">hello@radiokameng.in</p>
                <p className="text-gray-400 text-sm mt-1">For general inquiries and feedback</p>
              </div>
            </motion.a>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl"
            >
              <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-1">Address</h3>
                <p className="text-green-400 font-medium">Radio Kameng Station</p>
                <p className="text-gray-400 text-sm mt-1">
                  Bomdilla, West Kameng District<br />
                  Arunachal Pradesh 790001<br />
                  India
                </p>
              </div>
            </motion.div>
          </div>

          {/* Studio Hours */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-5"
          >
            <h3 className="text-white font-semibold mb-3">Studio Hours</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-white font-medium">6:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Saturday - Sunday</span>
                <span className="text-white font-medium">7:00 AM - 10:00 PM</span>
              </div>
            </div>
          </motion.div>

          {/* Visit Us CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-600/30 rounded-2xl p-6 text-center"
          >
            <h3 className="text-white font-bold text-lg mb-2">Visit Our Studio</h3>
            <p className="text-gray-300 text-sm mb-4">
              We welcome visitors! Come see how community radio works and meet our RJs.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Schedule a Visit
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}