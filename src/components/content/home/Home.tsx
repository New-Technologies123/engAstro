import { memo, useCallback, useEffect } from 'react';

import Styles from './home.module.scss';

const LOGOS = [
  '/images/home/ros.jpg',
  '/images/home/gas.png',
  '/images/home/nnk.webp',
  '/images/home/ink.png',
  '/images/home/sur.webp',
  '/images/home/tat.png',
  '/images/home/bel.png',
  '/images/home/cas.webp',
  '/images/home/luc.png',
  '/images/home/luc_ysb.webp',
];

const ADVANTAGES = [
  {
    number: '01',
    title: 'Engineering expertise',
    text: 'We develop solutions based on real operating conditions and industry requirements.',
  },
  {
    number: '02',
    title: 'Full project cycle',
    text: 'Engineering, manufacturing, delivery and support are integrated into a single system.',
  },
  {
    number: '03',
    title: 'Geographic reach',
    text: 'We work with customers across Russia and the CIS, arranging deliveries to challenging regions.',
  },
  {
    number: '04',
    title: 'Responsibility',
    text: 'We control quality at every stage — from the technical specification to commissioning.',
  },
];

const FAQ = [
  {
    question: 'What solutions do we supply?',
    answer:
      'Equipment and integrated technical solutions for the oil and gas industry. We select the configuration according to the specific task, operating conditions and customer requirements.',
    link: '/products',
    linkText: 'Explore our products',
  },
  {
    question: 'What services are available to customers?',
    answer:
      'Engineering, technical consulting, equipment supply, service support and other services related to equipment operation.',
    link: '/services',
    linkText: 'View our services',
  },
  {
    question: 'Which regions do you deliver to?',
    answer:
      'We usually arrange deliveries across Russia and the CIS countries, but the specific project geography is determined individually based on the facility location and logistics requirements.',
    link: '/contact',
    linkText: 'Discuss your project',
  },
  {
    question: 'Where can I find technical documentation?',
    answer:
      'Key documents, catalogues and technical materials are available in the dedicated documentation section of the website.',
    link: '/documents',
    linkText: 'Open documentation',
  },
];

