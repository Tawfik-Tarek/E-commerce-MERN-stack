import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import components that should be loaded immediately
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

// Lazy load other components
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const AdminRoute = lazy(() => import("./routes/AdminRoute"));
const PrivateRoute = lazy(() => import("./routes/PrivateRoute"));
const CreateProduct = lazy(() => import("./pages/CreateProduct"));
const CreateCategory = lazy(() => import("./pages/CreateCategory"));
const UpdateProduct = lazy(() => import("./pages/UpdateProduct"));
const ManageProducts = lazy(() => import("./pages/ManageProducts"));
const ManageUsers = lazy(() => import("./pages/ManageUsers"));
const UpdateUser = lazy(() => import("./pages/updateUser"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const ProductsByCategory = lazy(() =>
  import("./components/ProductsByCategory")
);
const CartPage = lazy(() => import("./pages/CartPage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const ProductPage = lazy(() => import("./components/ProductPage"));
const AdminPage = lazy(() => import("./pages/AdminPage"));

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductsPage />}>
            <Route path="page/:pageNumber" element={<ProductsPage />} />
          </Route>
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="" element={<AdminRoute />}>
            <Route path="admin" element={<AdminPage />} />
            <Route path="admin/manage-products" element={<ManageProducts />} />
            <Route path="admin/add-product" element={<CreateProduct />} />
            <Route path="admin/edit-product/:id" element={<UpdateProduct />} />
            <Route path="admin/manage-users" element={<ManageUsers />} />
            <Route path="admin/edit-user/:id" element={<UpdateUser />} />
            <Route path="admin/add-category" element={<CreateCategory />} />
          </Route>
          <Route path="" element={<PrivateRoute />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/category/:id" element={<ProductsByCategory />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
