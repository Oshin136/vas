import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { LoginProvider } from "./components/contexts/LoginContext";
import PageRoutes from "./components/pageRoutes/PageRoutes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
