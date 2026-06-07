"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import ScreenLoader from "@/components/sections/ScreenLoader";
import VideoIntro from "@/components/sections/VideoIntro";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import WorkExperienceSection from "@/components/sections/WorkExperienceSection";
import PublicationsFooterSection from "@/components/sections/PublicationsFooterSection";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [soundOn, setSoundOn] = useState(false);

  return (
    <>
      {showLoader && (
        <ScreenLoader
          onDismiss={() => {
            setShowLoader(false);
            setSoundOn(true);
          }}
        />
      )}
      <Navbar />
      <main>
        <VideoIntro soundOn={soundOn} />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <WorkExperienceSection />
        <PublicationsFooterSection />
      </main>
    </>
  );
}
