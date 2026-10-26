import { useEffect, useState } from "react";
import {
  UserRound,
  Phone,
  Heart,
  Plus,
  Pencil,
  Trash2,
  X,
  ShieldCheck,
} from "lucide-react";
import "./TrustedContacts.css";

const defaultContacts = [
  {
    id: 1,
    name: "Mom",
    phone: "+91 98765 43210",
    relationship: "Mother",
    primary: true,
  },
  {
    id: 2,
    name: "Best Friend",
    phone: "+91 98765 12345",
    relationship: "Friend",
    primary: false,
  },
];

function TrustedContacts() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("safeherContacts");
    return savedContacts ? JSON.parse(savedContacts) : defaultContacts;
  });

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    relationship: "",
    primary: false,
  });

  useEffect(() => {
    localStorage.setItem("safeherContacts", JSON.stringify(contacts));
  }, [contacts]);

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      name: "",
      phone: "",
      relationship: "",
      primary: false,
    });
    setShowModal(true);
  };

  const openEditModal = (contact) => {
    setEditingId(contact.id);
    setFormData({
      name: contact.name,
      phone: contact.phone,
      relationship: contact.relationship,
      primary: contact.primary,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingId(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.relationship) {
      alert("Please fill in all required fields.");
      return;
    }

    if (editingId) {
      setContacts(
        contacts.map((contact) =>
          contact.id === editingId
            ? { ...contact, ...formData }
            : contact
        )
      );
    } else {
      const newContact = {
        id: Date.now(),
        ...formData,
      };

      setContacts([...contacts, newContact]);
    }

    closeModal();
  };

  const deleteContact = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmed) return;

    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const setPrimaryContact = (id) => {
    setContacts(
      contacts.map((contact) => ({
        ...contact,
        primary: contact.id === id,
      }))
    );
  };

  return (
    <div className="contacts-page">
      {/* Sidebar */}
      <aside className="contacts-sidebar">
        <div className="sidebar-logo">
          <div className="logo-mark">S</div>
          <span>SafeHer</span>
        </div>

        <nav className="sidebar-nav">
          <a href="/dashboard">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="/dashboard">
            <span>🚨</span>
            Emergency SOS
          </a>

          <a href="/trusted-contacts" className="active">
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

        <div className="sidebar-user">
          <div className="user-avatar">M</div>
          <div>
            <strong>Muskan</strong>
            <small>SafeHer User</small>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="contacts-main">
        <div className="contacts-header">
          <div>
            <p className="page-label">SAFETY NETWORK</p>
            <h1>Trusted Contacts</h1>
            <p className="page-description">
              People you trust who can be contacted during an emergency.
            </p>
          </div>

          <button className="add-contact-btn" onClick={openAddModal}>
            <Plus size={19} />
            Add Contact
          </button>
        </div>

        {/* Safety Info */}
        <div className="contacts-info">
          <div className="info-icon">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h3>Your safety network</h3>
            <p>
              Trusted contacts can receive emergency notifications and
              location information when you activate an SOS.
            </p>
          </div>
        </div>

        {/* Contact Count */}
        <div className="contacts-summary">
          <div>
            <span className="summary-number">{contacts.length}</span>
            <span className="summary-text">Trusted Contacts</span>
          </div>

          <div className="primary-status">
            <Heart size={18} />
            {contacts.some((contact) => contact.primary)
              ? "Primary contact configured"
              : "No primary contact"}
          </div>
        </div>

        {/* Contacts */}
        {contacts.length === 0 ? (
          <div className="empty-contacts">
            <div className="empty-icon">
              <UserRound size={32} />
            </div>

            <h2>No trusted contacts yet</h2>

            <p>
              Add someone you trust so they can be contacted during an
              emergency.
            </p>

            <button onClick={openAddModal}>
              <Plus size={18} />
              Add Your First Contact
            </button>
          </div>
        ) : (
          <div className="contacts-grid">
            {contacts.map((contact) => (
              <div className="contact-card" key={contact.id}>
                <div className="contact-top">
                  <div className="contact-avatar">
                    {contact.name.charAt(0).toUpperCase()}
                  </div>

                  {contact.primary && (
                    <span className="primary-badge">
                      <Heart size={13} />
                      Primary
                    </span>
                  )}
                </div>

                <div className="contact-details">
                  <h2>{contact.name}</h2>

                  <p className="relationship">
                    {contact.relationship}
                  </p>

                  <p className="contact-phone">
                    <Phone size={16} />
                    {contact.phone}
                  </p>
                </div>

                <div className="contact-actions">
                  {!contact.primary && (
                    <button
                      className="primary-action"
                      onClick={() => setPrimaryContact(contact.id)}
                    >
                      <Heart size={15} />
                      Set Primary
                    </button>
                  )}

                  <button
                    className="edit-action"
                    onClick={() => openEditModal(contact)}
                  >
                    <Pencil size={15} />
                    Edit
                  </button>

                  <button
                    className="delete-action"
                    onClick={() => deleteContact(contact.id)}
                  >
                    <Trash2 size={15} />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="privacy-note">
          🔒 Your trusted contact information is private and will only be
          used for safety-related communication.
        </p>
      </main>

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              <X size={21} />
            </button>

            <div className="modal-heading">
              <div className="modal-icon">
                <Heart size={22} />
              </div>

              <div>
                <h2>
                  {editingId ? "Edit Contact" : "Add Trusted Contact"}
                </h2>
                <p>
                  Add someone you would trust in an emergency.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Relationship</label>
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                >
                  <option value="">Select relationship</option>
                  <option value="Mother">Mother</option>
                  <option value="Father">Father</option>
                  <option value="Sibling">Sibling</option>
                  <option value="Friend">Friend</option>
                  <option value="Partner">Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <label className="primary-checkbox">
                <input
                  type="checkbox"
                  name="primary"
                  checked={formData.primary}
                  onChange={handleChange}
                />

                <span>
                  <strong>Make this my primary emergency contact</strong>
                  <small>
                    This contact will be highlighted for emergency use.
                  </small>
                </span>
              </label>

              <div className="modal-buttons">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button type="submit" className="save-contact-btn">
                  {editingId ? "Save Changes" : "Add Contact"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrustedContacts;