import React, { useMemo, useState } from "react";
import {
  Search,
  Users,
  UserCheck,
  UserX,
  ShieldCheck,
  Eye,
  Power,
  X,
  Mail,
  Phone,
  CalendarDays,
  UserRound,
  RefreshCw,
} from "lucide-react";

import "./manage-users.css";

const initialUsers = [
  {
    id: "USR-1024",
    name: "Aarohi Sharma",
    email: "aarohi.sharma@gmail.com",
    phone: "+91 98765 43210",
    role: "User",
    status: "Active",
    joined: "12 Aug 2026",
  },
  {
    id: "USR-1018",
    name: "Riya Mehta",
    email: "riya.mehta@gmail.com",
    phone: "+91 98123 45678",
    role: "User",
    status: "Active",
    joined: "08 Aug 2026",
  },
  {
    id: "USR-1007",
    name: "Priya Verma",
    email: "priya.verma@gmail.com",
    phone: "+91 97654 32109",
    role: "User",
    status: "Inactive",
    joined: "29 Jul 2026",
  },
  {
    id: "USR-0998",
    name: "Ananya Singh",
    email: "ananya.singh@gmail.com",
    phone: "+91 98989 12121",
    role: "User",
    status: "Active",
    joined: "15 Jul 2026",
  },
  {
    id: "ADM-0001",
    name: "Administrator",
    email: "admin@safeher.com",
    phone: "+91 90000 00000",
    role: "Admin",
    status: "Active",
    joined: "01 Jul 2026",
  },
];

function ManageUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(searchText) ||
        user.id.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" || user.status === statusFilter;

      const matchesRole =
        roleFilter === "All" || user.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [users, search, statusFilter, roleFilter]);

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  const adminUsers = users.filter(
    (user) => user.role === "Admin"
  ).length;

  const toggleUserStatus = (id) => {
    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );

    if (selectedUser?.id === id) {
      setSelectedUser((currentUser) => ({
        ...currentUser,
        status:
          currentUser.status === "Active" ? "Inactive" : "Active",
      }));
    }
  };

  const refreshUsers = () => {
    setUsers([...initialUsers]);
    setSearch("");
    setStatusFilter("All");
    setRoleFilter("All");
    setSelectedUser(null);
  };

  return (
    <div className="manage-users-page">

      {/* Header */}
      <div className="manage-users-header">
        <div>
          <p className="admin-breadcrumb">Admin / Users</p>

          <h1>Manage Users</h1>

          <p>
            View, search and manage SafeHer user accounts and access.
          </p>
        </div>

        <button
          className="refresh-users-btn"
          onClick={refreshUsers}
        >
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="user-stats-grid">

        <div className="user-stat-card">
          <div className="user-stat-icon">
            <Users size={21} />
          </div>

          <div>
            <span>Total Users</span>
            <strong>{totalUsers}</strong>
          </div>
        </div>

        <div className="user-stat-card">
          <div className="user-stat-icon">
            <UserCheck size={21} />
          </div>

          <div>
            <span>Active Users</span>
            <strong>{activeUsers}</strong>
          </div>
        </div>

        <div className="user-stat-card">
          <div className="user-stat-icon">
            <UserX size={21} />
          </div>

          <div>
            <span>Inactive Users</span>
            <strong>{inactiveUsers}</strong>
          </div>
        </div>

        <div className="user-stat-card">
          <div className="user-stat-icon">
            <ShieldCheck size={21} />
          </div>

          <div>
            <span>Administrators</span>
            <strong>{adminUsers}</strong>
          </div>
        </div>

      </div>

      {/* Main Card */}
      <div className="users-main-card">

        {/* Toolbar */}
        <div className="users-toolbar">

          <div className="user-search-box">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search by name, ID or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="user-filters">

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <select
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="All">All Roles</option>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>

          </div>
        </div>

        {/* Results */}
        <div className="users-results">
          Showing <strong>{filteredUsers.length}</strong> of{" "}
          <strong>{users.length}</strong> users
        </div>

        {/* Table */}
        <div className="users-table-wrapper">

          <table className="users-table">

            <thead>
              <tr>
                <th>User</th>
                <th>Contact</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user.id}>

                    {/* User */}
                    <td>
                      <div className="user-info">

                        <div className="user-avatar">
                          {user.name.charAt(0)}
                        </div>

                        <div>
                          <strong>{user.name}</strong>
                          <span>{user.id}</span>
                        </div>

                      </div>
                    </td>

                    {/* Contact */}
                    <td>
                      <div className="contact-info">
                        <span>{user.email}</span>
                        <span>{user.phone}</span>
                      </div>
                    </td>

                    {/* Role */}
                    <td>
                      <span
                        className={`role-badge ${
                          user.role.toLowerCase()
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    {/* Status */}
                    <td>
                      <span
                        className={`status-badge ${
                          user.status.toLowerCase()
                        }`}
                      >
                        <span className="status-dot"></span>
                        {user.status}
                      </span>
                    </td>

                    {/* Joined */}
                    <td>
                      <span className="joined-date">
                        {user.joined}
                      </span>
                    </td>

                    {/* Action */}
                    <td>
                      <div className="user-actions">

                        <button
                          className="view-user-btn"
                          onClick={() => setSelectedUser(user)}
                          title="View User"
                        >
                          <Eye size={17} />
                        </button>

                        <button
                          className={`toggle-user-btn ${
                            user.status === "Active"
                              ? "deactivate"
                              : "activate"
                          }`}
                          onClick={() =>
                            toggleUserStatus(user.id)
                          }
                          title={
                            user.status === "Active"
                              ? "Deactivate User"
                              : "Activate User"
                          }
                        >
                          <Power size={17} />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">
                    <div className="no-users">
                      <Users size={30} />
                      <h3>No users found</h3>
                      <p>
                        Try changing your search or filter.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="admin-users-notice">

        <div className="notice-icon">
          <ShieldCheck size={21} />
        </div>

        <div>
          <h3>User Privacy & Security</h3>

          <p>
            User information should only be accessed by authorized
            administrators. Sensitive information must be handled
            securely and according to SafeHer privacy policies.
          </p>
        </div>

      </div>

      {/* User Details Modal */}
      {selectedUser && (
        <div
          className="user-modal-overlay"
          onClick={() => setSelectedUser(null)}
        >
          <div
            className="user-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="user-modal-header">

              <div>
                <p>User Details</p>
                <h2>{selectedUser.name}</h2>
              </div>

              <button
                className="close-modal-btn"
                onClick={() => setSelectedUser(null)}
              >
                <X size={20} />
              </button>

            </div>

            <div className="modal-user-profile">

              <div className="modal-avatar">
                {selectedUser.name.charAt(0)}
              </div>

              <div>
                <h3>{selectedUser.name}</h3>
                <span>{selectedUser.id}</span>
              </div>

            </div>

            <div className="user-detail-list">

              <div className="user-detail-item">
                <Mail size={18} />
                <div>
                  <span>Email</span>
                  <strong>{selectedUser.email}</strong>
                </div>
              </div>

              <div className="user-detail-item">
                <Phone size={18} />
                <div>
                  <span>Phone</span>
                  <strong>{selectedUser.phone}</strong>
                </div>
              </div>

              <div className="user-detail-item">
                <UserRound size={18} />
                <div>
                  <span>Role</span>
                  <strong>{selectedUser.role}</strong>
                </div>
              </div>

              <div className="user-detail-item">
                <CalendarDays size={18} />
                <div>
                  <span>Joined</span>
                  <strong>{selectedUser.joined}</strong>
                </div>
              </div>

            </div>

            <div className="modal-status-section">

              <div>
                <span>Account Status</span>

                <span
                  className={`status-badge ${
                    selectedUser.status.toLowerCase()
                  }`}
                >
                  <span className="status-dot"></span>
                  {selectedUser.status}
                </span>
              </div>

              <button
                className={`modal-toggle-btn ${
                  selectedUser.status === "Active"
                    ? "deactivate"
                    : "activate"
                }`}
                onClick={() =>
                  toggleUserStatus(selectedUser.id)
                }
              >
                <Power size={17} />

                {selectedUser.status === "Active"
                  ? "Deactivate User"
                  : "Activate User"}
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default ManageUsers;