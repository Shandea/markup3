import React, { useState } from "react";
import emailjs from 'emailjs-com';


const Webdevelopement = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject:""
  });
  const onChangeUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fok7ni4', 'template_oic68dn', e.target, 'user_mpjYJ5MjFKGH3OwW3i9GU').then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
  };
  return (
    <div className="webBody">
      <h1 className="textStyling">Website Developement Page </h1>
      <form className="contactform" onSubmit={onSubmit}>
        <div className="inputArea">
          <h3 className="textStyling">Please contact us for a free quote</h3>
          <label for="name">
            <input
              className="firstName"
              type="text"
              value={user.firstname}
              name="firstname"
              placeholder="First Name"
              onChange={onChangeUser}
            />
            <input
              className="lastName"
              type="text"
              value={user.lastname}
              name="lastname"
              placeholder="Last Name"
              onChange={onChangeUser}
            />
          </label>
          <br />
          <label for="email">
            <input
              className="email"
              type="text"
              value={user.email}
              name="email"
              placeholder="Email"
              onChange={onChangeUser}
            />
          </label>
          <br />
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Webdevelopement;
