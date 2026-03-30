export default function Brokerage() {
  return (
    <>
      <div className="container">
        <div className="row p-5 mt-5 text-center border-top">
          <div className="col-8 p-4">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">Brokerage calculator</h3>
            </a>
            <ul
              style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
              className="text-mut"
            >
              <li>
                Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                GST per order.
              </li>
              <li>Digital contract notes will be sent via e-mail.</li>
              <li>
                Physical copies of contract notes, if required, shall be charged
                ₹20 per contract note. Courier charges apply.
              </li>
              <li>
                For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For NRI account (PIS), 0.5% or ₹200 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged ₹40 per executed order instead of ₹20 per executed
                order.
              </li>
            </ul>
          </div>
          <div className="col-4 p-4">
            <a href="" style={{ textDecoration: "none" }}>
              <h3 className="fs-5">List of charges</h3>
            </a>
            <ul
              style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
              className="text-mut"
            >
              <li>
                BSE has revised transaction charges in XC, XD, XT, Z and ZP
                groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups
                have been merged into a new group X w.e.f 01.12.2017)
              </li>
              <li>
                BSE has revised transaction charges in SS and ST groups to
                ₹1,00,000 per crore of gross turnover.
              </li>
              <li>
                Charged at ₹10 per crore + GST by Securities and Exchange Board
                of India for regulating the markets.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
