import React from "react";
import "./css/home.css";

function Home() {
  return (
    <div>
      <section className="text-center bg-image">
        
          <h1 class="text-light">Bonjour, je suis John Doe</h1>
          <h2 class="text-light">Développeur web full stack</h2>
          <a className="btn btn-primary" href="#about">
            En savoir plus
          </a>
        
      </section>
      <div className="container">
        <div className="row">

          <section id="about" className="col-lg-6 col-md-6">
            <h3>À propos</h3>
            <p>
              Passionné par l'informatique et les nouvelles technologies, j'ai
              suivi une formation d'<strong>intégrateur-développeur web</strong>{" "}
              au CEF. Au cours de cette formation, j'ai pu acquérir des bases
              solides pour travailler dans le domaine du{" "}
              <strong>développement web</strong>.
              <br />
              <br />
              Basé à Lyon, je suis en recherche d'une alternance au sein d'une
              agence digitale pour consolider ma formation de{" "}
              <strong>développeur web full stack</strong>.
              <br />
              <br />
              J'accorde une attention particulière à la qualité du code que
              j'écris et je respecte les bonnes pratiques du web.
            </p>
          </section>

          <section className="col-lg-6 col-md-6">
            <img
              src="/img/about.jpg"
              alt="Homme chatain clair à barbe travail dans un bureau."
            ></img>
            <h3>Mes compétences</h3>

            <p>HTML5 90%</p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Danger example"
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-danger"></div>
            </div>

            <p>CSS3 80%</p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Info example"
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-info"></div>
            </div>

            <p>JAVASCRIPT 70%</p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Warning example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-warning"></div>
            </div>

            <p>PHP 60%</p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Success example"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-success"></div>
            </div>

            <p>React 50%</p>
            <div
              class="progress"
              role="progressbar"
              aria-label="Example 20px high"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div class="progress-bar bg-react"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
