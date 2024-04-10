import styles from "./Card.module.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

function Cards() {
  return (
    <Card sx={{ width: 250, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            title
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            name price
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button sx={{fontSize:"10px", marginTop:"7px"}} variant="contained">Add basket</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Cards;
