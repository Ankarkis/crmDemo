/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../app/API.service";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getMaquinaria = /* GraphQL */ `query GetMaquinaria($id: ID!) {
  getMaquinaria(id: $id) {
    NroVehiculo
    Patentedelvehiculo
    TIPO
    MARCA
    DESCRIPCION
    OBSERVACION
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
` as GeneratedQuery<
  APITypes.GetMaquinariaQueryVariables,
  APITypes.GetMaquinariaQuery
>;
export const listMaquinarias = /* GraphQL */ `query ListMaquinarias(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMaquinariasQueryVariables,
  APITypes.ListMaquinariasQuery
>;
export const getOPERATIVIDAD = /* GraphQL */ `query GetOPERATIVIDAD($id: ID!) {
  getOPERATIVIDAD(id: $id) {
    FECHA
    DESCRIPCION
    ACTIVO
    id
    createdAt
    updatedAt
    maquinariaOPERATIVIDADId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOPERATIVIDADQueryVariables,
  APITypes.GetOPERATIVIDADQuery
>;
export const listOPERATIVIDADS = /* GraphQL */ `query ListOPERATIVIDADS(
  $filter: ModelOPERATIVIDADFilterInput
  $limit: Int
  $nextToken: String
) {
  listOPERATIVIDADS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      FECHA
      DESCRIPCION
      ACTIVO
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
` as GeneratedQuery<
  APITypes.ListOPERATIVIDADSQueryVariables,
  APITypes.ListOPERATIVIDADSQuery
>;
