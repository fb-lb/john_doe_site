import '../css/home.css';

export default function Home() {
    return (
        <main className="home">
            <div>
                <div>
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <a href='#about' className="btn btn-primary">En savoir plus</a>
                </div>
            </div>
            <div>
                <div>
                    <h3 id='about'>À propos</h3>
                    <p>Passionné par l&apos;informatique et les nouvelles technologies, j&apos;ai suivi
                        une formation d&apos;<strong>intégrateur-développeur web</strong> au CEF.
                        Au cours de cette formation, j&apos;ai pu acquérir des bases solides pour
                        travailler dans le domaine du <strong>développement web</strong>.
                    </p>
                    <p>Basé à Lyon, je suis en recherche d&apos;une alternance au sein d&apos;une agence 
                        digitale pour consolider ma formation de <strong>développeur web full stack</strong>.
                    </p>
                    <p>J&apos;accorde une attention particulière à la qualité du code que j&apos;écris 
                        et je respecte les bonnes pratiques du web.
                    </p>
                </div>
                <div>
                    <img alt="Homme d'environ 30 ans chatain clair avec de la barbe assis dans un bureau." src="/img/john-doe-about.jpg"></img>
                    <h4>Mes compétences</h4>
                    <section>
                        <h5>HTML 90%</h5>
                        <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-danger" style={{width: '90%'}}></div>
                        </div>
                    </section>
                    <section>
                        <h5>CSS 80%</h5>
                        <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-info" style={{width: '80%'}}></div>
                        </div>
                    </section>
                    <section>
                        <h5>JAVASCRIPT 70%</h5>
                        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning" style={{width: '70%'}}></div>
                        </div>
                    </section>
                    <section>
                        <h5>PHP 60%</h5>
                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{width: '60%'}}></div>
                        </div>
                    </section>
                    <section>
                        <h5>REACT 50%</h5>
                        <div className="progress" role="progressbar" aria-label="Primary example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary" style={{width: '50%'}}></div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
};