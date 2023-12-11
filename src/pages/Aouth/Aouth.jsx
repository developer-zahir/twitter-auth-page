import { Link } from "react-router-dom";
import "./Aouth.scss";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import Divider from "../../components/Divider/Divider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Aouth = () => {
  const [modal, setModal] = useState(false);

  // show empty error
  const ShowEmptyError = (e) => {
    if (e.target.value == "") {
      e.target.style.borderColor = "red";
    } else {
      e.target.style.borderColor = "#1d9bf0";
    }
  };








  return (
    <>
      {modal && (
        <Modal hideModal={setModal}>
          <div className="sign-in-form">
            <h2>Sign in to X</h2>
            <SocialLogin />
            <Divider />
            <form action="#">
              <input
                type="text"
                placeholder="Phone, email or username"
                onBlur={ShowEmptyError} name="username"
              />
              <button className="next-button">Next</button>
            </form>
            <Link to="#" className="forgot-pass">
              Forgot password
            </Link>
            <p>
              Dont have an account? <Link to="#">Sign up</Link>
            </p>
          </div>
        </Modal>
      )}
      <div className="aouth-section">
        <div className="container aouth-wrapper">
          <div className="aouth-left">
            <div className="aouth-left-content">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="aouth-right">
            <div className="aouth-right-content">
              <h1>Happening now</h1>

              <div className="social-login-buttons">
                <h2>Join today.</h2>
                <SocialLogin />
                <Divider />
                <button
                  className="create-account"
                  onClick={() => setModal(true)}
                >
                  Create account
                </button>
                <p>
                  By signing up, you agree to the{" "}
                  <Link to="#">Terms of Service</Link> and{" "}
                  <Link to="#">Privacy Policy</Link>, including{" "}
                  <Link to="#">Cookie Use.</Link>
                </p>

                <div className="sign-in-button">
                  <h3>Already have an account?</h3>
                  <button onClick={() => setModal(true)}>Sign in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aouth-page-footer-text">
        <div className="container">
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/download">Download the X app</Link>
            </li>
            <li>
              <Link to="/help-center">Help Center</Link>
            </li>
            <li>
              <Link to="/terms-of-service">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </li>
            <li>
              <Link to="/accessibility">Accessibility</Link>
            </li>
            <li>
              <Link to="/ads-info">Ads info</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/status">Status</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/brand-resources">Brand Resources</Link>
            </li>
            <li>
              <Link to="/advertising">Advertising</Link>
            </li>
            <li>
              <Link to="/marketing">Marketing</Link>
            </li>
            <li>
              <Link to="/x-for-business">X for Business</Link>
            </li>
            <li>
              <Link to="/developers">Developers</Link>
            </li>
            <li>
              <Link to="/directory">Directory</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>© 2023 X Corp.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Aouth;
