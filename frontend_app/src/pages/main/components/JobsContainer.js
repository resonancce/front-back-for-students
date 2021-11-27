import React from 'react'

import umbrella from '../../../assets/companyIcons/umbrella.png'
import './jobs.css'

const jobs = {
    id: 'id',
    iconCompany: umbrella,
    nameCompany: 'Umbrella',
    dateJob: Date().toLocaleString(),
    nameJob: 'Junior разработчик',
    descriptionJob: '........ (описание вакансии)........',
    experience: '1 год',
    skills: ['html', 'css', 'react', 'redux']
}

const JobsContainer = () => {


    return (
        <div className="jobsContainer">
            <h2>
                Список актуальных вакансий
            </h2>

            <div className="jobItem">
                <h1 className="jobTitle">{jobs.nameCompany}</h1>
            </div>
        </div>
    )
}

export default JobsContainer