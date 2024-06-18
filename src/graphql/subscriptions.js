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
        ID
        FECHA
        DESCRIPCION
        id
        createdAt
        updatedAt
        __typename
      }
      OBSERVACION
      id
      createdAt
      updatedAt
      maquinariaOPERATIVIDADId
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
        ID
        FECHA
        DESCRIPCION
        id
        createdAt
        updatedAt
        __typename
      }
      OBSERVACION
      id
      createdAt
      updatedAt
      maquinariaOPERATIVIDADId
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
        ID
        FECHA
        DESCRIPCION
        id
        createdAt
        updatedAt
        __typename
      }
      OBSERVACION
      id
      createdAt
      updatedAt
      maquinariaOPERATIVIDADId
      __typename
    }
  }
`;
export const onCreateOPERATIVIDAD = /* GraphQL */ `
  subscription OnCreateOPERATIVIDAD(
    $filter: ModelSubscriptionOPERATIVIDADFilterInput
  ) {
    onCreateOPERATIVIDAD(filter: $filter) {
      ID
      FECHA
      DESCRIPCION
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateOPERATIVIDAD = /* GraphQL */ `
  subscription OnUpdateOPERATIVIDAD(
    $filter: ModelSubscriptionOPERATIVIDADFilterInput
  ) {
    onUpdateOPERATIVIDAD(filter: $filter) {
      ID
      FECHA
      DESCRIPCION
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteOPERATIVIDAD = /* GraphQL */ `
  subscription OnDeleteOPERATIVIDAD(
    $filter: ModelSubscriptionOPERATIVIDADFilterInput
  ) {
    onDeleteOPERATIVIDAD(filter: $filter) {
      ID
      FECHA
      DESCRIPCION
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
