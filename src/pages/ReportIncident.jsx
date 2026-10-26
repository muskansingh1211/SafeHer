import { useState } from "react";
import {
  AlertTriangle,
  CalendarDays,
  MapPin,
  Send,
  ShieldCheck,
  Clock3,
} from "lucide-react";
import "./report-incident.css";

const incidentTypes = [
  "Harassment",
  "Unsafe Situation",
  "Suspicious Activity",
  "Stalking",
  "Theft",
  "Physical Threat",
  "Other",
];

function ReportIncident() {
  const [incidentType, setIncidentType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const [reports, setReports] = useState(() => {
    const savedReports = localStorage.getItem("safeher_incidents");
    return savedReports ? JSON.parse(savedReports) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!incidentType || !description.trim()) {
      return;
    }

    const newReport = {
      id: Date.now(),
      type: incidentType,
      description: description.trim(),
      locationShared: location,
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "Submitted",
    };

    const updatedReports = [newReport, ...reports];

    setReports(updatedReports);

    localStorage.setItem(
      "safeher_incidents",
      JSON.stringify(updatedReports)
    );

    setIncidentType("");
    setDescription("");
    setLocation(true);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  };

  return (
    <div className="safeincident-page">

      {/* HEADER */}
      <header className="safeincident-header">
        <div>
          <span className="safeincident-eyebrow">
            REPORT & SUPPORT
          </span>

          <h1>Report an Incident</h1>

          <p>
            Share what happened so it can be recorded and reviewed safely.
          </p>
        </div>

        <div className="safeincident-status">
          <span />
          Your report is private
        </div>
      </header>

      {/* SUCCESS */}
      {submitted && (
        <div className="safeincident-success">
          <ShieldCheck size={20} />

          <div>
            <strong>Incident reported successfully</strong>

            <p>Your report has been saved for review.</p>
          </div>
        </div>
      )}

      {/* MAIN */}
      <div className="safeincident-layout">

        {/* FORM */}
        <section className="safeincident-form-card">

          <div className="safeincident-card-heading">
            <div className="safeincident-heading-icon">
              <AlertTriangle size={22} />
            </div>

            <div>
              <h2>Tell us what happened</h2>

              <p>
                You can provide only the information you are comfortable
                sharing.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="safeincident-form-group">
              <label>Incident type</label>

              <select
                value={incidentType}
                onChange={(e) => setIncidentType(e.target.value)}
              >
                <option value="">
                  Select incident type
                </option>

                {incidentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="safeincident-form-group">
              <label>Description</label>

              <textarea
                rows="7"
                placeholder="Describe what happened..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <span className="safeincident-field-note">
                Please avoid sharing unnecessary personal information.
              </span>
            </div>

            <div className="safeincident-location-option">
              <div className="safeincident-location-icon">
                <MapPin size={20} />
              </div>

              <div className="safeincident-location-text">
                <strong>Include my location</strong>

                <span>
                  Location may help with reviewing the incident.
                </span>
              </div>

              <label className="safeincident-switch">
                <input
                  type="checkbox"
                  checked={location}
                  onChange={() => setLocation(!location)}
                />

                <span className="safeincident-slider" />
              </label>
            </div>

            <button
              type="submit"
              className="safeincident-submit"
            >
              <Send size={18} />
              Submit Incident Report
            </button>
          </form>
        </section>

        {/* INFORMATION */}
        <aside className="safeincident-info">

          <div className="safeincident-privacy-card">
            <ShieldCheck size={24} />

            <h3>Privacy first</h3>

            <p>
              Your incident information is intended for safety-related
              review. Location sharing remains under your control.
            </p>
          </div>

          <div className="safeincident-help-card">
            <h3>Need immediate help?</h3>

            <p>
              If you are currently in danger, use the emergency SOS feature
              instead of relying only on an incident report.
            </p>

            <div className="safeincident-help-note">
              <AlertTriangle size={17} />

              <span>
                Incident reports are not a replacement for emergency
                services.
              </span>
            </div>
          </div>

        </aside>
      </div>

      {/* REPORTS */}
      <section className="safeincident-reports">

        <div className="safeincident-reports-heading">
          <div>
            <span className="safeincident-eyebrow">
              YOUR RECORDS
            </span>

            <h2>Recent Reports</h2>
          </div>

          <span className="safeincident-report-count">
            {reports.length}{" "}
            {reports.length === 1 ? "report" : "reports"}
          </span>
        </div>

        {reports.length === 0 ? (
          <div className="safeincident-empty">

            <div className="safeincident-empty-icon">
              <Clock3 size={24} />
            </div>

            <h3>No reports yet</h3>

            <p>
              Submitted incident reports will appear here.
            </p>

          </div>
        ) : (
          <div className="safeincident-report-list">

            {reports.map((report) => (
              <div
                className="safeincident-report-card"
                key={report.id}
              >
                <div className="safeincident-report-type-icon">
                  <AlertTriangle size={20} />
                </div>

                <div className="safeincident-report-content">

                  <div className="safeincident-report-top">
                    <h3>{report.type}</h3>

                    <span className="safeincident-report-status">
                      {report.status}
                    </span>
                  </div>

                  <p>{report.description}</p>

                  <div className="safeincident-report-meta">

                    <span>
                      <CalendarDays size={15} />
                      {report.date}
                    </span>

                    <span>
                      <Clock3 size={15} />
                      {report.time}
                    </span>

                    <span>
                      <MapPin size={15} />
                      {report.locationShared
                        ? "Location included"
                        : "Location not included"}
                    </span>

                  </div>
                </div>
              </div>
            ))}

          </div>
        )}
      </section>
    </div>
  );
}

export default ReportIncident;