import Landing from "./assets/image/Landing1.png";
import Logo from "./assets/image/Logo.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";

function Register(props) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    address: "",
    password: "",
  });
  const [errMsg, setErrMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isRegisterDone, setIsRegisterDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsRegisterDone(false);
      setErrMsg("");
      const payLoad = {
        ...formData,
      };
      const res = await axios.post("http://localhost:8000/register", payLoad);
      console.log(res.data);
    } catch (err) {
      console.log(err);
      setErrMsg(err.respose?.data?.message || "Failed to Register");
    } finally {
      setIsRegisterDone(true);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/cars")
      .then((data) => console.log("data"))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div
        className="w-full lg:w-1/2 bg-white p-8 flex justify-center items-center"
        id="left-side"
      >
        <div className="w-2/3">
          <img src={Logo} />
          <p className="mb-4">Sign In</p>
          {isRegisterDone && <Alert severity={errMsg ? "error" : "success"}>{errMsg ? errMsg : "Register Successfully — Please go to Login Page!"}</Alert>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone_number"
                className="block mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block mb-2"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white rounded-lg py-2"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4">
            Already have an account? <a href="#">Log In here</a>
          </p>
        </div>
      </div>
      <div
        className="w-1/2 bg-blue-700"
        id="right-side"
      >
        <h1 className=" text-5xl text-slate-300 font-sans absolute top-10 ps-32">Binar Car Rental</h1>

        <img
          src={Landing}
          className=" fixed bottom-0 right-0"
          width={650}
        />
      </div>
    </div>
  );
}
export default Register;
