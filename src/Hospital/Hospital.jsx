import React from "react";
import "./Hospital.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    color: "white",
    border: "1px solid white",
  },
});

function Hospital(props) {
  const classes = useStyles(props);
  function handleChange() {}
  return (
    <div className="detail_box">
      <div className="name">{props.name}</div>
      <div className="beds">{props.beds}</div>
      <Button variant="outlined" className={classes.root}>
        <Link
          to={{
            pathname: `/${props.name}/hospitalbeds`,
          }}
        >
          BOOK NOW
        </Link>
      </Button>
    </div>
  );
}

export default Hospital;
