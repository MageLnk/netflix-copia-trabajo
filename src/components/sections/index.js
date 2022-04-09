const Sections = ({ secondText, firstText, leftRight, firstImg }) => {
  if (leftRight === true) {
    return (
      <div className="container sections">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-7 col-xl-7 internal-first-section">
            <h2 className="h2-internal-first-section">{firstText}</h2>
            <h4 className="h4-internal-first-section">{secondText}</h4>
          </div>
          <div className="col-md-6 col-lg-5 col-xl-5">
            <img
              src={firstImg}
              alt="Foto"
              className="internal-first-section-img"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container sections">
        <div className="row">
          <div className="col-md-7 col-lg-5 col-xl-5">
            <img
              src={firstImg}
              alt="Foto"
              className="internal-first-section-img"
            />
          </div>
          <div className="col-md-5 col-lg-7 col-xl-7 internal-first-section">
            <h2 className="h2-internal-first-section">{firstText}</h2>
            <h4 className="h4-internal-first-section">{secondText}</h4>
          </div>
        </div>
      </div>
    );
  }
};

export default Sections;
