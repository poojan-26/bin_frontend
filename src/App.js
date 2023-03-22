import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Billing from "./pages/Checkout";
import Zipcode from "./pages/Zipcode";
import Signup from "./pages/Signup";
import CheckoutSuccess from "./pages/Success";
import Franchisee from "./pages/franchisee";
import "@fontsource/source-sans-pro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Zipcode />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<CheckoutSuccess />} />
        <Route path="/signupFranchisee" element={<Franchisee />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);

export default App;
