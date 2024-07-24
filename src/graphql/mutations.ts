/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createMaquinaria = /* GraphQL */ `mutation CreateMaquinaria(
  $input: CreateMaquinariaInput!
  $condition: ModelMaquinariaConditionInput
) {
  createMaquinaria(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMaquinariaMutationVariables,
  APITypes.CreateMaquinariaMutation
>;
export const updateMaquinaria = /* GraphQL */ `mutation UpdateMaquinaria(
  $input: UpdateMaquinariaInput!
  $condition: ModelMaquinariaConditionInput
) {
  updateMaquinaria(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMaquinariaMutationVariables,
  APITypes.UpdateMaquinariaMutation
>;
export const deleteMaquinaria = /* GraphQL */ `mutation DeleteMaquinaria(
  $input: DeleteMaquinariaInput!
  $condition: ModelMaquinariaConditionInput
) {
  deleteMaquinaria(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMaquinariaMutationVariables,
  APITypes.DeleteMaquinariaMutation
>;
