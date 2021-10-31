import React, { useState } from "react";
import { Container, Button, Alert } from "react-bootstrap";
import axios from "axios";

const Verify = () => {
  var [verified, setVerified] = useState("");
  const handleVerify = () => {
    console.log("Verified");
    axios.get("is_valid").then((res) => {
      setVerified(res.data["message"]);
    });
  };

  return (
    <div>
      <Container
        style={{
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <h2>Verify MusicRight Blockchain</h2>
        <br />
        {verified !== "" ? <Alert variant="success">{verified}</Alert> : <></>}
        <Button variant="primary" onClick={handleVerify}>
          Verify
        </Button>
      </Container>
    </div>
  );
};

export default Verify;
