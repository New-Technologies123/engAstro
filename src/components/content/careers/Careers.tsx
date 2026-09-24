import Styles from './careers.module.scss';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { useMemo, useState } from 'react';

type TCareers =
    | 'vacancy1'
    | 'vacancy2'
    | 'vacancy3'
    | 'vacancy4'
    | 'vacancy5'
    | 'vacancy6'
    | 'vacancy7'
    | 'vacancy8'
    | 'vacancy9'
    | 'vacancy10'
    | 'vacancy11'
    | 'vacancy12'
    | 'vacancy13'
    | 'vacancy14'
    | 'vacancy15'
    | 'vacancy16'
    | 'vacancy17'
    | 'vacancy18'
    | 'vacancy19'
    | 'vacancy20'
    | 'vacancy21'
    | 'vacancy22'
    | 'vacancy23'
    | 'vacancy24';

type VacancyType = 'ufa' | 'shift';

type VacancyData = {
    id: TCareers;
    title: string;
    experience: string;
    employment: string;
    schedule: string;
    type: VacancyType;
    searchText: string;
};

const vacancies: VacancyData[] = [
    // =========================================================
    // UFA
    // =========================================================

    {
        id: 'vacancy10',
        title: 'Lead Economist',
        experience: 'Experience: 3–6 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText: 'lead economist ufa economics',
    },
    {
        id: 'vacancy3',
        title: 'Instrumentation & Automation Commissioning Engineer',
        experience: 'Experience: 3–6 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText:
            'commissioning engineer instrumentation automation ufa engineer',
    },
    {
        id: 'vacancy11',
        title: 'Process Engineer',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText: 'process engineer ufa production',
    },
    {
        id: 'vacancy15',
        title: 'Production Worker',
        experience: 'Experience: not required',
        employment: 'Part-time',
        schedule: 'Schedule: 5/2 and other options',
        type: 'ufa',
        searchText: 'production worker ufa worker',
    },
    {
        id: 'vacancy22',
        title: 'Design Engineer',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText: 'design engineer ufa engineering',
    },
    {
        id: 'vacancy1',
        title: 'Thermal Equipment Installation Technician',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText: 'installation technician ufa installation',
    },
    {
        id: 'vacancy13',
        title: 'Turner / Machinist',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText: 'turner machinist ufa production',
    },
    {
        id: 'vacancy5',
        title: 'Occupational Health and Safety Specialist',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText:
            'occupational health safety specialist ufa hse safety',
    },
    {
        id: 'vacancy17',
        title: 'Industrial Painter',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText: 'industrial painter metal ufa production',
    },
    {
        id: 'vacancy14',
        title: 'Process Engineer',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText: 'process engineer ufa production',
    },
    {
        id: 'vacancy16',
        title: 'Electric and Gas Welder',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText: 'electric gas welder welder ufa production',
    },
    {
        id: 'vacancy7',
        title: 'Quality Control Inspector — Metallurgy',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText:
            'quality control inspector metallurgy ufa quality',
    },
    {
        id: 'vacancy12',
        title: 'Mechanical Assembly Technician',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText:
            'mechanical assembly technician ufa production',
    },
    {
        id: 'vacancy21',
        title: 'Well Dewaxing Operator (Kharampur)',
        experience: 'Experience: 3–6 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText:
            'well dewaxing operator kharampur ufa oil',
    },
    {
        id: 'vacancy2',
        title: 'Estimator Engineer — Tender Department',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText:
            'estimator engineer tender department ufa estimate tender',
    },
    {
        id: 'vacancy18',
        title: 'Team of Welders and Installation Technicians',
        experience: 'Experience: 1–3 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText:
            'team welders installation technicians ufa welding installation',
    },
    {
        id: 'vacancy19',
        title: 'Production Facility Cleaner',
        experience: 'Experience: not required',
        employment: 'Part-time',
        schedule: 'Schedule: 5/2 and other options',
        type: 'ufa',
        searchText:
            'production facility cleaner ufa cleaning',
    },
    {
        id: 'vacancy4',
        title: 'Lead Design Engineer',
        experience: 'Experience: 3–6 years',
        employment: 'Full-time',
        schedule: 'Schedule: 5/2',
        type: 'ufa',
        searchText:
            'lead design engineer ufa engineering',
    },

    // =========================================================
    // SHIFT WORK
    // =========================================================

    {
        id: 'vacancy20',
        title: 'Instrumentation & Automation Supervisor (Surgutneftegas)',
        experience: 'Experience: 1–3 years',
        employment: 'Shift work: 30 or 60 shifts',
        schedule: '',
        type: 'shift',
        searchText:
            'instrumentation automation supervisor surgutneftegas shift surgut',
    },
    {
        id: 'vacancy9',
        title: 'Category C Driver (Kharampur)',
        experience: 'Experience: 1–3 years',
        employment: 'Shift work: 30 or 45 shifts',
        schedule: 'Schedule: 5/2',
        type: 'shift',
        searchText:
            'category c driver kharampur shift',
    },
    {
        id: 'vacancy8',
        title: 'Instrumentation & Automation Technician (Surgut)',
        experience: 'Experience: 1–3 years',
        employment: 'Shift work: 30 shifts',
        schedule: 'Schedule: 6/1',
        type: 'shift',
        searchText:
            'instrumentation automation technician surgut shift',
    },
    {
        id: 'vacancy6',
        title: 'Driver (Category C), Khanty-Mansi Autonomous Okrug',
        experience: 'Experience: 1–3 years',
        employment: 'Shift work: 30 shifts',
        schedule: '',
        type: 'shift',
        searchText:
            'category c driver khmao shift',
    },
    {
        id: 'vacancy23',
        title: 'Category C Driver (Gubkinsky)',
        experience: 'Experience: 1–3 years',
        employment: 'Shift work: 30 shifts',
        schedule: 'Schedule: 6/1',
        type: 'shift',
        searchText:
            'category c driver gubkinsky shift',
    },
    {
        id: 'vacancy24',
        title: 'Well Testing Operator (Gubkinsky)',
        experience: 'Experience: 1–3 years',
        employment: 'Shift work: 30 shifts',
        schedule: 'Schedule: 6/1',
        type: 'shift',
        searchText:
            'well testing operator gubkinsky shift oil',
    },
];

