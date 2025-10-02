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
import App from './app'

// Mount React App
const root = createRoot(document.getElementById('app')!)
root.render(React.createElement(App))