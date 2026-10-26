import React, { useState } from "react";
import {
  Map,
  MapPin,
  Navigation,
  Clock,
  ShieldCheck,
  Hospital,
  ShieldAlert,
  Brain,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  RotateCcw,
} from "lucide-react";

import "./route-safety.css";

const RouteSafety = () => {
  const [startLocation, setStartLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [travelTime, setTravelTime] = useState("15");
  const [helpPoints, setHelpPoints] = useState("3");
  const [routeType, setRouteType] = useState("main");
  const [result, setResult] = useState(null);

  const calculateScore = () => {
    if (!startLocation.trim() || !destination.trim()) {
      return;
    }

    let score = 70;
    const reasons = [];

    // Travel time
    const time = Number(travelTime);

    if (time <= 15) {
      score += 8;
      reasons.push("Short estimated travel time.");
    } else if (time <= 30) {
      score += 4;
      reasons.push("Moderate estimated travel time.");
    } else {
      score -= 5;
      reasons.push(
        "Longer travel time may require additional planning."
      );
    }

    // Help points
    const points = Number(helpPoints);

    if (points >= 4) {
      score += 12;
      reasons.push(
        "Several configured help points are available nearby."
      );
    } else if (points >= 2) {
      score += 8;
      reasons.push("Nearby help points are available.");
    } else if (points === 1) {
      score += 3;
      reasons.push(
        "At least one configured help point is available."
      );
    } else {
      score -= 8;
      reasons.push(
        "No configured help point was considered for this prototype route."
      );
    }

    // Route characteristics
    if (routeType === "main") {
      score += 7;
      reasons.push("Route uses main/populated roads.");
    } else if (routeType === "mixed") {
      score += 2;
      reasons.push(
        "Route contains a mixture of main and local roads."
      );
    } else {
      score -= 6;
      reasons.push(
        "Route contains more local or less populated road segments."
      );
    }

    // Keep score between 0 and 100
    score = Math.max(0, Math.min(100, score));

    let level = "Moderate";
    let message =
      "The route has a mixture of positive and cautionary indicators.";

    if (score >= 80) {
      level = "Good";
      message =
        "The selected route has several positive safety indicators.";
    } else if (score < 60) {
      level = "Needs Attention";
      message =
        "Consider reviewing the route and available safety options before travelling.";
    }

    setResult({
      score,
      level,
      message,
      reasons,
    });
  };

  const resetRoute = () => {
    setStartLocation("");
    setDestination("");
    setTravelTime("15");
    setHelpPoints("3");
    setRouteType("main");
    setResult(null);
  };

  return (
    <div className="route-safety-page">

      {/* HEADER */}
      <div className="route-safety-header">
        <div>
          <span className="route-safety-label">
            AI-ASSISTED SAFETY
          </span>

          <h1>Route Safety Score</h1>

          <p>
            Review route-related safety indicators before starting
            your journey.
          </p>
        </div>

        <div className="route-header-icon">
          <Map size={28} />
        </div>
      </div>

      {/* INTRO */}
      <div className="route-intro-card">
        <div className="route-intro-icon">
          <Brain size={22} />
        </div>

        <div>
          <h2>Understand your route</h2>

          <p>
            SafeHer combines route-related factors into a transparent
            safety-support score with an explanation of the factors
            considered.
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="route-main-grid">

        {/* ROUTE INPUT CARD */}
        <div className="route-input-card">

          <div className="route-card-heading">
            <div>
              <span>ROUTE DETAILS</span>
              <h2>Plan your journey</h2>
            </div>

            <Navigation size={22} />
          </div>

          {/* STARTING LOCATION */}
          <div className="route-field">
            <label htmlFor="start-location">
              Starting Location
            </label>

            <div className="route-input-wrapper">
              <MapPin size={18} />

              <input
                id="start-location"
                type="text"
                value={startLocation}
                onChange={(e) =>
                  setStartLocation(e.target.value)
                }
                placeholder="Enter starting location"
              />
            </div>
          </div>

          {/* DESTINATION */}
          <div className="route-field">
            <label htmlFor="destination">
              Destination
            </label>

            <div className="route-input-wrapper">
              <Navigation size={18} />

              <input
                id="destination"
                type="text"
                value={destination}
                onChange={(e) =>
                  setDestination(e.target.value)
                }
                placeholder="Enter destination"
              />
            </div>
          </div>

          {/* TRAVEL TIME */}
          <div className="route-field">
            <label htmlFor="travel-time">
              Estimated Travel Time
            </label>

            <div className="route-input-wrapper">
              <Clock size={18} />

              <select
                id="travel-time"
                value={travelTime}
                onChange={(e) =>
                  setTravelTime(e.target.value)
                }
              >
                <option value="10">10 minutes</option>
                <option value="15">15 minutes</option>
                <option value="20">20 minutes</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60+ minutes</option>
              </select>
            </div>
          </div>

          {/* HELP POINTS */}
          <div className="route-field">
            <label htmlFor="help-points">
              Configured Nearby Help Points
            </label>

            <div className="route-input-wrapper">
              <ShieldCheck size={18} />

              <select
                id="help-points"
                value={helpPoints}
                onChange={(e) =>
                  setHelpPoints(e.target.value)
                }
              >
                <option value="0">None</option>
                <option value="1">1 help point</option>
                <option value="2">2 help points</option>
                <option value="3">3 help points</option>
                <option value="4">4+ help points</option>
              </select>
            </div>
          </div>

          {/* ROUTE CHARACTERISTICS */}
          <div className="route-field">
            <label htmlFor="route-type">
              Route Characteristics
            </label>

            <div className="route-input-wrapper">
              <Map size={18} />

              <select
                id="route-type"
                value={routeType}
                onChange={(e) =>
                  setRouteType(e.target.value)
                }
              >
                <option value="main">
                  Main / populated roads
                </option>

                <option value="mixed">
                  Mixed roads
                </option>

                <option value="local">
                  Mostly local roads
                </option>
              </select>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="route-buttons">

            <button
              className="route-reset-btn"
              type="button"
              onClick={resetRoute}
            >
              <RotateCcw size={16} />
              Clear
            </button>

            <button
              className="route-score-btn"
              type="button"
              onClick={calculateScore}
              disabled={
                !startLocation.trim() ||
                !destination.trim()
              }
            >
              <Brain size={16} />
              Calculate Safety Score
            </button>

          </div>
        </div>

        {/* RESULT CARD */}
        <div className="route-result-card">

          <div className="route-result-heading">
            <div>
              <span>SAFETY ASSESSMENT</span>
              <h2>Route Analysis</h2>
            </div>

            <ShieldCheck size={22} />
          </div>

          {!result ? (
            <div className="route-empty-result">

              <div className="route-empty-icon">
                <Map size={30} />
              </div>

              <h3>No route assessed yet</h3>

              <p>
                Enter your starting location and destination,
                then calculate the safety score.
              </p>

            </div>
          ) : (
            <div className="route-result-content">

              {/* SCORE */}
              <div className="route-score-display">

                <div className="route-score-circle">
                  <strong>{result.score}</strong>
                  <span>/100</span>
                </div>

                <div className="route-score-info">
                  <span>ROUTE SAFETY INDICATOR</span>

                  <h3>{result.level}</h3>

                  <p>{result.message}</p>
                </div>

              </div>

              {/* ROUTE SUMMARY */}
              <div className="route-summary">

                <div className="route-location">
                  <MapPin size={17} />

                  <div>
                    <span>FROM</span>
                    <strong>{startLocation}</strong>
                  </div>
                </div>

                <div className="route-line"></div>

                <div className="route-location">
                  <Navigation size={17} />

                  <div>
                    <span>TO</span>
                    <strong>{destination}</strong>
                  </div>
                </div>

              </div>

              {/* FACTORS */}
              <div className="route-factors">

                <div className="route-factor-title">
                  <CheckCircle size={18} />

                  <h3>Factors Considered</h3>
                </div>

                {result.reasons.map((reason, index) => (
                  <div
                    className="route-factor"
                    key={index}
                  >
                    <CheckCircle size={15} />
                    <span>{reason}</span>
                  </div>
                ))}

              </div>

              {/* RECOMMENDATION */}
              <div className="route-recommendation">

                <div className="route-recommendation-title">
                  <Lightbulb size={18} />

                  <h3>Safety Recommendation</h3>
                </div>

                <p>
                  Keep a trusted contact informed when appropriate
                  and review available help points before starting
                  the journey.
                </p>

              </div>

            </div>
          )}

        </div>
      </div>

      {/* HELP POINT INFORMATION */}
      <div className="route-help-grid">

        <div className="route-help-card">

          <div className="route-help-icon">
            <ShieldAlert size={20} />
          </div>

          <div>
            <h3>Police / Emergency Help</h3>

            <p>
              Configured help points can contribute to the route
              analysis.
            </p>
          </div>

        </div>

        <div className="route-help-card">

          <div className="route-help-icon">
            <Hospital size={20} />
          </div>

          <div>
            <h3>Medical Assistance</h3>

            <p>
              Nearby configured medical help points can be
              considered.
            </p>
          </div>

        </div>

      </div>

      {/* DISCLAIMER */}
      <div className="route-disclaimer">

        <AlertTriangle size={18} />

        <div>
          <h3>AI Decision Support</h3>

          <p>
            The route score is an indicative safety-support measure,
            not a guarantee of safety. It should not be used to label
            a community or location as inherently dangerous. Actual
            conditions may change.
          </p>
        </div>

      </div>

    </div>
  );
};

export default RouteSafety;