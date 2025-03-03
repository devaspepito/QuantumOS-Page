// React Imports
import { Link } from "react-router";

import "../styles/LogIn.css";

export const LogIn = () => {
  return (
    <>
      <main>
        <div className="wrapper">
          <div className="title-text">
            <div className="title login">Login</div>
          </div>
          <div className="form-container">
            <div className="form-inner">
              <form
                action="../../back-end/controllers/controlador.php"
                className="login"
              >
                <div className="field">
                  <input type="email" name="email" required />
                  <span>Email</span>
                </div>
                <div className="field">
                  <input type="password" name="password" required />
                  <span>Password</span>
                </div>
                <div className="pass-link">
                  <a href="#">Forgot Your Password?</a>
                </div>
                <div className="field btn">
                  <div className="btn-layer"></div>
                  <button type="submit" className="loginLink" name="login">
                    Login
                  </button>
                  {/*
      <Link to="/hdn/admin" className="loginLink">
      Login
      </Link>*/}
                </div>
                <div className="signup-link">
                  Not registered? <Link to="/signUp">Register now</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
