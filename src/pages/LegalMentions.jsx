import '../css/legalMentions.css';

export default function LegalMentions() {
    return(
        <main className="legal-mentions">
            <h1 className='legal-mentions__title text-uppercase'>Mentions légales</h1>
            <div className="legal-mentions__line"></div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="legal-mentions__item-button accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Éditeur du site
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3 className='legal-mentions__item-title'>John Doe</h3>
                            <address className='legal-mentions__item-address'>
                                <p><i className="fa-solid fa-location-dot" style={{color: '#000000'}}></i> 40 Rue Laure Diebold<br/>69009 Lyon, France</p>
                                <a className='legal-mentions__item-link' href='tel:+33620304050'><i className="fa-solid fa-mobile-screen-button" style={{color: '#000000'}}></i> 06 20 30 40 50</a>
                                <a className='legal-mentions__item-link' href='mailto:john.doe@gmail.com'><i className="fa-solid fa-envelope" style={{color: '#000000'}}></i> john.doe@gmail.com</a>
                            </address>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="legal-mentions__item-button accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hébergeur
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3 className='legal-mentions__item-title'>Always Data</h3>
                            <address>91 rue du Faubourg Saint Honoré<br/>75008 Paris</address>
                            <a className='legal-mentions__item-link' href="https://www.alwaysdata.com/fr/" target='_blank' rel="noreferrer nofollow"><i className="fa-solid fa-globe" style={{color: '#000000'}}></i> www.alwaysdata.com</a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="legal-mentions__item-button accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Crédits
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3 className='legal-mentions__item-title'>Crédits</h3>
                            <p className='legal-mentions__item-text'>Site développé par John Doe, étudiant du CEF.</p>
                            <p className='legal-mentions__item-text'>Les images libres de droits sont issues du site <a className='legal-mentions__item-link' href="https://pixabay.com/fr/" target='_blank' rel="noreferrer nofollow">Pixabay</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}