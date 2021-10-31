import React, { useState } from "react";
import { Card, Container, FloatingLabel, Form, Button } from "react-bootstrap";
import axios from "axios";

const postEndpoint = "/add_music_copyright";

const Home = () => {
  var [songName, setSongName] = useState("");
  var [artist, setArtist] = useState("");
  var [producedBy, setProducedBy] = useState("");
  var [copyrightNo, setCopyrightNo] = useState("");
  var [responseData, setResponseData] = useState({});

  const handleSongName = (e) => {
    setSongName((songName = e.target.value));
    // console.log(e.target.value);
  };

  const handleArtist = (e) => {
    setArtist((artist = e.target.value));
    // console.log(e.target.value);
  };

  const handleProducedBy = (e) => {
    setProducedBy((producedBy = e.target.value));
    // console.log(e.target.value);
  };

  const handleCopyrightNo = (e) => {
    setCopyrightNo((copyrightNo = e.target.value));
    // console.log(e.target.value);
  };

  const handleOnSumbit = (e) => {
    e.preventDefault();
    axios
      .post(postEndpoint, {
        name: songName,
        artist: artist,
        produced: producedBy,
        copyright_no: copyrightNo,
      })
      .then((res) => setResponseData(res.data));
  };

  return (
    <div>
      <Container
        style={{
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <h2>Create MusicRight Block</h2>
        <br />
        <Container style={{ padding: "0 250px" }}>
          <Card>
            <Card.Body>
              <Form>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Song Name"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Song Name"
                    onChange={handleSongName}
                    value={songName}
                    autoComplete="off"
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Artist"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Artist"
                    onChange={handleArtist}
                    value={artist}
                    autoComplete="off"
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Produced By"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Produced By"
                    onChange={handleProducedBy}
                    value={producedBy}
                    autoComplete="off"
                  />
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingInput"
                  label="Copyright Number"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Copyright Number"
                    onChange={handleCopyrightNo}
                    value={copyrightNo}
                    autoComplete="off"
                  />
                </FloatingLabel>
              </Form>
              <Button variant="primary" onClick={handleOnSumbit}>
                Create
              </Button>
            </Card.Body>
          </Card>
        </Container>
        <br />
        <h2>{responseData["message"]}</h2>
      </Container>
    </div>
  );
};

export default Home;
