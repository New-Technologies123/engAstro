import Styles from './news.module.scss';

import { Gallery } from '../../ui/gallery/Gallery';

import {
  useState,
  useEffect,
  useMemo,
  useCallback,
  memo,
  useRef,
} from 'react';

import { Title } from '../../ui/title/Title';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

import {
  NEWS_DATA,
  CATEGORIES,
  getCategoryColor,
  getCategoryIcon,
  type TNewsItem,
} from './newsData';

import { useInView } from 'react-intersection-observer';

// =========================================================
// News placeholder component
// =========================================================

const NewsPlaceholder = memo(({ index }: { index: number }) => (
  <div
    className={`${Styles.newsItem} ${Styles.placeholder}`}
    style={{
      transitionDelay: `${Math.min(index * 30, 300)}ms`,
    }}
  >
    <div className={Styles.placeholderContent}>
      <div className={Styles.placeholderBadge} />
      <div className={Styles.placeholderTitle} />
      <div className={Styles.placeholderImage} />
      <div className={Styles.placeholderText} />
      <div className={Styles.placeholderText} />
    </div>
  </div>
));

NewsPlaceholder.displayName = 'NewsPlaceholder';

// =========================================================
// News card
// =========================================================

const NewsItem = memo(
  ({ news, index }: { news: TNewsItem; index: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);

    const contentRef = useRef<HTMLDivElement>(null);

    // -------------------------------------------------------
    // Intersection Observer
    // -------------------------------------------------------

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
      rootMargin: '50px 0px',
    });

    // -------------------------------------------------------
    // Measure expanded content height
    // -------------------------------------------------------

    useEffect(() => {
      if (!isOpen || !contentRef.current) {
        return;
      }

      const element = contentRef.current;

      const updateHeight = () => {
        setContentHeight(element.scrollHeight);
      };

      updateHeight();

      const resizeObserver = new ResizeObserver(() => {
        updateHeight();
      });

      resizeObserver.observe(element);

      return () => {
        resizeObserver.disconnect();
      };
    }, [isOpen, news.content]);

    // -------------------------------------------------------
    // Open / close news details
    // -------------------------------------------------------

    const toggleDetails = useCallback((e?: React.MouseEvent) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      setIsOpen((prev) => !prev);
    }, []);

    // -------------------------------------------------------
    // Card click
    // -------------------------------------------------------

    const handleCardClick = useCallback(
      (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;

        const isInteractive =
          target.closest(`.${Styles.newsSummary}`) ||
          target.closest(`.${Styles.galleryWrapper}`) ||
          target.closest('[data-gallery]') ||
          target.closest('.slider') ||
          target.closest('.item') ||
          target.closest('img') ||
          target.closest('button') ||
          target.closest('a');

        if (isInteractive) {
          return;
        }

        toggleDetails();
      },
      [toggleDetails]
    );

    // -------------------------------------------------------
    // Keyboard controls
    // -------------------------------------------------------

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleDetails();
        }
      },
      [toggleDetails]
    );

    // -------------------------------------------------------
    // Determine whether internal scrolling is needed
    // -------------------------------------------------------

    const shouldScroll = isOpen && contentHeight > 160;

    return (
      <div
        ref={ref}
        className={`${Styles.newsItem} ${
          inView ? Styles.visible : Styles.hidden
        } ${isOpen ? Styles.expanded : ''}`}
        style={{
          transitionDelay: `${Math.min(index * 30, 300)}ms`,
        }}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        {/* ===================================================
            HEADER
            =================================================== */}

        <div className={Styles.newsHeader}>
          <div
            className={Styles.newsBadge}
            style={{
              background: getCategoryColor(news.category),
            }}
          >
            {getCategoryIcon(news.category)} {news.category}
          </div>

          <div className={Styles.newsDate}>{news.date}</div>
        </div>

        {/* ===================================================
            TITLE
            =================================================== */}

        <h3 className={Styles.newsTitle}>{news.title}</h3>

        {/* ===================================================
            GALLERY
            =================================================== */}

        {news.photos.length > 0 && (
          <div className={Styles.galleryWrapper} data-gallery>
            <Gallery photos={news.photos} />
          </div>
        )}

        {/* ===================================================
            DESCRIPTION
            =================================================== */}

        <p className={Styles.newsDescription}>
          {news.description}
        </p>

        {/* ===================================================
            DETAILS
            =================================================== */}

        <div className={Styles.newsDetails}>
          <button
            className={`${Styles.newsSummary} ${
              isOpen ? Styles.open : ''
            }`}
            onClick={toggleDetails}
            type="button"
            aria-expanded={isOpen}
          >
            <span className={Styles.summaryContent}>
              <span className={Styles.summaryText}>
                {isOpen ? 'Hide' : 'Read more'}
              </span>

              <svg
                className={`${Styles.summaryIcon} ${
                  isOpen ? Styles.rotated : ''
                }`}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {/* =================================================
              FULL NEWS CONTENT
              ================================================= */}

          <div
            className={`${Styles.newsContentWrapper} ${
              isOpen ? Styles.expanded : ''
            } ${shouldScroll ? Styles.scrollable : ''}`}
          >
            <div
              ref={contentRef}
              className={Styles.newsFullContent}
            >
              {news.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

NewsItem.displayName = 'NewsItem';

// =========================================================
// Main News component
// =========================================================

export const News = () => {
  /*
   * The first category is always "All".
   */

  const allCategory = CATEGORIES[0];

  /*
   * Selected category.
   */

  const [activeFilter, setActiveFilter] =
    useState(allCategory);

  const [isLoaded, setIsLoaded] = useState(false);

  const [visibleCount, setVisibleCount] = useState(4);

  // -------------------------------------------------------
  // Title ref
  // -------------------------------------------------------

  const newsTitleRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------
  // Filter news
  // -------------------------------------------------------

  const filteredNews = useMemo(() => {
    if (activeFilter === allCategory) {
      return NEWS_DATA;
    }

    return NEWS_DATA.filter(
      (news) => news.category === activeFilter
    );
  }, [activeFilter, allCategory]);

  // -------------------------------------------------------
  // Reset visible news when category changes
  // -------------------------------------------------------

  useEffect(() => {
    setVisibleCount(4);
  }, [activeFilter]);

  // -------------------------------------------------------
  // Visible news
  // -------------------------------------------------------

  const visibleNews = useMemo(() => {
    return filteredNews.slice(0, visibleCount);
  }, [filteredNews, visibleCount]);

  // -------------------------------------------------------
  // More news
  // -------------------------------------------------------

  const hasMoreNews =
    visibleCount < filteredNews.length;

  // -------------------------------------------------------
  // All news shown
  // -------------------------------------------------------

  const isAllShown =
    visibleCount >= filteredNews.length &&
    filteredNews.length > 4;

  // -------------------------------------------------------
  // Show more
  // -------------------------------------------------------

  const handleShowMore = useCallback(() => {
    setVisibleCount((prev) =>
      Math.min(prev + 2, filteredNews.length)
    );
  }, [filteredNews.length]);

  // -------------------------------------------------------
  // Hide all
  // -------------------------------------------------------

  const handleHideAll = useCallback(() => {
    setVisibleCount(4);

    setTimeout(() => {
      if (newsTitleRef.current) {
        const titleElement = newsTitleRef.current;

        const titlePosition =
          titleElement.getBoundingClientRect().top +
          window.pageYOffset;

        const offsetPosition = titlePosition - 80;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    }, 100);
  }, []);

  // -------------------------------------------------------
  // Loading animation
  // -------------------------------------------------------

  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      setIsLoaded(true);
    });

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  // -------------------------------------------------------
  // Category switching
  // -------------------------------------------------------

  const handleFilterChange = useCallback(
    (category: string) => {
      setActiveFilter(category);
    },
    []
  );

  // -------------------------------------------------------
  // News count
  // -------------------------------------------------------

  const newsCount = filteredNews.length;

  const countText = useMemo(() => {
    if (newsCount === 1) {
      return 'news item';
    }

    return 'news items';
  }, [newsCount]);

  // =======================================================
  // RENDER
  // =======================================================

  return (
    <>
      {/* =================================================
          TITLE
          ================================================= */}

      <div ref={newsTitleRef}>
        <Title text="News" />
      </div>

      {/* =================================================
          FILTERS
          ================================================= */}

      <div className={Styles.filters}>
        {CATEGORIES.map((category, index) => {
          const isAllCategory = index === 0;

          return (
            <button
              key={category}
              className={`${Styles.filterBtn} ${
                activeFilter === category
                  ? Styles.active
                  : ''
              }`}
              onClick={() =>
                handleFilterChange(category)
              }
              type="button"
            >
              {isAllCategory
                ? `📰 ${category}`
                : `${getCategoryIcon(category)} ${category}`}
            </button>
          );
        })}
      </div>

      {/* =================================================
          NEWS COUNT
          ================================================= */}

      <div className={Styles.newsCount}>
        Showing {visibleNews.length} of {newsCount}{' '}
        {countText}
      </div>

      {/* =================================================
          NEWS LIST
          ================================================= */}

      <div
        className={`${Styles.newsContent} ${
          isLoaded ? Styles.loaded : ''
        }`}
      >
        {visibleNews.map((news, index) => (
          <NewsItem
            key={news.id}
            news={news}
            index={index}
          />
        ))}
      </div>

      {/* =================================================
          CONTROL BUTTONS
          ================================================= */}

      <div className={Styles.controlsContainer}>
        {hasMoreNews && (
          <button
            className={Styles.showMoreBtn}
            onClick={handleShowMore}
            type="button"
          >
            Show more
          </button>
        )}

        {isAllShown && (
          <button
            className={Styles.hideBtn}
            onClick={handleHideAll}
            type="button"
          >
            Hide all
          </button>
        )}
      </div>

      <BackToTop />
    </>
  );
};