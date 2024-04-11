import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SupervisorAccountOutlinedIcon from "@mui/icons-material/SupervisorAccountOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NavigationBar() {

  const [t, i18n] = useTranslation();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const refreshPage = ()=>{
    window.location.reload()
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box>
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
      {/* <List
  disablePadding={true}
      sx={{
        // zIndex:1000,
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {open && [0, 1, 2, 3, 4].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {[0, 1, 2].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText secondary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List> */}
    </>
  );
}

export default NavigationBar;
