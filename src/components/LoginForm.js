import React from "react";

// create log in form
const LoginForm = () => {
  return (
    <div className="login-form form-control bg-primary">
      <h3>Log In</h3>
      <form className="form-control bg-success">
        <div>
            <input type="text" placeholder="Username" />
        </div><br></br>
        <div>
            <input type="password" placeholder="Password" />
        </div><br></br>
        <div>
            <button className="btn btn-info" type="submit">Submit</button>
        </div>    
      </form>
    </div>
  );
};

export default LoginForm;