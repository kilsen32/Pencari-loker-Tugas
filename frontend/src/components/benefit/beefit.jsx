import React from "react";

const Benefit = () => {
  return (
    <div
      style={{
        marginLeft: "20px",
        border: "3px solid black",
        width: "670px",
        height: "160px",
      }}
    >
      <p
        style={{ marginLeft: "10px", fontWeight: "bold", marginBottom: "5px" }}
      >
        Yang anda dapatkan di pelatihan ini :
      </p>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "right",
        }}
      >
        <li style={{ marginLeft: "10px" }}>4 menit total video pembelajaran</li>
        <li style={{ marginLeft: "10px" }}>5 bahan bacaan</li>
        <li style={{ marginLeft: "10px" }}>5 konten dapat di unduh</li>
        <li style={{ marginLeft: "10px" }}>5 bahan bacaan</li>
        <li style={{ marginLeft: "10px" }}>5 konten dapat di unduh</li>
      </ul>
    </div>
  );
};

export default Benefit;
