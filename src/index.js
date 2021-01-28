import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

import "./style/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";
import AuthComponent from "./components/AuthComponent";

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    release: "1.0",
    dsn: process.env.REACT_APP_SENTRY_DSN,
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <AuthComponent>
      <App />
    </AuthComponent>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
