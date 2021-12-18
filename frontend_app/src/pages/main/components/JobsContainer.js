import React, { memo } from 'react'

import umbrella from '../../../assets/companyIcons/umbrella.png'
import './jobs.css'
import CardVacancyComponent from "../../../components/CardVacancy/CardVacancyComponent";

const vacancies = [{
    id: 'id',
    iconCompany: umbrella,
    nameCompany: 'Umbrella',
    dateJob: new Date().toLocaleDateString(),
    nameJob: 'Junior разработчик',
    descriptionJob: '........ (описание вакансии)........',
    experience: '1 год',
    skills: ['html', 'css', 'react', 'redux']
}, {
    id: 'id',
    iconCompany: umbrella,
    nameCompany: 'Umbrella',
    dateJob: new Date().toLocaleDateString(),
    nameJob: 'Junior разработчик',
    descriptionJob: '........ (описание вакансии)........',
    experience: '1 год',
    skills: ['html', 'css', 'react', 'redux']
}]

const JobsContainer = () => {


    return (
        <div className="jobsContainer">
            <h2>
                Список актуальных вакансий
            </h2>

            <div className="vacanciesContainer">
                {vacancies.length !== 0 && (
                    vacancies.map((vacancy) => (
                        <CardVacancyComponent
                            key={vacancy.id}
                            {...vacancy}
                        />
                    ))
                )}
            </div>


            {/*<div className="jobItem">*/}
            {/*    <div className="jobTitleContainer">*/}
            {/*        <h1 className="jobTitle">{jobs.nameCompany}</h1>*/}
            {/*        <img className="jobImage" src={jobs.iconCompany} alt="company-icon"/>*/}
            {/*        <div className="jobDateContainer">*/}
            {/*            <p>Дата размещения</p>*/}
            {/*            <p className="jobDateTitle">*/}
            {/*                {jobs.dateJob}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <h2>{jobs.nameJob}</h2>*/}
            {/*    <div className="jobContentContainer">*/}
            {/*        <p>Необходимые скилы</p>*/}

            {/*        <h3>{`Опыт - ${jobs.experience}`}</h3>*/}
            {/*        <p>*/}
            {/*            {jobs.descriptionJob}*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default memo(JobsContainer)