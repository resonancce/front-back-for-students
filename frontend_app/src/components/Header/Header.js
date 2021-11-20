import { Link } from 'react-router-dom'

import logo from "../../logo.svg";

import './header.css'

const Header = () => {

    return (
        <header className="headerBlock">
            <img
                src={logo}
                className="App-logo"
                alt="logo"
            />
            <div className="headerLinkContainer">
                <Link
                    className="headerLink"
                    to="/registration"
                >
                    Registration
                </Link>
                <Link
                    className="headerLink"
                    to="/profile"
                >
                    Profile
                </Link>
            </div>
        </header>
    )
}

export default Header
