// Importantes

// Componentes internos
import EmailForm from "../emailForm";
// CSS
const SectionOne = () => {
  return (
    <div className="container-fluid bg-section-one">
      <div className="row justify-content-center">
        <div className="col-4">
          <p className="h1">Unlimited movies, TV shows, and more.</p>
          <p className="h4">Watch anywhere. Cancel anytime</p>
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

export default SectionOne;
