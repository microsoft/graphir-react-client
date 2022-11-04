import { useGraphQl } from "./graphQL";
import { gql } from "@apollo/client";

const GET_PATIENTS_BY_FAMILY_NAME = gql`
  query SearchPatientByName($familyName: String!) {
    PatientList(family: $familyName) {
      id
      name {
        given
        family
      }
      generalPractitioner {
        reference
      }
    }
  }
`;

function useSearchPatientsByFamilyName(familyName) {
  const { data, loading, error } = useGraphQl(
    async (client) =>
      await client.query({
        query: GET_PATIENTS_BY_FAMILY_NAME,
        variables: { familyName },
      }),
    [familyName]
  );

  return {
    data,
    loading,
    error,
  };
}

export { useSearchPatientsByFamilyName };
