import profile from "@/data/profile.json";
import content from "@/data/content.json";
import styles from "@/styles/sections/ProjectsSection.module.css";

export default function ProjectsSection() {
  return (
    <section className={styles.section} id="projects">
      <div className={styles.header}>
        <div>
          <p className={styles.label}>{content.sections.projects}</p>
          <h2 className={styles.sectionTitle}>Tools built for<br />real EdTech problems</h2>
        </div>
      </div>
      <div className={styles.list}>
        {profile.projects.map((project, index) => (
          <article key={project.id} className={styles.card}>
            <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
            <div className={styles.meta}>
              <span className={styles.type}>{project.type}</span>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.subtitle}>{project.subtitle}</p>
              <p className={styles.desc}>{project.desc}</p>
              <div className={styles.tech}>
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className={styles.linkCol}>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                Live ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
