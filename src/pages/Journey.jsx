import React, { useEffect, useState } from "react";
import {
  Navigation,
  MapPin,
  Clock3,
  Play,
  Square,
  CheckCircle2,
  ShieldCheck,
  Users,
  Route,
  LocateFixed,
  BellRing,
  ArrowRight,
} from "lucide-react";
import "./journey.css";

function Journey() {
  const [destination, setDestination] = useState("");
  const [journeyStarted, setJourneyStarted] = useState(false);
  const [journeyCompleted, setJourneyCompleted] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (!journeyStarted) return;

    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [journeyStarted]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(secs).padStart(2, "0")}`;
  };

  const startJourney = () => {
    if (!destination.trim()) return;

    setJourneyStarted(true);
    setJourneyCompleted(false);
    setElapsedSeconds(0);
  };

  const stopJourney = () => {
    setJourneyStarted(false);
  };

  const completeJourney = () => {
    setJourneyStarted(false);
    setJourneyCompleted(true);
  };

  return (
    <div className="safejourney-page">
      <div className="safejourney-container">

        {/* PAGE HEADER */}
        <div className="safejourney-header">
          <div>
            <div className="safejourney-breadcrumb">
              <ShieldCheck size={14} />
              <span>Safety Tools</span>
              <ArrowRight size={12} />
              <span>Safe Journey</span>
            </div>

            <h1>Safe Journey</h1>

            <p>
              Plan your route, stay connected and let your trusted contacts
              know you're on your way.
            </p>
          </div>

          <div className="safejourney-header-status">
            <span
              className={`safejourney-status-dot ${
                journeyStarted ? "active" : ""
              }`}
            ></span>

            {journeyStarted ? "Journey Active" : "Ready for Journey"}
          </div>
        </div>

        {/* MAIN JOURNEY CARD */}
        <section className="safejourney-main-card">

          <div className="safejourney-main-left">

            <div className="safejourney-card-label">
              <Navigation size={15} />
              PLAN YOUR JOURNEY
            </div>

            <h2>Where are you heading?</h2>

            <p className="safejourney-card-description">
              Enter your destination and SafeHer will help you stay connected
              throughout your journey.
            </p>

            <div className="safejourney-route-box">

              <div className="safejourney-route-line">
                <div className="safejourney-route-circle current">
                  <LocateFixed size={15} />
                </div>

                <div className="safejourney-route-dash"></div>

                <div className="safejourney-route-circle destination">
                  <MapPin size={15} />
                </div>
              </div>

              <div className="safejourney-route-fields">

                <div className="safejourney-route-field">
                  <span>Current location</span>
                  <strong>Your current location</strong>
                </div>

                <div className="safejourney-route-divider"></div>

                <div className="safejourney-route-field">
                  <span>Destination</span>

                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where are you going?"
                    disabled={journeyStarted}
                  />
                </div>

              </div>
            </div>

            <div className="safejourney-action-row">

              {!journeyStarted ? (
                <button
                  className="safejourney-start-button"
                  onClick={startJourney}
                  disabled={!destination.trim()}
                >
                  <Play size={17} fill="currentColor" />
                  Start Safe Journey
                </button>
              ) : (
                <button
                  className="safejourney-stop-button"
                  onClick={stopJourney}
                >
                  <Square size={15} fill="currentColor" />
                  Stop Journey
                </button>
              )}

              <div className="safejourney-protection-note">
                <ShieldCheck size={15} />
                <span>Safety monitoring enabled</span>
              </div>

            </div>
          </div>

          {/* JOURNEY SUMMARY */}
          <div className="safejourney-main-right">

            <div className="safejourney-summary-title">
              <span>JOURNEY STATUS</span>
              <Route size={18} />
            </div>

            <div className="safejourney-summary-status">
              <div className="safejourney-big-status-icon">
                {journeyCompleted ? (
                  <CheckCircle2 size={25} />
                ) : journeyStarted ? (
                  <Navigation size={25} />
                ) : (
                  <ShieldCheck size={25} />
                )}
              </div>

              <div>
                <strong>
                  {journeyCompleted
                    ? "Journey Completed"
                    : journeyStarted
                    ? "Journey in Progress"
                    : "Ready to Start"}
                </strong>

                <span>
                  {journeyCompleted
                    ? "You have safely reached your destination."
                    : journeyStarted
                    ? "Your journey is currently being monitored."
                    : "Start your journey when you're ready."}
                </span>
              </div>
            </div>

            <div className="safejourney-summary-divider"></div>

            <div className="safejourney-summary-item">
              <Clock3 size={18} />
              <div>
                <span>Journey duration</span>
                <strong>{formatTime(elapsedSeconds)}</strong>
              </div>
            </div>

            <div className="safejourney-summary-item">
              <MapPin size={18} />
              <div>
                <span>Destination</span>
                <strong>{destination || "Not selected"}</strong>
              </div>
            </div>

            <div className="safejourney-summary-item">
              <Users size={18} />
              <div>
                <span>Trusted contacts</span>
                <strong>Connected</strong>
              </div>
            </div>

          </div>
        </section>

        {/* MAP SECTION */}
        <section className="safejourney-map-card">

          <div className="safejourney-section-header">

            <div>
              <div className="safejourney-section-title">
                <div className="safejourney-section-icon">
                  <Navigation size={17} />
                </div>

                <div>
                  <h2>Journey Route</h2>
                  <p>Your journey route will appear here.</p>
                </div>
              </div>
            </div>

            {journeyStarted && (
              <div className="safejourney-live">
                <span></span>
                LIVE TRACKING
              </div>
            )}

          </div>

          <div className="safejourney-map">

            <div className="safejourney-map-grid"></div>

            <div className="safejourney-map-road road-a"></div>
            <div className="safejourney-map-road road-b"></div>
            <div className="safejourney-map-road road-c"></div>
            <div className="safejourney-map-road road-d"></div>

            <div className="safejourney-map-area area-one">
              <span>SAFE ZONE</span>
            </div>

            <div className="safejourney-map-area area-two">
              <span>PUBLIC AREA</span>
            </div>

            <div className="safejourney-current-marker">
              <div className="safejourney-current-pulse"></div>
              <div className="safejourney-current-dot">
                <LocateFixed size={14} />
              </div>

              <div className="safejourney-map-label">
                Current Location
              </div>
            </div>

            {destination && (
              <div className="safejourney-destination-marker">

                <div className="safejourney-destination-pin">
                  <MapPin size={17} />
                </div>

                <div className="safejourney-map-label destination-label">
                  {destination}
                </div>

              </div>
            )}

            {!destination && (
              <div className="safejourney-map-empty">

                <div className="safejourney-map-empty-icon">
                  <Navigation size={23} />
                </div>

                <strong>Your route will appear here</strong>

                <span>
                  Enter a destination above to preview your journey.
                </span>

              </div>
            )}

          </div>

          {journeyStarted && (
            <button
              className="safejourney-arrived-button"
              onClick={completeJourney}
            >
              <CheckCircle2 size={17} />
              I've Arrived Safely
            </button>
          )}

        </section>

        {/* SAFETY FEATURES */}
        <div className="safejourney-feature-grid">

          <div className="safejourney-feature-card">

            <div className="safejourney-feature-icon">
              <Users size={19} />
            </div>

            <div>
              <h3>Trusted Contacts</h3>
              <p>
                Your selected contacts can stay informed during your journey.
              </p>
            </div>

            <ArrowRight size={16} />

          </div>

          <div className="safejourney-feature-card">

            <div className="safejourney-feature-icon">
              <BellRing size={19} />
            </div>

            <div>
              <h3>Safety Alerts</h3>
              <p>
                Stay aware with important safety notifications along the way.
              </p>
            </div>

            <ArrowRight size={16} />

          </div>

          <div className="safejourney-feature-card">

            <div className="safejourney-feature-icon">
              <ShieldCheck size={19} />
            </div>

            <div>
              <h3>Journey Protection</h3>
              <p>
                Keep your safety information available whenever you need it.
              </p>
            </div>

            <ArrowRight size={16} />

          </div>

        </div>

        {/* FOOTER NOTE */}
        <div className="safejourney-bottom-note">
          <ShieldCheck size={15} />
          <span>
            SafeHer is designed to help you stay connected and informed
            during your journey.
          </span>
        </div>

      </div>
    </div>
  );
}

export default Journey;