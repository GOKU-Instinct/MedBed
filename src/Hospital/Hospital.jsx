import React from "react";
import "./Hospital.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
});

function Hospital(props) {
  const classes = useStyles(props);
  return (
    <div className="detail_box">
      <div className="name">{props.name}</div>
      <Button variant="outlined" className={classes.root}>
        BOOK NOW
      </Button>
    </div>
  );
}

export default Hospital;
