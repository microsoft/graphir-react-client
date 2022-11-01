import React from "react";
import { usePatient } from "../hooks/patients";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Loading from "./loading";
import Error from "./error";

function Patient() {
  const patient = (data, error) => {
    return error ? (
      <Error error={error} />
    ) : (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{`${data?.Patient?.name[0]?.given[0]} ${data?.Patient?.name[0]?.family}`}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  };

  const { patientId } = useParams();

  const { data, error, loading } = usePatient(patientId);

  return loading ? <Loading /> : <>{patient(data, error)}</>;
}

export default Patient;
