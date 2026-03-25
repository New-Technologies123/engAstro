import { useEffect, useRef, useState } from "react";
import Styles from "../products.module.scss";
import back from '../../../../images/back.svg'
import product_1 from "../../../../images/products/product_1.webp";

import { BigPhoto } from "../../../ui/big-photo/BigPhoto";
import { BackToTop } from "../../../ui/back-to-top/BackToTop";

export const Stationary = () => {
  const [bigPhoto, setBigPhoto] = useState<string | null>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  const onBack = () => {
    window.location.href = "/products/accounting-system";
  };

  const onDoc = () => {
    window.location.href = "/documents/?type=accountingSystem";
  };

  /* 3D TILT */

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

  return (
    <>
      <div className={Styles.page}>
        <button className={Styles.backButton} onClick={onBack}>
          <img src={back.src} alt=""/>
        </button>

        <section className={Styles.hero}>
          <div className={Styles.heroText}>
            <h1>"Sputnik-massomer NT.1" the 
              <span> stationary </span> 
              automated group metering skid           
            </h1>

            <p>
              The stationary skid for measuring mass and mass flow rate of the total well fluid and volume flow rate of free petroleum gas after separation
            </p>

            <div className={Styles.heroButtons}>
              <button
                className={Styles.primaryBtn}
                onClick={() => setBigPhoto(product_1.src)}
              >
                See images
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
              onClick={() => setBigPhoto(product_1.src)}
            >
              <img src={product_1.src} alt="АГЗУ стационарная" className={Styles.mainImage} />

              <div className={Styles.imageOverlay}>
                <span className={Styles.zoomText}>
                  Click to enlarge
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}

        <section className={Styles.features}>
          <h2>Scope of application</h2>

          <div className={Styles.featuresGrid}>
            <div className={Styles.featureCard}>
              <p>
                to measure mass and mass flow rate of the total well fluid.
              </p>
            </div>

            <div className={Styles.featureCard}>
              <p>
                to measure the mass and mass flow rate of crude oil (net of water).
              </p>
            </div>

            <div className={Styles.featureCard}>
              <p>
                to measure volume flow rate of free petroleum gas after separation.
              </p>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}

        <section className={Styles.tech}>
          <div className={Styles.techImage}>
            <img src={product_1.src} alt="" />
          </div>

          <div className={Styles.techText}>
            <h2>Operating principle</h2>
            <p>
              The operation of the unit is based on the separation of oil and gas mixure, followed by the measurement of the mass and 
              mass flow rate of the total well fluid, as well as the volume of free petroleum gas. The obtained data is used for metering of well production.
            </p>

            <section className={Styles.related}>
              <h1>See also:</h1>
              <div className={Styles.relatedGrid}>
                <a href="/products/accounting-system/mobile/">Mobile automated group metering skid</a>
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