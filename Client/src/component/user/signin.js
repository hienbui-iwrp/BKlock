import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { Modal,Image} from '@mantine/core';

import "../../css/signin.css";

export default function Signup() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [opened, setOpened] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
      <><Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Introduce yourself!"
    >
      <p>Hello</p>
    </Modal>
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container extend-container">
            <p className="forgotPass" onClick={() => setOpened(true)}>Forgot password?</p>
        </div>
        <div className="button-container">
          <input type="submit" value={"Log in"}/>
        </div>
      </form>
    </div>
    </>
  );

  return (
    <div className="container">
    <div className="web-image-container">
    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNxQlEMcwJvXH61n0osCCKdiJ4I4ooZX_KPQ&usqp=CAU" alt="watch" className='web-image' />
    </div>
    <div className="logn">
        <Link to="/" style={{height:50}}>
        <p className="homeButton">Home</p>
                    </Link>
        <div className="button-container">
            <Image
                                style={{ width: 70, height: 70 }}
                                src="https://i.pinimg.com/736x/76/13/43/7613439f9864c0a5ae9ac965ca527e91.jpg"
                                alt="Logo"
                            />
        </div>
      <div className="login-form">
        <div className="title">Sign in to continue</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
        <div className="signup">
            <span>Don't have an account?</span> <Link to="/signup">
                    <span className="signupButton">Sign up</span>
                    </Link>
        </div>
    </div>
    </div>
  );
}

// export default function Signup() {
//     return <>
//         <h1>Signup</h1>
//     </>
// }