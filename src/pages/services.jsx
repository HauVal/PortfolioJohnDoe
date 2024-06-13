import React from "react";
import "./css/services.css";

const Services = () => {
  return (
    <main>
      <div className="banner"></div>
      <div className="text-center">
        <h2 className="text-uppercase">Mon offre de services</h2>
        <p>Voici les prestations sur lesquelles je peux intervenir.</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <section class="ux text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#0d6efd"
                class="bi bi-display"
                viewBox="0 0 16 16"
              >
                <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145" />
              </svg>
              <h3 className="text-uppercase">Ux design</h3>
              <p>
                L'<strong>UX Design</strong> est une méthode de conception
                centrée sur l'utilisateur. Son but est d'offrir une expérience
                de navigation optimale à l'internaute.
              </p>
            </section>
          </div>

          <div className="col-lg-4 col-md-4">
            <section class="dev text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#0d6efd"
                class="bi bi-file-earmark-code-fill"
                viewBox="0 0 16 16"
              >
                <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708" />
              </svg>
              <h3 className="text-uppercase">Développement web</h3>
              <p>
                Le <strong>développement de sites web</strong> repose sur
                l'utilisation des langages HTML, CSS, JavaScript et PHP.
              </p>
            </section>
          </div>

          <div className="col-lg-4 col-md-4">
            <section class="seo text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#0d6efd"
                class="bi bi-search-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018" />
              </svg>
              <h3 className="text-uppercase">Référencement</h3>
              <p>
                Le <strong>référencement naturel d'un site,</strong> aussi
                appelé SEO, consiste à mettre des techniques en oeuvre pour
                améliorer sa position dans les résultats des moteurs de
                recherche.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
