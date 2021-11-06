import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

import QRPage from "pages/qr-page";
import RewardsPage from "pages/rewards-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QRPage />} />
      <Route path="/scan" element={<QRPage />} />
      <Route path="/rewards" element={<RewardsPage />} />
    </Routes>
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
