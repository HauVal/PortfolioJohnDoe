import React from "react";
import "./css/contact.css";

const Contact = () => {
  return (
    <main>
      <div className="contact-bg">
        <div className="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="text-uppercase">Me contacter</h2>
              <p>
                Pour me contacter en vue d'un entretien ou d'une future
                collaboration, merci de remplir le formulaire de contact.
              </p>
            </div>

            <div className="row">
              <article className="col-lg-6 col-md-6">
                <h3>Formulaire de contact</h3>

                <form action="index.html" method="post">
                  <div class="mb-3">
                    <label for="lastname" class="form-label"></label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastname"
                      required
                      placeholder="Votre Nom"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label"></label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Votre adresse email"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="phone" class="form-label"></label>
                    <input
                      type="tel"
                      class="form-control"
                      id="phone"
                      placeholder="Votre numéro de téléphone"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="subject" class="form-label"></label>
                    <input
                      type="text"
                      class="form-control"
                      id="subject"
                      required
                      placeholder="Sujet"
                    />
                  </div>

                  <div class="mb-3">
                    <label for="message" class="form-label"></label>
                    <textarea
                      rows="4"
                      cols="50"
                      class="form-control"
                      id="message"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" class="btn btn-info text-light">
                    Envoyer
                  </button>
                </form>
              </article>

              <article class="col-lg-6 col-md-6">
                <h3>Mes coordonnées</h3>
                <address>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                  </svg>
                  {"40 rue Laure Diebold, 69009 Lyon, France"}
                  <br />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-phone"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  </svg>{"06 20 30 40 50"}
                  
                </address>
                <iframe
                  class="map"
                  src="https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786657,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu"
                  width="100%"
                  height="400"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
