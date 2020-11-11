import React from "react";
import phone from "../assets/phone.jpg";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <div
      id="howItWorks"
      style={{
        textAlign: "center",
        paddingTop: "2%",
      }}
    >
      <h1>How it works - Plain Simple</h1>

      <div
        className="all"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <img src={phone} />
        </div>

        <div style={{ paddingRight: "3%" }}>
          <div className="step">
            <span className="num">1</span>
            <p className="p" style={{ margin: "auto" }}>
              Login or Sign up to choose the meal you would like to prepare in
              your own kitchen.
            </p>
          </div>

          <div className="step">
            <span className="num">2</span>
            <p className="p" style={{ margin: "auto" }}>
              Order your meal and finish the payment process to receive initiate
              the delivery of fresh ingredients directly to your front door.
            </p>
          </div>

          <div className="step">
            <span className="num">3</span>
            <p className="p" style={{ margin: "auto" }}>
              Receive your order in less than 30 min. Follow prepartion
              instructions and enjoy your healthy and delicious meal with your
              family and friends.
            </p>
          </div>
        </div>
      </div>

      <div style={{ paddingBottom: "3%" }}>
        <span
          style={{ marginRight: "2%" }}
          className="iconify store"
          data-icon="logos:apple-app-store"
          data-inline="false"
        ></span>
        <span
          className="iconify store"
          data-icon="flat-ui:google"
          data-inline="false"
        ></span>
      </div>
    </div>
  );
}
