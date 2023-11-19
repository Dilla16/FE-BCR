import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/404";
// import Search from "./cariMobil";
import Login from "./Login";
import Register from "./Register";
import Protected from "./pages/components/Protected";
import Image from "./DummyUpload";
import Navbar from "./pages/components/navbar";
import Footer from "./pages/components/footer";
import LayoutContextProvider from "./context/layoutContext";
import DummySearch from "./search";
import Carousel from "./pages/components/carousel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Protected>
      <Navbar />
      <Routes path="/">
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/home"
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
        <Route
          path="/search"
          element={<DummySearch />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/image"
          element={
            <LayoutContextProvider>
              <Image />
            </LayoutContextProvider>
          }
        />
        <Route
          path="/carimobil"
          element={<DummySearch />}
        />
        <Route
          path="/carousel"
          element={<Carousel />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </Protected>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
