import { useState } from "react";
import UserContext from "./context/UserContext.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import Income from "./components/Wallet/Income.js";
import Outcome from "./components/Wallet/Outcome.js";
import Wallet from "./components/Wallet/Wallet"

export default function App() {
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider
      value={{ token, setToken }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/home" element={<Wallet />} />
          <Route path="/deposit" element={<Income />} />
          <Route path="/withdraw" element={<Outcome />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}