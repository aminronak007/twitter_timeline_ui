import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ToastContainer hideProgressBar />
      <Routes />
    </React.Suspense>
  );
}

export default App;
