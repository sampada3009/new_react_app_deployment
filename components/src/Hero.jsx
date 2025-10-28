import React from "react";

function Hero() {
  return (
    <div>
      {/* Image Section */}
      <section
        style={{
          backgroundColor: "#fff",
          textAlign: "center",
          padding: "40px 0 60px 0",
        }}
      >
        <img
          src="https://www.my-easy-cooking.com/wp-content/uploads/2009/01/Fruit-salad-20001.jpg"
          alt="Frozen Yogurt"
          style={{
            width: "60%",
            maxWidth: "600px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          }}
        />
      </section>

      {/* Content Section */}
      <section
        style={{
          backgroundColor: "#f4f4f4",
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <h5 style={{ color: "gray", marginBottom: "10px" }}>NEW PRODUCT</h5>
        <h2 style={{ color: "#e62e8b", marginBottom: "15px" }}>
          The Twist of Healthy Yogurt
        </h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            color: "#555",
            fontSize: "15px",
            lineHeight: "1.6",
          }}
        >
          This website template has been designed by freewebsitetemplates.com for
          you, for free. You can replace all this text with your own text.
        </p>
        <img
          src="https://media.gettyimages.com/id/157472912/photo/ice-cream-composition-on-a-bowl.jpg?s=612x612&w=gi&k=20&c=AniWX1OhaarUxCkgjUoKiA3bKVllK0upCylW6Z0PCMQ="
          alt="Cup Yogurt"
          style={{ width: "160px", marginTop: "25px", borderRadius: "10px" }}
        />
      </section>
    </div>
  );
}

export default Hero;
