import ApiTest from "./ApiTest";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import TrustedContacts from "./pages/TrustedContacts";
import EmergencySOS from "./pages/EmergencySOS";
import Journey from "./pages/Journey";
import NearbyHelp from "./pages/NearbyHelp";
import ReportIncident from "./pages/ReportIncident";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Privacy from "./pages/Privacy";
import AIIncidentClassification from "./pages/AIIncidentClassification";
import RouteSafety from "./pages/RouteSafety";
import PersonalSafetyAssistant from "./pages/PersonalSafetyAssistant";

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminIncidents from "./pages/admin/AdminIncidents";
import HelpPoints from "./pages/admin/HelpPoints";
import ManageUsers from "./pages/admin/ManageUsers";
import AuditLogs from "./pages/admin/AuditLogs";


function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* =========================================
            PUBLIC PAGES
        ========================================= */}

        <Route
          path="/"
          element={<Landing />}
        />


        <Route
          path="/login"
          element={<Login />}
        />


        <Route
          path="/register"
          element={<Register />}
        />


        {/* =========================================
            SAFEHER APPLICATION
        ========================================= */}

        <Route
          element={<DashboardLayout />}
        >


          {/* DASHBOARD */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />


          {/* SAFE JOURNEY */}

          <Route
            path="/journey"
            element={<Journey />}
          />


          {/* TRUSTED CONTACTS */}

          <Route
            path="/trusted-contacts"
            element={<TrustedContacts />}
          />


          {/* NEARBY HELP */}

          <Route
            path="/nearby-help"
            element={<NearbyHelp />}
          />


          {/* INCIDENTS */}

          <Route
            path="/incidents"
            element={<ReportIncident />}
          />


          {/* NOTIFICATIONS */}

          <Route
            path="/notifications"
            element={<Notifications />}
          />


          {/* PROFILE */}

          <Route
            path="/profile"
            element={<Profile />}
          />


          {/* PRIVACY */}

          <Route
            path="/privacy"
            element={<Privacy />}
          />


          {/* AI INCIDENT CLASSIFICATION */}

          <Route
            path="/ai-classification"
            element={<AIIncidentClassification />}
          />


          {/* AI ROUTE SAFETY */}

          <Route
            path="/route-safety"
            element={<RouteSafety />}
          />


          {/* SAFETY ASSISTANT */}

          <Route
            path="/safety-assistant"
            element={<PersonalSafetyAssistant />}
          />


          {/* EMERGENCY SOS */}

          <Route
            path="/emergency-sos"
            element={<EmergencySOS />}
          />


        </Route>


        {/* =========================================
            ADMIN
        ========================================= */}

        <Route
          path="/admin"
          element={<AdminDashboard />}
        />


        <Route
          path="/admin/incidents"
          element={<AdminIncidents />}
        />


        <Route
          path="/admin/help-points"
          element={<HelpPoints />}
        />

        <Route 
          path="/admin/users" 
          element={<ManageUsers />} 
        />

        <Route
          path="/admin/audit-logs"
          element={<AuditLogs />}
        />

        <Route path="/api-test" element={<ApiTest />} />
        


      </Routes>

    </BrowserRouter>

  );
}


export default App;