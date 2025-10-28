import React from "react";

function CategoryBar() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#cddc39",
        padding: "25px 0",
        fontWeight: "bold",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      <div style={{ width: "150px" }}>PRODUCTS</div>
      <div style={{ width: "150px" }}>OUR STORY</div>
      <div style={{ width: "150px" }}>FLAVORS</div>
      <div style={{ width: "150px" }}>OUR LOCATION</div>
    </section>
  );
}

export default CategoryBar;
