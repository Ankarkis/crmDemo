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
        OBSERVACION
        id
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
export const getOPERATIVIDAD = /* GraphQL */ `
  query GetOPERATIVIDAD($id: ID!) {
    getOPERATIVIDAD(id: $id) {
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
export const listOPERATIVIDADS = /* GraphQL */ `
  query ListOPERATIVIDADS(
    $filter: ModelOPERATIVIDADFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOPERATIVIDADS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ID
        FECHA
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
