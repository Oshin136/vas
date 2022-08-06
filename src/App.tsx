import "antd/dist/antd.css";
import "./App.css";
import PageRoutes from "./pageRoutes/PageRoutes";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
