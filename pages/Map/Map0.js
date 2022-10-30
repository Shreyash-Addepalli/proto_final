import * as React from "react";
import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
import * as MapboxCircle from "mapbox-gl-circle";
import { insideCircle, distanceTo } from "geolocation-utils";
import ActiveMintsNavbar from "../../components/Navbars/ActiveMintsNavbar";
import Drawer0 from "../../components/Drawer/Drawer0";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hyZXlhc2gxNSIsImEiOiJjbDY0MGx6d3cwZHFkM3FwZ3Mwb2htMGZoIn0.0BtzRvleOZQpq9EiZbBU_A";

function Map0() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-75.21315336111111);
  const [lat, setLat] = useState(39.95574080555556);
  const [zoom, setZoom] = useState(11.5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style:
        "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
      center: [lng, lat],
      zoom: zoom,
      maxZoom: 11.8,
    });

    var geolocate = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true,
      },
      trackUserLocation: true,
      showUserHeading: true,
      showAccuracyCircle: false,
    });

    // Add the control to the map.
    map.current.addControl(geolocate);
    map.current.on("load", function () {
      // var lon = e.coords.longitude;
      // var lat = e.coords.latitude;
      // var position = [lon, lat];
      // console.log(position);
      geolocate.trigger(); //<- Automatically activates geolocation
    });

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);

        console.log(
          distanceTo(
            { lat: 39.95574080555556, lng: -75.21315336111111 },
            { lat: position.coords.latitude, lng: position.coords.longitude }
          )
        );
        console.log(
          turf.distance(
            [-75.21315336111111, 39.95574080555556],
            [position.coords.longitude, position.coords.latitude]
          )
        );
        const marker1 = new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(map.current);

        if (
          !insideCircle(
            { lat: 39.95574080555556, lon: -75.21315336111111 },
            {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            },
            2000
          )
        ) {
          new MapboxCircle(
            { lat: 39.95574080555556, lng: -75.21315336111111 },
            2000,
            {
              editable: false,
              fillColor: " rgba(255, 255, 255, 0.2)",
              fillOpacity: 1,
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 39.95574080555556, lng: -75.21315336111111 },
            2000 / 1.4,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.4)",
              fillOpacity: 0.75,
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 39.95574080555556, lng: -75.21315336111111 },
            2000 / 2.5,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.6)",
              fillOpacity: 0.75,
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 39.95574080555556, lng: -75.21315336111111 },
            2000 / 15,
            {
              editable: false,
              fillColor: "#EF0066",
              fillOpacity: 0.75,
            }
          ).addTo(map.current);
        } else {
          new MapboxCircle(
            { lat: 39.95574080555556, lng: -75.21315336111111 },
            2000,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.2)",
              fillOpacity: 0,
              strokeWeight: 0.5,
              strokeColor: "white",
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 39.95574080555556, lng: -75.21315336111111 },
            2000 / 1.4,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.2)",
              fillOpacity: 0,
              strokeWeight: 2,
              strokeColor: "white",
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 39.95574080555556, lng: -75.21315336111111 },
            2000 / 2.5,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.2)",
              fillOpacity: 0,
              strokeWeight: 3.5,
              strokeColor: "white",
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 39.95574080555556, lng: -75.21315336111111 },
            2000 / 15,
            {
              editable: false,
              fillColor: "#EF0066",
              fillOpacity: 1,
              strokeWeight: 0.25,
              strokeColor: "white",
            }
          ).addTo(map.current);
        }
      });
    }
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <ActiveMintsNavbar name="HackerHouse" />
      <div
        ref={mapContainer}
        className="map-container"
        style={{
          width: `100%`,
          height: `100vh`,
        }}
      ></div>
      <Drawer0 name="HackerHouse" loc="Philadelphia, The USA" />
    </div>
  );
}

export default Map0;
