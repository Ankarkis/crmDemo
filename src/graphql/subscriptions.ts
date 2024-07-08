/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMaquinaria = /* GraphQL */ `subscription OnCreateMaquinaria(
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
` as GeneratedSubscription<
  APITypes.OnCreateMaquinariaSubscriptionVariables,
  APITypes.OnCreateMaquinariaSubscription
>;
export const onUpdateMaquinaria = /* GraphQL */ `subscription OnUpdateMaquinaria(
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
` as GeneratedSubscription<
  APITypes.OnUpdateMaquinariaSubscriptionVariables,
  APITypes.OnUpdateMaquinariaSubscription
>;
export const onDeleteMaquinaria = /* GraphQL */ `subscription OnDeleteMaquinaria(
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
` as GeneratedSubscription<
  APITypes.OnDeleteMaquinariaSubscriptionVariables,
  APITypes.OnDeleteMaquinariaSubscription
>;
export const onCreateOPERATIVIDAD = /* GraphQL */ `subscription OnCreateOPERATIVIDAD(
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
` as GeneratedSubscription<
  APITypes.OnCreateOPERATIVIDADSubscriptionVariables,
  APITypes.OnCreateOPERATIVIDADSubscription
>;
export const onUpdateOPERATIVIDAD = /* GraphQL */ `subscription OnUpdateOPERATIVIDAD(
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
` as GeneratedSubscription<
  APITypes.OnUpdateOPERATIVIDADSubscriptionVariables,
  APITypes.OnUpdateOPERATIVIDADSubscription
>;
export const onDeleteOPERATIVIDAD = /* GraphQL */ `subscription OnDeleteOPERATIVIDAD(
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
` as GeneratedSubscription<
  APITypes.OnDeleteOPERATIVIDADSubscriptionVariables,
  APITypes.OnDeleteOPERATIVIDADSubscription
>;
