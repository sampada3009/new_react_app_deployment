import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "green",
        color: "white",
        textAlign: "center",
        padding: "30px 0",
      }}
    >
    
      {/* <div style={{ marginBottom: "10px", fontSize: "22px" }}>
        <span style={{ margin: "0 10px", cursor: "pointer" }}>📘</span>
        <span style={{ margin: "0 10px", cursor: "pointer" }}>🐦</span>
        <span style={{ margin: "0 10px", cursor: "pointer" }}>📸</span>
        <span style={{ margin: "0 10px", cursor: "pointer" }}>🔗</span>
      </div> */}

     
      <p style={{ fontSize: "14px", margin: 0 }}>
        © 2023 Freeeze. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
