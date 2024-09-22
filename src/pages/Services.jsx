import '../css/services.css';

export default function Services() {

    // Change icon color while hovering corresponding service
    
    function hover(e) {
        let path = document.getElementById(e.target.children[0].children[0].id);
        path.setAttribute('fill', "#cde1f8");
    }

    function noHover(e) {
        let path = document.getElementById(e.target.children[0].children[0].id);
        path.setAttribute('fill', "#0d6efd");
    }

    return (
        <main className="services">
            <div className='services__banner'></div>
            <h1 className='services__h1 text-uppercase'>Mon offre de services</h1>
            <p className='services__principal-text'>Voici les prestations sur lesquelles je peux intervenir.</p>
            <div className='services__line'></div>
            <div className='services__list'>
                <section className='services__service' onMouseEnter={hover} onMouseLeave={noHover}>
                    <svg className='services__icon-service' xmlns="http://www.w3.org/2000/svg" height="40" width="45" viewBox="0 0 576 512">
                        {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path id='uxDesign' fill="#0d6efd" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 288L64 352 64 64l448 0z"/>
                    </svg>
                    <h2 className='services__h2 text-uppercase'>UX Design</h2>
                    <p className='services__text-service'>L&apos;<strong>UX Design</strong> est une méthode de conception centrée sur l&apos;utilisateur. 
                    Son but est d&apos;offrir une exprérience de navigation optimale à l&apos;internaute.</p>
                </section>
                <section className='services__service' onMouseEnter={hover} onMouseLeave={noHover}>
                    <svg className='services__icon-service' xmlns="http://www.w3.org/2000/svg" height="40" width="31" viewBox="0 0 384 512">
                        {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path id='webDevelopment' fill="#0d6efd" d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/>
                    </svg>
                    <h2 className='services__h2 text-uppercase'>Développement web</h2>
                    <p className='services__text-service'>Le <strong>développement de sites web</strong> repose sur l&apos;utilisation des langages <span className='services__underline-text'>html</span>, <span className='services__underline-text'>css</span>, JavaScript et <span className='services__underline-text'>php</span>.</p>
                </section>
                <section className='services__service' onMouseEnter={hover} onMouseLeave={noHover}>
                    <svg className='services__icon-service' xmlns="http://www.w3.org/2000/svg" height="40" width="41" viewBox="0 0 512 512">
                        {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path id='seo' fill="#0d6efd" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM228 104c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z"/>
                    </svg>
                    <h2 className='services__h2 text-uppercase'>Référencement</h2>
                    <p className='services__text-service'>Le <strong>référencement naturel d&apos;un site</strong>, aussi appelé <span className='services__underline-text'>seo</span>, consiste à mettre des techniques en oeuvre 
                    pour <em>améliorer sa position</em> dans les résultats des moteurs de recherche.</p>
                </section>
            </div>
        </main>
    )
};