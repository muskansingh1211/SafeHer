import { Link } from "react-router-dom";
import {
  ShieldCheck,
  UserRound,
  Mail,
  Phone,
  LockKeyhole,
  Eye,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import "./Register.css";

function Register() {
  return (
    <div className="register-page">

      {/* ================= LEFT SIDE ================= */}

      <section className="register-visual">

        <Link to="/" className="register-brand">

          <div className="register-logo">
            <ShieldCheck size={21} />
          </div>

          <span>SafeHer</span>

        </Link>


        <div className="register-visual-content">

          <p className="register-eyebrow">
            JOIN SAFEHER
          </p>

          <h1>
            A safer
            <br />
            journey begins
            <br />
            <span>here.</span>
          </h1>

          <p className="register-description">
            Create your SafeHer account and keep the
            people you trust a little closer, wherever
            your journey takes you.
          </p>


          <div className="register-benefits">

            <div className="register-benefit">

              <div className="register-check">
                <CheckCircle2 size={17} />
              </div>

              <span>
                Build your trusted safety circle
              </span>

            </div>


            <div className="register-benefit">

              <div className="register-check">
                <CheckCircle2 size={17} />
              </div>

              <span>
                Get quick access to emergency assistance
              </span>

            </div>


            <div className="register-benefit">

              <div className="register-check">
                <CheckCircle2 size={17} />
              </div>

              <span>
                Keep your safety information private
              </span>

            </div>

          </div>

        </div>


        <p className="register-footer">
          Your Safety. Your Circle. Your Journey.
        </p>

      </section>


      {/* ================= RIGHT SIDE ================= */}

      <section className="register-form-section">

        <div className="register-form-container">

          {/* Mobile brand */}

          <Link
            to="/"
            className="mobile-register-brand"
          >

            <div className="register-logo">
              <ShieldCheck size={21} />
            </div>

            <span>SafeHer</span>

          </Link>


          {/* Heading */}

          <div className="register-heading">

            <p className="register-form-eyebrow">
              CREATE YOUR ACCOUNT
            </p>

            <h2>
              Let's get started.
            </h2>

            <p>
              Create your account to begin your safer journey.
            </p>

          </div>


          {/* ================= FORM ================= */}

          <form className="register-form">

            {/* Full Name */}

            <div className="register-input-group">

              <label htmlFor="fullName">
                Full name
              </label>

              <div className="register-input-wrapper">

                <UserRound size={18} />

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                />

              </div>

            </div>


            {/* Email */}

            <div className="register-input-group">

              <label htmlFor="registerEmail">
                Email address
              </label>

              <div className="register-input-wrapper">

                <Mail size={18} />

                <input
                  id="registerEmail"
                  type="email"
                  placeholder="Enter your email address"
                />

              </div>

            </div>


            {/* Phone */}

            <div className="register-input-group">

              <label htmlFor="phone">
                Phone number
              </label>

              <div className="register-input-wrapper">

                <Phone size={18} />

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                />

              </div>

            </div>


            {/* Password */}

            <div className="register-input-group">

              <label htmlFor="registerPassword">
                Password
              </label>

              <div className="register-input-wrapper">

                <LockKeyhole size={18} />

                <input
                  id="registerPassword"
                  type="password"
                  placeholder="Create a password"
                />

                <button
                  type="button"
                  className="register-password-toggle"
                  aria-label="Show password"
                >
                  <Eye size={18} />
                </button>

              </div>

            </div>


            {/* Confirm Password */}

            <div className="register-input-group">

              <label htmlFor="confirmPassword">
                Confirm password
              </label>

              <div className="register-input-wrapper">

                <LockKeyhole size={18} />

                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Re-enter your password"
                />

              </div>

            </div>


            {/* Privacy checkbox */}

            <label className="register-terms">

              <input
                type="checkbox"
              />

              <span>
                I agree to the SafeHer{" "}
                <a href="#terms">
                  Terms
                </a>{" "}
                and{" "}
                <a href="#privacy">
                  Privacy Policy
                </a>.
              </span>

            </label>


            {/* Create account */}

            <button
              type="submit"
              className="register-submit"
            >

              Create account

              <ArrowRight size={18} />

            </button>


            {/* Login */}

            <p className="already-account">

              Already have an account?

              <Link to="/login">
                Sign in
              </Link>

            </p>

          </form>

        </div>

      </section>

    </div>
  );
}

export default Register;