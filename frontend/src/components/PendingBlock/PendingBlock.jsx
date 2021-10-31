import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";

const PendingBlock = () => {
  var [pendingBlock, setPendingBlock] = useState();
  useEffect(() => {
    axios.get("pending_block").then((res) => {
      setPendingBlock(res.data["pending_block"]);
    });
  }, []);

  return (
    <>
      <Container>
        <Card style={{ backgroundColor: "rgba(255, 159, 64, 0.2)" }}>
          <Card.Body>
            <p style={{ fontSize: "20px", fontWeight: "bold" }}>
              Pending Block
            </p>
            <p style={{ fontSize: "25px" }}>{pendingBlock}</p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default PendingBlock;
