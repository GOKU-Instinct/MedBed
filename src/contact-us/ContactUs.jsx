import React from "react";
import "./ContactUs.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
    },
  },
}));

function ContactUs() {
  const classes = useStyles();

  return (
    <>
      <div className="ContactUs">
        <div className="contactHeading">
          <h1>Contact Us</h1>
          <p>
            Eamil or call us with any questions or inquires. We would be happy
            to answer your question.
          </p>
        </div>
        <div className="flexContainer">
          <div className="contactDetails flexItem">
            <div className="locationImg">
              <i className="fas fa-map-marker-alt fa-2x"></i>
            </div>
            <div className="address">
              <h3>Address</h3>

              <p>
                221 Baker Street <br></br>
                London, England
              </p>
            </div>
            <div className="phoneImg">
              <i className="fas fa-phone-alt fa-2x"></i>
            </div>
            <div className="phone">
              <h3>Phone</h3>
              <p>123456789</p>
            </div>

            <div className="emailImg">
              <i className="far fa-envelope fa-2x"></i>
            </div>
            <div className="email">
              <h3>Email</h3>
              <p>messigoat@gmail.com</p>
            </div>
          </div>

          <div className="contactbox flexItem">
            <h2 className="contactboxHeading">Send Message</h2>
            <form
              className={classes.root}
              action="contactus.html"
              method="post"
            >
              <TextField id="standard-basic" label="Name" />

              <TextField id="standard-basic" label="Email" />

              <div className="UserMessage">
                <label for="UserMessage">Type your message here</label>
                <br></br>
                <textarea
                  id="UserMessage"
                  name="message"
                  rows="4"
                  cols="45"
                ></textarea>
              </div>
              <div className="button_">
                <button type="button" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;