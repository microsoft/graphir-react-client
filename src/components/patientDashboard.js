import React from "react";
import { useParams } from "react-router-dom";
import { usePatientDashboard } from "../hooks/patients";

function PatientDashboard() {
  const { patientId } = useParams();

  const { data, loading, error } = usePatientDashboard(patientId);

  const AppointmentList = (data) => {
    return data?.AppointmentList?.map((appointment) => (
      <li key={appointment.id}>
        {appointment.start} - {appointment.end} - {appointment.description}
      </li>
    ));
  };

  const PatientInfo = (data) => {
    return (
      <div>
        <h1>{`${data?.Patient?.name[0]?.given[0]} ${data?.Patient?.name[0]?.family}`}</h1>
      </div>
    );
  };

  return loading ? (
    <>Loading...</>
  ) : error ? (
    <>An error occured loading dashboard {error}</>
  ) : (
    <>
      {PatientInfo(data)}
      {AppointmentList(data)}
    </>
  );
}

export default PatientDashboard;
