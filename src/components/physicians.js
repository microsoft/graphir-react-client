import React, { useState } from "react";
import { useSearchPatientsByFamilyName } from "../hooks/physicians";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Loading from "./loading";
import Error from "./error";
import _ from "lodash";

function Physicians() {
  const [familyName, setFamilyName] = useState("");

  const { data, loading, error } = useSearchPatientsByFamilyName(familyName);

  const handleChange = _.debounce((event) => {
    const { value } = event.target;
    setFamilyName(value);
  }, 500);

  const patientsList = (data, error) => {
    return error ? (
      <>
        <Error error={error} />
      </>
    ) : loading ? (
      <Loading />
    ) : (
      <Row>
        {data?.PatientList?.map((patient) => {
          return (
            <Col className="mb-4" key={patient?.id}>
              <Card style={{ width: "18rem", height: "16rem" }}>
                <Card.Body>
                  <Card.Title>{`${patient?.name[0]?.given[0]} ${patient?.name[0]?.family}`}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to={`/patients/${patient.id}`}>
                    <Button variant="primary">View Patient</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="familyName">
          <Form.Label>Family Name</Form.Label>
          <Form.Control
            type="familyName"
            placeholder="Enter family name"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            Search patients by family name.
          </Form.Text>
        </Form.Group>
      </Form>
      {patientsList(data, error)}
    </>
  );
}

export default Physicians;
