import logo from "../../logo.svg";
import './header.css'

const Header = () => {

    return (
        <header className="headerBlock">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header
