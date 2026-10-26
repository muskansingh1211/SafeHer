import React, { useState } from "react";
import {
  Brain,
  ShieldAlert,
  AlertTriangle,
  CheckCircle,
  Send,
  RotateCcw,
  Lightbulb,
} from "lucide-react";
import "./ai-incident-classification.css";

const AIIncidentClassification = () => {
  const [description, setDescription] = useState("");
  const [result, setResult] = useState(null);

  const classifyIncident = () => {
    const text = description.toLowerCase().trim();

    if (!text) {
      return;
    }

    let category = "Other";
    let priority = "Medium";
    let action =
      "Stay aware of your surroundings and consider contacting a trusted person if you feel unsafe.";

    if (
      text.includes("follow") ||
      text.includes("following") ||
      text.includes("stalk") ||
      text.includes("watching me")
    ) {
      category = "Stalking";
      priority = "High";
      action =
        "Move toward a public or safe location and consider contacting a trusted person or emergency service.";
    } else if (
      text.includes("harass") ||
      text.includes("abuse") ||
      text.includes("threat") ||
      text.includes("threatening")
    ) {
      category = "Harassment / Threat";
      priority = "High";
      action =
        "Move to a safer location, avoid confrontation, and consider contacting a trusted person or emergency service.";
    } else if (
      text.includes("steal") ||
      text.includes("stolen") ||
      text.includes("theft") ||
      text.includes("rob") ||
      text.includes("robbed")
    ) {
      category = "Theft";
      priority = "Medium";
      action =
        "Move to a safe location and report the incident to the appropriate authorities when possible.";
    } else if (
      text.includes("injury") ||
      text.includes("injured") ||
      text.includes("bleeding") ||
      text.includes("accident") ||
      text.includes("unconscious")
    ) {
      category = "Medical Emergency";
      priority = "Critical";
      action =
        "Seek immediate medical assistance and contact emergency services if required.";
    } else if (
      text.includes("attack") ||
      text.includes("attacked") ||
      text.includes("hit me") ||
      text.includes("physical")
    ) {
      category = "Physical Threat";
      priority = "Critical";
      action =
        "Move away from immediate danger and contact emergency services or a trusted person.";
    } else if (
      text.includes("unsafe") ||
      text.includes("danger") ||
      text.includes("scared") ||
      text.includes("afraid")
    ) {
      category = "Unsafe Situation";
      priority = "High";
      action =
        "Move toward a populated or safe location and consider notifying a trusted contact.";
    }

    setResult({
      category,
      priority,
      action,
    });
  };

  const resetClassification = () => {
    setDescription("");
    setResult(null);
  };

  return (
    <div className="ai-incident-page">

      {/* HEADER */}
      <div className="ai-incident-header">
        <div>
          <span className="ai-incident-label">
            AI-ASSISTED SAFETY
          </span>

          <h1>Incident Classification</h1>

          <p>
            Describe what happened and SafeHer will suggest a possible
            incident category.
          </p>
        </div>

        <div className="ai-header-icon">
          <Brain size={28} />
        </div>
      </div>

      {/* INTRO */}
      <div className="ai-intro-card">
        <div className="ai-intro-icon">
          <Brain size={22} />
        </div>

        <div>
          <h2>How can SafeHer help?</h2>

          <p>
            Enter a short description of the situation. The system analyzes
            keywords in the description and provides a suggested category
            and safety action.
          </p>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="ai-incident-grid">

        {/* INPUT CARD */}
        <div className="ai-input-card">

          <div className="ai-card-heading">
            <div>
              <span>INCIDENT DETAILS</span>
              <h2>What happened?</h2>
            </div>

            <ShieldAlert size={22} />
          </div>

          <label htmlFor="incident-description">
            Incident Description
          </label>

          <textarea
            id="incident-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Example: Someone has been following me while I am walking home..."
            rows="8"
          />

          <div className="ai-input-footer">
            <span>
              {description.length} characters
            </span>

            <div className="ai-action-buttons">

              <button
                className="ai-reset-btn"
                onClick={resetClassification}
                type="button"
              >
                <RotateCcw size={16} />
                Clear
              </button>

              <button
                className="ai-classify-btn"
                onClick={classifyIncident}
                type="button"
                disabled={!description.trim()}
              >
                <Send size={16} />
                Classify Incident
              </button>

            </div>
          </div>

        </div>

        {/* RESULT CARD */}
        <div className="ai-result-card">

          <div className="ai-result-heading">
            <div>
              <span>CLASSIFICATION RESULT</span>
              <h2>AI Assessment</h2>
            </div>

            <Brain size={22} />
          </div>

          {!result ? (
            <div className="ai-empty-result">

              <div className="ai-empty-icon">
                <Brain size={30} />
              </div>

              <h3>Waiting for description</h3>

              <p>
                Enter an incident description and select
                <strong> Classify Incident </strong>
                to see the suggested category.
              </p>

            </div>
          ) : (
            <div className="ai-result-content">

              <div className="classification-result">

                <div className="result-icon">
                  <CheckCircle size={24} />
                </div>

                <div>
                  <span>DETECTED CATEGORY</span>
                  <h3>{result.category}</h3>
                </div>

              </div>

              <div className="priority-box">

                <div className="priority-icon">
                  <AlertTriangle size={20} />
                </div>

                <div>
                  <span>PRIORITY</span>
                  <strong className={`priority-${result.priority.toLowerCase()}`}>
                    {result.priority}
                  </strong>
                </div>

              </div>

              <div className="recommended-action">

                <div className="action-title">
                  <Lightbulb size={19} />
                  <h3>Suggested Safety Action</h3>
                </div>

                <p>
                  {result.action}
                </p>

              </div>

            </div>
          )}

        </div>

      </div>

      {/* DISCLAIMER */}
      <div className="ai-disclaimer">

        <ShieldAlert size={18} />

        <div>
          <h3>AI Decision Support</h3>

          <p>
            This classification is only a safety-support feature and should
            not be treated as a definitive assessment. Users should rely on
            their situation, judgment, and appropriate emergency services
            when necessary.
          </p>
        </div>

      </div>

    </div>
  );
};

export default AIIncidentClassification;