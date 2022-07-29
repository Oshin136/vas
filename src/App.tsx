import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { LoginProvider } from "./components/contexts/LoginContext";
import PageRoutes from "./components/pageRoutes/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      {/* <LoginProvider> */}
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
      {/* </LoginProvider> */}
    </Provider>
  );
}

export default App;
