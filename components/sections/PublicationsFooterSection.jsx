import profile from "@/data/profile.json";
import content from "@/data/content.json";
import styles from "@/styles/sections/PublicationsFooterSection.module.css";

export default function PublicationsFooterSection() {
  return (
    <section className={styles.section} id="footer">
      <div className={styles.top}>
        <p className={styles.label}>{content.sections.credibility}</p>
        <h2 className={styles.sectionTitle}>
          Credibility that<br />goes beyond the resume
        </h2>
        <div className={styles.columns}>
          <div>
            <p className={styles.colTitle}>Achievements</p>
            {profile.achievements.map((item) => (
              <p key={item} className={styles.item}>{item}</p>
            ))}
          </div>
          <div>
            <p className={styles.colTitle}>Certifications</p>
            {profile.certifications.map((item) => (
              <p key={item} className={styles.item}>{item}</p>
            ))}
          </div>
        </div>

        {/* Core tools & skills — categorized */}
        <div className={styles.skillsBlock}>
          <p className={styles.colTitle}>Core Tools & Skills</p>
          <div className={styles.skillGrid}>
            {profile.skillCategories.map((cat) => (
              <div key={cat.title} className={styles.skillCategory}>
                <p className={styles.skillCatTitle}>{cat.title}</p>
                <div className={styles.skillTags}>
                  {cat.items.map((item) => (
                    <span key={item} className={styles.skillTag}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className={styles.footerCta}>
        <p className={styles.eyebrow}>{content.footer.eyebrow}</p>
        <h2 className={styles.footerName}>{profile.name.full}</h2>
        <p className={styles.footerTagline}>{content.footer.cta}</p>
        <div className={styles.ctaRow}>
          <a href="mailto:deepak.pathak0530@gmail.com" className={styles.button}>
            Let's Talk →
          </a>
          <div className={styles.footerLinks}>
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.footerLink}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
        <p className={styles.copyright}>
          © 2026 Deepak Pathak · {profile.location.city}, {profile.location.country}
        </p>
      </div>
    </section>
  );
}
