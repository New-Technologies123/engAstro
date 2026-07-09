import { Layout } from '../../layout/Layout';
import { Card } from '../../ui/card/Card';
import { useEffect, useState, useRef } from 'react';

import { Repair } from './Repair';
import { Metering } from './Metering';
import { Service } from './Service';
import { Dewaxing } from './Dewaxing';

import serves_12 from '../../../images/services/serves_12.png';
import serves_3 from '../../../images/services/serves_3.webp';
import serves_4 from '../../../images/services/serves_4.webp';
import serves_5 from '../../../images/services/serves_5.webp';

import { BackToTop } from '../../ui/back-to-top/BackToTop';
import styles from '../products/scroll.module.scss';

type TServices = | 'repair' | 'metering' | 'service' | 'dewaxing';

const pathnameToService = (pathname: string): TServices | null => {
  const parts = pathname.split('/').filter(Boolean);

  if (parts.length === 2 && parts[0] === 'services') {
    return parts[1] as TServices;
  }

  return null;
};

// Keys for storing data in sessionStorage
const SCROLL_POSITION_KEY = 'services_scroll_position';
const SELECTED_CARD_KEY = 'services_selected_card';
const FROM_SERVICE_KEY = 'from_service_page';

export const Services = () => {
  const [currentPage, setCurrentPage] = useState<TServices | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const trackRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 720);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goTo = (path: string, cardIndex?: number) => {
    // Save the card index from which we navigate to the detail page
    if (cardIndex !== undefined) {
      sessionStorage.setItem(SELECTED_CARD_KEY, String(cardIndex));
      // Mark that we are navigating from the services page to the detail page
      sessionStorage.setItem(FROM_SERVICE_KEY, 'true');
    }
    // Save current scroll position before leaving
    if (trackRef.current) {
      sessionStorage.setItem(SCROLL_POSITION_KEY, String(trackRef.current.scrollLeft));
    }
    window.history.pushState({}, '', path);
    setCurrentPage(pathnameToService(path));
    window.scrollTo({ top: 0, behavior: 'smooth', });
  };

  useEffect(() => {
    const track = trackRef.current;
    const cards = track?.querySelectorAll('.card');
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;

    if (!track || !cards?.length || !prevBtn || !nextBtn) return;

    let current = 0;

    const updateArrows = () => {
      // Using classes instead of style.visibility
      if (current <= 0) {
        prevBtn.classList.remove('visible');
        prevBtn.style.visibility = 'hidden';
      } else {
        prevBtn.classList.add('visible');
        prevBtn.style.visibility = 'visible';
      }
      
      if (current >= cards.length - 1) {
        nextBtn.classList.remove('visible');
        nextBtn.style.visibility = 'hidden';
      } else {
        nextBtn.classList.add('visible');
        nextBtn.style.visibility = 'visible';
      }
    };

    const updateDots = (index: number) => {
      setCurrentCardIndex(index);
    };

    const cardStep = () => {
      return cards.length > 1
        ? (cards[1] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft
        : (cards[0] as HTMLElement).offsetWidth;
    };

    const goToCard = (index: number, smooth: boolean = true) => {
      current = Math.max(0, Math.min(cards.length - 1, index));
      const card = cards[current] as HTMLElement;
      const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
      track.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
      updateArrows();
      updateDots(current);
    };

    const handleScroll = () => {
      const step = cardStep();
      if (step > 0) {
        current = Math.round(track.scrollLeft / step);
        current = Math.max(0, Math.min(cards.length - 1, current));
        updateArrows();
        updateDots(current);
      }
    };

    // Function to determine the target card when returning
    const getTargetCardIndex = (): number => {
      // Check if we are returning from a service detail page
      const fromService = sessionStorage.getItem(FROM_SERVICE_KEY);
      
      if (fromService === 'true') {
        // Returning from detail page - show the card we came from
        const savedCardIndex = sessionStorage.getItem(SELECTED_CARD_KEY);
        
        // Clear flags after use
        sessionStorage.removeItem(FROM_SERVICE_KEY);
        sessionStorage.removeItem(SELECTED_CARD_KEY);
        sessionStorage.removeItem(SCROLL_POSITION_KEY);
        
        if (savedCardIndex !== null) {
          const index = parseInt(savedCardIndex, 10);
          if (!isNaN(index) && index >= 0 && index < cards.length) {
            return index;
          }
        }
        // If the index is invalid - show the first card
        return 0;
      }

      // If coming from another page (not from a service detail page)
      // or visiting for the first time - show the first card
      // Clear all saved data
      sessionStorage.removeItem(SELECTED_CARD_KEY);
      sessionStorage.removeItem(SCROLL_POSITION_KEY);
      
      return 0;
    };

    // Restore position
    const targetIndex = getTargetCardIndex();
    goToCard(targetIndex, false);

    setIsInitialized(true);

    // Save references to handlers for proper removal
    const handleNextClick = () => {
      goToCard(current + 1);
      // Save position after click (only if not navigating to another page)
      setTimeout(() => {
        if (trackRef.current) {
          sessionStorage.setItem(SCROLL_POSITION_KEY, String(trackRef.current.scrollLeft));
        }
      }, 100);
    };
    
    const handlePrevClick = () => {
      goToCard(current - 1);
      // Save position after click (only if not navigating to another page)
      setTimeout(() => {
        if (trackRef.current) {
          sessionStorage.setItem(SCROLL_POSITION_KEY, String(trackRef.current.scrollLeft));
        }
      }, 100);
    };

    const handleScrollEvent = () => {
      handleScroll();
      // Save position on scroll (only if not navigating to another page)
      if (trackRef.current) {
        sessionStorage.setItem(SCROLL_POSITION_KEY, String(trackRef.current.scrollLeft));
      }
    };

    nextBtn.addEventListener('click', handleNextClick);
    prevBtn.addEventListener('click', handlePrevClick);
    track.addEventListener('scroll', handleScrollEvent, { passive: true });

    return () => {
      nextBtn.removeEventListener('click', handleNextClick);
      prevBtn.removeEventListener('click', handlePrevClick);
      track.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  useEffect(() => {
    const sync = () => setCurrentPage(pathnameToService(window.location.pathname));
    sync();
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  if (currentPage === 'repair') {
    return <Repair />;
  }

  if (currentPage === 'metering') {
    return <Metering />;
  }

  if (currentPage === 'service') {
    return <Service />;
  }

  if (currentPage === 'dewaxing') {
    return <Dewaxing />;
  }

  return (
    <Layout
      title="Service"
      description="New Technologies Engineering and Production Enterprise LLC has extensive experience in providing oilfield equipment repair services, as well as well paraffin removal and flow rate measurement services"
    >
      <>
        <div className={styles.servicesWrapper}>
          <div className={styles.cardsTrack} ref={trackRef}>
            <div className="card">
              <Card
                imgSrc={serves_12.src}
                title="Maintenance, Overhaul and Modernization of AGMU"
                onClick={() => goTo('/services/repair', 0)}
              />
            </div>
            <div className="card">
              <Card
                imgSrc={serves_3.src}
                title="Oil Well Flow Rate Measurement Using Mobile Metering Unit"
                onClick={() => goTo('/services/metering', 1)}
              />
            </div>
            <div className="card">
              <Card
                imgSrc={serves_4.src}
                title="Maintenance of Tubing String Cleaning Device (TSCD)"
                onClick={() => goTo('/services/service', 2)}
              />
            </div>
            <div className="card">
              <Card
                imgSrc={serves_5.src}
                title="Oil Well Paraffin Removal Services"
                onClick={() => goTo('/services/dewaxing', 3)}
              />
            </div>
          </div>
          
          <div className={styles.mobileNav}>
            <button 
              className={`${styles.prevBtn}`} 
              ref={prevBtnRef}
              aria-label="Previous service"
            >
              ←
            </button>
            <button 
              className={`${styles.nextBtn}`} 
              ref={nextBtnRef}
              aria-label="Next service"
            >
              →
            </button>
          </div>

          {/* Pagination indicators (mobile only) */}
          {isMobile && (
            <div className={styles.paginationDots} role="tablist" aria-label="Service navigation">
              {Array.from({ length: 4 }).map((_, index) => {
                const cards = trackRef.current?.querySelectorAll('.card');
                const total = cards?.length || 4;
                if (index >= total) return null;
                
                return (
                  <button
                    key={index}
                    className={`${styles.dot} ${currentCardIndex === index ? styles.active : ''}`}
                    onClick={() => {
                      const track = trackRef.current;
                      const cards = track?.querySelectorAll('.card');
                      if (!track || !cards) return;
                      
                      const card = cards[index] as HTMLElement;
                      const left = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
                      track.scrollTo({ left, behavior: 'smooth' });
                      setCurrentCardIndex(index);
                    }}
                    role="tab"
                    aria-selected={currentCardIndex === index}
                    aria-label={`Go to service ${index + 1}`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </>
      <BackToTop />
    </Layout>
  );
};