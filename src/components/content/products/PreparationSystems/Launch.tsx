import { useEffect, useRef, useState } from "react";
import Styles from "../products.module.scss";
import back from '../../../../images/back.svg'
import product from "../../../../images/products/product_4.webp";

import { BigPhoto } from "../../../ui/big-photo/BigPhoto";
import { BackToTop } from "../../../ui/back-to-top/BackToTop";

export const Launch = () => {
  const [bigPhoto, setBigPhoto] = useState<string | null>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);

  const onBack = () => {
    window.location.href = "/products/preparation-systems";
  };

  const onDoc = () => {
    window.location.href = "/documents/?type=accessories";
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

        {/* HERO */}
        <section className={`${Styles.hero} ${Styles.reveal}`}>
          <div className={Styles.heroText}>
            <h1>
              Pig launcher and receiver of intratubal cleaning and diagnostic facilities<span></span>
            </h1>

            <p>
              Designed for periodic launching and receiving of pipeline tools, such as inspection pigs, cleaning scrapers, and other diagnostic devices.
            </p>

            <p>
              Ensures safe and reliable operation of pipeline cleaning and diagnostics systems.
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
              <div className={Styles.frame}>
                <img src={product.src} alt="ЭРВИП" className={Styles.mainImage} />
              </div>
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
          <h2>Advantages</h2>
          <div className={Styles.featuresGrid}>
            {[
              ["Integrity", "Ensures safe launching and receiving of pipeline tools."],
              ["Versatility", "Suitable for oil and gas pipelines of various diameters and configurations."],
              ["Automation", "Minimizes operator involvement, increases efficiency and safety."],
              ["Operational simplicity", "Easy integration into the existing systems and minimal maintenance requirements."],
              [
                "Sealing Integrity",
                "Eliminates leaks during launching and receiving operations.",
              ],
              [
                "Safety",
                "Complies with industrial safety requirements.",
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
            <img src={product.src} alt="" />
          </div>

          <div className={Styles.techText}>
            <h2>Operating principle</h2>

            <p>
              Pigs are launched into the pipeline using a pig launcher, where they carry out cleaning or inspection operations 
              before being retrieved by a pig receiver.
            </p>

            <p>
              This process enables pipeline condition assessment, defect detection, and the removal of deposits.
            </p>

            <section className={`${Styles.related} ${Styles.reveal}`}>
              <h1>See also:</h1>
              <div className={Styles.relatedGrid}>
                <a href="/products/preparation-systems/block">Valve manifold</a>
                <a href="/products/preparation-systems/cleaning">Tubing string clarifier</a>
                <a href="/products/preparation-systems/dosing">Chemical injection skid</a>
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