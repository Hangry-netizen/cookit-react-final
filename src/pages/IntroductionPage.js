import React from "react";
import logo from "../assets/logo.png";

export default function IntroductionPage() {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "3%",
        height: "100vh",
        backgroundColor: "#D8D8D8",
      }}
    >
      <div
        style={{
          width: "50vw",
          margin: "auto",
          borderBottom: "1px solid orange",
        }}
      >
        <h2>GET YOUR COOK KIT — BECOME A MASTER CHEF</h2>
        <p>
          Hello, we're Cookit, your new premium meal ingredients delivery
          service. We know you're always busy. No time for shopping groceries.
          So let us take care of that, we're really good at it, we promise!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          margin: "10%",
          padding: "3%",
          margin: "0",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "280%",
              marginRight: "2%",
              marginBottom: "2%",
            }}
            class="iconify"
            data-icon="emojione:pot-of-food"
            data-inline="false"
          ></span>
          <h4>Available All Year</h4>
          <p>
            Forget about spending time in super markets and finding the right
            ingredients. We have the perfect solution for you. All year around
            we are there for you to deliver the finest ingredients for the most
            delicious meals.
          </p>
        </div>
        <div>
          <span
            style={{ fontSize: "280%", marginRight: "2%", marginBottom: "2%" }}
            class="iconify"
            data-icon="emojione:alarm-clock"
            data-inline="false"
          ></span>
          <h4>30 Minute Delivery </h4>
          <p>
            In less than 30 minutes you could have access to ingredients that
            will provide you with a healthy mix of nutrients and amazing tastes.
            We work with the best suppliers of local organic providers in each
            area we operate. To ensure your maximum satisfaction.
          </p>
        </div>
        <div>
          <span
            style={{ fontSize: "280%", marginRight: "2%", marginBottom: "2%" }}
            class="iconify"
            data-icon="twemoji:carrot"
            data-inline="false"
          ></span>
          <h4>Local and Organic</h4>
          <p>
            The ingredienst we deliver are all local, organic and extrem fresh.
            We source our meat only from animals that have been raised without
            hormones or antibiotics. This makes for a better taste, health and
            is amazing for our environment.
          </p>
        </div>
        <div>
          <span
            style={{
              fontSize: "280%",
              marginRight: "2%",
              marginBottom: "2%",
            }}
            class="iconify"
            data-icon="fxemoji:deliverytruck"
            data-inline="false"
          ></span>
          <h4>Order Now</h4>
          <p>
            Never buy ingredients again! We really mean that. Our service
            include daily coverage. You can also choose to order more flexibly
            if that's your style.
          </p>
        </div>
      </div>
    </div>
  );
}
