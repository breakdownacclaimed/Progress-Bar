import React from 'react';

export default function ProgressBar(props) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Progress Bar</h1>
        <div style={{ display: "inline-block", width: "100%", maxWidth: "600px", backgroundColor: "#e0e0e0", borderRadius: "4px" }}>
          <div
            style={{
              width: `${props.progress}%`,
              backgroundColor: "#007bff",
              height: "24px",
              borderRadius: "4px",
            }}
          ></div>
        </div>
        <p>{props.progress}% Complete</p>
        <button onClick={props.onClick}>Increase Progress</button>
      </div>
    );
}