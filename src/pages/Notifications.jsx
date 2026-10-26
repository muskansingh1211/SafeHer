import React from "react";
import {
  Bell,
  CheckCircle,
  ShieldAlert,
  MapPin,
  Clock,
} from "lucide-react";
import "./notifications.css";

const Notifications = () => {
  const notifications = [
    {
      icon: <ShieldAlert size={20} />,
      title: "Emergency SOS",
      message:
        "Your SOS system is ready. Trusted contacts can be notified during an emergency.",
      time: "Just now",
      type: "important",
    },
    {
      icon: <MapPin size={20} />,
      title: "Location Sharing",
      message:
        "Your latest available location can be shared when permission is enabled.",
      time: "Today",
      type: "location",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Safety Check",
      message:
        "Your SafeHer safety settings are up to date.",
      time: "Today",
      type: "success",
    },
    {
      icon: <Clock size={20} />,
      title: "Journey Reminder",
      message:
        "Remember to confirm your arrival after completing a monitored journey.",
      time: "Yesterday",
      type: "normal",
    },
  ];

  return (
    <div className="notifications-page">

      {/* Header */}
      <div className="notifications-header">
        <div>
          <span className="section-label">STAY INFORMED</span>

          <h1>Notifications</h1>

          <p>
            Important safety updates and activity from your SafeHer account.
          </p>
        </div>

        <div className="notification-status">
          <Bell size={18} />
          <span>All caught up</span>
        </div>
      </div>

      {/* Notifications Card */}
      <div className="notifications-card">

        <div className="notifications-card-header">
          <div>
            <h2>Recent Updates</h2>
            <p>Your latest SafeHer notifications</p>
          </div>

          <span className="notification-count">
            {notifications.length} updates
          </span>
        </div>

        {/* Notification List */}
        <div className="notification-list">

          {notifications.map((notification, index) => (
            <div className="notification-item" key={index}>

              <div
                className={`notification-icon ${notification.type}`}
              >
                {notification.icon}
              </div>

              <div className="notification-content">
                <h3>{notification.title}</h3>
                <p>{notification.message}</p>
              </div>

              <span className="notification-time">
                {notification.time}
              </span>

            </div>
          ))}

        </div>
      </div>

      {/* Privacy Note */}
      <div className="notification-privacy">
        <ShieldAlert size={20} />

        <div>
          <h3>Privacy First</h3>

          <p>
            Notifications only contain safety-related information and your
            privacy settings remain under your control.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Notifications;