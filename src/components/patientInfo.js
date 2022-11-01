import React from "react";

function PatientInfo({ patient }) {
  return (
    <div>
      <h1>{`${patient?.name[0]?.given[0]} ${patient?.name[0]?.family}`}</h1>
    </div>
  );
}

export default PatientInfo;
