import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPatients from "./components/listPatients";
import Patient from "./components/patient";
import PatientDashboard from "./components/patientDashboard";
import Physicians from "./components/physicians";

function Authenticated() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/patients" element={<ListPatients />} />
            <Route path="/patients/:patientId" element={<Patient />} />
            <Route path='/physicians' element={<Physicians />} />
            <Route path="/patients/:patientId/dashboard" element={<PatientDashboard />} />
            <Route path="/" element={<PatientDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Authenticated;
