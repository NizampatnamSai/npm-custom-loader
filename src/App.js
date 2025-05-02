import React from "react";
import "./App.css";

const App = ({ size = 40, color = "dodgerblue", loading = true }) => {
  return (
    <div
      className="loading-spinner"
      style={{
        width: size,
        height: size,
        border: `4px solid ${color}`,
        borderTop: "4px solid transparent",
        display: loading ? "flex" : "none",
      }}
    />
  );
};

export default App;
