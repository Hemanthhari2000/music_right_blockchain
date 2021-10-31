import React, { useState } from "react";
import { Container, Button, Card, Form, InputGroup } from "react-bootstrap";
import axios from "axios";

const Mine = () => {
  var [blockNo, setBlockNo] = useState("");
  var [nonce, setNonce] = useState("");
  var [musicCopyright, setMusicCopyright] = useState("");
  var [timestamp, setTimestamp] = useState("");
  var [prevHash, setPrevHash] = useState("");
  var [message, setMessage] = useState("");

  const handleMine = () => {
    console.log("Mined");

    axios.get("mine_block").then((res) => {
      var data = res.data;
      setBlockNo(data["index"]);
      setNonce(data["nonce"]);
      setMusicCopyright(JSON.stringify(data["music_copyright"].pop()));
      setTimestamp(data["timestamp"]);
      setPrevHash(data["previous_hash"]);
      setMessage(data["message"]);
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
        <h2>Mine MusicRight Blockchain</h2>
        <br />
        <Container style={{ padding: "0 100px" }}>
          <Card>
            <Card.Body>
              <InputGroup className="mb-3">
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "white" }}
                >
                  Block #
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Block Number"
                  readOnly
                  value={blockNo}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "white" }}
                >
                  Nonce
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Nonce"
                  readOnly
                  value={nonce}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "white" }}
                >
                  Music Copyright <br /> Data
                </InputGroup.Text>
                <Form.Control
                  as="textarea"
                  style={{ height: "200px" }}
                  type="text"
                  placeholder="Music Copyright Data"
                  readOnly
                  value={musicCopyright}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "white" }}
                >
                  Timestamp
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="TimeStamp"
                  value={timestamp}
                  readOnly
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text
                  id="basic-addon1"
                  style={{ backgroundColor: "white" }}
                >
                  Prev Block Hash
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Previous Hash"
                  readOnly
                  value={prevHash}
                />
              </InputGroup>
            </Card.Body>
          </Card>
        </Container>
        <br />
        <Button variant="primary" onClick={handleMine}>
          Mine
        </Button>
        <br />
        <h2>{message}</h2>
      </Container>
    </div>
  );
};

export default Mine;
