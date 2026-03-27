import { useEffect, useRef, useState } from "react";
import Styles from "../products.module.scss";
import back from '../../../../images/back.svg'
import product from "../../../../images/products/product_4_3.webp";

import { BigPhoto } from "../../../ui/big-photo/BigPhoto";
import { BackToTop } from "../../../ui/back-to-top/BackToTop";

export const Cleaning = () => {
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
              Tubing String <span>Clarifier</span>
            </h1>

            <p>
              For automatic continuous cleaning of the inner surface of a well's tubing string by cutting a 
              layer of paraffin wax from the walls.
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
              <img src={product.src} alt="УОК-НКТ" className={Styles.mainImage} />
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
          <h2>Purpose</h2>

          <div className={Styles.featuresGrid}>
            {[
              [
                "String Cleaning",
                "Automatic removal of paraffin and mechanical deposits from the inner surface of the tubing string."
              ],
              [
                "Paraffin plug prevention",
                "Reduces the risk of paraffin plug formation and pipeline clogging during well operation."
              ],
              [
                "Stable Well Performance",
                "Helps to maintain the flow capacity of the tubing string and ensures stable oil production."
              ],
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
            <img src={product.src} alt="УОК-НКТ оборудование" />
          </div>

          <div className={Styles.techText}>
            <h2>Advantages</h2>

            <ul className={Styles.featuresList}>
              <li className={Styles.feature}>
                <div className={Styles.featureText}>
                  <p>Wire spooling problems are prevented through the use of a spring-loaded movable roller with a weight sensor;</p>
                </div>
              </li>
              <li className={Styles.feature}>
                <div className={Styles.featureText}>
                  <p>A fully automated process for eliminating wax plugs;</p>
                </div>
              </li>
              <li className={Styles.feature}>
                <div className={Styles.featureText}>
                  <p>Calibration of the scraper's position with an accuracy of up to 40 cm.;</p>
                </div>
              </li>
              <li className={Styles.feature}>
                <div className={Styles.featureText}>
                  <p>The scraper is available in several basic designs: telescopic, annular, milling, blade-type, auger-type, and others.;</p>
                </div>
              </li>
              <li className={Styles.feature}>
                <div className={Styles.featureText}>
                  <p>The scraper is available in several basic designs: telescopic, annular, milling, blade-type, auger-type, and others.</p>
                </div>
              </li>
            </ul>

            <p>
              Magnets are installed on the roller, and reed sensors ensure the sequential activation of the reed switches in the direction of the roller's rotation.
            </p>

            <section className={`${Styles.related} ${Styles.reveal}`}>
              <h1>See also:</h1>
              <div className={Styles.relatedGrid}>
                <a href="/products/preparation-systems/launch">Pig launcher and receiver of intratubal cleaning and diagnostic facilities</a>
                <a href="/products/preparation-systems/block">Valve manifold</a>
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