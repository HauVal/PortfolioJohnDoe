import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Achievements from "./pages/achievements";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Notice from "./pages/notice";
import Profil from "./pages/profil";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav
          class="navbar navbar-dark navbar-expand-lg text-light text-uppercase fixed-top"
          id="mainNav"
        >
          <div class="container">
            <Link class="navbar-brand text-light" to="/">
              John Doe
            </Link>

            <button
              class="navbar-toggler text-uppercase border-white "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon "></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-0 mx-lg-1">
                  <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/">
                    Accueil
                  </Link>
                </li>

                <li class="nav-item mx-0 mx-lg-1">
                  <Link
                    class="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>

                <li class="nav-item mx-0 mx-lg-1">
                  <Link
                    class="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/achievements"
                  >
                    Réalisations
                  </Link>
                </li>

                <li class="nav-item mx-0 mx-lg-1">
                  <Link class="nav-link py-3 px-0 px-lg-3 rounded" to="/blog">
                    Blog
                  </Link>
                </li>

                <li class="nav-item mx-0 mx-lg-1">
                  <Link
                    class="nav-link py-3 px-0 px-lg-3 rounded"
                    to="/contact"
                  >
                    Me contacter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/achievements" element={<Achievements />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/notice" element={<Notice />}></Route>
        <Route path="/profil" element={<Profil />}></Route>
      </Routes>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h5>John Doe</h5>
              <address>
                40 Rue Laure Diebold
                <br />
                69009 Lyon, France
                <br />
                Téléphone : <a href="tel:0620304050">06 20 30 40 50</a>
              </address>
              <div className="container">
                <Link to="/profil" target="_blank">
                  <img src="/img/github.png" alt="Logo GitHub" />
                </Link>
                <a href="https://x.com/johndoefromx">
                  <img src="/img/twitter.png" alt="Logo Twitter" />
                </a>
                <a href="https://fr.linkedin.com/in/john-doe-7231a6233">
                  <img src="/img/linkedin.png" alt="Logo Linkedin" />
                </a>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Liens utiles</h5>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Accueil</Link>
                  </li>

                  <li>
                    <Link to="/#about">À propos</Link>
                  </li>

                  <li>
                    <Link to="/services">Services</Link>
                  </li>

                  <li>
                    <Link to="/contact">Me contacter</Link>
                  </li>

                  <li>
                    <Link to="/notice">Mentions légales</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Mes dernières réalisations</h5>
              <nav>
                <ul>
                  <li>
                    <Link to="/achievements">Fresh Food</Link>
                  </li>
                  <li>
                    <Link to="/achievements">Restaurant Akira</Link>
                  </li>
                  <li>
                    <Link to="/achievements">Espace bien-être</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5>Mes derniers articles</h5>
              <nav>
                <ul>
                  <li>
                    <Link to="/blog">Coder son site en HTML/CSS</Link>
                  </li>
                  <li>
                    <Link to="/blog">Vendre ses produits sur le web</Link>
                  </li>
                  <li>
                    <Link to="/blog">Se positionner sur Google</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="copyright text-center mt-6">
          <small>© Designed by John Doe</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
