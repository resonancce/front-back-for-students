import React from 'react'
import { useSelector } from "react-redux";
import JobsContainer from "./components/JobsContainer";

import './mainPage.css'
import { CarsContainer } from './components/CarsContainer'

const MainPageContainer = () => {
    const { token, userName } = useSelector((state) => state.user)

    return (
        <div className="mainContainer">
            <h1>
                Hello
                {userName ? `, ${userName}` : ''}
            </h1>
          <CarsContainer />
        </div>
    )
}

export default MainPageContainer