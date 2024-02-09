import { LOGO_IMG_URL } from "../Utility/URL.JS";

const Header = () => {
    return(
    <div className="Header-container">
    <div className="logo-container">
        <img className="logo" src={LOGO_IMG_URL} alt="" />
    </div>
    <div className="nav-container">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
        </ul>
    </div>
    </div>)
}

export default Header;

