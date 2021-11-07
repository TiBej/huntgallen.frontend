import { useRef, useEffect, useState } from "react";
import Layout from "components/layout";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import {Marker} from 'mapbox-gl';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

mapboxgl.accessToken = "pk.eyJ1IjoiZm5vYWgiLCJhIjoiY2s0cm5hbjB3MGUycDNsbzFvYnB1MDU3cyJ9.mU44vMHiHugetxWfbqR1cg";

export default function MapPage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(9.3748);
  const [lat, setLat] = useState(47.423);
  const [zoom, setZoom] = useState(12);

  const geojson = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [47.423, 9.3748],
        },
        properties: {
          title: "Mapbox",
          description: "Washington, D.C.",
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-122.414, 37.776],
        },
        properties: {
          title: "Mapbox",
          description: "San Francisco, California",
        },
      },
    ],
  };

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   for (const feature of geojson.features) {
  //     // create a HTML element for each feature
  //     const el = document.createElement("div");
  //     el.className = "marker";

  //     // make a marker for each feature and add it to the map
  //     new mapboxgl.Marker(el)
  //       .setLngLat(feature.geometry.coordinates)
  //       .setPopup(
  //         new mapboxgl.Popup({ offset: 25 }) // add popups
  //           .setHTML(`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`)
  //       )
  //       .addTo(map);
  //   }
  // });

  return (
    <Layout>
      <div ref={mapContainer} className="map-container" />
      
    </Layout>
  );
}
