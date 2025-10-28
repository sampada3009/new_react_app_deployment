import React from "react";

function Header() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>
     
      <header
        style={{
          backgroundColor: "pink",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 80px",
        }}
      >
        <h2 style={{ color: "#e62e8b", margin: 0 }}>
          Free<span style={{ color: "#8bc53f" }}>eze</span>
        </h2>

        <nav>
          <ul
            style={{
              display: "flex",
              listStyleType: "none",
              gap: "40px",
              margin: 0,
              padding: 0,
            }}
          >
            <li style={{ cursor: "pointer" }}>HOME</li>
            <li style={{ cursor: "pointer" }}>ABOUT</li>
            <li style={{ cursor: "pointer" }}>BLOG</li>
            <li style={{ cursor: "pointer" }}>CONTACT</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
