import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { SearchProvider } from "./context/searchContext";
import { BookDetailsProvider } from "./context/bookDetailsContext";
import { AuthProvider } from "./context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <SearchProvider>
          <BookDetailsProvider>
            <App />
          </BookDetailsProvider>
        </SearchProvider>
      </Router>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
