/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMaquinaria = /* GraphQL */ `
  query GetMaquinaria($id: ID!) {
    getMaquinaria(id: $id) {
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
export const listMaquinarias = /* GraphQL */ `
  query ListMaquinarias(
    $filter: ModelMaquinariaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaquinarias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        NroVehiculo
        Patentedelvehiculo
        TIPO
        MARCA
        DESCRIPCION
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOPERATIVIDAD = /* GraphQL */ `
  query GetOPERATIVIDAD($id: ID!, $FECHA: String!) {
    getOPERATIVIDAD(id: $id, FECHA: $FECHA) {
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
export const listOPERATIVIDADS = /* GraphQL */ `
  query ListOPERATIVIDADS(
    $id: ID
    $FECHA: ModelStringKeyConditionInput
    $filter: ModelOPERATIVIDADFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOPERATIVIDADS(
      id: $id
      FECHA: $FECHA
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        DESCRIPCION
        ACTIVO
        FECHA
        createdAt
        updatedAt
        maquinariaOPERATIVIDADId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
