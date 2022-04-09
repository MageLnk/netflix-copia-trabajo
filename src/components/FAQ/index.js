// Importantes

// Componentes internos
import EmailForm from "../emailForm";
// CSS

// Textos e IMG's
const Faq = () => {
  return (
    <div className="container faq-container">
      <div className="row">
        <div className="col faq-introduction">
          <h2>Frequently Asked Questions</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item border-accordion">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed internal-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What is Netflix
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries, and
                    more on thousands of internet-connected devices.
                  </p>
                  <p>
                    You can watch as much as you want, whenever you want without
                    a single commercial – all for one low monthly price. There's
                    always something new to discover and new TV shows and movies
                    are added every week!
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-accordion">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed internal-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How much does Netflix cost?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from CLP5,940 to CLP10,700 a month. No extra costs, no
                    contracts.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item border-accordion">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed internal-accordion"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Where can I watch?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p>
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles.
                  </p>
                  <p>
                    You can also download your favorite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    you're on the go and without an internet connection. Take
                    Netflix with you anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5">
          <p className="text-ready">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
      </div>
      <EmailForm />
    </div>
  );
};

export default Faq;
