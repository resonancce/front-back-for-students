import React from 'react'
import { useSelector } from "react-redux";
import JobsContainer from "./components/JobsContainer";

import './mainPage.css'
import { CarsContainer } from './components/CarsContainer'

const MainPageContainer = () => {
    return (
        <div className="mainContainer">
          <CarsContainer />
        </div>
    )
}

export default MainPageContainer