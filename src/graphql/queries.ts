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
      OPERATIVIDAD(sortDirection: DESC) {
        items {
        id
          FECHA
          ACTIVO
          DESCRIPCION
          createdAt
          updatedAt
        }
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
      OPERATIVIDAD(sortDirection: DESC) {
        items {
          FECHA
          ACTIVO
          
        }
      }
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
export const getOPERATIVIDAD = /* GraphQL */ `query GetOPERATIVIDAD($id: ID!, $FECHA: String!) {
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
` as GeneratedQuery<
  APITypes.GetOPERATIVIDADQueryVariables,
  APITypes.GetOPERATIVIDADQuery
>;
export const listOPERATIVIDADS = /* GraphQL */ `query ListOPERATIVIDADS(
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
` as GeneratedQuery<
  APITypes.ListOPERATIVIDADSQueryVariables,
  APITypes.ListOPERATIVIDADSQuery
>;
