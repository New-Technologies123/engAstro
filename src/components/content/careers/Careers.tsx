import Styles from './careers.module.scss';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { useState } from 'react';
import { Title } from '../../ui/title/Title';
import { useEffect } from 'react';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

type TCareers = 'vacancy1' | 'vacancy2' | 'vacancy3' | 'vacancy4' | 'vacancy5' | 'vacancy6' 
 | 'vacancy7' | 'vacancy8' | 'vacancy9' | 'vacancy10' | 'vacancy11' | 'vacancy12' | 'vacancy13'
 | 'vacancy14' | 'vacancy15' | 'vacancy16' | 'vacancy17' | 'vacancy18';

export const Careers = () => {

    const vacancyLinks: Record<TCareers, string> = {
        vacancy1: "https://ufa.hh.ru/vacancy/126589484?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy2: "https://ufa.hh.ru/vacancy/126915229?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy3: "https://ufa.hh.ru/vacancy/126472421?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy4: "https://ufa.hh.ru/vacancy/124368711?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy5: "https://ufa.hh.ru/vacancy/126695188?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy6: "https://ufa.hh.ru/vacancy/126473582?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy7: "https://ufa.hh.ru/vacancy/122969761?hhtmFrom=vacancy_search_list",
        vacancy8: "https://ufa.hh.ru/vacancy/126589136?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy9: "https://ufa.hh.ru/vacancy/125148681?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy10: "https://ufa.hh.ru/vacancy/124588968?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy11: "https://ufa.hh.ru/vacancy/126187855?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy12: "https://ufa.hh.ru/vacancy/126589206?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy13: "https://ufa.hh.ru/vacancy/125148803?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy14: "https://ufa.hh.ru/vacancy/126174218?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy15: "https://ufa.hh.ru/vacancy/125460589?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy16: "https://ufa.hh.ru/vacancy/126174382?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy17: "",        
        vacancy18: "",
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
                    <Title text='Open vacancies'></Title>
                    <div className={Styles.ramca}>                                           
                        <div className={Styles.vacancies}>
                            <p>32/2, Zeki Velidi St., Ufa, Republic of Bashkortostan</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header='Chief metrologist'
                                    title='Work experience: more than 6 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy7, "_blank")}
                                />                                
                                <Vacancy
                                    header="Design engineer"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy6, "_blank")}
                                />
                                <Vacancy
                                    header="Recruitment Specialist"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy5, "_blank")}
                                />
                                <Vacancy
                                    header="Security specialist"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy1, "_blank")}
                                />
                                <Vacancy
                                    header="Secretary/Assistant to the Manager"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment" 
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy8, "_blank")}
                                />
                                <Vacancy
                                    header="Leading Engineer of the Production and Technical Department"
                                    title="Work experience: 3-6 years"
                                    experience="Project or one-time assignment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy2, "_blank")}
                                />
                            </div>
                        </div>
                        <div className={Styles.vacancies}>
                            <p>16/2, Blagovarskaya St., Ufa</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header="Driver with category C, E"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy12, "_blank")}
                                />
                                <Vacancy
                                    header='Head of the Design Department'
                                    title='Work experience: 3-6 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy13, "_blank")}
                                />
                                
                                <Vacancy
                                    header='Quality Control Inspector'
                                    title='Work experience: 1-3 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy15, "_blank")}
                                />
                                <Vacancy
                                    header='CNC Machine Adjuster'
                                    title='Work experience: 1-3 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy9, "_blank")}
                                />
                                <Vacancy
                                    header='Industrial Pipefitter'
                                    title='Work experience: 1-3 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy14, "_blank")}
                                />                                
                                <Vacancy
                                    header='Metal Painter'
                                    title='Work experience: 1-3 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy16, "_blank")}
                                />
                                <Vacancy
                                    header='Loader'
                                    title='Work experience: not required'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy11, "_blank")}
                                />
                                <Vacancy
                                    header='Industrial Pipelines Welder'
                                    title='Work experience: 1-3 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy3, "_blank")}
                                />
                                <Vacancy
                                    header='Instrumentation and Automation Technician'
                                    title='Work experience: 1-3 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy4, "_blank")}
                                />
                                <Vacancy
                                    header="Deputy Chief Accountant"
                                    title="Work experience: 3-6 years"
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy10, "_blank")}
                                />
                            </div> 
                        </div>
                    </div>
                </>
            )}
            <BackToTop/>
        </>
    );
};