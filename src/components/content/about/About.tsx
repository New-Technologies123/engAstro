// About.tsx
import Styles from './about.module.scss';
import { Title } from '../../ui/title/Title';
import { CountCard } from '../../ui/count-card/CountCard';
import { BackToTop } from "../../ui/back-to-top/BackToTop";

export const About = () => {
  return (
    <div className={Styles.aboutPage}>
      {/* ===== HERO-БЛОК ===== */}
      <section className={Styles.heroSection}>
        <div className={Styles.heroOverlay} />
        <div className={Styles.heroContent}>
          <span className={Styles.badge}>Since 2005</span>
          <h1 className={Styles.heroTitle}>
            <span className={Styles.highlight}>«New Technologies»</span> Engineering <br />
            and Production Enterprise 
          </h1>
          <p className={Styles.heroText}>
            We are a leading manufacturer of modular process equipment 
            for oil and gas field development. We operate in the Far North, 
            ensuring uninterrupted operations for our clients.
          </p>
        </div>
      </section>

      {/* ===== БЛОК С ЦИФРАМИ ===== */}
      <section className={Styles.statsSection}>
        <div className={Styles.statsHeader}>
          <Title text="Company in Numbers" />
          <p className={Styles.statsSubtitle}>
            Over 15 years of experience and hundreds of completed projects
          </p>
        </div>
        <div className={Styles.numberAbout}>
          <CountCard 
            header="300+"
            title="Full-time employees"
            index={0}
          />
          <CountCard
            header="31404"
            number="m²"
            title="Production facility area with access to railways."
            index={1}
          />
          <CountCard
            header="100+"
            title="Successful projects in Russia and the CIS"
            index={2}
          />
          <CountCard
            header="100%"
            title="Compliance with HSE requirements"
            index={3}
          />
          <CountCard
            header="79"
            offer="units"
            title="All-terrain vehicles"
            index={4}
          />
        </div>
      </section>
      <BackToTop />
    </div>
  );
};