import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  cover: {
    height: 100,
    width: 100,
  },
}));

const ShoppingCartItem = ({ title, count, price, image }) => {
  const classes = useStyles();

  return (
    <CardContent>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={9}>
            <CardContent className={classes.content}>
              <Typography variant="subtitle1" color="textSecondary">
                {title}
              </Typography>
              <label>{count}</label>
              <label>*</label>
              <label>${price}</label>
            </CardContent>
          </Grid>
          <Grid item xs={3}>
            <CardMedia className={classes.cover} image={image} />
          </Grid>
        </Grid>
      </div>
    </CardContent>
  );
};

export default ShoppingCartItem;
