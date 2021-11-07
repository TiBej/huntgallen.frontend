import { useState } from "react";
import Layout from "components/layout";
<<<<<<< HEAD
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import {Marker} from 'mapbox-gl';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
=======
import ReactMapGL, { Marker } from "react-map-gl";
import RoomIcon from "@mui/icons-material/Room";
>>>>>>> ee1ad70ed27b3640a62fb1fd2ec7688f2b1161ca

const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function MapPage() {
<<<<<<< HEAD
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(9.3748);
  const [lat, setLat] = useState(47.423);
  const [zoom, setZoom] = useState(12);

 

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
=======
  const [viewport, setViewport] = useState({
    latitude: 47.4245,
    longitude: 9.3767,
    zoom: 8,
>>>>>>> ee1ad70ed27b3640a62fb1fd2ec7688f2b1161ca
  });

  const onViewportChange = (viewport) => {
    const { width, height, ...rest } = viewport;
    setViewport(rest);
  };

  return (
    <Layout>
<<<<<<< HEAD
      <div ref={mapContainer} className="map-container" />
      
=======
      <ReactMapGL
        {...viewport}
        width="100%"
        height="80vh"
        mapboxApiAccessToken={accessToken}
        onViewportChange={onViewportChange}
      >
        <Marker latitude={47.4245} longitude={9.3767} offsetLeft={-20} offsetTop={-10}>
          <RoomIcon style={{ fill: "green" }} />
        </Marker>
      </ReactMapGL>
>>>>>>> ee1ad70ed27b3640a62fb1fd2ec7688f2b1161ca
    </Layout>
  );
}
