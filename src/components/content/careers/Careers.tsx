import Styles from './careers.module.scss';
import { Vacancy } from '../../ui/vacancy/Vacancy';
import { useState } from 'react';
import { Title } from '../../ui/title/Title';
import { useEffect } from 'react';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

type TCareers = 'vacancy1' | 'vacancy2' | 'vacancy3' | 'vacancy4' | 'vacancy5' | 'vacancy6' 
 | 'vacancy7' | 'vacancy8' | 'vacancy9' | 'vacancy10' | 'vacancy11' | 'vacancy12' | 'vacancy13'
 | 'vacancy14' | 'vacancy15' | 'vacancy16' | 'vacancy17' | 'vacancy18' | 'vacancy19'
 | 'vacancy20' | 'vacancy21' | 'vacancy22' | 'vacancy23';

export const Careers = () => {

    const vacancyLinks: Record<TCareers, string> = {
        vacancy1: "https://ufa.hh.ru/vacancy/127851026?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy2: "https://ufa.hh.ru/vacancy/127293929?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy3: "https://ufa.hh.ru/vacancy/126472421?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy4: "https://ufa.hh.ru/vacancy/124368711?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy5: "https://ufa.hh.ru/vacancy/127526931?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy6: "https://ufa.hh.ru/vacancy/127977525?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy7: "https://ufa.hh.ru/vacancy/127184615?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy8: "",
        vacancy9: "https://ufa.hh.ru/vacancy/125148681?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy10: "https://ufa.hh.ru/vacancy/127557628?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy11: "",
        vacancy12: "https://ufa.hh.ru/vacancy/127910130?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy13: "https://ufa.hh.ru/vacancy/125148803?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy14: "https://ufa.hh.ru/vacancy/126174218?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy15: "https://ufa.hh.ru/vacancy/127875208?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy16: "https://ufa.hh.ru/vacancy/127913812?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy17: "https://ufa.hh.ru/vacancy/127392204?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",        
        vacancy18: "https://ufa.hh.ru/vacancy/127391976?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy19: "https://ufa.hh.ru/vacancy/127392338?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy20: "https://ufa.hh.ru/vacancy/127389162?hhtmFromLabel=employer_vacancy_tab&hhtmFrom=employer",
        vacancy21: "",
        vacancy22: "",
        vacancy23: "",
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
                                    header="Lawyer"
                                    title="Work experience: 3-6 years"
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
                                    header="Deputy Chief Accountant"
                                    title="Work experience: 3-6 years"
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy10, "_blank")}
                                />
                            </div>
                        </div>
                        <div className={Styles.vacancies}>
                            <p>16/2, Blagovarskaya St., Ufa</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header='Head of the Design Department'
                                    title='Work experience: 3-6 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy13, "_blank")}
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
                                    header="NDT inspector"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy12, "_blank")}
                                />
                                <Vacancy
                                    header="Plasma cutter"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy15, "_blank")}
                                />
                                <Vacancy
                                    header='Industrial Pipelines Welder'
                                    title='Work experience: 1-3 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy3, "_blank")}
                                />
                                <Vacancy
                                    header="Metal painter"
                                    title="Work experience: 1-3 years"
                                    experience="Full employment"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy5, "_blank")}
                                />                                
                                <Vacancy
                                    header="Leading Welding Engineer"
                                    title="Work experience: not required"
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy16, "_blank")}
                                />
                                <Vacancy
                                    header='Instrumentation and Automation Technician'
                                    title='Work experience: 1-3 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy4, "_blank")}
                                />
                                <Vacancy
                                    header='Lead engineer of commissioning and instrumentation and control systems'
                                    title='Work experience: 3-6 years'
                                    experience="Full employment"
                                    employmentType='Schedule: 5/2'
                                    onClick={() => window.open(vacancyLinks.vacancy2, "_blank")}
                                />
                            </div> 
                        </div>
                        <div className={Styles.vacancies}>
                            <p>Watch</p>
                            <div className={Styles.team}>
                                <Vacancy
                                    header="TT installer"
                                    title="Work experience: 1-3 years"
                                    experience="30-shift shift"
                                    employmentType="Schedule: 6/1"
                                    onClick={() => window.open(vacancyLinks.vacancy17, "_blank")}
                                />
                                <Vacancy
                                    header="Crane-manipulator operator"
                                    title="Work experience: 1-3 years"
                                    experience="30-shift shift"
                                    employmentType="Schedule: 6/1"
                                    onClick={() => window.open(vacancyLinks.vacancy18, "_blank")}
                                />                                
                                <Vacancy
                                    header="Driver category C"
                                    title="Work experience: 1-3 years"
                                    experience="30-shift shift"
                                    employmentType="Schedule: 6/1"
                                    onClick={() => window.open(vacancyLinks.vacancy20, "_blank")}
                                />
                                <Vacancy
                                    header="Crane-manipulator operator"
                                    title="Work experience: not required"
                                    experience="30-shift shift"
                                    employmentType="Schedule: 5/2"
                                    onClick={() => window.open(vacancyLinks.vacancy1, "_blank")}
                                />
                                <Vacancy
                                    header="Instrumentation and automation fitter"
                                    title="Work experience: 1-3 years"
                                    experience="30-shift shift"
                                    employmentType="Schedule: 6/1"
                                    onClick={() => window.open(vacancyLinks.vacancy19, "_blank")}
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