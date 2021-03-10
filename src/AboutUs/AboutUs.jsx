import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="section-team">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header-section">
              <h2 className="title">About our website</h2>
            </div>
          </div>
          <div className="aboutus">
            Presently, we are in midst of the global pandemic COVOD-19 and
            something like that can happen in near future also.
            <br />
            We all know the situations arised in the initial phase. The beds and
            ventilators in hospitals were started getting booked at a rapid rate
            and many patient havent got treatment due to flooded hospitals or we
            can say that as the patient were unaware of exactly which
            hospital(s) have some vacant beds.
            <br />
            So, we came up with an efficient idea of making this website which
            can give us the information about availability of beds and
            ventilators in an hospital across different cities of India. A
            patient can easily login to our website and book their beds in
            hospital for immediate treatment.
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-md-8 col-lg-6">
            <div className="header-section">
              <h2 className="title">About our team members</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <div className="single-person">
              <div className="person-image">
                <a href="https://www.linkedin.com/in/ashish-singh-b6928a1b0/">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    alt=""
                  />
                </a>
                <span className="icon">
                  <i className="fab fa-js"></i>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">Ashish Singh</h3>
                <span className="speciality">Integration Lead</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <div className="single-person">
              <div className="person-image">
                <a href="https://www.linkedin.com/in/shreya-dubey-18022001/">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQELmBw16Et0iQ/profile-displayphoto-shrink_400_400/0/1596308666894?e=1620864000&v=beta&t=73hKQKIkXj7f2rrH7RB-eXrSaXfQYX-TOFvIUBZO1hE"
                    alt=""
                  />
                </a>
                <span className="icon">
                  <i className="fab fa-html5"></i>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">Shreya Dubey</h3>
                <span className="speciality">Frontend Lead</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <div className="single-person">
              <div className="person-image">
                <a href="https://www.linkedin.com/in/vivek-k-m/">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C5603AQHms39GDi0qig/profile-displayphoto-shrink_400_400/0/1596888096223?e=1620864000&v=beta&t=Mk1HFB9OlTVbKnIV5GocHdW-Du7idgG7L5tIE98DO3A"
                    alt=""
                  />
                </a>
                <span className="icon">
                  <i className="fab fa-node"></i>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">Vivek Kr. Mishra</h3>
                <span className="speciality">Backend Lead</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <div className="single-person">
              <div className="person-image">
                <a href="https://www.linkedin.com/in/devansh-sharma-212211bb/">
                  <img
                    src="https://media-exp1.licdn.com/dms/image/C4E03AQHfRtckVwuEaQ/profile-displayphoto-shrink_400_400/0/1597043713571?e=1620864000&v=beta&t=VY4wEEojztkkc1x-NI0c-TDwlbpLKq7gIiNpelWL4x4"
                    alt=""
                  />
                </a>
                <span className="icon">
                  <i className="fab fa-html5"></i>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">Devansh Sharma</h3>
                <span className="speciality">Frontend Developer</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <div className="single-person">
              <div className="person-image">
                <a href="https://www.linkedin.com/in/amit-kumar-1023191b4/">
                  <img
                    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                    alt=""
                  />
                </a>
                <span className="icon">
                  <i className="fab fa-html5"></i>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">Amit Kumar</h3>
                <span className="speciality">Frontend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
