import React from "react";
import "./css/achievements.css";

const Achievements = () => {
  return (
    <main>
      <div className="banner"></div>
      <div className="text-center">
        <h2>Portfolio</h2>
        <p>Voici quelques-unes de mes réalisations.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div class="card text-center">
              <img
                src="/img/portfolio/fresh-food.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Fresh food</h5>
                <p class="card-text">
                  Réalisation d'un site avec cande en ligne
                </p>
                <a href="/" class="btn btn-primary">
                  Voir
                </a>
              </div>
              <div class="card-footer">
                <p>Site réalisé avec PHP et MySQL</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div class="card text-center">
              <img
                src="/img/portfolio/restaurant-japonais.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Restaurant Akira</h5>
                <p class="card-text">Réalisation d'un site vitrine.</p>
                <a href="/" class="btn btn-primary">
                  Voir
                </a>
              </div>
              <div class="card-footer">
                <p>Site réalisé avec Wordpress</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
          <div class="card text-center">
            <img
              src="/img/portfolio/espace-bien-etre.jpg"
              class="card-img-top"
              alt="..."
            ></img>
            <div class="card-body">
              <h5 class="card-title">Espace bien-être</h5>
              <p class="card-text">
                Réalisation d'un site pour un practicien bien-être
              </p>
              <a href="/" class="btn btn-primary">
                Voir
              </a>
            </div>
            <div class="card-footer">
              <p>Site réalisé en HTML/CSS</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Achievements;
