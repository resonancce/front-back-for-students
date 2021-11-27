import React from 'react'
import { useSelector } from "react-redux";
import JobsContainer from "./components/JobsContainer";

const MainPageContainer = () => {
    const { token, userName } = useSelector((state) => state.user)

    return (
        <div>
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