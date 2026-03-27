import { useEffect, useRef, useState } from "react";
import Styles from "../products.module.scss";
import back from '../../../../images/back.svg';
import product from "../../../../images/products/product_5_1.webp";

import { BigPhoto } from "../../../ui/big-photo/BigPhoto";
import { BackToTop } from "../../../ui/back-to-top/BackToTop";

export const Multiphase = () => {
  const [bigPhoto, setBigPhoto] = useState<string | null>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  const onBack = () => {
    window.location.href = "/products/pumping-stations";
  };

  const onDoc = () => {
    window.location.href = "/documents/?type=pumpingStations";
  };

  /* ---------- 3D TILT EFFECT ---------- */
  useEffect(() => {
    const el = heroImageRef.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / 20;
      const rotateY = (x - centerX) / 20;
      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const leave = () => {
      el.style.transform = "rotateX(0) rotateY(0)";
    };

    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  /* ---------- SCROLL REVEAL ---------- */
  useEffect(() => {
    const elements = document.querySelectorAll(`.${Styles.reveal}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(Styles.visible);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={Styles.page}>
        <button className={Styles.backButton} onClick={onBack}>
          <img src={back.src} alt=""/>
        </button>

        <section className={`${Styles.hero} ${Styles.reveal}`}>
          <div className={Styles.heroText}>
            <h1>Modular multiphase pump station  
              <span> </span></h1>
            <p>
              Designed for pumping liquid-gas mixtures directly from wells without preliminary gas separation, handling gas content up to 100%
            </p>
            <div className={Styles.heroButtons}>
              <button
                className={Styles.primaryBtn}
                onClick={() => setBigPhoto(product.src)}
              >
                See image
              </button>
              <button className={Styles.secondaryBtn} onClick={onDoc}>
                Files
              </button>
            </div>
          </div>

          <div className={Styles.heroImageWrap}>
            <div
              className={Styles.imageCard}
              ref={heroImageRef}
              onClick={() => setBigPhoto(product.src)}
            >
              <img src={product.src} alt="Мультифазная насосная станция" className={Styles.mainImage} />
              
              <div className={Styles.imageOverlay}>
                <span className={Styles.zoomText}>
                  Click to enlarge
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ADVANTAGES */}
        <section className={`${Styles.features} ${Styles.reveal}`}>
          <h2>Equipment advantages</h2>
          <div className={Styles.featuresGrid}>
            {[
              [
                "High Accuracy",
                "Ensures stable readings and high-precision measurement of the pumped mixture.",
              ],
              ["Reliability", "Provides straightforward operation and high, industrial-grade reliability."],
              ["Durability", "Designed for an extended service life, supporting long-term continuous operation."],
              ["Robustness", "Exhibits insensitivity to pressure fluctuations and changes in fluid composition."],
              ["Safety", "Equipped with an automatic emergency protection system"],
              [
                "Energy Efficiency",
                "Enables optimization of pumping unit duty cycles.",
              ],
            ].map(([title, text], i) => (
              <div key={i} className={Styles.featureCard}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TYPICAL COMPOSITION */}
        <section className={`${Styles.tech} ${Styles.reveal}`}>
          <div className={Styles.techImage}>
            <img src={product.src} alt="Типовой состав" />
          </div>
          <div className={Styles.techText}>
            <h2>Standard configuration:</h2>
            <ul className={Styles.featuresList}>
              {[
                "Multiphase pumping equipment",
                "Containerized module of the pumping station",
                "Shut-off valve",
                "Technological pipelines",
                "Drainage pipelines",
                "Instrumentation and control equipment package",
                "The life support system of the containerized module (heating and ventilation system)",
                "Multiphase pumping equipment control system",
                "Emergency shutdown system",
                "Variable speed drive unit",
                "Upper level data-transmitting system",
                "Power supply system of the  pumping equipment",
              ].map((text, i) => (
                <li key={i} className={Styles.feature}>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            <section className={`${Styles.related} ${Styles.reveal}`}>
              <h1>See also:</h1>
              <div className={Styles.relatedGrid}>
                <a href="/products/pumping-stations/internal">
                  Modular internal and  external pumping station
                </a>
              </div>
            </section>
          </div>          
        </section>
        <BackToTop />

        {bigPhoto && <BigPhoto src={bigPhoto} onClose={() => setBigPhoto(null)} />}
      </div>
    </>
  );
};