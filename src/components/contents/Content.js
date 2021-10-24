import "./Content.css";
import React from "react";

export default function Content() {
  const foodList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const typeList = [
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
    "x",
  ];

  return (
    <>
      <div className="card">
        <div>
          <h1>X</h1>
        </div>
      </div>
      {/* type list */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          marginTop: "5%",
        }}
      >
        <h2 style={{ marginBottom: "0px", marginTop: "2%" }}>ประเภท</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            overflowX: "scroll",
          }}
        >
          {typeList.map((o) => (
            <div className="card-type">
              <div>
                <h1>xxxxxx</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* menu list */}
      <div
        style={{
          display: "flex",
          marginTop: "1%",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h2 style={{ marginBottom: "0px", marginTop: "5%" }}>เมนู</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            overflowX: "scroll",
          }}
        >
          {foodList.map((o) => (
            <div className="card-menu">
              <div>
                <table style={{ border: "10px" }}>
                  <tr>
                    <td>
                      <img
                        src="https://www.igethow.com/wp-content/uploads/2021/02/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9E%E0%B8%A3%E0%B8%B2-01-01-01-800x445.jpg"
                        width="100%"
                        height="50%"
                      ></img>
                    </td>
                  </tr>
                  <tr>
                    <td>ผัดกระเพรา</td>
                  </tr>
                  <tr>
                    <td>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
                  </tr>
                  <tr style={{ textAlign: "right" }}>
                    <td>
                      <h2>xx bath</h2>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
