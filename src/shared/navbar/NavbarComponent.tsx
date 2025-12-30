import { useState } from "react";
import type { INavProps } from "./INavProps";
import "./Navbar.css"
import { Link } from "react-router-dom";




function Navbar({ items }: INavProps) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Hernanes</div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Menu"
                >
                    <span className={menuOpen ? "line open" : "line"} />
                    <span className={menuOpen ? "line open" : "line"} />
                    <span className={menuOpen ? "line open" : "line"} />
                </button>

                <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                    <ul>
                        {items.map((item) => (
                            <li key={item.uri}>
                                <Link to={item.uri} onClick={() => setMenuOpen(false)}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;