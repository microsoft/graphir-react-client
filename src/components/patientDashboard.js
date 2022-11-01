import React from "react";
import { useParams } from "react-router-dom";
import { usePatientDashboard } from "../hooks/patients";
import AppointmentList from "./appointmentList";
import Loading from "./loading";
import PatientInfo from "./patientInfo";
import Error from "./error";

function PatientDashboard() {
  const { patientId } = useParams();

  const { data, loading, error } = usePatientDashboard(patientId);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error error={error} />
  ) : (
    <>
      <PatientInfo patient={data?.Patient} />
      <AppointmentList appointmentList={data?.AppointmentList} />
    </>
  );
}

export default PatientDashboard;
