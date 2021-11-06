import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RedeemIcon from "@mui/icons-material/Redeem";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

export default function Layout({ children }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      {children}
      <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Scan" icon={<CameraAltIcon />} to="/scan" component={Link} />
          <BottomNavigationAction label="Rewards" icon={<RedeemIcon />} to="/rewards" component={Link} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
