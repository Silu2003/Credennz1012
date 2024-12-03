import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Contactus from "./pages/contactus";
import Service from "./pages/service";
import About from "./pages/about";


const router = createBrowserRouter([
  {
    path: "/", // Root path renders Home by default
    element: <Home />,
  },
  {
    path: "home", // Root path renders Home by default
    element: <Home />,
  },
  {
    path: "contactus",
    element: <Contactus />,
  },
  {
    path: "service",
    element: <Service />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
