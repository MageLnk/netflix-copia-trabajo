import primera from "../../assets/img/Bety.jpg";
import segunda from "../../assets/img/Pasion.jpg";
import tercera from "../../assets/img/Lucifer.jpg";

const Carousel = () => {
  return (
    <section className="container container-section-carousel">
      <div className="row">
        <div className="col align-col-carousel">
          <h2>Don't miss our best streams</h2>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={primera} className="d-block img-config" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={segunda} className="d-block img-config" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={tercera} className="d-block img-config" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
