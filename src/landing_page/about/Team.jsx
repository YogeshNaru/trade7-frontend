export default function Team() {
  return (
    <>
      <div className="container mb-5">
        <div className="row p-5 ">
          <h1 className=" text-center fs-3">People</h1>
        </div>

        <div className="row  ">
          <div className="col-2"></div>
          <div className="col-4 text-center">
            <img
              src="/images/myphoto.jpeg"
              alt="myphoto"
              style={{ borderRadius: "100%", width: "80%" }}
            />
            <div className="name text-center mt-3">
              <h4 className="fw-light ">Yogesh Naru</h4>
              <h6 className="text-muted">Developer</h6>
            </div>
          </div>
          <div
            className="col-5 mt-5 "
            style={{ wordSpacing: "3px", letterSpacing: "0.7px" }}
          >
            <p>
              Hi, I'm Yogesh, a software engineer who enjoys building full-stack
              web applications. I created this project to sharpen my development
              skills while building something real from the ground up and
              understanding how modern web platforms are designed and developed.
            </p>
            <p>
              Through this project, I focus on learning and applying modern
              technologies while working on both frontend and backend to build
              clean, simple, and practical applications.
            </p>
            <p>Building things on the web is what I enjoy the most..</p>
            <p>
              Connect on{" "}
              <a style={{ textDecoration: "none" }} href="">
                Portfolio
              </a>{" "}
              /{" "}
              <a style={{ textDecoration: "none" }} href="">
                GitHub
              </a>{" "}
              /{" "}
              <a style={{ textDecoration: "none" }} href="">
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
