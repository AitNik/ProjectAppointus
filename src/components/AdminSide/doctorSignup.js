import React from "react";
import doctorSignupCard from "./doctorSignupCard";

function doctorSignup() {
  // Logic for future use
  // const [LoginType, setLoginType] = useState("login")
  return (
    <>
      <div
        className="image-part"
        style={{
          display: "flex",
          // gridTemplateColumns: "auto auto",
          alignItems: "center",
          alignContent: "space-around",
          justifyContent: "space-around",
          margin: "0rem 1rem 0rem 1rem",
        }}
      >
        <doctorSignupCard />
        <img
          alt=""
          src={require("./steps.png")}
          style={{ height: "40rem", width: "40rem" }}
        ></img>
      </div>
    </>
  );
}

export default doctorSignup;
