import { Link } from "react-router-dom";
function Hero() {
  return (
    <>
      <div className="container p-5 mb-5">
        <div className="row text-center">
          <img
            src="images/homeHero.png"
            className="mb-5 mx-auto"
            alt="heroImage"
            style={{ width: "80%" }}
          />
          <h1 className="mt-2 fs-2">Invest in everything</h1>
          <h5 className="text-secondary fw-light mt-2 mb-4">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
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
export default Hero;
