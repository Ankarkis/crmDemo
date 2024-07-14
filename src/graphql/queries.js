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
      PHOTO
      OPERATIVIDAD {
        nextToken
        __typename
      }
      COSTOS {
        nextToken
        __typename
      }
      id
      createdAt
      updatedAt
      oPERARIOMAQUINARIAId
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
        PHOTO
        id
        createdAt
        updatedAt
        oPERARIOMAQUINARIAId
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
export const getOPERARIO = /* GraphQL */ `
  query GetOPERARIO($id: ID!) {
    getOPERARIO(id: $id) {
      id
      NOMBRE
      EMAIL
      TELEFONO
      DIRECCION
      MAQUINARIA {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listOPERARIOS = /* GraphQL */ `
  query ListOPERARIOS(
    $filter: ModelOPERARIOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOPERARIOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        NOMBRE
        EMAIL
        TELEFONO
        DIRECCION
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCOSTO = /* GraphQL */ `
  query GetCOSTO($id: ID!) {
    getCOSTO(id: $id) {
      id
      Price
      Date
      ADJUNTOS {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      maquinariaCOSTOSId
      __typename
    }
  }
`;
export const listCOSTOS = /* GraphQL */ `
  query ListCOSTOS(
    $filter: ModelCOSTOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCOSTOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Price
        Date
        createdAt
        updatedAt
        maquinariaCOSTOSId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getADJUNTO = /* GraphQL */ `
  query GetADJUNTO($id: ID!) {
    getADJUNTO(id: $id) {
      id
      URL
      createdAt
      updatedAt
      cOSTOADJUNTOSId
      __typename
    }
  }
`;
export const listADJUNTOS = /* GraphQL */ `
  query ListADJUNTOS(
    $filter: ModelADJUNTOFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listADJUNTOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        URL
        createdAt
        updatedAt
        cOSTOADJUNTOSId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
