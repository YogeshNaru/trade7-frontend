export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="text-center mt-5 p-5 mb-5">
          <h1 className="fs-2">Trade7 Products</h1>
          <h3 className="text-muted mt-3 fs-4">
            Sleek, modern, and intuitive trading platforms
          </h3>
          <p className="mt-3 text-muted">
            Check out our{" "}
            <a style={{ textDecoration: "none" }} href="">
              investment offerings
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
