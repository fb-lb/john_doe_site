import '../css/profil.css';

export default function Profil() {

    return (
        <main className='profil' >
            <h1>Github user</h1>
            <h2>John Doe</h2>
            <img src="/img/cat.png" alt="Dessin du chat robot issu du manga Doraemon" />
            <p>As we all know, John Doe&apos;s identity is unknown. I just wanted to contribute without being known.</p>
            <p>Abonnés: 10</p>
            <p>Abonnements : 0</p>
            <p>Créé le : <time dateTime="2016-06-09T17:14:00Z">2016-06-09T17:14:00Z</time></p>
            <p>Modifié le : <time dateTime="2021-10-12T05:01:09Z">2021-10-12T05:01:09Z</time></p>
            <p>URL repositories : <a href="https://api.github.com/users/github-john-doe/repos" target='_blank' rel='noreferrer nofollow'>https://api.github.com/users/github-john-doe/repos</a></p>
        </main>
    );
}