import React from "react";
import "./App.css";

const App = ({
  size = 40,
  color = "dodgerblue",
  loading = true,
  speed = 1,
  thickness = 4,
  children,
}) => {
  if (!loading) return null;

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        role="status"
        aria-label="Loading"
        className="loading-spinner"
        style={{
          width: size,
          height: size,
          border: `${thickness}px solid ${color}`,
          borderTop: `${thickness}px solid transparent`,
          borderRadius: "50%",
          animation: `spin ${speed}s linear infinite`,
        }}
      />
      {children && <div style={{ marginTop: 8 }}>{children}</div>}
    </div>
  );
};

export default App;
