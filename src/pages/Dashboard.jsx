import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ShieldCheck,
  MapPin,
  Users,
  Bell,
  FileText,
  Navigation,
  Phone,
  ChevronRight,
  Clock3,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

import "./Dashboard.css";


function Dashboard() {

  const navigate = useNavigate();

  const userName = "Muskan";


  return (

    <div className="dashboard-page">


      {/* =========================================
          DASHBOARD MAIN CONTENT
      ========================================= */}

      <main className="dashboard-main">


        {/* =========================================
            HEADER
        ========================================= */}

        <header className="dashboard-header">

          <div>

            <p className="dashboard-small-title">
              SAFEHER DASHBOARD
            </p>

            <h1>
              Good evening, {userName}.
            </h1>

            <p className="dashboard-subtitle">
              Stay connected, stay informed, and keep your
              journey safe.
            </p>

          </div>


          <button
            className="notification-button"
            onClick={() => navigate("/notifications")}
          >

            <Bell size={21} />

            <span className="notification-dot"></span>

          </button>

        </header>


        {/* =========================================
            SAFETY STATUS
        ========================================= */}

        <section className="safety-status-card">

          <div className="safety-status-left">

            <div className="status-icon">
              <ShieldCheck size={28} />
            </div>


            <div>

              <span className="status-label">
                YOUR SAFETY STATUS
              </span>

              <h2>
                You're safe
              </h2>

              <p>
                No active emergency or monitored journey.
              </p>

            </div>

          </div>


          <div className="status-check">

            <CheckCircle2 size={25} />

          </div>

        </section>


        {/* =========================================
            SOS + SAFETY SCORE
        ========================================= */}

        <section className="dashboard-grid">


          {/* SOS */}

          <div className="sos-card">

            <div className="sos-card-header">

              <div>

                <span>
                  EMERGENCY ASSISTANCE
                </span>

                <h2>
                  Need help?
                </h2>

              </div>


              <AlertCircle size={24} />

            </div>


            <p>
              Send an SOS alert to your trusted contacts
              with your latest available location.
            </p>


            <button
              className="sos-button"
              onClick={() => navigate("/emergency-sos")}
            >

              <Phone size={22} />

              <span>
                ACTIVATE SOS
              </span>

            </button>


            <small>
              Use only when you need emergency assistance.
            </small>

          </div>


          {/* SAFETY SCORE */}

          <div className="score-card">

            <div className="card-top">

              <div>

                <span className="card-label">
                  SAFETY OVERVIEW
                </span>

                <h2>
                  Safety Score
                </h2>

              </div>

              <ShieldCheck size={22} />

            </div>


            <div className="score-circle">

              <div>

                <strong>
                  86
                </strong>

                <span>
                  /100
                </span>

              </div>

            </div>


            <p>
              Your current safety overview based on your
              recent activity.
            </p>

          </div>

        </section>


        {/* =========================================
            QUICK ACTIONS
        ========================================= */}

        <section className="dashboard-section">

          <div className="section-heading">

            <div>

              <span>
                QUICK ACCESS
              </span>

              <h2>
                What do you need?
              </h2>

            </div>

          </div>


          <div className="quick-actions">


            {/* JOURNEY */}

            <div
              className="action-card"
              onClick={() => navigate("/journey")}
            >

              <div className="action-icon journey-icon">

                <Navigation size={22} />

              </div>


              <div>

                <h3>
                  Start Journey
                </h3>

                <p>
                  Monitor your journey and share progress.
                </p>

              </div>


              <ChevronRight size={19} />

            </div>


            {/* CONTACTS */}

            <div
              className="action-card"
              onClick={() => navigate("/trusted-contacts")}
            >

              <div className="action-icon contacts-icon">

                <Users size={22} />

              </div>


              <div>

                <h3>
                  Trusted Contacts
                </h3>

                <p>
                  Manage people in your safety circle.
                </p>

              </div>


              <ChevronRight size={19} />

            </div>


            {/* NEARBY HELP */}

            <div
              className="action-card"
              onClick={() => navigate("/nearby-help")}
            >

              <div className="action-icon help-icon">

                <MapPin size={22} />

              </div>


              <div>

                <h3>
                  Nearby Help
                </h3>

                <p>
                  Find nearby assistance points.
                </p>

              </div>


              <ChevronRight size={19} />

            </div>


            {/* INCIDENT */}

            <div
              className="action-card"
              onClick={() => navigate("/incidents")}
            >

              <div className="action-icon incident-icon">

                <FileText size={22} />

              </div>


              <div>

                <h3>
                  Report Incident
                </h3>

                <p>
                  Submit and track a safety incident.
                </p>

              </div>


              <ChevronRight size={19} />

            </div>

          </div>

        </section>


        {/* =========================================
            SAFE JOURNEY
        ========================================= */}

        <section className="journey-card">

          <div className="journey-content">

            <div className="journey-icon-large">

              <Navigation size={25} />

            </div>


            <div>

              <span className="card-label">
                SAFE JOURNEY
              </span>

              <h2>
                Plan your next journey
              </h2>

              <p>
                Add a destination, expected arrival time and
                trusted contacts to monitor your journey.
              </p>

            </div>

          </div>


          <button
            className="journey-button"
            onClick={() => navigate("/journey")}
          >

            Start Journey

            <ChevronRight size={18} />

          </button>

        </section>


        {/* =========================================
            BOTTOM INFORMATION
        ========================================= */}

        <section className="bottom-grid">


          {/* TRUSTED CIRCLE */}

          <div className="info-card">

            <div className="info-card-title">

              <Users size={20} />

              <h3>
                Trusted Circle
              </h3>

            </div>


            <p>
              Keep your trusted contacts ready for emergencies
              and monitored journeys.
            </p>


            <button
              onClick={() => navigate("/trusted-contacts")}
            >

              Manage Contacts

              <ChevronRight size={16} />

            </button>

          </div>


          {/* RECENT ACTIVITY */}

          <div className="info-card">

            <div className="info-card-title">

              <Clock3 size={20} />

              <h3>
                Recent Activity
              </h3>

            </div>


            <div className="activity-item">

              <CheckCircle2 size={17} />

              <span>
                No recent emergency activity
              </span>

            </div>


            <div className="activity-item">

              <Navigation size={17} />

              <span>
                No active journey
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>

  );
}


export default Dashboard;