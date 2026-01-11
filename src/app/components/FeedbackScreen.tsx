import { motion } from "motion/react";
import { MessageSquare, ArrowLeft, Star, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

interface FeedbackScreenProps {
  onBack: () => void;
}

export function FeedbackScreen({ onBack }: FeedbackScreenProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setRating(0);
      setFeedback("");
      onBack();
    }, 2000);
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
              <h1 className="text-white text-xl font-bold">Send Feedback</h1>
              <p className="text-gray-400 text-sm">We value your opinion</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pb-24">
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-white text-2xl font-bold mb-2">Thank You!</h2>
              <p className="text-gray-400">Your feedback has been submitted successfully.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Welcome Message */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border border-green-500/20 rounded-3xl p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-white text-xl font-bold">Share Your Thoughts</h2>
                </div>
                <p className="text-gray-300 text-sm">
                  Your feedback helps us improve and serve the community better. Tell us what you think!
                </p>
              </motion.div>

              {/* Rating */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-white font-semibold mb-4">How would you rate us?</h3>
                <div className="flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-10 h-10 ${
                          star <= rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-600"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-amber-400 text-sm mt-3"
                  >
                    {rating === 5 && "Amazing! Thank you! ⭐"}
                    {rating === 4 && "Great! We appreciate it! 🌟"}
                    {rating === 3 && "Good! We'll keep improving! 👍"}
                    {rating === 2 && "We can do better! Tell us how! 💪"}
                    {rating === 1 && "Sorry to hear that. Please tell us more! 🙏"}
                  </motion.p>
                )}
              </motion.div>

              {/* Feedback Text */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <label className="text-white font-semibold mb-3 block">
                  Your Feedback
                </label>
                <Textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Tell us what you love, or what we can improve..."
                  className="min-h-[150px] bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-amber-500"
                  required
                />
              </motion.div>

              {/* Suggestions */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <h4 className="text-white font-semibold mb-3 text-sm">Feedback Ideas:</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Favorite shows or RJs</p>
                  <p>• Show suggestions or requests</p>
                  <p>• Audio quality feedback</p>
                  <p>• App features you'd like to see</p>
                  <p>• Community content ideas</p>
                </div>
              </motion.div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!feedback.trim() || rating === 0}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-6 rounded-full text-lg shadow-lg shadow-amber-900/50"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Feedback
              </Button>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}