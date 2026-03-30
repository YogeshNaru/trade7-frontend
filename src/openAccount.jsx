import { Link } from "react-router-dom";

function openAccount() {
  return (
    <>
      <div className="container p-5 mb-5 mt-5">
        <div className="row text-center">
          <h1 className="mt-2 fs-2">Open a Trade7 account</h1>
          <h5 className="text-secondary fw-light mt-2 mb-4">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </h5>
          <Link
            className="p-2 fs-5 btn btn-primary mt-3"
            style={{ width: "15%", margin: "0 auto" }}
            to="/signup"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </>
  );
}
export default openAccount;
