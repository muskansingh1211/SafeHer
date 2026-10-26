import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  AlertTriangle,
  Search,
  Filter,
  MapPin,
  Clock,
  User,
  FileText,
  CheckCircle,
  ShieldAlert,
  X,
} from "lucide-react";

import "./admin-incidents.css";

const AdminIncidents = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [selectedIncident, setSelectedIncident] = useState(null);

  const [incidents, setIncidents] = useState([
    {
      id: "INC-001",
      type: "Stalking",
      user: "User #1024",
      priority: "High",
      status: "Open",
      time: "10 min ago",
      location: "Available",
      description:
        "User reported that someone appeared to be following them while travelling home.",
    },
    {
      id: "INC-002",
      type: "Harassment",
      user: "User #1018",
      priority: "High",
      status: "Under Review",
      time: "32 min ago",
      location: "Available",
      description:
        "User submitted a harassment-related incident for administrative review.",
    },
    {
      id: "INC-003",
      type: "Unsafe Situation",
      user: "User #1007",
      priority: "Medium",
      status: "Resolved",
      time: "1 hour ago",
      location: "Not Available",
      description:
        "User reported an uncomfortable situation during a monitored journey.",
    },
    {
      id: "INC-004",
      type: "Theft",
      user: "User #0998",
      priority: "Medium",
      status: "Open",
      time: "2 hours ago",
      location: "Available",
      description:
        "User reported a possible theft incident and submitted the available details.",
    },
    {
      id: "INC-005",
      type: "Medical Emergency",
      user: "User #0984",
      priority: "Critical",
      status: "Under Review",
      time: "3 hours ago",
      location: "Available",
      description:
        "A medical emergency report was submitted for administrative review.",
    },
  ]);

  const filteredIncidents = useMemo(() => {
    return incidents.filter((incident) => {
      const matchesSearch =
        incident.id.toLowerCase().includes(search.toLowerCase()) ||
        incident.type.toLowerCase().includes(search.toLowerCase()) ||
        incident.user.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        incident.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        incident.priority === priorityFilter;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [incidents, search, statusFilter, priorityFilter]);

  const updateStatus = (id, newStatus) => {
    setIncidents((current) =>
      current.map((incident) =>
        incident.id === id
          ? { ...incident, status: newStatus }
          : incident
      )
    );

    setSelectedIncident((current) =>
      current && current.id === id
        ? { ...current, status: newStatus }
        : current
    );
  };

  const getStatusClass = (status) => {
    return status.toLowerCase().replace(" ", "-");
  };

  const getPriorityClass = (priority) => {
    return priority.toLowerCase();
  };

  return (
    <div className="admin-incidents-page">

      {/* Header */}
      <header className="admin-incidents-header">
        <button
          className="back-admin-btn"
          onClick={() => navigate("/admin")}
        >
          <ArrowLeft size={17} />
          Admin Dashboard
        </button>

        <div className="admin-incidents-title-row">
          <div>
            <span className="admin-label">
              INCIDENT MANAGEMENT
            </span>

            <h1>Incident Reports</h1>

            <p>
              Review submitted incident reports and update their
              administrative status.
            </p>
          </div>

          <div className="incident-header-icon">
            <ShieldAlert size={26} />
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="incident-summary">

        <div className="incident-summary-card">
          <div className="summary-icon total">
            <FileText size={19} />
          </div>

          <div>
            <span>Total Reports</span>
            <strong>{incidents.length}</strong>
          </div>
        </div>

        <div className="incident-summary-card">
          <div className="summary-icon open">
            <AlertTriangle size={19} />
          </div>

          <div>
            <span>Open</span>
            <strong>
              {
                incidents.filter(
                  (incident) => incident.status === "Open"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="incident-summary-card">
          <div className="summary-icon review">
            <Clock size={19} />
          </div>

          <div>
            <span>Under Review</span>
            <strong>
              {
                incidents.filter(
                  (incident) =>
                    incident.status === "Under Review"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="incident-summary-card">
          <div className="summary-icon resolved">
            <CheckCircle size={19} />
          </div>

          <div>
            <span>Resolved</span>
            <strong>
              {
                incidents.filter(
                  (incident) =>
                    incident.status === "Resolved"
                ).length
              }
            </strong>
          </div>
        </div>

      </section>

      {/* Filters */}
      <section className="incident-filter-card">

        <div className="incident-search">
          <Search size={17} />

          <input
            type="text"
            placeholder="Search incident, ID or user..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="incident-filter">
          <Filter size={16} />

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">All Status</option>
            <option value="Open">Open</option>
            <option value="Under Review">
              Under Review
            </option>
            <option value="Resolved">Resolved</option>
          </select>
        </div>

        <div className="incident-filter">
          <AlertTriangle size={16} />

          <select
            value={priorityFilter}
            onChange={(e) =>
              setPriorityFilter(e.target.value)
            }
          >
            <option value="All">All Priority</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
          </select>
        </div>

      </section>

      {/* Incident List */}
      <section className="admin-incident-panel">

        <div className="admin-incident-panel-header">
          <div>
            <span>SUBMITTED REPORTS</span>
            <h2>All Incidents</h2>
          </div>

          <span className="incident-count">
            {filteredIncidents.length} reports
          </span>
        </div>

        {filteredIncidents.length === 0 ? (
          <div className="no-incidents">
            <FileText size={30} />
            <h3>No incidents found</h3>
            <p>
              Try changing your search or filter settings.
            </p>
          </div>
        ) : (
          <div className="admin-incident-list">

            {filteredIncidents.map((incident) => (
              <div
                className="admin-incident-row"
                key={incident.id}
              >

                <div className="incident-main-info">

                  <div className="incident-type-icon">
                    <AlertTriangle size={18} />
                  </div>

                  <div>
                    <strong>{incident.type}</strong>

                    <span className="incident-id">
                      {incident.id}
                    </span>

                    <div className="incident-meta">
                      <span>
                        <User size={12} />
                        {incident.user}
                      </span>

                      <span>
                        <Clock size={12} />
                        {incident.time}
                      </span>

                      <span>
                        <MapPin size={12} />
                        {incident.location}
                      </span>
                    </div>
                  </div>

                </div>

                <span
                  className={`incident-priority ${getPriorityClass(
                    incident.priority
                  )}`}
                >
                  {incident.priority}
                </span>

                <span
                  className={`incident-status ${getStatusClass(
                    incident.status
                  )}`}
                >
                  {incident.status}
                </span>

                <button
                  className="view-incident-btn"
                  onClick={() =>
                    setSelectedIncident(incident)
                  }
                >
                  View Details
                </button>

              </div>
            ))}

          </div>
        )}

      </section>

      {/* Details Modal */}
      {selectedIncident && (
        <div className="incident-modal-overlay">

          <div className="incident-modal">

            <div className="incident-modal-header">

              <div>
                <span>INCIDENT DETAILS</span>

                <h2>
                  {selectedIncident.type}
                </h2>

                <small>
                  {selectedIncident.id}
                </small>
              </div>

              <button
                className="close-modal-btn"
                onClick={() =>
                  setSelectedIncident(null)
                }
              >
                <X size={19} />
              </button>

            </div>

            <div className="incident-detail-grid">

              <div>
                <span>Reported By</span>
                <strong>
                  {selectedIncident.user}
                </strong>
              </div>

              <div>
                <span>Reported</span>
                <strong>
                  {selectedIncident.time}
                </strong>
              </div>

              <div>
                <span>Priority</span>
                <strong
                  className={`detail-priority ${getPriorityClass(
                    selectedIncident.priority
                  )}`}
                >
                  {selectedIncident.priority}
                </strong>
              </div>

              <div>
                <span>Location</span>
                <strong>
                  {selectedIncident.location}
                </strong>
              </div>

            </div>

            <div className="incident-description">
              <span>Description</span>

              <p>
                {selectedIncident.description}
              </p>
            </div>

            <div className="incident-status-section">

              <div>
                <span>Administrative Status</span>

                <strong>
                  {selectedIncident.status}
                </strong>
              </div>

              <div className="status-buttons">

                <button
                  className="status-open-btn"
                  onClick={() =>
                    updateStatus(
                      selectedIncident.id,
                      "Open"
                    )
                  }
                >
                  Open
                </button>

                <button
                  className="status-review-btn"
                  onClick={() =>
                    updateStatus(
                      selectedIncident.id,
                      "Under Review"
                    )
                  }
                >
                  Under Review
                </button>

                <button
                  className="status-resolved-btn"
                  onClick={() =>
                    updateStatus(
                      selectedIncident.id,
                      "Resolved"
                    )
                  }
                >
                  Resolved
                </button>

              </div>

            </div>

            <div className="incident-modal-note">
              <ShieldAlert size={16} />

              <p>
                Location information should only be accessed when
                necessary and according to the user's privacy
                settings and administrative authorization.
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default AdminIncidents;