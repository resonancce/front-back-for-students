import React, {useState} from "react";
import { TextField } from "@mui/material";

import '../profile.css'


const ProfileEditForm = () => {
    const [email, setEmailText] = useState('');
    const [date, setDate] = useState('');
    const [profileInfoText, setInfo] = useState('');
    const [number, setNumber] = useState('');

    const onChangeEmail = (e) => {
        setEmailText(e.target.value)
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

    console.info('number', number)
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
        </div>
    )
}

export default ProfileEditForm
