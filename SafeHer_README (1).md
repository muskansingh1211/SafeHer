# SafeHer — Women's Safety Web Application

**SafeHer** is a college-project frontend prototype for women's personal safety. It brings together emergency SOS controls, trusted contacts, incident reporting, journey support, route-safety assessment, nearby-help information, and administrative interfaces in a React web application.

> **Project status:** Frontend prototype / educational demonstration. Do not rely on this application to contact emergency services, dispatch responders, or guarantee personal safety. Several workflows use browser-local data, sample information, or rule-based assessments rather than live services.

## Main features

- **Emergency SOS interface:** Activate or end an emergency state through the application UI. The interface describes sharing location and notifying contacts, but the supplied frontend does not establish a production emergency dispatch or SMS integration.
- **Trusted contacts:** Add, edit, delete, and mark a primary contact; contacts are saved in the browser's `localStorage` and start with sample entries.
- **Incident reporting:** Record an incident type and description, with optional location-sharing selection; reports are stored in browser `localStorage` rather than submitted to a verified authority.
- **Incident classification:** A rule-based keyword classifier labels descriptions (such as stalking, harassment, theft, or medical emergencies), assigns priorities, and displays suggested actions. Although the UI uses 'AI' terminology, the supplied implementation is not a trained machine-learning model.
- **Route-safety assessment:** Calculates a heuristic safety score using user-entered travel time, help-point count, and route type. This is a prototype estimate, not a real-time map, crime-data, or verified safety prediction.
- **Journey and nearby-help screens:** Interfaces for journey-related safety planning and exploring help information.
- **Personal safety assistant, notifications, profile, and privacy screens:** Additional user-facing modules for the safety workflow.
- **Administration screens:** Dashboards and interfaces for incident review, user management, help points, and audit logs. Their presence does not by itself establish a connected production backend.

## Tech stack

| Layer | Technologies |
| --- | --- |
| UI | React 19, JavaScript (JSX), HTML, CSS |
| Tooling | Vite 8, npm |
| Navigation | React Router |
| Icons | Lucide React |
| HTTP dependency | Axios (included in dependencies; no production API integration is claimed) |
| Browser persistence | `localStorage` for selected features |

## Getting started

**Prerequisites:** Node.js and npm compatible with the installed Vite version.

```bash
git clone https://github.com/muskansingh1211/SafeHer.git
cd SafeHer
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

For a production build:

```bash
npm run build
npm run preview
```

## Main source structure

```text
SafeHer/
├── public/                # Static assets
├── src/
│   ├── App.jsx            # App routes / application shell
│   ├── main.jsx           # React entry point
│   ├── App.css            # Shared styles
│   └── pages/
│       ├── EmergencySOS.jsx
│       ├── TrustedContacts.jsx
│       ├── ReportIncident.jsx
│       ├── AIIncidentClassification.jsx
│       ├── RouteSafety.jsx
│       ├── Journey.jsx
│       ├── NearbyHelp.jsx
│       ├── PersonalSafetyAssistant.jsx
│       └── admin/         # Admin-facing views
├── package.json
└── index.html
```

## How to explore the prototype

1. Start the Vite development server and open the landing page.
2. Navigate through the safety dashboard and its feature pages.
3. Add a test trusted contact; note that it is saved in this browser only.
4. Submit a **fictional** incident report and review the local UI behavior.
5. Try sample text in incident classification to observe keyword-based categorization.
6. Enter example route inputs to view the heuristic safety score.

**Privacy note:** Avoid entering real emergency details, sensitive personal information, or actual contact numbers into an unreviewed prototype. Browser storage is not an appropriate substitute for a secured backend.

## Limitations and future improvements

- Integrate a secure backend, user authentication, authorization, and audited data storage.
- Add opt-in geolocation, tested contact-notification integrations, and clear delivery confirmations.
- Connect validated maps, routing, and trustworthy nearby-help datasets.
- Replace keyword matching with a carefully evaluated model only if appropriate, and clearly communicate accuracy limits.
- Add accessibility testing, input validation, automated tests, security reviews, and deployment documentation.

## Project context

**Category:** College project — women's safety / frontend web development.

**Repository:** https://github.com/muskansingh1211/SafeHer

This README describes functionality observable in the supplied source archive and distinguishes prototype UI behavior from verified real-world integrations.
