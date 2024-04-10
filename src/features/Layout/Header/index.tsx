import * as React from "react";
import styles from "./header.module.css";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { Badge, Button, Menu, MenuItem } from "@mui/material";

function Header() {
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
        <Button variant="contained">ASYNC</Button>

        <Button
          variant="outlined"
          color="error"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}>
          Language
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
          <MenuItem onClick={handleClose}>English</MenuItem>
          <MenuItem onClick={handleClose}>Azerbaijan</MenuItem>
        </Menu>
      </div>
    </header>
  );
}

export default Header;
