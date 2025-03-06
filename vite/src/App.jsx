import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Header } from './components/navbar/Navbar'
import Navbar from "./components/navbar/Navbar2";
import { ToastProvider } from "./context/ToastContext";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import StockPage from "./pages/StockPage";
import ProductsPage from "./pages/ProductsPage";
import PlanPage from "./pages/PlanPage";
import SalesPage from "./pages/SalesPage";
import SupportPage from "./pages/SupportPage";
import ForgotPass from "./components/login/ForgotPass";
import { Page404 } from "./pages/Page404";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";  // <-- Import ToastContainer

const App = () => {
  return (
    <div>
      <AuthProvider>
        <ToastProvider>
          <Navbar />
          <Routes>
            <Route path="/signin" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/dashboard" element={<ProtectedRoute element={<DashboardPage />} />} />
            <Route
              path="/stock"
              element={<ProtectedRoute element={<StockPage />} />}
            />
            <Route
              path="/products"
              element={<ProtectedRoute element={<ProductsPage />} />}
            />
            <Route
              path="/sales"
              element={<ProtectedRoute element={<SalesPage />} />}
            />
            <Route
              path="/plan"
              element={<ProtectedRoute element={<PlanPage />} />}
            />
            <Route
              path="/support"
              element={<ProtectedRoute element={<SupportPage />} />}
            />
            <Route path="*" element={<Page404 />} />
            <Route
              path="/pass_reset"
              element={<ForgotPass/>}
            />
          </Routes>
          <Footer />
          <ToastContainer position="top-right" autoClose={3000} /> 
        </ToastProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
