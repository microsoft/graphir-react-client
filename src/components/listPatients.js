import React from "react";
import { usePatientsList } from "../hooks/patients";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Loading from "./loading";

function ListPatients() {
  const { data, loading, error } = usePatientsList();

  const patientsList = (data, error) => {
    return error ? (
      <>
        <div>An error occured loading the patients list: {error}</div>
      </>
    ) : (
      <Row>
        {data?.PatientList?.map((patient) => {
          return (
            <Col className="mb-4" key={patient?.id}>
              <Card style={{ width: "18rem", height:"16rem" }}>
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

  return loading ? (
    <Loading />
  ) : (
    <>{patientsList(data, error)}</>
  );
}

export default ListPatients;
