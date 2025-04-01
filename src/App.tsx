import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import useSetBaseValues from "./hooks/common/useSetBaseValues";
import mainRouter from "./routes";

function App() {
  useSetBaseValues();
  return (
    <>
      <RouterProvider router={mainRouter} />
      <ToastContainer />
    </>
  );
}

export default App;
