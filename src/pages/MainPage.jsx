import React from "react";
import Carousel from "../components/Carousel";
const MainPage = () => {
  return (
    <div style={{ backgroundColor: "#FFC56E" }}>
      <Carousel />
      <div
        className="container"
        style={{
          padding: "50px",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#FFC56E",
        }}
      >
        <h1>Welcome to Hotel Shalom</h1>
        <p>
          Discover the comfort and convenience of modern living at Shalom.
          Located in the heart of Prayagraj, our homestays offer the perfect
          blend of luxury and affordability. Whether you’re a student, a
          professional, or a family, we have the perfect space to suit your
          lifestyle.
        </p>
      </div>

      <div
        className="container"
        style={{
          padding: "50px",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          backgroundColor: "#FFC56E",
        }}
      >
        <h1>Welcome to Hotel Shalom</h1>
        <p>
          Discover the comfort and convenience of modern living at Shalom.
          Located in the heart of Prayagraj, our homestays offer the perfect
          blend of luxury and affordability. Whether you’re a student, a
          professional, or a family, we have the perfect space to suit your
          lifestyle.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
