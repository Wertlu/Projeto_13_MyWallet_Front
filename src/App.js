import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import SignUp from "./components/Signup/Signup.js";
import Wallet from "./wallet/Wallet.js";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Login />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route> */}
                              <Route path="/" element={<Wallet />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}