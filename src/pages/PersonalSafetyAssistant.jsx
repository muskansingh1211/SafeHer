import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Brain,
  ShieldCheck,
  MapPin,
  Users,
  Navigation,
  AlertTriangle,
  Lightbulb,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import "./personal-safety-assistant.css";

const PersonalSafetyAssistant = () => {
  const navigate = useNavigate();

  const [selectedSituation, setSelectedSituation] =
    useState("alone");

  const situations = {
    alone: {
      title: "Travelling alone",
      description:
        "You are travelling alone and want to stay connected during your journey.",
      icon: Navigation,
      actions: [
        "Start a monitored journey if you are travelling to an unfamiliar place.",
        "Keep a trusted contact informed about your destination.",
        "Keep your phone accessible and sufficiently charged.",
        "Review nearby help points before starting the journey.",
      ],
    },

    unsafe: {
      title: "Feeling unsafe",
      description:
        "You feel uncomfortable or unsafe in your current surroundings.",
      icon: AlertTriangle,
      actions: [
        "Move towards a populated or well-lit area if possible.",
        "Inform a trusted contact about your situation.",
        "Use Nearby Help to identify available assistance points.",
        "If you are in immediate danger, use the SOS feature.",
      ],
    },

    cab: {
      title: "Travelling in a cab",
      description:
        "You are travelling by cab and want to maintain awareness during the trip.",
      icon: MapPin,
      actions: [
        "Share relevant journey information with a trusted contact.",
        "Keep your phone accessible during the journey.",
        "Check that the vehicle and trip details match the booking.",
        "Consider using SafeHer journey monitoring when appropriate.",
      ],
    },

    unfamiliar: {
      title: "Unfamiliar area",
      description:
        "You are in an unfamiliar location and want additional safety support.",
      icon: MapPin,
      actions: [
        "Review the available route and nearby help points.",
        "Prefer routes with accessible and populated areas when possible.",
        "Keep a trusted contact informed about your destination.",
        "Avoid unnecessary detours if you are unfamiliar with the area.",
      ],
    },

    emergency: {
      title: "Immediate threat",
      description:
        "You may be facing an immediate safety concern.",
      icon: AlertTriangle,
      actions: [
        "Move to a safer or populated location if you can do so safely.",
        "Use SafeHer SOS to alert your trusted contacts.",
        "Share your latest available location when permission is enabled.",
        "Contact appropriate official emergency services when necessary.",
      ],
    },

    arrived: {
      title: "Reached destination",
      description:
        "You have reached your destination and want to complete your journey safely.",
      icon: CheckCircle,
      actions: [
        "Confirm your arrival if you were using journey monitoring.",
        "Stop the monitored journey when appropriate.",
        "Let your trusted contact know that you have arrived safely.",
        "Review any pending notifications or safety alerts.",
      ],
    },
  };

  const currentSituation = situations[selectedSituation];
  const SituationIcon = currentSituation.icon;

  return (
    <div className="safety-assistant-page">

      {/* Header */}
      <div className="assistant-header">
        <div>
          <span className="assistant-label">
            PERSONAL SAFETY SUPPORT
          </span>

          <h1>Personal Safety Assistant</h1>

          <p>
            Get practical safety suggestions based on your
            current situation.
          </p>
        </div>

        <div className="assistant-header-icon">
          <Brain size={28} />
        </div>
      </div>

      {/* Intro */}
      <div className="assistant-intro-card">
        <div className="assistant-intro-icon">
          <Lightbulb size={22} />
        </div>

        <div>
          <h2>How can SafeHer help?</h2>

          <p>
            Select the situation that best describes your current
            journey or concern. SafeHer will provide simple,
            situation-based safety suggestions.
          </p>
        </div>
      </div>

      <div className="assistant-main-grid">

        {/* Situation Selection */}
        <div className="assistant-situation-card">

          <div className="assistant-card-heading">
            <div>
              <span>YOUR SITUATION</span>
              <h2>Select a situation</h2>
            </div>

            <ShieldCheck size={22} />
          </div>

          <div className="situation-list">

            <button
              className={
                selectedSituation === "alone"
                  ? "situation-option active"
                  : "situation-option"
              }
              onClick={() => setSelectedSituation("alone")}
            >
              <Navigation size={19} />

              <div>
                <strong>Travelling alone</strong>
                <span>Stay connected during your journey</span>
              </div>
            </button>

            <button
              className={
                selectedSituation === "unsafe"
                  ? "situation-option active"
                  : "situation-option"
              }
              onClick={() => setSelectedSituation("unsafe")}
            >
              <AlertTriangle size={19} />

              <div>
                <strong>Feeling unsafe</strong>
                <span>Get immediate safety suggestions</span>
              </div>
            </button>

            <button
              className={
                selectedSituation === "cab"
                  ? "situation-option active"
                  : "situation-option"
              }
              onClick={() => setSelectedSituation("cab")}
            >
              <MapPin size={19} />

              <div>
                <strong>Travelling in a cab</strong>
                <span>Maintain awareness during travel</span>
              </div>
            </button>

            <button
              className={
                selectedSituation === "unfamiliar"
                  ? "situation-option active"
                  : "situation-option"
              }
              onClick={() =>
                setSelectedSituation("unfamiliar")
              }
            >
              <MapPin size={19} />

              <div>
                <strong>Unfamiliar area</strong>
                <span>Get location-aware suggestions</span>
              </div>
            </button>

            <button
              className={
                selectedSituation === "emergency"
                  ? "situation-option active emergency"
                  : "situation-option emergency"
              }
              onClick={() =>
                setSelectedSituation("emergency")
              }
            >
              <AlertTriangle size={19} />

              <div>
                <strong>Immediate threat</strong>
                <span>Access emergency safety actions</span>
              </div>
            </button>

            <button
              className={
                selectedSituation === "arrived"
                  ? "situation-option active"
                  : "situation-option"
              }
              onClick={() =>
                setSelectedSituation("arrived")
              }
            >
              <CheckCircle size={19} />

              <div>
                <strong>Reached destination</strong>
                <span>Complete your journey safely</span>
              </div>
            </button>

          </div>
        </div>

        {/* Suggestions */}
        <div className="assistant-result-card">

          <div className="assistant-result-heading">
            <div>
              <span>SAFETY GUIDANCE</span>
              <h2>{currentSituation.title}</h2>
            </div>

            <div className="assistant-result-icon">
              <SituationIcon size={21} />
            </div>
          </div>

          <div className="assistant-description">
            <p>{currentSituation.description}</p>
          </div>

          <div className="assistant-actions">

            <div className="assistant-actions-title">
              <CheckCircle size={18} />
              <h3>Suggested Actions</h3>
            </div>

            {currentSituation.actions.map((action, index) => (
              <div
                className="assistant-action"
                key={index}
              >
                <div className="assistant-action-number">
                  {index + 1}
                </div>

                <p>{action}</p>
              </div>
            ))}

          </div>

          {/* Quick Actions */}
          <div className="assistant-quick-actions">

            <h3>Quick Actions</h3>

            <button
              onClick={() => navigate("/emergency-sos")}
            >
              <AlertTriangle size={17} />
              Emergency SOS
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => navigate("/trusted-contacts")}
            >
              <Users size={17} />
              Trusted Contacts
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => navigate("/journey")}
            >
              <Navigation size={17} />
              Start Safe Journey
              <ArrowRight size={15} />
            </button>

          </div>
        </div>
      </div>

      {/* Safety Note */}
      <div className="assistant-note">

        <div className="assistant-note-icon">
          <ShieldCheck size={19} />
        </div>

        <div>
          <h3>Safety Support Reminder</h3>

          <p>
            These suggestions are intended to support safety
            decisions and do not guarantee personal safety.
            In an emergency, contact appropriate official
            emergency services.
          </p>
        </div>

      </div>

    </div>
  );
};

export default PersonalSafetyAssistant;