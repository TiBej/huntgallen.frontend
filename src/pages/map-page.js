import { useState } from "react";
import Layout from "components/layout";
import ReactMapGL, { Marker } from "react-map-gl";
import RoomIcon from "@mui/icons-material/Room";

const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function MapPage() {
  const [viewport, setViewport] = useState({
    latitude: 47.4245,
    longitude: 9.3767,
    zoom: 8,
  });

  const onViewportChange = (viewport) => {
    const { width, height, ...rest } = viewport;
    setViewport(rest);
  };

  return (
    <Layout>
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
    </Layout>
  );
}
