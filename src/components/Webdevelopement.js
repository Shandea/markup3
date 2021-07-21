import React from "react";

export default function Webdevelopement() {
  return (
    <div className="webBody">
      <h1 className="textStyling">Website Developement Page </h1>
      <form className="contactform">
      <div className="inputArea">
        <h3 className="textStyling">Please contact us for a free quote</h3>
          <label for="name">
            <input className="firstName" type="text" placeholder="First Name" />
            <input className="lastName" type="text" placeholder="Last Name" />
          </label>
          <br />
          <label for="email">
            <input className="email" type="text" placeholder="Email" />
          </label>
          <br />
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
