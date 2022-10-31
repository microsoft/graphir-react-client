import { useGraphQl } from "./graphQL";
import { gql } from "@apollo/client";

const GET_PATIENT_LIST = gql`
  query {
    PatientList {
      id
      name {
        given
        family
      }
    }
  }
`;

const GET_PATIENT = gql`
  query ($patientId: String!) {
    Patient(id: $patientId) {
      id
      name {
        given
        family
      }
    }
  }
`;

const GET_PATIENT_DASHBOARD = gql`
  query ($patientId: String!) {
    Patient(id: $patientId) {
      id
      name {
        given
        family
      }
      generalPractitioner {
        reference
      }
    }
    AppointmentList(patient: $patientId) {
      id
      start
      end
      description
    }
  }
`;

function usePatientDashboard(patientId) {
  const { data, loading, error } = useGraphQl(
    async (client) =>
      await client.query({ query: GET_PATIENT_DASHBOARD, variables: { patientId } })
  );

  return {
    data,
    loading,
    error,
  };
}

function usePatientsList() {
  const { data, loading, error } = useGraphQl(
    async (client) => await client.query({ query: GET_PATIENT_LIST })
  );

  return {
    data,
    loading,
    error,
  };
}

function usePatient(patientId) {
  const { data, loading, error } = useGraphQl(
    async (client) =>
      await client.query({ query: GET_PATIENT, variables: { patientId } })
  );

  return {
    data,
    loading,
    error,
  };
}

export { usePatientsList, usePatient, usePatientDashboard };
