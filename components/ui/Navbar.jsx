"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/ui/Navbar.module.css";

const ITEMS = [
  { label: "Home", href: "#intro" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Case Studies", href: "#casestudies" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.brand}>DEEPAK PATHAK</div>
      <nav className={styles.menu}>
        {ITEMS.map((item) => (
          <span
            key={item.label}
            className={styles.item}
            onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
          >
            {item.label}
          </span>
        ))}
      </nav>
      <a className={styles.cta} href="mailto:deepak.pathak0530@gmail.com">
        Contact
      </a>
    </header>
  );
}
