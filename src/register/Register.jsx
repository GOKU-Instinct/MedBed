import React from "react";
import "./Register.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "75ch",
  },
}));

function Register() {
  const classes = useStyles();
  return (
    <React.Fragment className="Register">
      <section>
        <div className="register-heading">
          <h1>Registeration</h1>
          <p>Input proper details to get registered</p>
        </div>
      </section>
      <div className="register">
        <form>
          <div className="slots">
            <div className="hospital-label">
              Hospital Name
              <span className="star">*</span>
            </div>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              //   label="Required"
              variant="outlined"
              required
            />
          </div>
          <div className="slots">
            <div className="hospital-label">
              Hospital Registration number
              <span className="star">*</span>
            </div>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              //   label="Required"
              variant="outlined"
              required
            />
          </div>

          <div className="slots">
            <div className="hospital-label">
              Mobile Number
              <span className="star">*</span>
            </div>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              //   label="Required"
              variant="outlined"
              required
            />
          </div>

          <div className="slots">
            <div className="hospital-label">
              Hospital Email Id
              <span className="star">*</span>
            </div>
            <TextField
              className={classes.textField}
              id="outlined-basic"
              //   label="Required"
              variant="outlined"
              required
            />
          </div>

          <input type="submit" value="Submit"></input>

          <div style={{ color: "black" }}>
            fields marked with <span className="star">*</span> are compulsory
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Register;
