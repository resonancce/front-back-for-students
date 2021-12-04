import React from 'react'
import { useSelector } from "react-redux";
import JobsContainer from "./components/JobsContainer";

import './mainPage.css'

const MainPageContainer = () => {
    const { token, userName } = useSelector((state) => state.user)

    return (
        <div className="mainContainer">
            <h1>
                Hello
                {userName ? `, ${userName}` : ''}
            </h1>
            {!token && (
                <h3>Чтобы видеть актуальные вакансии пожалуйста авторизируйтесь</h3>
            )}

            {token && <JobsContainer />}
        </div>
    )
}

export default MainPageContainer