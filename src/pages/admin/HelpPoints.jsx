import React, { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Plus,
  Search,
  ShieldAlert,
  Hospital,
  Home,
  Phone,
  Pencil,
  Trash2,
  X,
  CheckCircle,
} from "lucide-react";

import "./help-points.css";

const initialHelpPoints = [
  {
    id: 1,
    name: "City Police Station",
    type: "Police Station",
    address: "Main Market Road",
    phone: "100",
    status: "Available",
  },
  {
    id: 2,
    name: "Civil Hospital",
    type: "Hospital",
    address: "Sector 14",
    phone: "108",
    status: "Available",
  },
  {
    id: 3,
    name: "Safe Community Centre",
    type: "Safe Location",
    address: "Central Avenue",
    phone: "0124-000000",
    status: "Available",
  },
  {
    id: 4,
    name: "Women Help Centre",
    type: "Safe Location",
    address: "Near Bus Stand",
    phone: "181",
    status: "Unavailable",
  },
];

const HelpPoints = () => {
  const [helpPoints, setHelpPoints] = useState(initialHelpPoints);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [editingPoint, setEditingPoint] = useState(null);

  const [form, setForm] = useState({
    name: "",
    type: "Police Station",
    address: "",
    phone: "",
    status: "Available",
  });

  const resetForm = () => {
    setForm({
      name: "",
      type: "Police Station",
      address: "",
      phone: "",
      status: "Available",
    });

    setEditingPoint(null);
  };

  const openAddModal = () => {
    resetForm();
    setShowModal(true);
  };

  const openEditModal = (point) => {
    setEditingPoint(point);

    setForm({
      name: point.name,
      type: point.type,
      address: point.address,
      phone: point.phone,
      status: point.status,
    });

    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    resetForm();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const saveHelpPoint = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.address.trim() ||
      !form.phone.trim()
    ) {
      return;
    }

    if (editingPoint) {
      setHelpPoints((previous) =>
        previous.map((point) =>
          point.id === editingPoint.id
            ? {
                ...point,
                ...form,
              }
            : point
        )
      );
    } else {
      const newPoint = {
        id: Date.now(),
        ...form,
      };

      setHelpPoints((previous) => [
        ...previous,
        newPoint,
      ]);
    }

    closeModal();
  };

  const deleteHelpPoint = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this help point?"
    );

    if (!confirmed) {
      return;
    }

    setHelpPoints((previous) =>
      previous.filter((point) => point.id !== id)
    );
  };

  const filteredPoints = helpPoints.filter((point) => {
    const matchesSearch =
      point.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      point.address
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      point.type
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || point.type === filter;

    return matchesSearch && matchesFilter;
  });

  const getIcon = (type) => {
    if (type === "Police Station") {
      return <ShieldAlert size={21} />;
    }

    if (type === "Hospital") {
      return <Hospital size={21} />;
    }

    return <Home size={21} />;
  };

  return (
    <div className="help-points-page">
      {/* Header */}

      <header className="help-points-header">
        <div>
          <span className="admin-label">
            RESOURCE MANAGEMENT
          </span>

          <h1>Manage Help Points</h1>

          <p>
            Configure and maintain trusted safety assistance
            resources available to SafeHer users.
          </p>
        </div>

        <div className="admin-header-actions">
          <button
            className="back-admin-btn"
            onClick={() =>
              (window.location.href = "/admin")
            }
          >
            <ArrowLeft size={17} />
            Admin Dashboard
          </button>

          <button
            className="add-help-btn"
            onClick={openAddModal}
          >
            <Plus size={18} />
            Add Help Point
          </button>
        </div>
      </header>

      {/* Summary */}

      <section className="help-summary-grid">
        <div className="help-summary-card">
          <div className="summary-icon">
            <MapPin size={20} />
          </div>

          <div>
            <span>Total Help Points</span>
            <strong>{helpPoints.length}</strong>
          </div>
        </div>

        <div className="help-summary-card">
          <div className="summary-icon">
            <ShieldAlert size={20} />
          </div>

          <div>
            <span>Police Stations</span>
            <strong>
              {
                helpPoints.filter(
                  (point) =>
                    point.type === "Police Station"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="help-summary-card">
          <div className="summary-icon">
            <Hospital size={20} />
          </div>

          <div>
            <span>Hospitals</span>
            <strong>
              {
                helpPoints.filter(
                  (point) => point.type === "Hospital"
                ).length
              }
            </strong>
          </div>
        </div>

        <div className="help-summary-card">
          <div className="summary-icon">
            <CheckCircle size={20} />
          </div>

          <div>
            <span>Available</span>
            <strong>
              {
                helpPoints.filter(
                  (point) =>
                    point.status === "Available"
                ).length
              }
            </strong>
          </div>
        </div>
      </section>

      {/* Search and Filter */}

      <section className="help-filter-card">
        <div className="help-search">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search help point, address or type..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

        <select
          value={filter}
          onChange={(e) =>
            setFilter(e.target.value)
          }
          className="help-filter-select"
        >
          <option value="All">All Types</option>
          <option value="Police Station">
            Police Stations
          </option>
          <option value="Hospital">
            Hospitals
          </option>
          <option value="Safe Location">
            Safe Locations
          </option>
        </select>
      </section>

      {/* Help Points */}

      <section className="help-list-card">
        <div className="help-list-heading">
          <div>
            <span>CONFIGURED RESOURCES</span>
            <h2>All Help Points</h2>
          </div>

          <span className="help-count">
            {filteredPoints.length} points
          </span>
        </div>

        {filteredPoints.length === 0 ? (
          <div className="empty-help-points">
            <MapPin size={32} />

            <h3>No help points found</h3>

            <p>
              Try changing your search or add a new
              assistance point.
            </p>
          </div>
        ) : (
          <div className="help-points-list">
            {filteredPoints.map((point) => (
              <div
                className="help-point-row"
                key={point.id}
              >
                <div className="help-point-icon">
                  {getIcon(point.type)}
                </div>

                <div className="help-point-main">
                  <h3>{point.name}</h3>

                  <span className="help-point-type">
                    {point.type}
                  </span>

                  <div className="help-point-details">
                    <span>
                      <MapPin size={14} />
                      {point.address}
                    </span>

                    <span>
                      <Phone size={14} />
                      {point.phone}
                    </span>
                  </div>
                </div>

                <div className="help-point-status">
                  <span
                    className={
                      point.status === "Available"
                        ? "status-available"
                        : "status-unavailable"
                    }
                  >
                    {point.status}
                  </span>
                </div>

                <div className="help-point-actions">
                  <button
                    title="Edit"
                    onClick={() =>
                      openEditModal(point)
                    }
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    title="Delete"
                    onClick={() =>
                      deleteHelpPoint(point.id)
                    }
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Information */}

      <div className="help-info-box">
        <ShieldAlert size={18} />

        <div>
          <strong>Administrative Resource Management</strong>

          <p>
            Help points shown here are configured resources
            for the SafeHer prototype. In the backend,
            these records should be verified and maintained
            by authorized administrators.
          </p>
        </div>
      </div>

      {/* Add/Edit Modal */}

      {showModal && (
        <div className="help-modal-overlay">
          <div className="help-modal">
            <div className="help-modal-header">
              <div>
                <span>HELP POINT</span>

                <h2>
                  {editingPoint
                    ? "Edit Help Point"
                    : "Add Help Point"}
                </h2>
              </div>

              <button
                className="modal-close-btn"
                onClick={closeModal}
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={saveHelpPoint}>
              <div className="help-form-group">
                <label>Help Point Name</label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. City Police Station"
                  required
                />
              </div>

              <div className="help-form-group">
                <label>Type</label>

                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                >
                  <option value="Police Station">
                    Police Station
                  </option>

                  <option value="Hospital">
                    Hospital
                  </option>

                  <option value="Safe Location">
                    Safe Location
                  </option>
                </select>
              </div>

              <div className="help-form-group">
                <label>Address</label>

                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Enter complete address"
                  required
                />
              </div>

              <div className="help-form-row">
                <div className="help-form-group">
                  <label>Contact Number</label>

                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Emergency/contact number"
                    required
                  />
                </div>

                <div className="help-form-group">
                  <label>Status</label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value="Available">
                      Available
                    </option>

                    <option value="Unavailable">
                      Unavailable
                    </option>
                  </select>
                </div>
              </div>

              <div className="help-modal-actions">
                <button
                  type="button"
                  className="modal-cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="modal-save-btn"
                >
                  <CheckCircle size={17} />

                  {editingPoint
                    ? "Save Changes"
                    : "Add Help Point"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpPoints;