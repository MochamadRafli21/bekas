import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home";
import ProductDetail from "./components/pages/product-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:slug",
    element: <ProductDetail />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
