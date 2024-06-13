import React from "react";
import "./css/profil.css"

function Profil() {
  return (
    <main className="profil">
      <div className="text-center">
        <h1> Github user</h1>
        <h2>John Doe</h2>
        <img src="/img/profil.png" alt="Dessin d'un chat bleu et blanc avec un colier rouge et une clochette."></img>
        <p>As we all know, John Doe's identity is unknow. I just wanted to contribute without being known.</p>
        <p>Abonnés : 10</p>
        <p>Abonnements : 0</p>
        <p>Créé le : 2016-06-09T17:14:00Z</p>
        <p>Modifié le : 2021-10-12T05:01:09Z</p>
        <p>URL repositories : <a href="https://api.github.com/users/github-john-doe">https://api.github.com/users/github-john-doe</a></p>

      </div>
    </main>
  );
}

export default Profil;
