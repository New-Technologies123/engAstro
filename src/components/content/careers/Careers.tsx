import Styles from './careers.module.scss';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { useState } from 'react';
import { Title } from '../../ui/title/Title';
import { useEffect } from 'react';

type TCareers = 'vacancy1' | 'vacancy2' | 'vacancy3' | 'vacancy4' | 'vacancy5'
    | 'vacancy6' | 'vacancy7' | 'vacancy8' | 'vacancy9' | 'vacancy10' | 'vacancy11' ;

export const Careers = () => {

    const vacancyLinks: Record<TCareers, string> = {
        vacancy1: "https://ufa.hh.ru/vacancy/134497211?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy2: "https://ufa.hh.ru/vacancy/134939247?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy3: "https://ufa.hh.ru/vacancy/134866807?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy4: "https://ufa.hh.ru/vacancy/134672260?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy5: "https://ufa.hh.ru/vacancy/134638985?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy6: "https://ufa.hh.ru/vacancy/134647244?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy7: "https://ufa.hh.ru/vacancy/134715331?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy8: "https://ufa.hh.ru/vacancy/134639015?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy9: "https://ufa.hh.ru/vacancy/135137776?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy10: "",
        vacancy11: "",
    };

    const [typeLayoutBackOpen] = useState<TCareers | null>(null);

    return (
        <>
            {typeLayoutBackOpen === null && (
                <>
                    <Title text="Open Positions"></Title>
                    <div className={Styles.ramca}>
                        <div className={Styles.vacancies}>
                            <p>Zaki Validi 32/2</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header="Chief Accountant"
                                    title="Experience: 3–6 years"
                                    experience="Full-time"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy2, "_blank")}
                                />
                                <Vacancy
                                    header="PTO Engineer"
                                    title="Experience: 1–3 years"
                                    experience="Full-time"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy6, "_blank")}
                                />
                                <Vacancy
                                    header="Design Engineer"
                                    title="Experience: 1–3 years"
                                    experience="Full-time"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy7, "_blank")}
                                />
                            </div>
                        </div>
                        <div className={Styles.vacancies}>
                            <p>Blagovarskaya 16/2</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header="TT Installer"
                                    title="Experience: 1–3 years"
                                    experience="Full-time"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy1, "_blank")}
                                />
                                <Vacancy
                                    header="Electric Gas Welder TT"
                                    title="Experience: 1–3 years"
                                    experience="Full-time"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy5, "_blank")}
                                />                                
                                <Vacancy
                                    header="Metal Painter"
                                    title="Experience: 1–3 years"
                                    experience="Full-time"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy8, "_blank")}
                                />                                
                                <Vacancy
                                    header="Deputy Chief Accountant"
                                    title="Experience: 3–6 years"
                                    experience="Full-time"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy3, "_blank")}
                                />
                                <Vacancy
                                    header="Lead Engineer for Commissioning of Instrumentation and Automation"
                                    title="Experience: 3–6 years"
                                    experience="Full-time"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy4, "_blank")}
                                />
                                <Vacancy
                                    header="Mechanic-Fitter for Truck Transport"
                                    title="Experience: 1–3 years"
                                    experience="Full-time"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy9, "_blank")}
                                />
                            </div>
                        </div>
                        {/* <div className={Styles.vacancies}>
                            <p>Shift Work</p>
                            <div className={Styles.team}>                                
                            </div>
                        </div> */}
                    </div>
                </> 
            )}
        </>
    );
};