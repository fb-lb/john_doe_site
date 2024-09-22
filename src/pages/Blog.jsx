import '../css/blog.css';
import { PropTypes } from 'prop-types';

Project.propTypes = {
    srcImg: PropTypes.string,
    altImg: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    timeAttr: PropTypes.string,
    date: PropTypes.string
  };

function Project(props) {
    return (
        <div className='blog__article col'>
            <article className="card">
                <img src={props.srcImg} className="card-img-top" alt={props.altImg}/>
                <div className="card-body">
                    <h2 className="blog__article-title card-title">{props.title}</h2>
                    <p className="blog__article-text card-text mb-3">{props.description}</p>
                    <a className="btn btn-primary" href='#' target="_blank" rel="noreferrer nofollow">Lire la suite</a>     
                </div>
                <p className="card-footer">Publié le <time dateTime={props.timeAttr}>{props.date}</time></p>
            </article>
        </div>
    ); 
}

export default function Blog() {
    return(
        <main className="blog">
            <div className='blog__banner'></div>
            <h1 className='blog__title text-uppercase'>Blog</h1>
            <p className='blog__text'>Retrouvez ici quelques articles sur le développement web.</p>
            <div className='blog__line'></div>
            <div className='blog__article-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
                <Project
                    srcImg="/assets/img/blog/coder.jpg"
                    altImg="Code HTML dans un environnement de développement intégré."
                    title="Coder son site en HTML/CSS"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    timeAttr="2022-08-22"
                    date="22 août 2022"
                />
                <Project
                    srcImg="/assets/img/blog/croissance.jpg"
                    altImg="Quatre tas de pièces empilées les unes sur les autres avec de plus en plus de pièces, de gauche à droite, avec une plante qui pousse sur chacun des tas de pièces. A droite des tas de pièce, il y a un bocal contenant un nombre important plus important de pièce et il y a aussi une plante qui pousse."
                    title="Vendre ses produits sur le web"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    timeAttr="2022-08-20"
                    date="20 août 2022"
                />
                <Project
                    srcImg="/assets/img/blog/google.jpg"
                    altImg="Ordinateur portable sur une tableau de jardin en bois. Le moteur de recherche Google est ouvert en plein écran. Un téléphone se trouve à gauche de l'ordinateur. Photo prise en extérieur."
                    title="Se positionner sur Google"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    timeAttr="2022-08-01"
                    date="1 août 2022"
                />
                <Project
                    srcImg="/assets/img/blog/screens.jpg"
                    altImg="Bureau sur lequel se trouve une tablette, un ordinateur portable et un iMac Apple avec un clavier"
                    title="Coder en responsive design"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    timeAttr="2022-07-31"
                    date="31 juillet 2022"
                />
                <Project
                    srcImg="/assets/img/blog/seo.jpg"
                    altImg="Ensemble de mot en lien avec le référencement web. Les mots sont écrits en blanc sur fond bleu. Certains mots sont tournés de 90 degrés."
                    title="Technique de référencement"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    timeAttr="2022-07-30"
                    date="30 juillet 2022"
                />
                <Project
                    srcImg="/assets/img/blog/technos.png"
                    altImg="Ensemble de logos de différentes technologies du développement web."
                    title="Apprendre à coder"
                    description="Some quick example text to build on the card title and make up the bulk of the card's content."
                    timeAttr="2022-07-12"
                    date="12 juillet 2022"
                />
            </div>
        </main>
    );
}