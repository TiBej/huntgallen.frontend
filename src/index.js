import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "theme";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "auth/auth0-provider-with-history";

import QRPage from "pages/qr-page";
import RewardsPage from "pages/rewards-page";
import MapPage from "pages/map-page";
import UnknownPage from "pages/unknown-page";
import HistoryPage from "pages/history-page";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<QRPage />} />
        <Route path="/scan" element={<QRPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </ThemeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
