import api from "../services/api";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  MapPin,
  Users,
  Navigation,
  ArrowRight,
  Heart,
  Bell,
} from "lucide-react";

import "./Landing.css";

function Landing() {
  return (
    <div className="landing-page">

      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="nav-logo">
          <div className="logo-icon">
            <ShieldCheck size={22} />
          </div>

          <span>SafeHer</span>
        </div>


        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </nav>


        <div className="nav-actions">

          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/register" className="nav-button">
            Get Started
          </Link>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero-section" id="home">

          <div className="hero-content">

            <p className="eyebrow">
              AI-ASSISTED WOMEN SAFETY PLATFORM
            </p>


            <h1>
              Your Safety.
              <br />

              Your Circle.
              <br />

              <span>Your Journey.</span>
            </h1>


            <p className="hero-description">
              Emergency assistance, trusted contacts, journey monitoring
              and nearby help — thoughtfully brought together in one place.
            </p>


            <div className="hero-buttons">

              <Link
                to="/register"
                className="primary-button"
              >
                Create Account

                <ArrowRight size={18} />
              </Link>


              <a
                href="#features"
                className="secondary-button"
              >
                Explore SafeHer
              </a>

            </div>


            {/* Small feature list */}

            <div className="hero-features">

              <div className="hero-feature">
                <ShieldCheck size={19} />
                <span>Smart SOS</span>
              </div>


              <div className="hero-feature">
                <Navigation size={19} />
                <span>Safe Journey</span>
              </div>


              <div className="hero-feature">
                <Users size={19} />
                <span>Trusted Circle</span>
              </div>


              <div className="hero-feature">
                <MapPin size={19} />
                <span>Nearby Help</span>
              </div>

            </div>

          </div>


          {/* ================= HERO IMAGE ================= */}

          <div className="hero-visual">

            <div className="soft-circle circle-one"></div>

            <div className="soft-circle circle-two"></div>


            <div className="hero-photo">

              <div className="photo-overlay"></div>


              <div className="hero-quote">

                <span>Braver.</span>
                <span>Safer.</span>
                <span>Together.</span>

                <Heart
                  size={14}
                  fill="currentColor"
                />

              </div>

            </div>


            {/* Safety floating card */}

            <div className="floating-card safety-card">

              <div className="floating-icon">
                <ShieldCheck size={19} />
              </div>


              <div>
                <strong>You're Safe</strong>

                <small>
                  Everything looks good
                </small>
              </div>

            </div>


            {/* Journey floating card */}

            <div className="floating-card location-card">

              <div className="location-icon">
                <MapPin size={18} />
              </div>


              <div>

                <strong>
                  Journey Active
                </strong>

                <small>
                  Location shared
                </small>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section
          className="features-section"
          id="features"
        >

          <div className="section-heading">

            <p className="eyebrow">
              DESIGNED AROUND REAL NEEDS
            </p>


            <h2>
              Safety should feel
              <span> simple.</span>
            </h2>


            <p>
              SafeHer brings essential safety-support tools together
              without making everyday travel complicated.
            </p>

          </div>


          <div className="feature-grid">

            <FeatureCard
              icon={<ShieldCheck />}
              title="Smart SOS"
              text="Send an emergency alert to your trusted contacts with the latest available location."
            />


            <FeatureCard
              icon={<Users />}
              title="Trusted Circle"
              text="Keep selected family members and friends ready for emergency communication."
            />


            <FeatureCard
              icon={<Navigation />}
              title="Safe Journey"
              text="Monitor your journey, share progress and confirm your arrival."
            />


            <FeatureCard
              icon={<MapPin />}
              title="Nearby Help"
              text="Find nearby police stations, hospitals and configured support locations."
            />

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section
          className="how-it-works-section"
          id="how-it-works"
        >

          <div className="section-heading">

            <p className="eyebrow">
              HOW IT WORKS
            </p>

            <h2>
              Safety made
              <span> simple.</span>
            </h2>

            <p>
              SafeHer brings emergency assistance, trusted contacts,
              journey monitoring and nearby help together in a few simple steps.
            </p>

          </div>


          <div className="steps-grid">

            {/* STEP 1 */}

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                <Users size={24} />
              </div>

              <h3>
                Create Your Safety Circle
              </h3>

              <p>
                Add family members, friends or trusted people
                who should be able to support you when needed.
              </p>

            </div>


            {/* STEP 2 */}

            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">
                <Navigation size={24} />
              </div>

              <h3>
                Start Your Journey
              </h3>

              <p>
                Start a journey and share your location and
                progress with your trusted contacts.
              </p>

            </div>


            {/* STEP 3 */}

            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">
                <Bell size={24} />
              </div>

              <h3>
                Stay Protected
              </h3>

              <p>
                Receive safety support and quickly access
                important tools while you are travelling.
              </p>

            </div>


            {/* STEP 4 */}

            <div className="step-card">

              <div className="step-number">
                04
              </div>

              <div className="step-icon">
                <ShieldCheck size={24} />
              </div>

              <h3>
                Get Help When Needed
              </h3>

              <p>
                Quickly access emergency assistance and nearby
                support whenever you need it.
              </p>

            </div>

          </div>

        </section>


        {/* ================= CTA / ABOUT ================= */}

        <section
          className="cta-section"
          id="about"
        >

          <div>

            <p className="eyebrow">
              BECAUSE SHE MATTERS
            </p>


            <h2>
              Feel safer.
              <br />
              Travel freely.
            </h2>

          </div>


          <Link
            to="/register"
            className="primary-button"
          >
            Start with SafeHer

            <ArrowRight size={18} />

          </Link>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="nav-logo">

          <div className="logo-icon">
            <ShieldCheck size={20} />
          </div>

          <span>SafeHer</span>

        </div>


        <p>
          Your safety. Your circle. Your journey.
        </p>


        <span>
          © 2026 SafeHer
        </span>

      </footer>

    </div>
  );
}


/* ================= FEATURE CARD ================= */

function FeatureCard({
  icon,
  title,
  text,
}) {

  return (

    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>


      <h3>
        {title}
      </h3>


      <p>
        {text}
      </p>


      <ArrowRight
        size={18}
        className="feature-arrow"
      />

    </div>

  );
}


export default Landing;