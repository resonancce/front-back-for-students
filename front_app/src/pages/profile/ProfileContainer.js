import React, {useEffect, useState} from 'react'
import {Button, CircularProgress} from '@mui/material';

import logo from "../../logo.svg";

import { profileMode } from "./constants";
import ProfileEditForm from "./components/ProfileEditForm";
import ProfileInfo from "./components/ProfileInfo";

import './profile.css'
import {useDispatch, useSelector} from "react-redux";
import {editUserFiled} from "../../store/actions/userActions";

const demoUserTest = {
    userName: "Test",
    email: "test@mail.ru",
    number: "+7 999 99 99 99",
    userInfo: "test info",
    skills: ['css', 'html', 'git']
}

const ProfileContainer = () => {
    const [modeView, setViewMode] = useState(profileMode.profileInfo)
    const [isLoading, setIsLoading] = useState(false)
    const user = useSelector(
        (state) => state.user
    )
    const dispatch = useDispatch()

    const onEditSwitch = (mode) => {
        setViewMode(mode)
    }


    // useEffect(() => {
    //     setIsLoading(true)
    //
    //     setTimeout(() => {
    //         setIsLoading(false)
    //     }, 2000)
    // },[])

    return (
        <div className="profileContainer">
            {isLoading ? <CircularProgress className="profileLoader"/> : (
                <>
                    <div>
                        <img
                            src={logo}
                            alt="аватар"
                            className="profileAvatar"
                        />
                        {/*{modeView === profileMode.profileInfo && (*/}
                        {/*    <Button*/}
                        {/*        style={{*/}
                        {/*            width: 150*/}
                        {/*        }}*/}
                        {/*        variant="contained"*/}
                        {/*        onClick={() => onEditSwitch(profileMode.edit)}*/}
                        {/*    >*/}
                        {/*        Edit profile*/}
                        {/*    </Button>*/}
                        {/*)}*/}
                    </div>
                    {modeView === profileMode.profileInfo && (
                        <ProfileInfo user={user}/>
                    )}
                    {modeView === profileMode.edit && (
                        <ProfileEditForm
                            onEditSwitch={onEditSwitch}
                        />
                    )}
                </>
            )}
        </div>
    )
}

export default ProfileContainer
