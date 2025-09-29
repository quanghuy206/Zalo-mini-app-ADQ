// ZaUI stylesheet
import "zmp-ui/zaui.css";
// Tailwind stylesheet
import "@/css/tailwind.scss";
// Your stylesheet
import "@/css/app.scss";

// React core
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Mount the app

// Expose app configuration
import appConfig from "../app-config.json";
import Layout from "./pages/Layout";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig as any;
}

// const root = createRoot(document.getElementById("app")!);
// root.render(React.createElement(Layout));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout />
  </StrictMode>
);