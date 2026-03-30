import "./footer.css";
export default function Footer() {
  return (
    <>
      {" "}
      <footer
        style={{ backgroundColor: "rgb(250,250,250" }}
        className="border-top"
      >
        <div className="container mt-5 ">
          <div className="row mt-5 mb-5">
            <div className="col">
              <img
                src="images/trade7.svg"
                style={{ width: "10rem" }}
                alt="logo"
              />
              <p className="text-muted mt-3 fs-6">
                &copy; 2010 - 2026, Trade7 Broking Ltd. <br /> All rights
                reserved.
              </p>
            </div>
            <div className="col">
              <p className="fs-5">Account</p>
              <a className="tag" href="">
                {" "}
                Open demat account{" "}
              </a>
              <a className="tag" href="">
                {" "}
                NRI demat account{" "}
              </a>

              <a className="tag" href="">
                {" "}
                Commodity{" "}
              </a>

              <a className="tag" href="">
                {" "}
                Dematerialisation{" "}
              </a>

              <a className="tag" href="">
                {" "}
                Minor demat account{" "}
              </a>

              <a className="tag" href="">
                {" "}
                Fund transfer{" "}
              </a>

              <a className="tag" href="">
                {" "}
                MTF{" "}
              </a>

              <a className="tag" href="">
                {" "}
                Referral program{" "}
              </a>
            </div>
            <div className="col">
              <p className="fs-5">Support</p>
              <a className="tag" href="">
                {" "}
                Contact us{" "}
              </a>

              <a className="tag" href="">
                {" "}
                Support portal
              </a>

              <a className="tag" href="">
                {" "}
                How to file a complaint?
              </a>

              <a className="tag" href="">
                {" "}
                Status of your complaints
              </a>

              <a className="tag" href="">
                {" "}
                Bulletin
              </a>

              <a className="tag" href="">
                {" "}
                Circular
              </a>

              <a className="tag" href="">
                Z-Connect blog
              </a>

              <a className="tag" href="">
                Downloads
              </a>
            </div>
            <div className="col">
              <p className="fs-5">Company</p>
              <a className="tag" href="">
                {" "}
                About
              </a>

              <a className="tag" href="">
                {" "}
                Philosophy
              </a>

              <a className="tag" href="">
                {" "}
                Press & media
              </a>

              <a className="tag" href="">
                {" "}
                Careers
              </a>

              <a className="tag" href="">
                {" "}
                Trade7 Cares (CSR)
              </a>

              <a className="tag" href="">
                {" "}
                Trade7.tech
              </a>

              <a className="tag" href="">
                {" "}
                Open source{" "}
              </a>
            </div>
          </div>
          <div
            className="mt-5  text-muted"
            style={{ fontSize: "10px", marginBottom: "25px" }}
          >
            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p>
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>

            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>

            <p>
              India's largest broker based on networth as per NSE. NSE broker
              factsheet
            </p>

            <p>
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>

            <p>
              *Customers availing insurance advisory services offered by Ditto
              (Tacterial Consulting Private Limited | IRDAI Registered Corporate
              Agent (Composite) License No CA0738) will not have access to the
              exchange investor grievance redressal forum, SEBI SCORES/ODR, or
              arbitration mechanism for such products.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
