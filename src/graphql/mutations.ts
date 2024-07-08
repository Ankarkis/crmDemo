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
` as GeneratedMutation<
  APITypes.DeleteMaquinariaMutationVariables,
  APITypes.DeleteMaquinariaMutation
>;
export const createOPERATIVIDAD = /* GraphQL */ `mutation CreateOPERATIVIDAD(
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
` as GeneratedMutation<
  APITypes.CreateOPERATIVIDADMutationVariables,
  APITypes.CreateOPERATIVIDADMutation
>;
export const updateOPERATIVIDAD = /* GraphQL */ `mutation UpdateOPERATIVIDAD(
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
` as GeneratedMutation<
  APITypes.UpdateOPERATIVIDADMutationVariables,
  APITypes.UpdateOPERATIVIDADMutation
>;
export const deleteOPERATIVIDAD = /* GraphQL */ `mutation DeleteOPERATIVIDAD(
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
` as GeneratedMutation<
  APITypes.DeleteOPERATIVIDADMutationVariables,
  APITypes.DeleteOPERATIVIDADMutation
>;
