/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMaquinaria = /* GraphQL */ `
  subscription OnCreateMaquinaria(
    $filter: ModelSubscriptionMaquinariaFilterInput
  ) {
    onCreateMaquinaria(filter: $filter) {
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
export const onUpdateMaquinaria = /* GraphQL */ `
  subscription OnUpdateMaquinaria(
    $filter: ModelSubscriptionMaquinariaFilterInput
  ) {
    onUpdateMaquinaria(filter: $filter) {
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
export const onDeleteMaquinaria = /* GraphQL */ `
  subscription OnDeleteMaquinaria(
    $filter: ModelSubscriptionMaquinariaFilterInput
  ) {
    onDeleteMaquinaria(filter: $filter) {
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
export const onCreateOPERATIVIDAD = /* GraphQL */ `
  subscription OnCreateOPERATIVIDAD(
    $filter: ModelSubscriptionOPERATIVIDADFilterInput
  ) {
    onCreateOPERATIVIDAD(filter: $filter) {
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
export const onUpdateOPERATIVIDAD = /* GraphQL */ `
  subscription OnUpdateOPERATIVIDAD(
    $filter: ModelSubscriptionOPERATIVIDADFilterInput
  ) {
    onUpdateOPERATIVIDAD(filter: $filter) {
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
export const onDeleteOPERATIVIDAD = /* GraphQL */ `
  subscription OnDeleteOPERATIVIDAD(
    $filter: ModelSubscriptionOPERATIVIDADFilterInput
  ) {
    onDeleteOPERATIVIDAD(filter: $filter) {
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
