const EmailForm = () => {
  return (
    <div className="row justify-content-center form-email-css">
      <div className="col-6 ">
        <form>
          <label for="exampleInputEmail1" class="form-label"></label>
          <div className="row">
            <div className="col-8">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
              />
            </div>
            <div className="col-4">
              <button type="submit" class="btn btn-danger">
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
