import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://trade7-backend.onrender.com/api/user/signup",
        {
          name,
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
        toast.success("Account created successfully 🎉");
        setTimeout(() => {
          window.location.href = `trade7-dashboard.vercel.app/?token=${data.token}&name=${data.user.name}`;
        }, 1500);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
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
            <img src="images/account_open.svg" alt="account-img" />
          </div>
          <div className="col-5 ms-5 input-container">
            <h3 className="mb-3">Signup now</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input mb-3 py-2 border-none"
                style={{ width: "500px" }}
                placeholder="Name"
              />
              <br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input mb-3 py-2"
                style={{ width: "500px" }}
                placeholder="Email"
              />
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" input mb-3 py-2"
                style={{ width: "500px" }}
                placeholder="Password"
              />
              <br />
              <button
                className="p-2 fs-5 btn btn-primary mt-3 px-5 mb-1"
                type="submit"
              >
                Signup
              </button>
            </form>
            <p className="text-muted fw-light">
              Already have an account?{" "}
              <Link className="text-decoration-none" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
