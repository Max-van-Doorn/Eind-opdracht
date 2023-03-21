import React from "react";
import img1 from  "../Assets/websitelogo-kopie.jpg"


const Navbar = () => {


    return (
            <nav className={"navbar"}>
                <ul className={"unordered-list"}>
                    <li className={"home-button"}><a className={"home-text"} href={"/"}> <img className={"home-button-picture"} src={img1} alt="website-icon"/>GameChecker</a></li>
                    <li className={"about-us"}><a href={"/About-Us"}>Over ons</a></li>
                    <li className={"registreren-nav-button"}><a href={"/Registreren"}>Registreren</a> </li>
                    <li className={"login"}><a href={"/Login"}>Login</a></li>
                        <li className="profile"><a href={"/Profile"}>Profiel</a></li>
                </ul>

            </nav>
    )
}
export default Navbar