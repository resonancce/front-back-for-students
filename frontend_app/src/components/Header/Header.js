import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Button, Icon } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import logo from "../../logo.svg";

import './header.css'

const Header = () => {
    const { token = null} = useSelector(state => state.user)

    return (
        <header className="headerBlock">
            <Link to="/">
                <img
                    src={logo}
                    className="App-logo"
                    alt="logo"
                />
            </Link>

            <div className="headerMainContainer">
                <div className="headerLinkContainer">
                    {!token && (
                        <Link
                            className="headerLink"
                            to="/registration"
                        >
                            Registration
                        </Link>
                    )}
                    {!token && (
                        <Link
                            className="headerLink"
                            to="/login"
                        >
                            Login
                        </Link>
                    )}
                    {token && (
                        <Link
                            className="headerLink"
                            to="/profile"
                        >
                            Profile
                        </Link>
                    )}
                </div>
                {token && (
                    <Button style={{width: 20, height: 30, borderRadius: 20}} className="logoutButton">
                        <LogoutIcon className="logoutIcon" />
                    </Button>
                )}
            </div>
        </header>
    )
}

export default Header
