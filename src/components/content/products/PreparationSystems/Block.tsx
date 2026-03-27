import { useEffect, useRef, useState } from "react";
import Styles from "../products.module.scss";
import back from '../../../../images/back.svg'
import product from "../../../../images/products/product_4_2.webp";

import { BigPhoto } from "../../../ui/big-photo/BigPhoto";
import { BackToTop } from "../../../ui/back-to-top/BackToTop";

export const Block = () => {
  const [bigPhoto, setBigPhoto] = useState<string | null>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  const onBack = () => {
    window.location.href = "/products/preparation-systems";
  };

  const onDoc = () => {
    window.location.href = "/documents/?type=preparationSystems";
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
            <h1>
              Chemical <span>injection </span>skid
            </h1>

            <p>
              Distribution of water by the cluster pump stations into injection wells for the purpose of maintaining the reservoir pressure.
            </p>

            <div className={Styles.heroButtons}>
              <button
                className={Styles.primaryBtn}
                onClick={() => setBigPhoto(product.src)}
              >
                View image
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
              <img src={product.src} alt="БГ" className={Styles.mainImage} />
              
              <div className={Styles.imageOverlay}>
                <span className={Styles.zoomText}>
                  Click to enlarge
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className={`${Styles.features} ${Styles.reveal}`}>
          <h2>Click to enlarge</h2>

          <div className={Styles.featuresGrid}>
            {[
              [
                "Flow Distribution",
                "The manifold valve is designed to distribute water from cluster pumping stations to injection wells."
              ],
              [
                "Pressure Maintenance",
                "Ensures stable water delivery to maintain reservoir pressure within the field development system."
              ],
              [
                "Reliable Operation",
                "Engineered for service in oil and gas field environments and high pressure conditions."
              ]
            ].map(([title, text], i) => (
              <div key={i} className={Styles.featureCard}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section className={`${Styles.tech} ${Styles.reveal}`}>
          <div className={Styles.techImage}>
            <img src={product.src} alt="БГ оборудование" />
          </div>

          <div className={Styles.techText}>
            <h2>Design Features</h2>

            <ul className={Styles.featuresList}>
              <li className={Styles.feature}>
                <div className={Styles.featureText}>
                  <p>Provides stable outlet pressure for each line;</p>
                </div>
              </li>
              <li className={Styles.feature}>
                <div className={Styles.featureText}>
                  <p>Compact and robust design suitable for cluster sites;</p>
                </div>
              </li>
              <li className={Styles.feature}>
                <div className={Styles.featureText}>
                  <p>Minimal maintenance and inspection requirements;</p>
                </div>
              </li>
            </ul>

            <section className={`${Styles.related} ${Styles.reveal}`}>
              <h1>See also:</h1>
              <div className={Styles.relatedGrid}>
                <a href="/products/preparation-systems/launch">Pig launcher and receiver of intratubal cleaning and diagnostic facilities</a>
                <a href="/products/preparation-systems/cleaning">Tubing String Clarifier</a>
                <a href="/products/preparation-systems/dosing">Chemical Injection Skid</a>
              </div>
            </section>
          </div>
        </section>

        <BackToTop />

        {bigPhoto && (
          <BigPhoto src={bigPhoto} onClose={() => setBigPhoto(null)} />
        )}
      </div>
    </>
  );
};