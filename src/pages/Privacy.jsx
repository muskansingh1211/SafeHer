import React, { useState } from "react";
import {
  ShieldCheck,
  MapPin,
  Users,
  Navigation,
  FileText,
  Clock,
  Lock,
  Save,
  CheckCircle,
} from "lucide-react";
import "./privacy.css";

const Privacy = () => {
  const [locationSharing, setLocationSharing] = useState(true);
  const [trustedContacts, setTrustedContacts] = useState(true);
  const [journeySharing, setJourneySharing] = useState(true);
  const [emergencyLocation, setEmergencyLocation] = useState(true);
  const [incidentData, setIncidentData] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    localStorage.setItem(
      "safeher_privacy_settings",
      JSON.stringify({
        locationSharing,
        trustedContacts,
        journeySharing,
        emergencyLocation,
        incidentData,
      })
    );

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="privacy-page">
      {/* HEADER */}
      <div className="privacy-header">
        <div>
          <span className="privacy-label">YOUR PRIVACY</span>

          <h1>Privacy & Data Sharing</h1>

          <p>
            Control how your safety information is used and shared by SafeHer.
          </p>
        </div>

        <div className="privacy-header-icon">
          <ShieldCheck size={28} />
        </div>
      </div>

      {/* PRIVACY INTRO */}
      <div className="privacy-intro">
        <div className="privacy-intro-icon">
          <Lock size={22} />
        </div>

        <div>
          <h2>Privacy First</h2>

          <p>
            SafeHer uses sensitive information such as location only when
            required by safety features and according to your selected
            preferences.
          </p>
        </div>
      </div>

      {/* SHARING SETTINGS */}
      <div className="privacy-card">
        <div className="privacy-card-header">
          <div>
            <span className="privacy-section-label">DATA CONTROLS</span>
            <h2>Sharing Preferences</h2>
            <p>
              Choose which safety-related information can be used or shared.
            </p>
          </div>
        </div>

        <div className="privacy-settings">
          {/* LOCATION */}
          <div className="privacy-setting">
            <div className="privacy-setting-icon location">
              <MapPin size={20} />
            </div>

            <div className="privacy-setting-info">
              <h3>Location Access</h3>
              <p>
                Allow SafeHer to access your latest available location for
                safety features.
              </p>
            </div>

            <label className="privacy-toggle">
              <input
                type="checkbox"
                checked={locationSharing}
                onChange={() => setLocationSharing(!locationSharing)}
              />
              <span></span>
            </label>
          </div>

          {/* TRUSTED CONTACTS */}
          <div className="privacy-setting">
            <div className="privacy-setting-icon contacts">
              <Users size={20} />
            </div>

            <div className="privacy-setting-info">
              <h3>Trusted Contact Sharing</h3>
              <p>
                Allow selected trusted contacts to receive safety-related
                information when required.
              </p>
            </div>

            <label className="privacy-toggle">
              <input
                type="checkbox"
                checked={trustedContacts}
                onChange={() => setTrustedContacts(!trustedContacts)}
              />
              <span></span>
            </label>
          </div>

          {/* JOURNEY */}
          <div className="privacy-setting">
            <div className="privacy-setting-icon journey">
              <Navigation size={20} />
            </div>

            <div className="privacy-setting-info">
              <h3>Journey Location Sharing</h3>
              <p>
                Allow location updates to be used during a monitored journey.
              </p>
            </div>

            <label className="privacy-toggle">
              <input
                type="checkbox"
                checked={journeySharing}
                onChange={() => setJourneySharing(!journeySharing)}
              />
              <span></span>
            </label>
          </div>

          {/* EMERGENCY */}
          <div className="privacy-setting">
            <div className="privacy-setting-icon emergency">
              <ShieldCheck size={20} />
            </div>

            <div className="privacy-setting-info">
              <h3>Emergency Location Sharing</h3>
              <p>
                Allow your latest available location to be attached to an
                emergency alert when permission is available.
              </p>
            </div>

            <label className="privacy-toggle">
              <input
                type="checkbox"
                checked={emergencyLocation}
                onChange={() =>
                  setEmergencyLocation(!emergencyLocation)
                }
              />
              <span></span>
            </label>
          </div>

          {/* INCIDENT DATA */}
          <div className="privacy-setting">
            <div className="privacy-setting-icon incident">
              <FileText size={20} />
            </div>

            <div className="privacy-setting-info">
              <h3>Incident Report Data</h3>
              <p>
                Allow information submitted through incident reports to be
                stored for safety and review purposes.
              </p>
            </div>

            <label className="privacy-toggle">
              <input
                type="checkbox"
                checked={incidentData}
                onChange={() => setIncidentData(!incidentData)}
              />
              <span></span>
            </label>
          </div>
        </div>

        {/* SAVE */}
        <button className="privacy-save-btn" onClick={handleSave}>
          <Save size={18} />
          Save Privacy Settings
        </button>

        {saved && (
          <div className="privacy-success">
            <CheckCircle size={18} />
            Privacy settings saved successfully.
          </div>
        )}
      </div>

      {/* INFORMATION CARDS */}
      <div className="privacy-info-grid">
        <div className="privacy-info-card">
          <div className="privacy-info-icon">
            <Clock size={20} />
          </div>

          <div>
            <h3>Data Retention</h3>
            <p>
              Safety-related information should only be retained according to
              the application's documented retention policy.
            </p>
          </div>
        </div>

        <div className="privacy-info-card">
          <div className="privacy-info-icon">
            <Lock size={20} />
          </div>

          <div>
            <h3>Secure Access</h3>
            <p>
              Access to sensitive safety information is intended to be
              protected through authentication and role-based permissions.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTNOTE */}
      <div className="privacy-note">
        <ShieldCheck size={18} />

        <p>
          Location is sensitive information. SafeHer should request location
          permission explicitly and use only the information required for the
          selected safety feature.
        </p>
      </div>
    </div>
  );
};

export default Privacy;