import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import styles from "./layout.module.css";
import Products from "../../pages/Products/products";
import Admin from "../../pages/Admin/admin";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import ProductDetails from "../../pages/ProductDetails/product-details";

function Layout() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.containerMain}>
        <Header />
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
