/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
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
    PHOTO
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
      PHOTO
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
