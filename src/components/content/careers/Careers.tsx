import Styles from './careers.module.scss';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { useState } from 'react';
import { Title } from '../../ui/title/Title';
import { useEffect } from 'react';

type TCareers = 'vacancy1' | 'vacancy2' | 'vacancy3' | 'vacancy4' | 'vacancy5'
    | 'vacancy6' | 'vacancy7' | 'vacancy8' | 'vacancy9' | 'vacancy10';

export const Careers = () => {

    const vacancyLinks: Record<TCareers, string> = {
        vacancy1: "https://ufa.hh.ru/vacancy/133444243?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy2: "https://ufa.hh.ru/vacancy/133031609?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy3: "https://ufa.hh.ru/vacancy/133465029?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy4: "https://ufa.hh.ru/vacancy/133745936?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy5: "https://ufa.hh.ru/vacancy/133580855?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy6: "https://ufa.hh.ru/vacancy/133694211?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy7: "https://ufa.hh.ru/vacancy/133693629?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy8: "https://ufa.hh.ru/vacancy/133640043?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy9: "https://ufa.hh.ru/vacancy/133581225?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy10: "https://ufa.hh.ru/vacancy/133582045?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
    };

    const [typeLayoutBackOpen, setTypeLayoutBackOpen] = useState<TCareers | null>(null);
    
    useEffect(() => {
        setTypeLayoutBackOpen(() => {
            const queryParams = new URLSearchParams(window.location.search);
            const typeFromQuery = queryParams.get('type');
            return typeFromQuery ? (typeFromQuery as TCareers) : null;
        });
    }, []);
    
    const onBack = () => {
        setTypeLayoutBackOpen(null);
    
        const newUrl = `${window.location.origin}${window.location.pathname}`;
        window.history.pushState({}, '', newUrl);
    };
    
    const onClickCard = (typeProduct: TCareers) => {
        setTypeLayoutBackOpen(typeProduct);
    
        const newUrl = `${window.location.origin}${window.location.pathname}?type=${typeProduct}`;
        window.history.pushState({}, '', newUrl);
    };

    return (
        <>
            {typeLayoutBackOpen === null && (
                <>
                    <Title text="Open vacancies"></Title>
                    <div className={Styles.ramca}>                                           
                        <div className={Styles.vacancies}>
                            <p>Zaki Validi 32/2</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header="Chief accountant"
                                    title="Work experience: 3-6 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy2, "_blank")}
                                />
                                <Vacancy
                                    header="Deputy Chief Accountant"
                                    title="Work experience: 3-6 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy8, "_blank")}
                                />
                            </div>
                        </div>
                        <div className={Styles.vacancies}>
                            <p>Blagovarskaya 16/2</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header="TT installer"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy1, "_blank")}
                                />
                                <Vacancy
                                    header="Project Manager"
                                    title="Work experience: 3-6 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy3, "_blank")}
                                />
                                <Vacancy
                                    header="Mechanic"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy4, "_blank")}
                                />
                                <Vacancy
                                    header="Electric and gas welder TT"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy5, "_blank")}
                                />
                                <Vacancy
                                    header="Turner"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy6, "_blank")}
                                />
                                <Vacancy
                                    header="Occupational Safety Specialist"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy7, "_blank")}
                                />
                                <Vacancy
                                    header="Lead engineer of commissioning and instrumentation and control systems"
                                    title="Work experience: 3-6 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy9, "_blank")}
                                />
                                <Vacancy
                                    header="Metal painter"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy10, "_blank")}
                                />
                            </div>
                        </div>
                        {/* <div className={Styles.vacancies}>
                            <p>Вахта</p>
                            <div className={Styles.team}>
                                
                            </div>
                        </div> */}
                    </div>
                </> 
            )}
        </>
    );
};