import '../css/footer.css';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export default function Footer() {

    const [user, setUser] = useState({});

    const getUser = async() => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json);
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <footer>
            <div>
                <section>
                    <h4>{user.name}</h4>
                    <address>
                        <p>40 Rue Laure Dieblod <br/>69009 Lyon, France</p>
                        <p>Téléphone : 06 20 30 40 50</p>
                    </address>
                    <div className='footer__social-networks'>
                        <a title="GitHub" href={user.html_url} target="_blank" rel="noreferrer nofollow"><i className="fa-brands fa-github fa-2xl" style={{color: '#444444'}}></i></a>
                        <a title="Twitter" href="https://x.com/?lang=fr" target="_blank" rel="noreferrer nofollow"><i className="fa-brands fa-square-twitter fa-2xl" style={{color: '#444444'}}></i></a>
                        <a title="Linkedin" href="https://fr.linkedin.com/" target="_blank" rel="noreferrer nofollow"><i className="fa-brands fa-linkedin fa-2xl" style={{color: '#444444'}}></i></a>
                    </div>
                </section>
                <section>
                    <h4>Liens utiles</h4>
                    <ul className="footer__link-list fa-ul">
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/">Accueil</Link></li>
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/#about">A propos</Link></li>
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/services">Services</Link></li>
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/contact">Me contacter</Link></li>
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/mentions-legales">Mentions légales</Link></li>
                    </ul>
                </section>
                <section>
                    <h4>Mes dernières réalisations</h4>
                    <ul className="footer__link-list fa-ul">
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/portfolio">Fresh food</Link></li>
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/portfolio">Restaurant Akira</Link></li>
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/portfolio">Espace bien-être</Link></li>
                    </ul>
                </section>
                <section>
                    <h4>Mes derniers articles</h4>
                    <ul className="footer__link-list fa-ul">
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/blog">Coder son site en HTML/CSS</Link></li>
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/blog">Vendre ses produits sur le web</Link></li>
                        <li><span className="footer__icon-list fa-li"><i className="fa-solid fa-angle-right" style={{color: '#0d6efd'}}></i></span><Link className='footer__link' to="/blog">Se positionner sur Google</Link></li>
                    </ul>
                </section>
            </div>
            <small className='footer__copyright'>&copy; Designed by John Doe</small>
        </footer>    
    );
}