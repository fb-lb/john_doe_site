import '../css/header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

let isBurgerMenuActive = false;

export default function Header() {

    const [ buttonClass, setButtonClass ] = useState("navbar-toggler border border-secondary border-opacity-50");
    
    function activeButtonClass() {
        isBurgerMenuActive = !isBurgerMenuActive;
        if (isBurgerMenuActive) {
            setButtonClass (buttonClass + " active");
        } else {
            setButtonClass ("navbar-toggler border border-secondary border-opacity-50");
        };
    }

    return (
    <header>
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <Link className="navbar-brand text-light text-uppercase py-1 px-2 rounded" to="/">John Doe</Link>
                <button className={buttonClass} onClick={activeButtonClass} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-bars" style={{color: 'white'}}></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white-50 text-uppercase link-light" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white-50 text-uppercase link-light" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 text-uppercase link-light" href="#">Réalisations</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 text-uppercase link-light" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white-50 text-uppercase link-light" href="#">Me contacter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}