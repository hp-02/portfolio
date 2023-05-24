import { useState } from "react";

const Menu = () => {
    const [active, setActive] = useState("home")

    return (
        <div id="menu">
            <div>
                <a href="#home" className={active === "home" ? "active" : ""} onClick={() => setActive("home")}>Home</a>
                <a href="#about" className={active === "about" ? "active" : ""} onClick={() => setActive("about")}>About</a>
                <a href="#projects" className={active === "projects" ? "active" : ""} onClick={() => setActive("projects")}>Projects</a>
                <a href="#contact" className={active === "contact" ? "active" : ""} onClick={() => setActive("contact")}>Contact</a>
            </div>
        </div>
    )
}

export default Menu;