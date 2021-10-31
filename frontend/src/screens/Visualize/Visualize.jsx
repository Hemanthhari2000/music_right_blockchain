import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import PendingBlock from "../../components/PendingBlock/PendingBlock";
import MinedBlock from "../../components/MinedBlock/MinedBlock";

const Visualize = () => {
  var [blockchain, setBlockchain] = useState([]);

  useEffect(() => {
    axios.get("get_chain").then((res) => {
      setBlockchain(res.data.chain);
    });
  }, []);

  const genRandomDataHash = () => {
    var id = uuidv4();
    return id.replaceAll("-", "");
  };

  return (
    <div>
      <Container
        style={{
          textAlign: "center",
          paddingTop: "20px",
        }}
      >
        <h2>Visualize MusicRight Blockchain</h2>
        <br />

        <Row>
          <Col>
            <PendingBlock />
          </Col>
          <Col>
            <MinedBlock />
          </Col>
        </Row>
        <br />

        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nonce</th>
              <th>Data (Hash)</th>
              <th>Prev Hash</th>
              <th>Timestamp</th>
              {/* <th>Curr Hash</th>   */}
            </tr>
          </thead>
          <tbody>
            {blockchain.map((obj, idx) => (
              <tr key={idx}>
                <td>Block {idx + 1}</td>
                <td>{obj["nonce"]}</td>
                <td>{genRandomDataHash()}</td>
                <td>{obj["previous_hash"]}</td>
                <td>{obj["timestamp"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Visualize;
