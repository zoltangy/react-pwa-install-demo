import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ReactPWAInstallProvider from "react-pwa-install";

ReactDOM.render(
  <React.StrictMode>
    <ReactPWAInstallProvider enableLogging>
      <App />
    </ReactPWAInstallProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
