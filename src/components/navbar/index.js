//Importantes

//Internal components

//Others
import imgLogoNetflix from "../../assets/img/Netflix-logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <div className="col-2">
          <a className="navbar-brand" href="www.netflix.com" target="_blank">
            <img
              src={imgLogoNetflix}
              alt="Netflix Logo"
              className="d-inline-block align-text-top"
              style={{ width: "8rem", height: "4rem" }}
            />
          </a>
        </div>

        <div className="col-2 offset-7">
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
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            {/*Modal config*/}
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Acá iría la información de login
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    ¿Estás seguro que deseas logear?
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*Botón modal*/}
            <button
              type="button"
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
