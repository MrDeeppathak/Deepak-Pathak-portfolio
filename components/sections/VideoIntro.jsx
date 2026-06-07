"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import profile from "@/data/profile.json";
import styles from "@/styles/sections/VideoIntro.module.css";

const CinematicLayer = dynamic(() => import("@/components/three/CinematicLayer"), {
  ssr: false,
});

export default function VideoIntro({ soundOn = false }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  // When the user clicks ENTER on the opening gate, unmute the video.
  // The click counts as a user gesture, so the browser allows sound.
  useEffect(() => {
    if (soundOn && videoRef.current) {
      videoRef.current.muted = false;
      setMuted(false);
      videoRef.current.play().catch(() => {});
    }
  }, [soundOn]);

  function toggleMute() {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  }

  function togglePlay() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  }

  return (
    <section className={styles.section} id="intro">
      <video
        className={styles.bgVideo}
        src="/assets/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <video
        ref={videoRef}
        className={styles.mainVideo}
        src="/assets/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className={styles.overlay} />
      <CinematicLayer />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Cinematic Portfolio · 2026</p>
        <h1 className={styles.name}>
          {profile.name.first}
          <br />
          {profile.name.last}
        </h1>
        <p className={styles.role}>{profile.roles.detailed}</p>
      </div>
      <div className={styles.controls}>
        <button onClick={togglePlay} aria-label={playing ? "Pause" : "Play"}>
          {playing ? "⏸ Pause" : "▶ Play"}
        </button>
        <button onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"}>
          {muted ? "🔇 Sound" : "🔊 Mute"}
        </button>
      </div>
      {muted && <div className={styles.hint}>Tap for sound</div>}
      <div className={styles.scrollCue}>Scroll</div>
    </section>
  );
}
