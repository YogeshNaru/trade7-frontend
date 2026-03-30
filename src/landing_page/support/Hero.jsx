export default function Hero() {
  return (
    <>
      <section className="container-fluid" id="supportHero">
        <div className="p-5 " id="supportWrapper">
          <h4>Support Portal</h4>
          <a href="">Track Tickets</a>
        </div>
        <div className="row px-5 m-3">
          <div className="col-1"></div>
          <div className="col-6 p-3">
            <h1 className="fs-3">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input
              className="mb-3 mt-3"
              placeholder="Eg. how do I activate F&O, why is my order getting rejected.."
            />
            <br />
            <a className="atag" href="">
              Track account opening
            </a>
            <a className="atag" href="">
              Track segment activation
            </a>
            <a className="atag" href="">
              Intraday margins
            </a>
            <a className="atag" href="">
              Kite user manual
            </a>
          </div>
          <div className="col-1"></div>
          <div className="col-4 p-3">
            <h1 className="fs-3">Featured</h1>
            <ol style={{ lineHeight: "2.5" }}>
              <li>
                <a href="">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="">Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </>
  );
}
