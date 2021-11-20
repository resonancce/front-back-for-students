import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch  } from "react-redux";


import '../profile.css'
import {profileMode} from "../constants";
import {editUserFiled} from "../../../store/actions/userActions";


const ProfileEditForm = ({ onEditSwitch }) => {
    const dispatch = useDispatch()

    const [email, setEmailText] = useState('');
    const [date, setDate] = useState('');
    const [profileInfoText, setInfo] = useState('');
    const [number, setNumber] = useState('');

    const onChangeEmail = (e) => {
        setEmailText(e.target.value)

        dispatch(editUserFiled({
            email: e.target.value
        }))
    }

    const onChangeDate = (e) => {
        setDate(e.target.value)
    }

    const onChangeProfileInfo = (e) => {
        setInfo(e.target.value)
    }

    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }

    const onSaveProfileInfo = (e) => {
        // валидация полей юзера
        // логика запроса

        const user = {}
        dispatch(editUserFiled(user))
        onEditSwitch(profileMode.profileInfo)
    }

    return (
        <div className="profileFields">
            <TextField
                className="profileText"
                label="Почта"
                value={email}
                onChange={onChangeEmail}
                style={{
                    marginBottom: 20
                }}
            />
            <TextField
                className="profileText"
                type="date"
                label=""
                onChange={onChangeDate}
                value={date}
                style={{
                    marginBottom: 20
                }}
            />
            <TextField
                className="profileText"
                multiline
                rows={4}
                value={profileInfoText}
                onChange={onChangeProfileInfo}
                label="Информация профиля"
                style={{
                    marginBottom: 20
                }}
            />
            <TextField
                className="profileText"
                id="outlined-number"
                label="Number"
                type="number"
                value={number}
                onChange={onChangeNumber}
                style={{
                    marginBottom: 20
                }}
            />
            <Button
                variant="contained"
                onClick={onSaveProfileInfo}
                style={{
                    width: '100%',
                    maxWidth: 300
                }}
            >
                Save
            </Button>
        </div>
    )
}

export default ProfileEditForm
