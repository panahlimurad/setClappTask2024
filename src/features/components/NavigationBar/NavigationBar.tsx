import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link,useNavigate } from "react-router-dom";
import styles from './NavigationBar.module.css'

function NavigationBar() {
  const navigate = useNavigate()
 
 
  const [t] = useTranslation();
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const refreshPage = ()=>{
    navigate("/")
    window.location.reload()
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.navigationContainer}>
      <Box sx={{backgroundColor:"red",width:"100%"}}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}>
          <BottomNavigationAction 
          component={Link}
          onClick={refreshPage}
          to="/" 
          label={t("HOME")} 
          icon={<HomeIcon />} />
          <BottomNavigationAction
            component={Link}
            to="/products"
            onClick={handleClick}
            label={t("PRODUCTS")}
            icon={<ShoppingBasketOutlinedIcon />}
          />
          <BottomNavigationAction
          component={Link}
          to="/admin"
            label={t("ADMIN")}
            icon={<SupervisorAccountOutlinedIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default NavigationBar;
