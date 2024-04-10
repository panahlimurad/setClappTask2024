import * as React from "react";
import styles from "./header.module.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Badge, Button, Menu, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={styles.container}>
      <div>
        <Button variant="contained">{t("ASYNC")}</Button>

        <Button
          variant="outlined"
          color="error"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}>
          {t("LANGUAGE")}
        </Button>
        <Badge badgeContent={1} color="primary">
          <ShoppingBasketOutlinedIcon
            style={{
              color: "white",
              fontSize: "40px",
            }}
          />
        </Badge>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}>
          <MenuItem onClick={() => changeLang("en")}>English</MenuItem>
          <MenuItem onClick={() => changeLang("az")}>Azerbaijan</MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
