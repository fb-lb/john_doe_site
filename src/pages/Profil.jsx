import '../css/profil.css';
import { useState, useEffect } from "react";

export default function Profil() {

    // Retrieve information on GitHub profil

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
        <main className='profil' >
            <h1>Github user</h1>
            <h2>{user.name}</h2>
            <img src={user.avatar_url} alt="Dessin du chat robot issu du manga Doraemon" />
            <p>{user.bio}</p>
            <p>Abonnés: {user.followers}</p>
            <p>Abonnements : {user.following}</p>
            <p>Créé le : <time dateTime={user.created_at}>{user.created_at}</time></p>
            <p>Modifié le : <time dateTime={user.updated_at}>{user.updated_at}</time></p>
            <p>URL repositories : <a href={user.repos_url} target='_blank' rel='noreferrer nofollow'>{user.repos_url}</a></p>
        </main>
    );
}