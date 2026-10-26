import React, { useState } from "react";
import {
  MapPin,
  Hospital,
  Shield,
  Phone,
  Navigation,
  Search,
  Clock,
  Heart,
} from "lucide-react";

import "./nearby-help.css";

const helpPlaces = [
  {
    id: 1,
    name: "City Police Station",
    type: "Police Station",
    distance: "1.2 km",
    time: "4 min",
    icon: Shield,
    phone: "100",
    description: "Police assistance and emergency support",
  },
  {
    id: 2,
    name: "Civil Hospital",
    type: "Hospital",
    distance: "2.1 km",
    time: "7 min",
    icon: Hospital,
    phone: "108",
    description: "24×7 emergency medical assistance",
  },
  {
    id: 3,
    name: "Women Help Centre",
    type: "Safe Place",
    distance: "2.8 km",
    time: "9 min",
    icon: Heart,
    phone: "181",
    description: "Support and assistance for women",
  },
];

function NearbyHelp() {
  const [selectedType, setSelectedType] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPlaces = helpPlaces.filter((place) => {
    const matchesType =
      selectedType === "All" || place.type === selectedType;

    const matchesSearch =
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.type.toLowerCase().includes(search.toLowerCase());

    return matchesType && matchesSearch;
  });

  return (
    <div className="nearby-page">
      {/* Header */}
      <div className="nearby-header">
        <div>
          <p className="eyebrow">LOCAL SUPPORT</p>

          <h1>Nearby Help</h1>

          <p className="nearby-subtitle">
            Find police stations, hospitals and trusted help points
            around you.
          </p>
        </div>

        <div className="location-status">
          <MapPin size={16} />
          <span>Location ready</span>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="help-toolbar">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search nearby help..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          {["All", "Police Station", "Hospital", "Safe Place"].map(
            (type) => (
              <button
                key={type}
                className={selectedType === type ? "active" : ""}
                onClick={() => setSelectedType(type)}
              >
                {type}
              </button>
            )
          )}
        </div>
      </div>

      {/* Map Section */}
      <section className="help-map-card">
        <div className="map-content">
          <div className="map-grid"></div>

          <div className="map-center">
            <div className="user-location">
              <MapPin size={22} />
            </div>

            <span>Your location</span>
          </div>

          <div className="map-marker marker-one">
            <Shield size={18} />
          </div>

          <div className="map-marker marker-two">
            <Hospital size={18} />
          </div>

          <div className="map-marker marker-three">
            <Heart size={18} />
          </div>

          <div className="map-label">
            Nearby assistance points
          </div>
        </div>
      </section>

      {/* Places */}
      <div className="places-heading">
        <div>
          <p className="eyebrow">HELP POINTS</p>
          <h2>Available nearby</h2>
        </div>

        <span className="places-count">
          {filteredPlaces.length} places
        </span>
      </div>

      <div className="help-list">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => {
            const Icon = place.icon;

            return (
              <div className="help-card" key={place.id}>
                <div className="help-icon">
                  <Icon size={23} />
                </div>

                <div className="help-info">
                  <span className="help-type">
                    {place.type}
                  </span>

                  <h3>{place.name}</h3>

                  <p>{place.description}</p>

                  <div className="help-meta">
                    <span>
                      <MapPin size={14} />
                      {place.distance}
                    </span>

                    <span>
                      <Clock size={14} />
                      {place.time}
                    </span>
                  </div>
                </div>

                <div className="help-actions">
                  <button
                    className="call-button"
                    onClick={() =>
                      (window.location.href = `tel:${place.phone}`)
                    }
                  >
                    <Phone size={16} />
                    Call
                  </button>

                  <button className="direction-button">
                    <Navigation size={16} />
                    Directions
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-results">
            <Search size={28} />
            <h3>No help points found</h3>
            <p>
              Try another search or choose a different category.
            </p>
          </div>
        )}
      </div>

      {/* Privacy Note */}
      <div className="help-privacy">
        <Shield size={18} />

        <div>
          <strong>Privacy first</strong>

          <p>
            Your location is only used to help identify nearby
            assistance. Location sharing remains under your control.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NearbyHelp;