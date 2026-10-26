import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  AlertTriangle,
  MapPin,
  Navigation,
  Clock,
  FileText,
  Activity,
  ChevronRight,
  CheckCircle,
  Settings,
  ClipboardList,
} from "lucide-react";

import "./admin-dashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const recentIncidents = [
    {
      id: "INC-001",
      type: "Stalking",
      user: "User #1024",
      priority: "High",
      status: "Open",
      time: "10 min ago",
    },
    {
      id: "INC-002",
      type: "Harassment",
      user: "User #1018",
      priority: "High",
      status: "Under Review",
      time: "32 min ago",
    },
    {
      id: "INC-003",
      type: "Unsafe Situation",
      user: "User #1007",
      priority: "Medium",
      status: "Resolved",
      time: "1 hour ago",
    },
    {
      id: "INC-004",
      type: "Theft",
      user: "User #0998",
      priority: "Medium",
      status: "Open",
      time: "2 hours ago",
    },
  ];

  const systemActivity = [
    {
      icon: CheckCircle,
      title: "Incident report submitted",
      detail: "INC-004 was added to the system",
      time: "12 min ago",
    },
    {
      icon: Users,
      title: "New user registered",
      detail: "A new SafeHer account was created",
      time: "28 min ago",
    },
    {
      icon: MapPin,
      title: "Help point updated",
      detail: "A configured assistance point was modified",
      time: "45 min ago",
    },
    {
      icon: ShieldCheck,
      title: "Admin activity recorded",
      detail: "Administrative action added to audit records",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="admin-dashboard-page">

      {/* Header */}
      <header className="admin-header">
        <div>
          <span className="admin-label">
            SAFEHER ADMINISTRATION
          </span>

          <h1>Admin Dashboard</h1>

          <p>
            Review system activity, incidents, users and configured
            safety resources.
          </p>
        </div>

        <div className="admin-profile">
          <div className="admin-profile-icon">
            <ShieldCheck size={21} />
          </div>

          <div>
            <strong>Administrator</strong>
            <span>Authorized Admin</span>
          </div>
        </div>
      </header>

      {/* Admin Notice */}
      <div className="admin-notice">
        <div className="admin-notice-icon">
          <ShieldCheck size={20} />
        </div>

        <div>
          <h3>Administrative Access</h3>

          <p>
            This area is intended for authorized administrators.
            Administrative and security-sensitive actions should be
            recorded for accountability.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <section className="admin-stats">

        <div className="admin-stat-card">
          <div className="admin-stat-icon users">
            <Users size={20} />
          </div>

          <div>
            <span>Total Users</span>
            <strong>1,248</strong>
            <small>Registered accounts</small>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon journeys">
            <Navigation size={20} />
          </div>

          <div>
            <span>Active Journeys</span>
            <strong>18</strong>
            <small>Currently monitored</small>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon incidents">
            <AlertTriangle size={20} />
          </div>

          <div>
            <span>Open Incidents</span>
            <strong>07</strong>
            <small>Require review</small>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon help">
            <MapPin size={20} />
          </div>

          <div>
            <span>Help Points</span>
            <strong>64</strong>
            <small>Configured resources</small>
          </div>
        </div>

      </section>

      {/* Main Content */}
      <div className="admin-content-grid">

        {/* Recent Incidents */}
        <section className="admin-panel incidents-panel">

          <div className="admin-panel-header">
            <div>
              <span>INCIDENT MANAGEMENT</span>
              <h2>Recent Incidents</h2>
            </div>

            <button
              onClick={() => navigate("/admin/incidents")}
            >
              View All
              <ChevronRight size={15} />
            </button>
          </div>

          <div className="incident-table">

            <div className="incident-table-head">
              <span>Incident</span>
              <span>User</span>
              <span>Priority</span>
              <span>Status</span>
              <span>Time</span>
            </div>

            {recentIncidents.map((incident) => (
              <div
                className="incident-table-row"
                key={incident.id}
              >
                <div>
                  <strong>{incident.type}</strong>
                  <small>{incident.id}</small>
                </div>

                <span>{incident.user}</span>

                <span
                  className={`priority-badge ${incident.priority
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {incident.priority}
                </span>

                <span
                  className={`status-badge ${incident.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {incident.status}
                </span>

                <span className="incident-time">
                  {incident.time}
                </span>
              </div>
            ))}

          </div>
        </section>

        {/* Quick Actions */}
        <section className="admin-panel">

          <div className="admin-panel-header">
            <div>
              <span>ADMINISTRATION</span>
              <h2>Quick Actions</h2>
            </div>

            <Settings size={21} />
          </div>

          <div className="admin-quick-actions">

            <button
              onClick={() => navigate("/admin/incidents")}
            >
              <div className="quick-action-icon">
                <FileText size={18} />
              </div>

              <div>
                <strong>Review Incidents</strong>
                <span>View and manage submitted reports</span>
              </div>

              <ChevronRight size={16} />
            </button>

            <button
              onClick={() => navigate("/admin/help-points")}
            >
              <div className="quick-action-icon">
                <MapPin size={18} />
              </div>

              <div>
                <strong>Manage Help Points</strong>
                <span>Configure available assistance resources</span>
              </div>

              <ChevronRight size={16} />
            </button>

            <button
              onClick={() => navigate("/admin/users")}
            >
              <div className="quick-action-icon">
                <Users size={18} />
              </div>

              <div>
                <strong>Manage Users</strong>
                <span>Review registered user records</span>
              </div>

              <ChevronRight size={16} />
            </button>

            <button
              onClick={() => navigate("/admin/audit-logs")}
            >
              <div className="quick-action-icon">
                <ClipboardList size={18} />
              </div>

              <div>
                <strong>Audit Logs</strong>
                <span>Review administrative activity</span>
              </div>

              <ChevronRight size={16} />
            </button>

          </div>
        </section>

      </div>

      {/* Activity */}
      <section className="admin-panel activity-panel">

        <div className="admin-panel-header">
          <div>
            <span>SYSTEM MONITORING</span>
            <h2>Recent Activity</h2>
          </div>

          <Activity size={21} />
        </div>

        <div className="activity-list">

          {systemActivity.map((activity, index) => {
            const ActivityIcon = activity.icon;

            return (
              <div
                className="activity-item"
                key={index}
              >
                <div className="activity-icon">
                  <ActivityIcon size={17} />
                </div>

                <div className="activity-info">
                  <strong>{activity.title}</strong>
                  <span>{activity.detail}</span>
                </div>

                <div className="activity-time">
                  <Clock size={14} />
                  {activity.time}
                </div>
              </div>
            );
          })}

        </div>

      </section>

      {/* Footer Note */}
      <div className="admin-footer-note">
        <ShieldCheck size={17} />

        <p>
          Administrative information shown here is intended for
          system management and monitoring. Sensitive user
          information should only be accessed when necessary and
          according to the system's authorization and privacy rules.
        </p>
      </div>

    </div>
  );
};

export default AdminDashboard;