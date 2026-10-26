import React from "react";
import { Outlet, NavLink } from "react-router-dom";

import {
  ShieldCheck,
  Navigation,
  Users,
  MapPin,
  FileText,
  Bell,
  Settings,
  Brain,
  Lightbulb,
  LogOut,
} from "lucide-react";

import "./DashboardLayout.css";


function DashboardLayout() {

  const userName = "Muskan";

  const mainMenu = [
    {
      path: "/dashboard",
      label: "Dashboard",
      icon: ShieldCheck,
    },
    {
      path: "/journey",
      label: "Safe Journey",
      icon: Navigation,
    },
    {
      path: "/trusted-contacts",
      label: "Trusted Contacts",
      icon: Users,
    },
    {
      path: "/nearby-help",
      label: "Nearby Help",
      icon: MapPin,
    },
    {
      path: "/incidents",
      label: "Incidents",
      icon: FileText,
    },
    {
      path: "/notifications",
      label: "Notifications",
      icon: Bell,
    },
  ];


  const safetyTools = [
    {
      path: "/profile",
      label: "Profile & Settings",
      icon: Settings,
    },
    {
      path: "/privacy",
      label: "Privacy & Data",
      icon: ShieldCheck,
    },
    {
      path: "/ai-classification",
      label: "AI Incident Analysis",
      icon: Brain,
    },
    {
      path: "/route-safety",
      label: "AI Route Safety",
      icon: Navigation,
    },
    {
      path: "/safety-assistant",
      label: "Safety Assistant",
      icon: Lightbulb,
    },
  ];


  return (
    <div className="safeher-layout">

      {/* =========================
          SIDEBAR
      ========================= */}

      <aside className="safeher-sidebar">


        {/* LOGO */}

        <div className="safeher-logo">

          <div className="safeher-logo-icon">
            <ShieldCheck size={21} />
          </div>

          <span>SafeHer</span>

        </div>


        {/* MAIN MENU */}

        <div className="sidebar-section">

          <p className="sidebar-title">
            MAIN MENU
          </p>


          <nav className="sidebar-nav">

            {mainMenu.map((item) => {

              const Icon = item.icon;

              return (

                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  className={({ isActive }) =>
                    `safeher-nav-link ${
                      isActive ? "active" : ""
                    }`
                  }
                >

                  <Icon size={19} />

                  <span>
                    {item.label}
                  </span>

                </NavLink>

              );

            })}

          </nav>

        </div>


        {/* SAFETY TOOLS */}

        <div className="sidebar-section">

          <p className="sidebar-title">
            SAFETY TOOLS
          </p>


          <nav className="sidebar-nav">

            {safetyTools.map((item) => {

              const Icon = item.icon;

              return (

                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `safeher-nav-link ${
                      isActive ? "active" : ""
                    }`
                  }
                >

                  <Icon size={18} />

                  <span>
                    {item.label}
                  </span>

                </NavLink>

              );

            })}

          </nav>

        </div>


        {/* USER */}

        <div className="sidebar-user">

          <div className="user-avatar">
            M
          </div>


          <div className="user-info">

            <strong>
              {userName}
            </strong>

            <span>
              SafeHer Member
            </span>

          </div>


          <button
            className="logout-button"
            type="button"
          >

            <LogOut size={17} />

          </button>

        </div>

      </aside>


      {/* =========================
          PAGE CONTENT
      ========================= */}

      <main className="safeher-content">

        <Outlet />

      </main>

    </div>
  );
}


export default DashboardLayout;