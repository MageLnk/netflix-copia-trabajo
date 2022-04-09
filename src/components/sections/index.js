const Sections = ({ secondText, firstText, leftRight, firstImg }) => {
  if (leftRight === true) {
    return (
      <div className="container sections">
        <div className="row">
          <div className="col-6 internal-first-section">
            <h2 className="h2-internal-first-section">{firstText}</h2>
            <h4 className="h4-internal-first-section">{secondText}</h4>
          </div>
          <div className="col-5 offset-1">
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
          <div className="col-5 offset-1">
            <img
              src={firstImg}
              alt="Foto"
              className="internal-first-section-img"
            />
          </div>
          <div className="col-6 internal-first-section">
            <h2 className="h2-internal-first-section">{firstText}</h2>
            <h4 className="h4-internal-first-section">{secondText}</h4>
          </div>
        </div>
      </div>
    );
  }
};

export default Sections;
