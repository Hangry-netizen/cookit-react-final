import React from "react";
import "./FooterPage.css";

const FooterPage = () => {
  return (
    <div
      style={{
        border: "0",
        height: "26vh",
        backgroundColor: "#333",
        margin: "0",
        paddingTop: "2%",
      }}
    >
      <div style={{ padding: "0", margin: "0" }}>
        <ul>
          <li className="list-unstyled">
            <a className="a" href="#!">
              <span
                className="iconify-inline"
                data-icon="ion-social-pinterest"
              ></span>
            </a>
          </li>
          <li className="list-unstyled">
            <a className="a" href="#!">
              <span
                className="iconify-inline"
                data-icon="ion-social-facebook"
              ></span>
            </a>
          </li>
          <li className="list-unstyled">
            <a className="a" href="#!">
              <span
                className="iconify-inline"
                data-icon="ion-social-twitter"
              ></span>
            </a>
          </li>
          <li className="list-unstyled">
            <a className="a" href="#!">
              <span
                className="iconify-inline"
                data-icon="ion-social-instagram"
              ></span>
            </a>
          </li>
        </ul>
        <ul>
          <li className="list-unstyled">
            <a className="a" href="#!">
              <p>About Us</p>
            </a>
          </li>
          <li className="list-unstyled">
            <a className="a" href="#!">
              <p>iOS</p>
            </a>
          </li>
          <li className="list-unstyled">
            <a href="#!">
              <p>Android</p>
            </a>
          </li>
          <li className="list-unstyled">
            <a className="a" href="#!">
              <p>Blog</p>
            </a>
          </li>
        </ul>

        <div style={{ textAlign: "center", backgroundColor: "#333" }}>
          <p>&#169; Copyright 2020 Cookit</p>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
