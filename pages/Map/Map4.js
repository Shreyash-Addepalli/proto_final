import * as React from "react";
import { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import * as turf from "@turf/turf";
import { insideCircle, distanceTo } from "geolocation-utils";
import ActiveMintsNavbar from "../../components/Navbars/ActiveMintsNavbar";
import Drawer4 from "../../components/Drawer/Drawer4";
import dynamic from "next/dynamic";
const MapboxCircle = dynamic(() => import("mapbox-gl-circle"), {
  ssr: false,
});
mapboxgl.accessToken =
  "pk.eyJ1Ijoic2hyZXlhc2gxNSIsImEiOiJjbDY0MGx6d3cwZHFkM3FwZ3Mwb2htMGZoIn0.0BtzRvleOZQpq9EiZbBU_A";

function Map4() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(72.87868055555555);
  const [lat, setLat] = useState(19.08042222222222);
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

    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
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
            { lat: 19.08042222222222, lng: 72.87868055555555 },
            { lat: position.coords.latitude, lng: position.coords.longitude }
          )
        );
        console.log(
          turf.distance(
            [72.87868055555555, 19.08042222222222],
            [position.coords.longitude, position.coords.latitude]
          )
        );
        const marker1 = new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .addTo(map.current);

        if (
          !insideCircle(
            { lat: 19.08042222222222, lon: 72.87868055555555 },
            {
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            },
            3000
          )
        ) {
          new MapboxCircle(
            { lat: 19.08042222222222, lng: 72.87868055555555 },
            3000,
            {
              editable: false,
              fillColor: " rgba(255, 255, 255, 0.2)",
              fillOpacity: 1,
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 19.08042222222222, lng: 72.87868055555555 },
            3000 / 1.4,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.4)",
              fillOpacity: 0.75,
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 19.08042222222222, lng: 72.87868055555555 },
            3000 / 2.5,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.6)",
              fillOpacity: 0.75,
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 19.08042222222222, lng: 72.87868055555555 },
            3000 / 15,
            {
              editable: false,
              fillColor: "#EF0066",
              fillOpacity: 0.75,
            }
          ).addTo(map.current);
        } else {
          new MapboxCircle(
            { lat: 19.08042222222222, lng: 72.87868055555555 },
            3000,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.2)",
              fillOpacity: 0,
              strokeWeight: 0.5,
              strokeColor: "white",
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 19.08042222222222, lng: 72.87868055555555 },
            3000 / 1.4,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.2)",
              fillOpacity: 0,
              strokeWeight: 2,
              strokeColor: "white",
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 19.08042222222222, lng: 72.87868055555555 },
            3000 / 2.5,
            {
              editable: false,
              fillColor: "rgba(255, 255, 255, 0.2)",
              fillOpacity: 0,
              strokeWeight: 3.5,
              strokeColor: "white",
            }
          ).addTo(map.current);

          new MapboxCircle(
            { lat: 19.08042222222222, lng: 72.87868055555555 },
            3000 / 15,
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

  return (
    <div>
      <ActiveMintsNavbar name="Web3 Conf" />
      <div
        ref={mapContainer}
        className="map-container"
        style={{
          width: `100%`,
          height: `100vh`,
        }}
      ></div>
      <Drawer4 name="Web3 Conf" loc="Goa, India" />
    </div>
  );
}

export default Map4;
