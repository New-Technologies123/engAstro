// Documents.tsx
import { useMemo, useState, useRef, useEffect } from 'react';
import {
  documentsData,
  type TDocument,
  type TDocumentCategory,
} from './documents.data';
import Styles from './documents.module.scss';
import { Title } from '../../ui/title/Title';

// ============================================================
// Icons
// ============================================================

const SearchIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-4-4" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

// ============================================================
// Back icon
// ============================================================

const BackIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

const OpenIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 5h5v5" />
    <path d="M19 5 10 14" />
    <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
  </svg>
);

const RightArrowIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// ============================================================
// All categories button
// ============================================================

const AllCategoriesButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className={Styles.allCategoriesButton}
      onClick={onClick}
      type="button"
    >
      <span className={Styles.allCategoriesIcon}>
        <BackIcon />
      </span>

      <span className={Styles.allCategoriesText}>
        All categories
      </span>
    </button>
  );
};

// ============================================================
// Document card
// ============================================================

const DocumentCard = ({
  doc,
  index,
  category,
  categoryIndex,
}: {
  doc: TDocument;
  index: number;
  category?: TDocumentCategory;
  categoryIndex?: number;
}) => {
  const handleOpen = () => {
    window.open(doc.fileUrl, '_blank');
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();

    const link = document.createElement('a');
    link.href = doc.fileUrl;
    link.download = doc.fileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const extension =
    doc.fileName.split('.').pop()?.toUpperCase() || 'FILE';

  return (
    <article
      className={Styles.documentCard}
      style={{ animationDelay: `${index * 0.045} s` }}
    >
      {category && categoryIndex !== undefined && (
        <div className={Styles.documentCategory}>
          <span className={Styles.documentCategoryNumber}>
            {categoryIndex}
          </span>

          <span className={Styles.documentCategoryName}>
            {category.title}
          </span>
        </div>
      )}

      <div className={Styles.documentTop}>
        <span className={Styles.fileType}>{extension}</span>

        {doc.fileSize && (
          <span className={Styles.fileSize}>
            {doc.fileSize}
          </span>
        )}
      </div>

      <div className={Styles.documentMain}>
        <h3 className={Styles.documentTitle}>
          {doc.title}
        </h3>

        <div className={Styles.documentLine} />
      </div>

      <div className={Styles.documentActions}>
        <button
          className={Styles.openButton}
          onClick={handleOpen}
          type="button"
        >
          <OpenIcon />
          <span>Open</span>
        </button>

        <button
          className={Styles.downloadButton}
          onClick={handleDownload}
          type="button"
          aria-label={`Download ${doc.title} `}
        >
          <DownloadIcon />
        </button>
      </div>
    </article>
  );
};

// ============================================================
// Category card
// ============================================================

const CategoryCard = ({
  category,
  index,
  onClick,
}: {
  category: TDocumentCategory;
  index: number;
  onClick: () => void;
}) => {
  const documentCount = category.documents.length;

  return (
    <button
      className={`${Styles.categoryCard} ${Styles[`category${index + 1}`]} `}
      onClick={onClick}
      type="button"
    >
      <div className={Styles.categoryGlow} />

      <div className={Styles.categoryNumber}>
        {index + 1}
      </div>

      <div className={Styles.categoryContent}>
        <h2 className={Styles.categoryTitle}>
          {category.title}
        </h2>

        <p className={Styles.categoryDescription}>
          {category.description}
        </p>

        <div className={Styles.categoryBottom}>
          <span className={Styles.categoryCount}>
            {documentCount}{' '}
            {documentCount === 1
              ? 'document'
              : 'documents'}
          </span>

          <span className={Styles.categoryOpen}>
            <RightArrowIcon />
          </span>
        </div>
      </div>
    </button>
  );
};

// ============================================================
// Main component
// ============================================================

export const Documents = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<TDocumentCategory | null>(null);

  const [search, setSearch] = useState('');
  const [isSearchOpen, setIsSearchOpen] =
    useState(false);

  const categoriesSectionRef =
    useRef<HTMLDivElement>(null);

  const searchInputRef =
    useRef<HTMLInputElement>(null);

  const searchWrapperRef =
    useRef<HTMLDivElement>(null);

  const totalDocs = documentsData.reduce(
    (acc, category) =>
      acc + category.documents.length,
    0
  );

  const totalCategories =
    documentsData.length;

  // ============================================================
  // Open search
  // ============================================================

  const handleSearchOpen = () => {
    setIsSearchOpen(true);

    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);
  };

  // ============================================================
  // Close search
  // ============================================================

  const handleSearchClose = () => {
    if (!search) {
      setSearch('');
      setIsSearchOpen(false);
    }
  };

  // ============================================================
  // Close search when clicking outside
  // ============================================================

  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent | TouchEvent
    ) => {
      if (!isSearchOpen || search) return;

      const target =
        event.target as HTMLElement;

      const isClickInsideSearch =
        searchWrapperRef.current?.contains(target) ||
        target.closest(
          `.${Styles.searchWrapper} `
        ) ||
        target.closest(
          `.${Styles.searchBox} `
        ) ||
        target.closest(
          `.${Styles.mobileSearchButton} `
        );

      if (!isClickInsideSearch) {
        setIsSearchOpen(false);
      }
    };

    if (window.innerWidth <= 720) {
      document.addEventListener(
        'mousedown',
        handleClickOutside
      );

      document.addEventListener(
        'touchstart',
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );

      document.removeEventListener(
        'touchstart',
        handleClickOutside
      );
    };
  }, [isSearchOpen, search]);

  // ============================================================
  // Close search when switching to desktop
  // ============================================================

  useEffect(() => {
    const handleResize = () => {
      if (
        window.innerWidth > 720 &&
        isSearchOpen
      ) {
        setIsSearchOpen(false);
        setSearch('');
      }
    };

    window.addEventListener(
      'resize',
      handleResize
    );

    return () =>
      window.removeEventListener(
        'resize',
        handleResize
      );
  }, [isSearchOpen]);

  // ============================================================
  // URL category
  // ============================================================

  useEffect(() => {
    const params =
      new URLSearchParams(
        window.location.search
      );

    const categoryParam =
      params.get('category');

    if (categoryParam) {
      const foundCategory =
        documentsData.find(
          (cat) =>
            cat.id === categoryParam
        );

      if (foundCategory) {
        setSelectedCategory(
          foundCategory
        );

        setSearch('');

        setTimeout(() => {
          const header =
            document.querySelector(
              `.${Styles.selectedCategoryHeader} `
            );

          if (header) {
            const headerHeight = 100;

            const rect =
              header.getBoundingClientRect();

            const absoluteTop =
              rect.top +
              window.pageYOffset -
              headerHeight;

            window.scrollTo({
              top: absoluteTop,
              behavior: 'smooth',
            });
          }
        }, 200);
      }
    }
  }, []);

  // ============================================================
  // Search documents
  // ============================================================

  const searchResults = useMemo(() => {
    const query =
      search.trim().toLowerCase();

    if (!query) {
      return [];
    }

    const results: {
      doc: TDocument;
      category: TDocumentCategory;
      categoryIndex: number;
    }[] = [];

    documentsData.forEach(
      (category, categoryIndex) => {
        category.documents.forEach(
          (doc) => {
            const titleMatch =
              doc.title
                .toLowerCase()
                .includes(query);

            const fileMatch =
              doc.fileName
                .toLowerCase()
                .includes(query);

            const categoryMatch =
              category.title
                .toLowerCase()
                .includes(query);

            const descriptionMatch =
              category.description
                .toLowerCase()
                .includes(query);

            if (
              titleMatch ||
              fileMatch ||
              categoryMatch ||
              descriptionMatch
            ) {
              results.push({
                doc,
                category,
                categoryIndex:
                  categoryIndex + 1,
              });
            }
          }
        );
      }
    );

    return results;
  }, [search]);

  // ============================================================
  // Open category
  // ============================================================

  const handleCategoryOpen = (
    category: TDocumentCategory
  ) => {
    setSearch('');
    setIsSearchOpen(false);
    setSelectedCategory(category);

    const url = new URL(
      window.location.href
    );

    url.searchParams.set(
      'category',
      category.id
    );

    window.history.pushState(
      {},
      '',
      url.toString()
    );

    if (categoriesSectionRef.current) {
      const headerHeight = 120;

      const rect =
        categoriesSectionRef.current.getBoundingClientRect();

      const absoluteTop =
        rect.top +
        window.pageYOffset -
        headerHeight;

      window.scrollTo({
        top: absoluteTop,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  // ============================================================
  // Back
  // ============================================================

  const handleBack = () => {
    setSelectedCategory(null);
    setSearch('');
    setIsSearchOpen(false);

    const url = new URL(
      window.location.href
    );

    url.searchParams.delete(
      'category'
    );

    window.history.pushState(
      {},
      '',
      url.toString()
    );

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // ============================================================
  // Search change
  // ============================================================

  const handleSearchChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch(e.target.value);
  };

  // ============================================================
  // Escape key
  // ============================================================

  useEffect(() => {
    const handleKeyDown = (
      e: KeyboardEvent
    ) => {
      if (
        e.key === 'Escape' &&
        isSearchOpen
      ) {
        if (!search) {
          setIsSearchOpen(false);
        }
      }
    };

    document.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () =>
      document.removeEventListener(
        'keydown',
        handleKeyDown
      );
  }, [isSearchOpen, search]);

  // ============================================================
  // JSX
  // ============================================================

  return (
    <main className={Styles.wrapper}>
      <Title text="Documents" />

      <header className={Styles.header}>
        <div className={Styles.headerTop}>
          <div className={Styles.brand}>
            <div className={Styles.brandMark}>
              <span />
              <span />
              <span />
            </div>

            <span className={Styles.brandText}>
              Documentation Center
            </span>
          </div>

          <div className={Styles.headerStats}>
            <span>
              {totalDocs} files
            </span>

            <i />

            <span>
              {totalCategories} categories
            </span>
          </div>
        </div>

        {/* ====================================================
            SEARCH + HERO
        ==================================================== */}

        <div
          ref={searchWrapperRef}
          className={`${Styles.searchWrapper} ${isSearchOpen
            ? Styles.searchWrapperOpen
            : ''
            } `}
        >
          {/* Search button */}

          <button
            className={
              Styles.mobileSearchButton
            }
            onClick={handleSearchOpen}
            type="button"
            aria-label="Open search"
            aria-expanded={
              isSearchOpen
            }
          >
            <SearchIcon />
          </button>

          {/* Search field */}

          <div
            className={`${Styles.searchBox} ${isSearchOpen
              ? Styles.searchBoxOpen
              : ''
              } `}
          >
            <SearchIcon />

            <input
              ref={searchInputRef}
              type="text"
              value={search}
              onChange={
                handleSearchChange
              }
              placeholder="Search documents..."
              aria-label="Search documents"
            />

            {(search ||
              isSearchOpen) && (
                <button
                  className={
                    Styles.clearSearch
                  }
                  onClick={() => {
                    if (search) {
                      setSearch('');
                    } else {
                      setIsSearchOpen(
                        false
                      );
                    }
                  }}
                  type="button"
                  aria-label={
                    search
                      ? 'Clear search'
                      : 'Close search'
                  }
                >
                  <CloseIcon />
                </button>
              )}
          </div>

          {/* Hero text */}

          <div className={Styles.heroText}>
            <p
              className={
                Styles.pageDescription
              }
            >
              All essential documents are
              available in one convenient
              place.
            </p>
          </div>
        </div>
      </header>

      {/* ====================================================
          SEARCH RESULTS
      ==================================================== */}

      {search && (
        <section
          className={Styles.searchResults}
        >
          <div
            className={
              Styles.sectionHeader
            }
          >
            <div>
              <span
                className={
                  Styles.sectionEyebrow
                }
              >
                Search results
              </span>

              <h2
                className={
                  Styles.sectionTitle
                }
              >
                Documents found (
                {searchResults.length})
              </h2>
            </div>
          </div>

          {searchResults.length > 0 ? (
            <div
              className={
                Styles.documentsGrid
              }
            >
              {searchResults.map(
                ({
                  doc,
                  category,
                  categoryIndex,
                }, index) => (
                  <DocumentCard
                    key={`${category.id} -${doc.id} `}
                    doc={doc}
                    index={index}
                    category={category}
                    categoryIndex={
                      categoryIndex
                    }
                  />
                )
              )}
            </div>
          ) : (
            <div
              className={Styles.noResults}
            >
              <div
                className={
                  Styles.noResultsIcon
                }
              >
                🔍
              </div>

              <h3>
                No documents found
              </h3>

              <p>
                Try changing your search
                query.
              </p>
            </div>
          )}
        </section>
      )}

      {/* ====================================================
          CATEGORY VIEW
      ==================================================== */}

      {!search &&
        !selectedCategory && (
          <section
            className={
              Styles.categoriesSection
            }
            ref={categoriesSectionRef}
          >
            <div
              className={
                Styles.sectionHeader
              }
            >
              <div>
                <span
                  className={
                    Styles.sectionEyebrow
                  }
                >
                  Library
                </span>

                <h2
                  className={
                    Styles.sectionTitle
                  }
                >
                  Document categories
                </h2>
              </div>

              <span
                className={
                  Styles.sectionCount
                }
              >
                {totalCategories}
              </span>
            </div>

            <div
              className={
                Styles.categoriesGrid
              }
            >
              {documentsData.map(
                (category, index) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    index={index}
                    onClick={() =>
                      handleCategoryOpen(
                        category
                      )
                    }
                  />
                )
              )}
            </div>
          </section>
        )}

      {/* ====================================================
          DOCUMENTS OF CATEGORY
      ==================================================== */}

      {!search &&
        selectedCategory && (
          <section
            className={Styles.categoryView}
          >
            <AllCategoriesButton
              onClick={handleBack}
            />

            <div
              className={
                Styles.selectedCategoryHeader
              }
            >
              <div>
                <span
                  className={
                    Styles.sectionEyebrow
                  }
                >
                  Category
                </span>

                <h2
                  className={
                    Styles.selectedCategoryTitle
                  }
                >
                  {selectedCategory.title}
                </h2>

                <p
                  className={
                    Styles.selectedCategoryDescription
                  }
                >
                  {
                    selectedCategory.description
                  }
                </p>
              </div>

              <div
                className={
                  Styles.selectedCategoryCount
                }
              >
                <strong>
                  {
                    selectedCategory
                      .documents.length
                  }
                </strong>

                <span>
                  files
                </span>
              </div>
            </div>

            <div
              className={
                Styles.documentsGrid
              }
            >
              {selectedCategory.documents.map(
                (doc, index) => (
                  <DocumentCard
                    key={doc.id}
                    doc={doc}
                    index={index}
                  />
                )
              )}
            </div>
          </section>
        )}
    </main>
  );
};