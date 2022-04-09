const EmailForm = () => {
  return (
    <div className="row justify-content-center form-email-css">
      <div className="col-6 ">
        <form>
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <div className="row">
            <div className="col-8">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Adress"
              />
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-danger">
                GET STARTED ❯
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailForm;
