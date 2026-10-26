import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!emailOrPhone.trim() || !password.trim()) {
      alert("Please enter your email/phone and password.");
      return;
    }

    // Login successful → Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      {/* ================= LEFT SIDE ================= */}

      <section className="login-visual">

        <Link to="/" className="login-brand">
          <div className="login-logo">
            <ShieldCheck size={21} />
          </div>

          <span>SafeHer</span>
        </Link>

        <div className="visual-content">

          <p className="login-eyebrow">
            WELCOME BACK
          </p>

          <h1>
            Your safety
            <br />
            starts with
            <br />
            <span>you.</span>
          </h1>

          <p className="visual-description">
            Stay connected with the people you trust
            and keep your journey a little safer,
            wherever you go.
          </p>

          <div className="login-benefits">

            <div className="benefit-item">
              <div className="benefit-icon">
                <CheckCircle2 size={17} />
              </div>

              <span>
                Your trusted circle stays connected
              </span>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <CheckCircle2 size={17} />
              </div>

              <span>
                Quick access to emergency assistance
              </span>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                <CheckCircle2 size={17} />
              </div>

              <span>
                Privacy-aware safety controls
              </span>
            </div>

          </div>

        </div>

        <p className="visual-footer">
          Your Safety. Your Circle. Your Journey.
        </p>

      </section>


      {/* ================= RIGHT SIDE ================= */}

      <section className="login-form-section">

        <div className="login-form-container">

          {/* Mobile logo */}

          <Link to="/" className="mobile-login-brand">

            <div className="login-logo">
              <ShieldCheck size={21} />
            </div>

            <span>SafeHer</span>

          </Link>


          <div className="form-heading">

            <p className="form-eyebrow">
              SAFEHER ACCOUNT
            </p>

            <h2>
              Welcome back.
            </h2>

            <p>
              Sign in to continue to your safety dashboard.
            </p>

          </div>


          {/* ================= FORM ================= */}

          <form
            className="login-form"
            onSubmit={handleLogin}
          >

            {/* Email */}

            <div className="input-group">

              <label htmlFor="email">
                Email or phone
              </label>

              <div className="input-wrapper">

                <Mail size={18} />

                <input
                  id="email"
                  type="text"
                  placeholder="Enter your email or phone"
                  value={emailOrPhone}
                  onChange={(e) =>
                    setEmailOrPhone(e.target.value)
                  }
                  autoComplete="username"
                />

              </div>

            </div>


            {/* Password */}

            <div className="input-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <a href="#forgot">
                  Forgot password?
                </a>

              </div>

              <div className="input-wrapper">

                <LockKeyhole size={18} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>

              </div>

            </div>


            {/* Remember me */}

            <label className="remember-row">

              <input
                type="checkbox"
                defaultChecked
              />

              <span>
                Remember me
              </span>

            </label>


            {/* Login button */}

            <button
              type="submit"
              className="login-submit"
            >

              Sign in

              <ArrowRight size={18} />

            </button>


            {/* Divider */}

            <div className="login-divider">

              <span></span>

              <p>or continue with</p>

              <span></span>

            </div>


            {/* Social buttons */}

            <div className="social-login">

              <button
                type="button"
                className="social-button"
              >
                <span className="google-symbol">
                  G
                </span>

                Google
              </button>


              <button
                type="button"
                className="social-button"
              >
                <span className="phone-symbol">
                  +
                </span>

                Phone
              </button>

            </div>


            {/* Register */}

            <p className="register-text">

              Don't have an account?

              <Link to="/register">
                Create one
              </Link>

            </p>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Login;