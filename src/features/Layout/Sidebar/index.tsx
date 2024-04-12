import styles from "./sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate()

  const refreshPage = ()=>{
    navigate("/")
    window.location.reload()
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <img
          src="data:image/png;base64,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"
          alt="Logo"
        />
      </div>

      <ul>
        <Link to="/" onClick={refreshPage} >
          <li>
            <HomeIcon
              style={{
                color: "#fff",
                fontSize: "30px",
              }}
            />{" "}
            {t("HOME")}
          </li>
        </Link>
        <Link to="/products" onClick={refreshPage}>
          <li>
            <ShoppingBasketOutlinedIcon
              style={{
                color: "#fff",
                fontSize: "30px",
              }}
            />{" "}
            {t("PRODUCTS")}
          </li>
        </Link>
        <Link to="/admin">
          <li>
            <SupervisorAccountOutlinedIcon
              style={{
                color: "#fff",
                fontSize: "30px",
              }}
            />{" "}
            {t("ADMIN")}
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
