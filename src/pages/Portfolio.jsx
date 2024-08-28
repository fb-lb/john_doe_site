import '../css/portfolio.css';
import { PropTypes } from 'prop-types';

function Project(props) {
    return (
        <div className='portfolio__achievement col'>
            <article className="card text-center">
                <img src={props.srcImg} className="card-img-top" alt={props.altImg}></img>
                <div className="card-body">
                    <h2 className="portfolio__achievement-title card-title">{props.title}</h2>
                    <p className="portfolio__achievement-text card-text mb-3">{props.description}</p>
                    <a className="btn btn-outline-primary" title={props.linkTitle} href={props.link} target="_blank" rel="noreferrer nofollow">Voir</a>     
                </div>
                <p className="portfolio__achievement-text card-footer">{props.technology}</p>
            </article>
        </div>
    ); 
}

Project.propTypes = {
    srcImg: PropTypes.string,
    altImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    linkTitle: PropTypes.string,
    link: PropTypes.string,
    technology: PropTypes.string
  };

export default function Portfolio() {
    return (
        <main className="portfolio">
            <div className='portfolio__banner'></div>
            <h1 className='portfolio__title text-uppercase'>Portfolio</h1>
            <p className='portoflio__principal-text'>Voici quelques-unes de mes réalisations.</p>
            <div className='portfolio__line'></div>
            <div className='portfolio__achievement-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
                <Project
                    srcImg="/img/portfolio/fresh-food.jpg"
                    altImg="Panier de légumes vue du dessus contenant une aubergine, un poivron jaune, des radis, de la salade et du persil"
                    title="Fresh food"
                    description="Réalisation d'un site avec commande en ligne."
                    linkTitle="FreshFood.fr"
                    link="https://www.freshfood.fr/"
                    technology="Site réalisé avec PHP et MySQL"
                />
                <Project
                    srcImg="/img/portfolio/restaurant-japonais.jpg"
                    alt="Cinq sushis au thon ou saumon ou crevettes entre deux rangées de trois maki thon avocat et saumon avocat"
                    title="Restaurant Akira"
                    description="Réalisation d'un site vitrine."
                    linkTitle="AkiraSushiBar.gr"
                    link="https://akirasushibar.gr/"
                    technology="Site réalisé avec WordPress"
                />
                <Project
                    srcImg="/img/portfolio/espace-bien-etre.jpg"
                    alt="Représentation d'une tête de bouddha avec une fleur de lotus avec à droite un empilement pyramidal de quatre galet. Les différents éléments flottent sur l'eau et il y a un coucher de soleil en arrière plan."
                    title="Espace bien-être"
                    description="Réalisation d'un site vitrine pour un praticien de bien-être."
                    linkTitle="espace-bienetre.com"
                    link="https://www.espace-bienetre.com/"
                    technology="Site réalisé en HTML/CSS"
                />
            </div>
        </main>
    );
}