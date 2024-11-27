import React, { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import prevIcon from "../../assets/PreviousLocation.png";

const MapComponent = () => {
  const mapRef = useRef(null);
  const [popupData, setPopupData] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState(null);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([28.7041, 77.1025], 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapRef.current);

      const customIcon = L.divIcon({
        className: "icon",
        html: `<div class="icon-wrapper">
                  <img src="${prevIcon}"/>
               </div>`,
        iconSize: [80, 80],
        iconAnchor: [-300, 100],
      });

      const marker = L.marker([28.7041, 77.1025], { icon: customIcon }).addTo(
        mapRef.current
      );
      marker.on("click", (e) => {
        if (popupVisible) {
          setPopupVisible(false);
        } else {
          setPopupData({
            title: "McDonald's",
            location: "South London",
            address: "Tooley St, London Bridge, London SE1 2TF, United Kingdom",
            phone: "+934443-43",
            website: "http://mcdonalds.uk/",
          });

          const mapContainer = document.getElementById("map");
          const mapBounds = mapContainer.getBoundingClientRect();
          const popupX = e.originalEvent.clientX - mapBounds.left;
          const popupY = e.originalEvent.clientY - mapBounds.top;

          setPopupPosition({ x: popupX, y: popupY });
          setPopupVisible(true);
        }
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [popupVisible]);

  return (
    <div className="map-container">
      <div id="map"></div>

      {popupVisible && (
        <div className="custom-popup">
          <div className="cardDetails">
            <h2>McDonald's</h2>
            <p>South London</p>
          </div>
          <div className="description">
            <h3>Tooley St, London Bridge, London SE1 2TF, United Kingdom</h3>
          </div>
          <div className="number">
            <h3>Phone number</h3>
            <p>+934443-43</p>
          </div>
          <div className="website">
            <h3>Website</h3>
            <p>http://mcdonalds.uk/</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
