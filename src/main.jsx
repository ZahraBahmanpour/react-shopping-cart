import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Layout from "./layouts/Layout.jsx";
import ProductsPage, {
  ProductsWithLoader,
} from "./pages/ProductsPage-customHook.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ProductDetailsPage, {
  loader as productLoader,
} from "./pages/ProductDetailsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import CreateProductPage from "./pages/CreateProductPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        // loader: productsLoader,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailsPage />,
        // loader: productLoader,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
  {
    path: "/create",
    element: <CreateProductPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
