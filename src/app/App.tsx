import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { PermissionsScreen } from "./components/PermissionsScreen";
import { SplashScreen } from "./components/SplashScreen";
import { HomeScreen } from "./components/HomeScreen";
import { ScheduleScreen } from "./components/ScheduleScreen";
import { PodcastScreen } from "./components/PodcastScreen";
import { ContactUsScreen } from "./components/ContactUsScreen";
import { FeedbackScreen } from "./components/FeedbackScreen";
import { ShareScreen } from "./components/ShareScreen";
import { BottomNavigation } from "./components/BottomNavigation";
import { MenuDrawer } from "./components/MenuDrawer";

type AppScreen = 
  | "permissions" 
  | "splash" 
  | "home" 
  | "schedule" 
  | "podcast" 
  | "contact" 
  | "feedback" 
  | "share";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("permissions");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGrantPermissions = () => {
    setCurrentScreen("splash");
  };

  const handleSplashComplete = () => {
    setCurrentScreen("home");
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as AppScreen);
  };

  const handleBackFromOverlay = () => {
    setCurrentScreen("home");
    // Keep menu open when returning from overlay screens
    setIsMenuOpen(true);
  };

  const showBottomNav = ["home", "schedule", "podcast"].includes(currentScreen);

  return (
    <div className="fixed inset-0 bg-stone-950 overflow-hidden">
      {/* Mobile Container */}
      <div className="h-full w-full max-w-md mx-auto relative bg-stone-950 shadow-2xl">
        <AnimatePresence mode="wait">
          {currentScreen === "permissions" && (
            <PermissionsScreen key="permissions" onGrantPermissions={handleGrantPermissions} />
          )}
          
          {currentScreen === "splash" && (
            <SplashScreen key="splash" onComplete={handleSplashComplete} />
          )}
          
          {currentScreen === "home" && (
            <HomeScreen key="home" onMenuClick={() => setIsMenuOpen(true)} />
          )}
          
          {currentScreen === "schedule" && (
            <ScheduleScreen key="schedule" onMenuClick={() => setIsMenuOpen(true)} />
          )}
          
          {currentScreen === "podcast" && (
            <PodcastScreen key="podcast" onMenuClick={() => setIsMenuOpen(true)} />
          )}
          
          {currentScreen === "contact" && (
            <ContactUsScreen key="contact" onBack={handleBackFromOverlay} />
          )}
          
          {currentScreen === "feedback" && (
            <FeedbackScreen key="feedback" onBack={handleBackFromOverlay} />
          )}
          
          {currentScreen === "share" && (
            <ShareScreen key="share" onBack={handleBackFromOverlay} />
          )}
        </AnimatePresence>

        {/* Bottom Navigation */}
        {showBottomNav && (
          <BottomNavigation
            activeScreen={currentScreen as "home" | "schedule" | "podcast"}
            onNavigate={handleNavigate}
          />
        )}

        {/* Menu Drawer */}
        <MenuDrawer
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onNavigate={handleNavigate}
        />
      </div>
    </div>
  );
}