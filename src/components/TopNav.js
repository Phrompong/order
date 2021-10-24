import "./TopNav.css";
import React from "react";

export default function TopNav() {
  return (
    <>
      {/* top navigatorbar */}
      <div
        className="card-navigator"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: "2%",
        }}
      >
        <div>X</div>
      </div>

      {/* name and search bar */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>ครัวพร้อมพงศ์</h1>

        <h1>X</h1>
      </div>
    </>
  );
}
