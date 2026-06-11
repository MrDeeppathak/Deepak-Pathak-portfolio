"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const els = gsap.utils.toArray("[data-reveal]");
    const tweens = els.map((el, i) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 38 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: parseFloat(el.dataset.revealDelay || 0),
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      )
    );

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return null;
}
