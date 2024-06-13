import React from "react";

const Blog = () => {
  return (
    <main>
      <div className="banner"></div>
      <div className="text-center">
        <h2>Blog</h2>
        <p>Retrouvez ici quelques articles sur le développement web.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div class="card">
              <img
                src="/img/blog/coder.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Coder son site en HTML/CSS</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and up the
                  bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div class="card-footer">
                <p>Publié le 22 août 2022</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div class="card">
              <img
                src="/img/blog/croissance.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Vendre ses produits sur le web</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and up the
                  bulk of the card's content
                </p>
                <a href="#" class="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div class="card-footer">
                <p>Publié le 20 août 2022</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div class="card">
              <img
                src="/img/blog/google.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Se positionner sur Google</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and up the
                  bulk of the card's content
                </p>
                <a href="#" class="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div class="card-footer">
                <p>Publié le 1 août 2022</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div class="card">
              <img
                src="/img/blog/screens.jpg"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Coder en responsive design</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and up the
                  bulk of the card's content
                </p>
                <a href="#" class="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div class="card-footer">
                <p>Publié le 31 juillet 2022</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div class="card">
              <img src="/img/blog/seo.jpg" class="card-img-top" alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">Technique de référencement</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and up the
                  bulk of the card's content
                </p>
                <a href="#" class="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div class="card-footer">
                <p>Publié le 30 juillet 2022</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div class="card">
              <img
                src="/img/blog/technos.png"
                class="card-img-top"
                alt="..."
              ></img>
              <div class="card-body">
                <h5 class="card-title">Apprendre à coder</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and up the
                  bulk of the card's content
                </p>
                <a href="#" class="btn btn-primary">
                  Lire la suite
                </a>
              </div>
              <div class="card-footer">
                <p>Publié le 12 juillet 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
