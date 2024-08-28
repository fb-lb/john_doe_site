import '../css/home.css';

export default function Home() {
    return (
        <main className="home">
            <div className='principal'>
                <div className='principal__filter'>
                    <h1 className='principal__h1'>Bonjour, je suis John Doe</h1>
                    <h2 className='principal__h2'>Développeur web full stack</h2>
                    <a href='#about' className="principal__link btn btn-primary">En savoir plus</a>
                </div>
            </div>
            <div className='about'>
                <div className='about__block'>
                    <h3 className='about__h3' id='about'>À propos</h3>
                    <p className='about__text'>Passionné par l&apos;informatique et les nouvelles technologies, j&apos;ai suivi
                        une formation d&apos;<strong className='about__strong-text'>intégrateur-développeur web</strong> au CEF.
                        Au cours de cette formation, j&apos;ai pu acquérir des bases solides pour
                        travailler dans le domaine du <strong className='about__strong-text'>développement web</strong>.
                    </p>
                    <p className='about__text'>Basé à Lyon, je suis en recherche d&apos;une alternance au sein d&apos;une agence 
                        digitale pour consolider ma formation de <strong className='about__strong-text'>développeur web full stack</strong>.
                    </p>
                    <p className='about__text'>J&apos;accorde une attention particulière à la qualité du code que j&apos;écris 
                        et je respecte les bonnes pratiques du web.
                    </p>
                </div>
                <div className='about__block'>
                    <img className='about__image' alt="Homme d'environ 30 ans chatain clair avec de la barbe assis dans un bureau." src="/img/john-doe-about.jpg"></img>
                    <h4 className='about__h4'>Mes compétences</h4>
                    <section className='about__skill'>
                        <h5 className='about__h5'>HTML 90%</h5>
                        <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
                        </div>
                    </section>
                    <section className='about__skill'>
                        <h5 className='about__h5'>CSS 80%</h5>
                        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-info" style={{width: '80%'}}></div>
                        </div>
                    </section>
                    <section className='about__skill'>
                        <h5 className='about__h5'>JAVASCRIPT 70%</h5>
                        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                        </div>
                    </section>
                    <section className='about__skill'>
                        <h5 className='about__h5'>PHP 60%</h5>
                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                        </div>
                    </section>
                    <section className='about__skill'>
                        <h5 className='about__h5'>REACT 50%</h5>
                        <div className="progress" role="progressbar" aria-label="Primary example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{width: '50%'}}></div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}