import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://trade7-backend.onrender.com/api/user/login",
        {
          email,
          password,
        }
      );

      const data = res.data;

      if (data.token) {
        // Save token
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.user.name);

        // Redirect to dashboard
        toast.success("Welcome back! 🚀");
        setTimeout(() => {
          window.location.href = `https://trade7-dashboard.vercel.app/?token=${data.token}&name=${data.user.name}`;
        }, 1500);
      } else {
        toast(data.message);
      }
    } catch (err) {
      toast(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <div className="container mb-5">
        <div className="row text-center mt-5 mb-5">
          <h3 className="mt-3 mb-3">
            Open a free demat and trading account online
          </h3>
          <h4 className="mb-3 text-muted fw-light">
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </h4>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <img
              style={{ width: "100%" }}
              src="images/acop-benefits.svg"
              alt="account-img"
            />
          </div>
          <div className="col-5 ms-5">
            <h3>Login</h3>
            <form onSubmit={handleSubmit} className="mt-3 input-container">
              <input
                className="input mb-3 py-2"
                style={{ width: "350px" }}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                className="input mb-3 py-2"
                style={{ width: "350px" }}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button
                className="p-2 fs-5 btn btn-primary mt-3 px-5 mb-1"
                type="submit"
              >
                Login
              </button>
            </form>
            <p className="text-muted fw-light">
              Don't have an account?{" "}
              <Link className="text-decoration-none" to="/signup">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
