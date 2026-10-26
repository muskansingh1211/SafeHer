import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Bell,
  Shield,
  Lock,
  LogOut,
  Save,
} from "lucide-react";
import "./profile.css";

const Profile = () => {
  const [name, setName] = useState("SafeHer User");
  const [email, setEmail] = useState("user@example.com");
  const [phone, setPhone] = useState("");
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div>
          <span className="profile-label">ACCOUNT SETTINGS</span>
          <h1>Profile & Settings</h1>
          <p>
            Manage your personal information and SafeHer safety preferences.
          </p>
        </div>
      </div>

      <div className="profile-layout">

        {/* Profile Card */}
        <div className="profile-main-card">

          <div className="profile-card-heading">
            <div className="profile-avatar">
              <User size={28} />
            </div>

            <div>
              <h2>Personal Information</h2>
              <p>Keep your account information up to date.</p>
            </div>
          </div>

          <form onSubmit={handleSave}>

            <div className="profile-form-grid">

              <div className="profile-field">
                <label>Full Name</label>

                <div className="input-wrapper">
                  <User size={18} />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div className="profile-field">
                <label>Email Address</label>

                <div className="input-wrapper">
                  <Mail size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="profile-field">
                <label>Phone Number</label>

                <div className="input-wrapper">
                  <Phone size={18} />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="profile-field">
                <label>Location</label>

                <div className="input-wrapper disabled-input">
                  <MapPin size={18} />
                  <input
                    type="text"
                    value="Location permission based"
                    readOnly
                  />
                </div>
              </div>

            </div>

            <button className="save-profile-btn" type="submit">
              <Save size={18} />
              Save Changes
            </button>

            {saved && (
              <div className="profile-success">
                Profile settings saved successfully.
              </div>
            )}

          </form>
        </div>

        {/* Settings Card */}
        <div className="profile-settings-card">

          <h2>Safety Preferences</h2>
          <p className="settings-description">
            Control how SafeHer uses safety-related features.
          </p>

          <div className="setting-item">
            <div className="setting-icon">
              <MapPin size={19} />
            </div>

            <div className="setting-info">
              <h3>Location Access</h3>
              <p>
                Allow SafeHer to use your location when required for safety
                features.
              </p>
            </div>

            <label className="toggle">
              <input
                type="checkbox"
                checked={locationEnabled}
                onChange={() => setLocationEnabled(!locationEnabled)}
              />
              <span></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-icon">
              <Bell size={19} />
            </div>

            <div className="setting-info">
              <h3>Notifications</h3>
              <p>
                Receive important safety and journey updates.
              </p>
            </div>

            <label className="toggle">
              <input
                type="checkbox"
                checked={notificationsEnabled}
                onChange={() =>
                  setNotificationsEnabled(!notificationsEnabled)
                }
              />
              <span></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-icon">
              <Shield size={19} />
            </div>

            <div className="setting-info">
              <h3>Safety & Privacy</h3>
              <p>
                Your sensitive safety information remains under your control.
              </p>
            </div>
          </div>

          <div className="setting-item">
            <div className="setting-icon">
              <Lock size={19} />
            </div>

            <div className="setting-info">
              <h3>Account Security</h3>
              <p>
                Keep your SafeHer account protected with secure authentication.
              </p>
            </div>
          </div>

          <button className="logout-btn">
            <LogOut size={18} />
            Logout
          </button>

        </div>
      </div>
    </div>
  );
};

export default Profile;