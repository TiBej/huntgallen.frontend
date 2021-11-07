import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import MapIcon from "@mui/icons-material/Map";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RedeemIcon from "@mui/icons-material/Redeem";
import HistoryIcon from "@mui/icons-material/History";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AuthenticationButton from "components/authentication-button";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const ref = useRef(null);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              HUNT:GALLEN
            </Typography>
            <AuthenticationButton />
          </Toolbar>
        </AppBar>
      </Box>
      {children}
      <Box sx={{ pb: 7 }} ref={ref}>
        <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1 }} elevation={3}>
          <BottomNavigation showLabels value={pathname}>
            <BottomNavigationAction value="/scan" label="Scan" icon={<CameraAltIcon />} to="/scan" component={Link} />
            <BottomNavigationAction
              value="/history"
              //History
              label="Huntverlauf"
              icon={<HistoryIcon />}
              to="/history"
              component={Link}
            />
            <BottomNavigationAction
              value="/rewards"
              //Reward
              label="Belohnungen"
              
              icon={<RedeemIcon />}
              to="/rewards"
              component={Link}
            />
            <BottomNavigationAction value="/map" label="Map" icon={<MapIcon />} to="/map" component={Link} />
          </BottomNavigation>
        </Paper>
      </Box>
    </>
  );
}
