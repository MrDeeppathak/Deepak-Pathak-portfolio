import Image from "next/image";
import dynamic from "next/dynamic";
import profile from "@/data/profile.json";
import content from "@/data/content.json";
import styles from "@/styles/sections/HeroSection.module.css";

const HeroBackground = dynamic(() => import("@/components/three/HeroBackground"), { ssr: false });

export default function HeroSection() {
  return (
    <section className={styles.section} id="hero">
      <HeroBackground />

      {/* Left */}
      <div className={styles.left} data-reveal>
        <p className={styles.greeting}>Hi, I'm</p>
        <p className={styles.shortRole}>{profile.roles.short}</p>
        <h2 className={styles.name}>
          {profile.name.first}
          <br />
          {profile.name.last}
        </h2>
        <div className={styles.pills}>
          {content.hero.pills.map((pill) => (
            <span key={pill} className={styles.pill}>{pill}</span>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <a
            className={styles.ctaBtn}
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {content.hero.cta} →
          </a>
          <div className={styles.availCard}>
            <span className={styles.dot} />
            <span>{content.hero.availabilityLabel}</span>
          </div>
        </div>
      </div>

      {/* Center portrait */}
      <div className={styles.center} data-reveal data-reveal-delay="0.15">
        <div className={styles.imageWrap} data-parallax>
          <Image
            src="/assets/portrait.png"
            alt={profile.name.full}
            fill
            className={styles.image}
            priority
          />
        </div>
      </div>

      {/* Right */}
      <div className={styles.right} data-reveal data-reveal-delay="0.3">
        <p className={styles.description}>{profile.description}</p>
        <div className={styles.stats}>
          {profile.stats.map((item) => {
            const match = item.value.match(/^([\d.]+)(.*)$/);
            return (
              <div key={item.label} className={styles.card}>
                {match ? (
                  <strong data-count={match[1]} data-suffix={match[2]}>
                    {item.value}
                  </strong>
                ) : (
                  <strong>{item.value}</strong>
                )}
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.socials}>
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className={styles.socialLink}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
