/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMaquinaria = /* GraphQL */ `
  mutation CreateMaquinaria(
    $input: CreateMaquinariaInput!
    $condition: ModelMaquinariaConditionInput
  ) {
    createMaquinaria(input: $input, condition: $condition) {
      NroVehiculo
      Patentedelvehiculo
      TIPO
      MARCA
      DESCRIPCION
      OPERATIVIDAD {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMaquinaria = /* GraphQL */ `
  mutation UpdateMaquinaria(
    $input: UpdateMaquinariaInput!
    $condition: ModelMaquinariaConditionInput
  ) {
    updateMaquinaria(input: $input, condition: $condition) {
      NroVehiculo
      Patentedelvehiculo
      TIPO
      MARCA
      DESCRIPCION
      OPERATIVIDAD {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMaquinaria = /* GraphQL */ `
  mutation DeleteMaquinaria(
    $input: DeleteMaquinariaInput!
    $condition: ModelMaquinariaConditionInput
  ) {
    deleteMaquinaria(input: $input, condition: $condition) {
      NroVehiculo
      Patentedelvehiculo
      TIPO
      MARCA
      DESCRIPCION
      OPERATIVIDAD {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOPERATIVIDAD = /* GraphQL */ `
  mutation CreateOPERATIVIDAD(
    $input: CreateOPERATIVIDADInput!
    $condition: ModelOPERATIVIDADConditionInput
  ) {
    createOPERATIVIDAD(input: $input, condition: $condition) {
      id
      DESCRIPCION
      ACTIVO
      FECHA
      createdAt
      updatedAt
      maquinariaOPERATIVIDADId
      __typename
    }
  }
`;
export const updateOPERATIVIDAD = /* GraphQL */ `
  mutation UpdateOPERATIVIDAD(
    $input: UpdateOPERATIVIDADInput!
    $condition: ModelOPERATIVIDADConditionInput
  ) {
    updateOPERATIVIDAD(input: $input, condition: $condition) {
      id
      DESCRIPCION
      ACTIVO
      FECHA
      createdAt
      updatedAt
      maquinariaOPERATIVIDADId
      __typename
    }
  }
`;
export const deleteOPERATIVIDAD = /* GraphQL */ `
  mutation DeleteOPERATIVIDAD(
    $input: DeleteOPERATIVIDADInput!
    $condition: ModelOPERATIVIDADConditionInput
  ) {
    deleteOPERATIVIDAD(input: $input, condition: $condition) {
      id
      DESCRIPCION
      ACTIVO
      FECHA
      createdAt
      updatedAt
      maquinariaOPERATIVIDADId
      __typename
    }
  }
`;
