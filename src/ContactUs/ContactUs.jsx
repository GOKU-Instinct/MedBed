import React from "react";
import "./ContactUs.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Nav from "../Nav";

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
  let history = useHistory();

  const [newMessage, setNewMessage] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNewMessage((previousValues) => {
      return {
        ...previousValues,
        [name]: value,
      };
    });
  }

  function sendData() {
    axios
      .post("http://localhost:5400/contact", newMessage)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function submitMessage(event) {
    event.preventDefault();
    sendData();
    setNewMessage({
      name: "",
      email: "",
      message: "",
    });
    history.push("/");
  }

  return (
    <>
      <Nav></Nav>
      <div className="ContactUs">
        <div className="contactHeading">
          <h1>Contact Us</h1>
          <p>
            Email or call us with any questions or inquires. We would be happy
            to answer your question.
          </p>
        </div>
        <div className="flexContainer">
          <div className="contactDetails flexItem">
            <div className="contact_wrapper">
              <div className="locationImg">
                <i className="fas fa-map-marker-alt fa-2x"></i>
              </div>
              <div className="address">
                <h3>Address</h3>
                <p>221 Baker London, England</p>
              </div>
            </div>
            <div className="contact_wrapper">
              <div className="phoneImg">
                <i className="fas fa-phone-alt fa-2x"></i>
              </div>
              <div className="phone">
                <h3>Phone</h3>
                <p>123456789</p>
              </div>
            </div>
            <div className="contact_wrapper">
              <div className="emailImg">
                <i className="far fa-envelope fa-2x"></i>
              </div>
              <div className="email">
                <h3>Email</h3>
                <p>medbed@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contactbox flexItem">
            <h2 className="contactboxHeading">Send Message</h2>
            <form
              className={classes.root}
              action="contactus.html"
              method="post"
            >
              <TextField
                className="inputUserEmail"
                type="text"
                name="Full Name"
                id="UserName"
                label="Full Name"
                onChange={handleChange}
              />

              <TextField
                className="inputUserEmail"
                type="text"
                name="Email"
                id="UserEmail"
                label="Email"
                onChange={handleChange}
              />
              <br></br>

              <div className="UserMessage">
                <label for="UserMessage">Type your message here</label>
                <br></br>
                <br></br>
                <textarea
                  id="UserMessage"
                  name="message"
                  rows="4"
                  cols="45"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="button_">
                <button
                  type="button"
                  onClick={submitMessage}
                  className="btn btn-primary"
                >
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
