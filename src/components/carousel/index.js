const Carousel = () => {
  return (
    <section className="container container-section">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
