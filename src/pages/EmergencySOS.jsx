import { useState } from "react";
import {
  AlertTriangle,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
  Navigation,
  X,
  CheckCircle2,
} from "lucide-react";
import "./EmergencySOS.css";

function EmergencySOS() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [sosActive, setSosActive] = useState(false);

  const handleSOS = () => {
    setShowConfirm(true);
  };

  const confirmSOS = () => {
    setShowConfirm(false);
    setSosActive(true);
  };

  const cancelSOS = () => {
    setShowConfirm(false);
  };

  const stopSOS = () => {
    setSosActive(false);
  };

  return (
    <div className="sos-page">

      {/* Sidebar */}
      <aside className="sos-sidebar">

        <div className="sos-logo">
          <div className="sos-logo-mark">S</div>
          <span>SafeHer</span>
        </div>

        <nav className="sos-nav">

          <a href="/dashboard">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="/emergency-sos" className="active">
            <span>🚨</span>
            Emergency SOS
          </a>

          <a href="/trusted-contacts">
            <span>♡</span>
            Trusted Contacts
          </a>

          <a href="/dashboard">
            <span>🧭</span>
            Safe Journey
          </a>

          <a href="/dashboard">
            <span>📍</span>
            Nearby Help
          </a>

          <a href="/dashboard">
            <span>📝</span>
            Incidents
          </a>

          <a href="/dashboard">
            <span>🔔</span>
            Notifications
          </a>

          <a href="/dashboard">
            <span>⚙</span>
            Profile & Settings
          </a>

        </nav>

        <div className="sos-user">
          <div className="sos-user-avatar">M</div>

          <div>
            <strong>Muskan</strong>
            <small>SafeHer User</small>
          </div>
        </div>

      </aside>

      {/* Main */}
      <main className="sos-main">

        <div className="sos-header">
          <div>
            <p className="sos-label">EMERGENCY ASSISTANCE</p>

            <h1>Emergency SOS</h1>

            <p>
              Quickly alert your trusted contacts when you need help.
            </p>
          </div>

          <div className="sos-status">
            <span className={sosActive ? "status-dot active" : "status-dot"}></span>

            {sosActive ? "SOS Active" : "System Ready"}
          </div>
        </div>

        {/* Active SOS */}
        {sosActive ? (
          <section className="active-sos-card">

            <div className="active-sos-icon">
              <AlertTriangle size={32} />
            </div>

            <p className="active-label">EMERGENCY ACTIVE</p>

            <h2>Your SOS has been activated</h2>

            <p className="active-description">
              Your emergency status is active. Your trusted contacts
              can be notified with your latest available location.
            </p>

            <div className="active-details">

              <div>
                <MapPin size={20} />
                <div>
                  <strong>Location Status</strong>
                  <span>Ready to share</span>
                </div>
              </div>

              <div>
                <Users size={20} />
                <div>
                  <strong>Trusted Contacts</strong>
                  <span>2 contacts available</span>
                </div>
              </div>

              <div>
                <Navigation size={20} />
                <div>
                  <strong>Emergency Status</strong>
                  <span>Active</span>
                </div>
              </div>

            </div>

            <button
              className="stop-sos-btn"
              onClick={stopSOS}
            >
              End Emergency Status
            </button>

          </section>
        ) : (
          /* SOS Button */
          <section className="sos-center-card">

            <div className="sos-circle">

              <button
                className="sos-button"
                onClick={handleSOS}
              >
                <AlertTriangle size={48} />

                <span>SOS</span>

                <small>PRESS FOR HELP</small>
              </button>

            </div>

            <h2>Need emergency help?</h2>

            <p>
              Press the SOS button to start an emergency alert
              process and notify your trusted contacts.
            </p>

            <div className="sos-warning">
              <AlertTriangle size={18} />

              <span>
                Only use SOS when you need emergency assistance.
              </span>
            </div>

          </section>
        )}

        {/* Information Cards */}
        <section className="sos-info-grid">

          <div className="sos-info-card">

            <div className="info-card-icon location">
              <MapPin size={22} />
            </div>

            <div>
              <h3>Location Sharing</h3>

              <p>
                Your latest available location can be included
                when location permission is available.
              </p>
            </div>

            <span className="ready-tag">
              Ready
            </span>

          </div>

          <div className="sos-info-card">

            <div className="info-card-icon contacts">
              <Users size={22} />
            </div>

            <div>
              <h3>Trusted Contacts</h3>

              <p>
                Your configured emergency contacts can be included
                in the SOS notification flow.
              </p>
            </div>

            <span className="ready-tag">
              2 Contacts
            </span>

          </div>

          <div className="sos-info-card">

            <div className="info-card-icon privacy">
              <ShieldCheck size={22} />
            </div>

            <div>
              <h3>Privacy Protected</h3>

              <p>
                Location sharing is dependent on your permission
                and privacy settings.
              </p>
            </div>

            <span className="ready-tag">
              Protected
            </span>

          </div>

        </section>

        {/* Emergency Help */}
        <section className="emergency-help">

          <div className="emergency-help-icon">
            <Phone size={22} />
          </div>

          <div>
            <h3>Need immediate official assistance?</h3>

            <p>
              SafeHer is a safety-support prototype and does not
              replace official emergency services.
            </p>
          </div>

        </section>

      </main>

      {/* Confirmation Modal */}
      {showConfirm && (

        <div className="sos-modal-overlay">

          <div className="sos-confirm-modal">

            <button
              className="close-sos-modal"
              onClick={cancelSOS}
            >
              <X size={20} />
            </button>

            <div className="confirm-icon">
              <AlertTriangle size={30} />
            </div>

            <h2>Activate Emergency SOS?</h2>

            <p>
              This will start the emergency status and begin
              the trusted-contact notification flow.
            </p>

            <div className="confirm-items">

              <div>
                <MapPin size={18} />
                Latest available location
              </div>

              <div>
                <Users size={18} />
                2 trusted contacts
              </div>

              <div>
                <CheckCircle2 size={18} />
                Emergency status recording
              </div>

            </div>

            <div className="confirm-buttons">

              <button
                className="cancel-sos"
                onClick={cancelSOS}
              >
                Cancel
              </button>

              <button
                className="confirm-sos"
                onClick={confirmSOS}
              >
                Yes, Activate SOS
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default EmergencySOS;