const vacancyLinks: Record<TCareers, string> = {
    vacancy1:
        'https://ufa.hh.ru/vacancy/136382290?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy2:
        'https://ufa.hh.ru/vacancy/136726516?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy3:
        'https://ufa.hh.ru/vacancy/136685420?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy4:
        'https://ufa.hh.ru/vacancy/136602952?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy5:
        'https://ufa.hh.ru/vacancy/136435976?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy6:
        'https://ufa.hh.ru/vacancy/136257799?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy7:
        'https://ufa.hh.ru/vacancy/136825067?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy8:
        'https://ufa.hh.ru/vacancy/136384308?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy9:
        'https://ufa.hh.ru/vacancy/136574447?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy10:
        'https://ufa.hh.ru/vacancy/136428407?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy11:
        'https://ufa.hh.ru/vacancy/135275235?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy12:
        'https://ufa.hh.ru/vacancy/136211327?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy13:
        'https://ufa.hh.ru/vacancy/136488489?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy14:
        'https://ufa.hh.ru/vacancy/135275235?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy15:
        'https://ufa.hh.ru/vacancy/136408407?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy16:
        'https://ufa.hh.ru/vacancy/136365814?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy17:
        'https://ufa.hh.ru/vacancy/135707059?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy18:
        'https://ufa.hh.ru/vacancy/136384517?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy19:
        'https://ufa.hh.ru/vacancy/136617297?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy20:
        'https://ufa.hh.ru/vacancy/136239971?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy21:
        'https://ufa.hh.ru/vacancy/136574407?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy22:
        'https://ufa.hh.ru/vacancy/136238661?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy23:
        'https://ufa.hh.ru/vacancy/136835771?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
    vacancy24:
        'https://ufa.hh.ru/vacancy/136835847?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer',
};

