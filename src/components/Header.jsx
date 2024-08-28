import '../css/header.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

let isBurgerMenuActive = false;

export default function Header() {

    const [ buttonClass, setButtonClass ] = useState("navbar-toggler border border-secondary border-opacity-50");
    
    function activeButtonClass() {
        isBurgerMenuActive = !isBurgerMenuActive;
        if (isBurgerMenuActive) {
            setButtonClass (buttonClass + " navbar-toggler--active");
        } else {
            setButtonClass ("navbar-toggler border border-secondary border-opacity-50");
        };
    }

    const allLink = document.querySelectorAll('.nav-link');
    const location = useLocation();

    useEffect(() => {
        allLink.forEach(link => {
            link.className= 'nav-link text-white-50 text-uppercase link-light';
        });

        if(location.pathname==='/'){
            document.getElementById('home-link').className = 'activeLink nav-link text-uppercase';
        } else if (location.pathname==='/services') {
            document.getElementById('services-link').className = 'activeLink nav-link text-uppercase';
        } else if (location.pathname==='/portfolio') {
            document.getElementById('portfolio-link').className = 'activeLink nav-link text-uppercase';
        } else if (location.pathname==='/blog') {
            document.getElementById('blog-link').className = 'activeLink nav-link text-uppercase';
        } else if (location.pathname==='/contact') {
            document.getElementById('contact-link').className = 'activeLink nav-link text-uppercase';
        }
    }, [location]);

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
                            <Link id='home-link' className="nav-link text-white-50 text-uppercase link-light" to="/">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='services-link' className="nav-link text-white-50 text-uppercase link-light" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='portfolio-link' className="nav-link text-white-50 text-uppercase link-light" to="/portfolio">Réalisations</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='blog-link' className="nav-link text-white-50 text-uppercase link-light" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='contact-link' className="nav-link text-white-50 text-uppercase link-light" to="/contact">Me contacter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    );
}