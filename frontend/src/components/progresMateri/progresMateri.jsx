import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function progresMateri() {
  return (
    <div
      className="background"
      style={{
        boxShadow: "10px 4px 5px -5px rgba(165,165,165,0.75);",
        width: "200px",
        marginLeft: "70px",
        height: "auto",
        padding: "3px",
        border: "3px solid black",
      }}
    >
      <br />
      <p
        style={{
          fontWeight: "bold",
          marginLeft: "10px",
          marginTop: "-10px",
          color: "black",
        }}
      >
        Progres
      </p>
      <div style={{ marginTop: "-15px" }}>
        <span style={{ marginLeft: "10px", color: "black" }}>0%</span>
        <br />
        <progress style={{ marginLeft: "10px" }}></progress>
      </div>
      <hr style={{ color: "black" }} />
      <p
        style={{
          marginTop: "-15px",
          color: "black",
          marginLeft: "10px",
          fontWeight: "bold",
        }}
      >
        Modul 1
      </p>
      <hr style={{ marginTop: "-15px", color: "black" }} />
      <br />
      <div style={{ width: "180px", marginLeft: "5px", marginTop: "-30px" }}>
        <ListGroup style={{ border: "3px solid black", textAlign: "center" }}>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
        </ListGroup>
      </div>
      <hr style={{ color: "black" }} />
      <p
        style={{
          marginTop: "-15px",
          color: "black",
          marginLeft: "10px",
          fontWeight: "bold",
        }}
      >
        Modul 2
      </p>
      <hr style={{ marginTop: "-15px", color: "black" }} />
      <br />
      <div style={{ width: "180px", marginLeft: "5px", marginTop: "-30px" }}>
        <ListGroup style={{ border: "3px solid black", textAlign: "center" }}>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
          <ListGroup.Item>Sub modul 1</ListGroup.Item>
        </ListGroup>
      </div>
      <hr style={{ color: "black" }} />
      <p
        style={{
          marginTop: "-15px",
          color: "black",
          marginLeft: "10px",
          fontWeight: "bold",
        }}
      >
        Final Quiz
      </p>
      <hr style={{ marginTop: "-15px", color: "black" }} />
      <br />
    </div>
  );
}

export default progresMateri;
