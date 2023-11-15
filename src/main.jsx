import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalContextProvider } from "./context/GlobalContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
    <GlobalContextProvider>
        <App/>
        <ToastContainer position="top-center"/>
    </GlobalContextProvider>
);
