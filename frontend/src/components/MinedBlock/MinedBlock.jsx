import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
const MinedBlock = () => {
  var [minedBlock, setMinedBlock] = useState();
  useEffect(() => {
    axios.get("mined_block").then((res) => {
      setMinedBlock(res.data["mined_block"]);
    });
  }, []);

  return (
    <>
      <Container>
        <Card style={{ backgroundColor: "rgba(153, 102, 255, 0.2)" }}>
          <Card.Body>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>Mined Block</p>
            <p style={{ fontSize: "25px" }}>{minedBlock}</p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default MinedBlock;