export const Home = memo(() => {
  const handleNavigation = useCallback((path: string) => {
    window.location.href = path;
  }, []);

  const handleScrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(
        `.${Styles.animateOnScroll}`,
      ),
    );

    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) =>
        element.classList.add(Styles.visible),
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add(Styles.visible);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -60px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={Styles.page}>

      {/* HERO */}

      <section className={Styles.hero}>
        <div className={Styles.heroGlow} />

        <div className={Styles.heroGrid}>
          <div
            className={`${Styles.heroContent} ${Styles.animateOnScroll}`}
          >
            <div className={Styles.heroEyebrow}>
              <span className={Styles.liveDot} />
              <span>"New Technologies" EPE LLC</span>
              <i />
            </div>

            <div className={Styles.heroHeading}>
              <h1>
                Engineering
                <br />
                solutions
                <strong>for the oil & gas industry</strong>
              </h1>
            </div>

            <p className={Styles.heroDescription}>
              We design, manufacture and supply equipment
              for oil and gas production, processing
              and transportation processes.
            </p>

            <div className={Styles.heroActions}>
              <button
                type="button"
                className={Styles.primaryButton}
                onClick={() => handleScrollTo('directions')}
              >
                <span>Explore solutions</span>
                <b>↗</b>
              </button>
            </div>

            <div className={Styles.heroStats}>
              <div>
                <strong>20+</strong>
                <span>years in the industry</span>
              </div>

              <div>
                <strong>80+</strong>
                <span>delivery cities</span>
              </div>

              <div>
                <strong>12+</strong>
                <span>countries</span>
              </div>
            </div>
          </div>

          <div
            className={`${Styles.heroVisual} ${Styles.animateOnScroll}`}
          >
            <div className={Styles.heroImageFrame}>
              <img
                src="/images/home/product.webp"
                alt="Oil and gas industry equipment"
                className={Styles.heroImage}
              />

              <div className={Styles.heroImageShade} />

              <div className={Styles.heroCoordinates}>
                <span>NT / 2026</span>
                <span>Ufa / Russia</span>
              </div>

              <div className={Styles.heroImageLabel}>
                <i />
                <span>Technical solutions</span>
              </div>

              <div className={Styles.heroFloatingCard}>
                <span>Full project cycle</span>

                <strong>
                  From concept
                  <br />
                  to delivery
                </strong>

                <div className={Styles.floatingProgress}>
                  <i />
                </div>

                <small>
                  Engineering · manufacturing · service
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.heroFooter}>
          <span>01</span>

          <div className={Styles.heroFooterLine}>
            <i />
          </div>

          <div>
            <span>ENGINEERING</span>
            <span>MANUFACTURING</span>
            <span>DELIVERY</span>
            <span>SERVICE</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}

      <section
        className={`${Styles.section} ${Styles.aboutSection} ${Styles.animateOnScroll}`}
      >
        <div className={Styles.container}>

          <div className={Styles.sectionTop}>
            <div className={Styles.kicker}>
              <span>02</span>
              <b>About us</b>
            </div>

            <div className={Styles.sectionLine} />
          </div>

          <div className={Styles.aboutLayout}>
            <div>
              <h2 className={Styles.sectionTitle}>
                Technology that delivers
                <em>results.</em>
              </h2>
            </div>

            <div className={Styles.aboutMain}>
              <p className={Styles.aboutLead}>
                "New Technologies" EPE LLC is a Russian engineering
                company specializing in technical solutions
                for the oil and gas industry.
              </p>

              <p>
                We combine engineering expertise, manufacturing,
                equipment supply and service to provide our customers
                not simply with individual products, but with complete
                solutions tailored to specific operational requirements.
              </p>

              <button
                type="button"
                className={Styles.modernButton}
                onClick={() => handleNavigation('/about')}
              >
                <span>More about the company</span>
                <b>↗</b>
              </button>
            </div>
          </div>

          <div className={Styles.aboutBottom}>
            <div className={Styles.experience}>
              <div className={Styles.experience_number}>
                <span>Over</span>
                <strong>20</strong>
              </div>

              <div>
                <span>PRACTICAL EXPERIENCE</span>

                <b>
                  years of experience
                  <br />
                  in the industry
                </b>

                <p>
                  We work where precision,
                  reliability and predictable results matter.
                </p>
              </div>
            </div>

            <button
              type="button"
              className={Styles.career}
              onClick={() => handleNavigation('/careers')}
            >
              <div>
                <span>CAREERS</span>
                <strong>
                  Create solutions
                  <br />
                  with us
                </strong>
              </div>

              <b>↗</b>
            </button>
          </div>

          <div className={Styles.capabilities}>
            <div className={Styles.capabilitiesHeader}>
              <span>WHAT WE DO</span>

              <p>
                We combine engineering development,
                manufacturing and technical support
                within a single project cycle.
              </p>
            </div>

            <div className={Styles.capabilityGrid}>
              {[
                [
                  '01',
                  'Production equipment',
                  'Technical solutions for production facilities and oil and gas operations.',
                ],
                [
                  '02',
                  'Processing equipment',
                  'Equipment and solutions for oil and gas processing operations.',
                ],
                [
                  '03',
                  'Transportation equipment',
                  'Solutions for hydrocarbon transportation and facility operations.',
                ],
                [
                  '04',
                  'Service solutions',
                  'Technical support and maintenance throughout the equipment lifecycle.',
                ],
              ].map(([number, title, text]) => (
                <article
                  className={Styles.capability}
                  key={number}
                >
                  <span>{number}</span>

                  <div>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>

                  <b>↗</b>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GEOGRAPHY */}

      <section
        className={`${Styles.section} ${Styles.mapSection} ${Styles.animateOnScroll}`}
      >
        <div className={Styles.container}>

          <div className={Styles.mapHeader}>
            <div>
              <div className={Styles.kicker}>
                <span>03</span>
                <b>Geography</b>
              </div>

              <h2 className={Styles.sectionTitle}>
                We work wherever
                <em>solutions are needed.</em>
              </h2>
            </div>

            <p>
              We arrange equipment and technical solution
              deliveries across Russia and the CIS countries.
            </p>
          </div>

          <div className={Styles.mapLayout}>
            <div className={Styles.mapSide}>

              <div className={Styles.mapStats}>
                <div>
                  <strong>80+</strong>
                  <span>cities</span>
                </div>

                <div>
                  <strong>12+</strong>
                  <span>countries</span>
                </div>

                <div>
                  <strong>200+</strong>
                  <span>projects</span>
                </div>
              </div>

              <button
                type="button"
                className={Styles.modernButton}
                onClick={() => handleNavigation('/contact')}
              >
                <span>Discuss a delivery</span>
                <b>→</b>
              </button>
            </div>

            <div className={Styles.mapFrame}>
              <img
                src="/images/home/map.png"
                alt="Delivery geography across Russia and the CIS"
                loading="lazy"
                className={Styles.map}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}

      <section
        id="directions"
        className={`${Styles.section} ${Styles.solutionsSection} ${Styles.animateOnScroll}`}
      >
        <div className={Styles.container}>

          <div className={Styles.solutionsHeader}>
            <div>
              <div className={Styles.kicker}>
                <span>04</span>
                <b>Solutions</b>
              </div>

              <h2 className={Styles.sectionTitle}>
                From equipment manufacturing to
                <em>project delivery.</em>
              </h2>
            </div>

            <p>
              We select the configuration based on the
              technical requirements, operating conditions
              and specific facility requirements.
            </p>
          </div>

          <div className={Styles.solutionsGrid}>

            <article
              className={Styles.solutionCard}
              onClick={() => handleNavigation('/products')}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleNavigation('/products');
                }
              }}
            >
              <div className={Styles.solutionImage}>
                <img
                  src="/images/home/product.webp"
                  alt="Products"
                  loading="lazy"
                />

                <div className={Styles.solutionShade} />

                <span>01 / Products</span>

                <b>↗</b>
              </div>

              <div className={Styles.solutionContent}>
                <div>
                  <small>Products</small>

                  <h3>Equipment</h3>

                  <p>
                    Technical solutions and equipment
                    for oil and gas facilities.
                  </p>
                </div>

                <button type="button">
                  Learn more
                  <span>↗</span>
                </button>
              </div>
            </article>

            <article
              className={Styles.solutionCard}
              onClick={() => handleNavigation('/services')}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  handleNavigation('/services');
                }
              }}
            >
              <div className={Styles.solutionImage}>
                <img
                  src="/images/home/services.png"
                  alt="Services"
                  loading="lazy"
                />

                <div className={Styles.solutionShade} />

                <span>02 / Service</span>

                <b>↗</b>
              </div>

              <div className={Styles.solutionContent}>
                <div>
                  <small>Service</small>

                  <h3>Services</h3>

                  <p>
                    Service, technical support and engineering
                    assistance throughout the equipment lifecycle.
                  </p>
                </div>

                <button type="button">
                  Learn more
                  <span>↗</span>
                </button>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ADVANTAGES */}

      <section
        className={`${Styles.section} ${Styles.advantagesSection} ${Styles.animateOnScroll}`}
      >
        <div className={Styles.container}>

          <div className={Styles.advantagesHeader}>
            <div>
              <div className={Styles.kicker}>
                <span>05</span>
                <b>Our approach</b>
              </div>

              <h2 className={Styles.sectionTitle}>
                Four principles behind
                <em>our work.</em>
              </h2>
            </div>

            <p>
              We build long-term relationships with our customers
              and take responsibility not only for delivery,
              but also for the final result.
            </p>
          </div>

          <div className={Styles.advantages}>
            {ADVANTAGES.map((item) => (
              <article
                className={Styles.advantage}
                key={item.number}
              >
                <div>
                  <span>{item.number}</span>
                  <b>↗</b>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <i />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}

      <section
        className={`${Styles.section} ${Styles.newsSection} ${Styles.animateOnScroll}`}
      >
        <div className={Styles.container}>

          <div className={Styles.newsHeader}>
            <div>
              <div className={Styles.kicker}>
                <span>06</span>
                <b>News</b>
              </div>

              <h2 className={Styles.sectionTitle}>
                What matters — clearly and
                <em>to the point.</em>
              </h2>
            </div>

            <button
              type="button"
              className={Styles.modernButton}
              onClick={() => handleNavigation('/news')}
            >
              <span>All news</span>
              <b>↗</b>
            </button>
          </div>

          <article className={Styles.newsCard}>
            <div className={Styles.newsImage}>
              <img
                src="/images/home/news.webp"
                alt="EGYPES 2026"
                loading="lazy"
              />

              <div className={Styles.newsShade} />

              <span>NEWS / 2026</span>
            </div>

            <div className={Styles.newsContent}>
              <div className={Styles.newsMeta}>
                <span>MARCH 2026</span>
                <i />
                <span>EVENTS</span>
              </div>

              <small>Industry / Event</small>

              <h3>
                "New Technologies" EPE LLC
                <br />
                at EGYPES 2026
              </h3>

              <p>
                We share highlights from the industry exhibition,
                new business contacts and the company's areas
                of development.
              </p>

              <button
                type="button"
                className={Styles.modernButton}
                onClick={() => handleNavigation('/news')}
              >
                <span>Read the news</span>
                <b>↗</b>
              </button>
            </div>
          </article>

        </div>
      </section>

      {/* CLIENTS */}

      <section
        className={`${Styles.section} ${Styles.clientsSection} ${Styles.animateOnScroll}`}
      >
        <div className={Styles.container}>

          <div className={Styles.clientsHeader}>
            <div>
              <div className={Styles.kicker}>
                <span>07</span>
                <b>Clients</b>
              </div>

              <h2 className={Styles.sectionTitle}>
                Trusted by
                <em>industry leaders.</em>
              </h2>
            </div>

            <p>
              Our partnerships are built on quality,
              technical expertise and reliable fulfilment
              of our commitments.
            </p>
          </div>

          <div className={Styles.brands}>
            <div className={Styles.brandsTrack}>
              {[...LOGOS, ...LOGOS].map((logo, index) => (
                <div
                  className={Styles.brand}
                  key={`${logo}-${index}`}
                >
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={Styles.clientsBottom}>
            <span>Long-term partnerships</span>
            <span>Trust / Quality / Expertise</span>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section
        id="faq"
        className={`${Styles.section} ${Styles.faqSection} ${Styles.animateOnScroll}`}
      >
        <div className={Styles.container}>

          <div className={Styles.faqLayout}>

            <div className={Styles.faqIntro}>
              <div className={Styles.kicker}>
                <span>08</span>
                <b>FAQ</b>
              </div>

              <h2 className={Styles.sectionTitle}>
                Still have
                <em>questions?</em>
              </h2>

              <p>
                We have collected answers to the most common
                questions. If you cannot find the information
                you need, contact us directly.
              </p>

              <button
                type="button"
                className={Styles.primaryButton}
                onClick={() => handleNavigation('/contact')}
              >
                <span>Contact us</span>
                <b>↗</b>
              </button>
            </div>

            <div className={Styles.faqList}>
              {FAQ.map((item) => (
                <details
                  className={Styles.faqItem}
                  key={item.question}
                >
                  <summary>
                    <span>{item.question}</span>

                    <b>+</b>
                  </summary>

                  <div className={Styles.faqAnswer}>
                    <p>{item.answer}</p>

                    <a href={item.link}>
                      {item.linkText}
                      <span>↗</span>
                    </a>
                  </div>
                </details>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>
  );
});

Home.displayName = 'Home';