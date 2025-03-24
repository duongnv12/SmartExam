import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { ConfigProvider, theme } from "antd";

const { defaultAlgorithm } = theme;

const App = () => {
  return (
    <ConfigProvider theme={{ algorithm: defaultAlgorithm, token: { fontFamily: '"Inter", sans-serif' } }}>
      <Router>
        <AppRouter />
      </Router>
    </ConfigProvider>
  );
};

export default App;
