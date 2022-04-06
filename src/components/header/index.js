// Importantes

// Componentes internos
import Carousel from "../carousel";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="../../assets/img/viajes.svg"
            alt="Imagen viajes chile"
          ></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link disabled">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Quiénes somos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Destacados</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