export const Careers = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState<'all' | VacancyType>('all');

    const filteredVacancies = useMemo(() => {
        const query = search.trim().toLowerCase();

        return vacancies.filter((vacancy) => {
            const matchesFilter =
                filter === 'all' || vacancy.type === filter;

            const matchesSearch =
                query === '' ||
                vacancy.searchText.includes(query) ||
                vacancy.title.toLowerCase().includes(query) ||
                vacancy.experience.toLowerCase().includes(query) ||
                vacancy.employment.toLowerCase().includes(query) ||
                vacancy.schedule.toLowerCase().includes(query);

            return matchesFilter && matchesSearch;
        });
    }, [search, filter]);

    const ufaVacancies = filteredVacancies.filter(
        (vacancy) => vacancy.type === 'ufa'
    );

    const shiftVacancies = filteredVacancies.filter(
        (vacancy) => vacancy.type === 'shift'
    );

    const openVacancy = (vacancy: TCareers) => {
        window.open(
            vacancyLinks[vacancy],
            '_blank',
            'noopener,noreferrer'
        );
    };

    const clearSearch = () => {
        setSearch('');
    };

    const resetFilters = () => {
        setSearch('');
        setFilter('all');
    };

    const getVacancyWord = (count: number) => {
        return count === 1 ? 'vacancy' : 'vacancies';
    };

    return (
        <main className={Styles.careers}>

            {/* HERO */}

            <section className={Styles.hero}>
                <div className={Styles.heroInner}>

                    <div className={Styles.heroContent}>
                        <div className={Styles.eyebrow}>
                            <span className={Styles.eyebrowDot} />
                            CAREERS AT NEW TECHNOLOGIES
                        </div>

                        <h1>
                            Work where
                            <br />
                            <span>solutions are created</span>
                        </h1>

                        <p>
                            Join a team that designs, manufactures and
                            implements equipment for the oil and gas
                            industry.
                        </p>

                        <a
                            href="#vacancies"
                            className={Styles.heroButton}
                        >
                            View vacancies
                            <span>↓</span>
                        </a>
                    </div>

                    <div className={Styles.heroVisual}>
                        <div className={Styles.visualCard}>
                            <div className={Styles.visualNumber}>
                                01
                            </div>

                            <div className={Styles.visualLine} />

                            <div className={Styles.visualText}>
                                <strong>Team</strong>

                                <span>
                                    specialists, engineers
                                    and production experts
                                </span>
                            </div>
                        </div>

                        <div className={Styles.heroOrb} />
                    </div>

                </div>
            </section>

            {/* INTRO */}

            <section className={Styles.intro}>
                <div className={Styles.introHeading}>
                    <span className={Styles.sectionLabel}>
                        ABOUT THE TEAM
                    </span>

                    <h2>
                        More than just a job.
                        <br />
                        <span>A shared mission.</span>
                    </h2>
                </div>

                <div className={Styles.introText}>
                    <p>
                        We bring together people who value results,
                        professional growth and the opportunity to see
                        the practical impact of their work.
                    </p>

                    <p>
                        Our team includes specialists from different
                        fields — from engineering and manufacturing
                        to economics, design and management.
                    </p>
                </div>
            </section>

            {/* STATS */}

            <section className={Styles.stats}>
                <div className={Styles.stat}>
                    <strong>20+</strong>
                    <span>
                        years in
                        <br />
                        the industry
                    </span>
                </div>

                <div className={Styles.stat}>
                    <strong>100+</strong>
                    <span>
                        completed
                        <br />
                        projects
                    </span>
                </div>

                <div className={Styles.stat}>
                    <strong>2</strong>
                    <span>
                        employment
                        <br />
                        formats
                    </span>
                </div>

                <div className={Styles.stat}>
                    <strong>24</strong>
                    <span>
                        current
                        <br />
                        vacancies
                    </span>
                </div>
            </section>

            {/* VACANCIES */}

            <section
                className={Styles.vacanciesSection}
                id="vacancies"
            >
                <div className={Styles.sectionHeader}>
                    <div>
                        <span className={Styles.sectionLabel}>
                            VACANCIES
                        </span>

                        <h2>
                            Find your
                            <br />
                            <span>direction</span>
                        </h2>
                    </div>

                    <p>
                        Choose a position you are interested in
                        to view the details and apply.
                    </p>
                </div>

                {/* SEARCH + FILTERS */}

                <div className={Styles.vacancyControls}>
                    <div className={Styles.searchWrapper}>
                        <span
                            className={Styles.searchIcon}
                            aria-hidden="true"
                        >
                            ⌕
                        </span>

                        <input
                            type="search"
                            value={search}
                            onChange={(event) =>
                                setSearch(event.target.value)
                            }
                            placeholder="Search vacancies"
                            aria-label="Search vacancies"
                        />

                        {search && (
                            <button
                                type="button"
                                className={Styles.clearButton}
                                onClick={clearSearch}
                                aria-label="Clear search"
                            >
                                ×
                            </button>
                        )}
                    </div>

                    <div className={Styles.filterWrapper}>
                        <div className={Styles.filters}>
                            <button
                                type="button"
                                className={
                                    filter === 'all'
                                        ? Styles.filterActive
                                        : ''
                                }
                                onClick={() => setFilter('all')}
                            >
                                All
                            </button>

                            <button
                                type="button"
                                className={
                                    filter === 'ufa'
                                        ? Styles.filterActive
                                        : ''
                                }
                                onClick={() => setFilter('ufa')}
                            >
                                Ufa
                            </button>

                            <button
                                type="button"
                                className={
                                    filter === 'shift'
                                        ? Styles.filterActive
                                        : ''
                                }
                                onClick={() => setFilter('shift')}
                            >
                                Shift
                            </button>
                        </div>

                        <span className={Styles.vacancyCount}>
                            {filteredVacancies.length}{' '}
                            {getVacancyWord(
                                filteredVacancies.length
                            )}
                        </span>
                    </div>
                </div>

                {/* EMPTY STATE */}

                {filteredVacancies.length === 0 && (
                    <div className={Styles.emptyState}>
                        <div className={Styles.emptyStateIcon}>
                            ⌕
                        </div>

                        <h3>No vacancies found</h3>

                        <p>
                            Try changing your search query
                            or selecting another filter.
                        </p>

                        <button
                            type="button"
                            onClick={resetFilters}
                        >
                            Reset search
                        </button>
                    </div>
                )}

                {/* UFA */}

                {ufaVacancies.length > 0 && (
                    <div className={Styles.vacancyGroup}>
                        <div className={Styles.groupHeader}>
                            <div>
                                <span className={Styles.groupIndex}>
                                    01
                                </span>

                                <div>
                                    <h3>Work in Ufa</h3>

                                    <p>
                                        Production facility
                                    </p>
                                </div>
                            </div>

                            <span className={Styles.location}>
                                Blagovarskaya 16/2
                            </span>
                        </div>

                        <div className={Styles.team}>
                            {ufaVacancies.map((vacancy) => (
                                <Vacancy
                                    key={vacancy.id}
                                    header={vacancy.title}
                                    title={vacancy.experience}
                                    experience={vacancy.employment}
                                    employmentType={vacancy.schedule}
                                    onClick={() =>
                                        openVacancy(vacancy.id)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* SHIFT */}

                {shiftVacancies.length > 0 && (
                    <div className={Styles.vacancyGroup}>
                        <div className={Styles.groupHeader}>
                            <div>
                                <span className={Styles.groupIndex}>
                                    02
                                </span>

                                <div>
                                    <h3>Shift Work</h3>

                                    <p>
                                        Projects across Russia
                                    </p>
                                </div>
                            </div>

                            <span className={Styles.location}>
                                Shift work
                            </span>
                        </div>

                        <div className={Styles.team}>
                            {shiftVacancies.map((vacancy) => (
                                <Vacancy
                                    key={vacancy.id}
                                    header={vacancy.title}
                                    title={vacancy.experience}
                                    experience={vacancy.employment}
                                    employmentType={vacancy.schedule}
                                    onClick={() =>
                                        openVacancy(vacancy.id)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                )}
            </section>

            {/* CTA */}

            <section className={Styles.cta}>
                <div className={Styles.ctaContent}>

                    <div className={Styles.ctaText}>
                        <span className={Styles.sectionLabel}>
                            DIDN'T FIND A SUITABLE VACANCY?
                        </span>

                        <h2>
                            Perhaps we are looking for
                            <br />
                            <span>you.</span>
                        </h2>

                        <p>
                            Follow our current opportunities
                            and submit your CV through our vacancies.
                        </p>
                    </div>

                    <a
                        href="https://ufa.hh.ru/employer/10682801?hhtmFrom=vacancy&tab=VACANCIES"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={Styles.ctaButton}
                    >
                        <span className={Styles.ctaButtonText}>
                            Go to HH.ru
                        </span>

                        <span className={Styles.ctaButtonIcon}>
                            ↗
                        </span>
                    </a>

                </div>

                <div className={Styles.ctaDecor}>
                    <span>NT</span>
                </div>
            </section>

        </main>
    );
};