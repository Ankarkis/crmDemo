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
export const onCreateOPERATIVIDAD = /* GraphQL */ `
  subscription OnCreateOPERATIVIDAD(
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
`;
export const onUpdateOPERATIVIDAD = /* GraphQL */ `
  subscription OnUpdateOPERATIVIDAD(
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
`;
export const onDeleteOPERATIVIDAD = /* GraphQL */ `
  subscription OnDeleteOPERATIVIDAD(
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
`;
export const onCreateOPERARIO = /* GraphQL */ `
  subscription OnCreateOPERARIO($filter: ModelSubscriptionOPERARIOFilterInput) {
    onCreateOPERARIO(filter: $filter) {
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
export const onUpdateOPERARIO = /* GraphQL */ `
  subscription OnUpdateOPERARIO($filter: ModelSubscriptionOPERARIOFilterInput) {
    onUpdateOPERARIO(filter: $filter) {
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
export const onDeleteOPERARIO = /* GraphQL */ `
  subscription OnDeleteOPERARIO($filter: ModelSubscriptionOPERARIOFilterInput) {
    onDeleteOPERARIO(filter: $filter) {
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
export const onCreateCOSTO = /* GraphQL */ `
  subscription OnCreateCOSTO($filter: ModelSubscriptionCOSTOFilterInput) {
    onCreateCOSTO(filter: $filter) {
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
export const onUpdateCOSTO = /* GraphQL */ `
  subscription OnUpdateCOSTO($filter: ModelSubscriptionCOSTOFilterInput) {
    onUpdateCOSTO(filter: $filter) {
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
export const onDeleteCOSTO = /* GraphQL */ `
  subscription OnDeleteCOSTO($filter: ModelSubscriptionCOSTOFilterInput) {
    onDeleteCOSTO(filter: $filter) {
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
export const onCreateADJUNTO = /* GraphQL */ `
  subscription OnCreateADJUNTO($filter: ModelSubscriptionADJUNTOFilterInput) {
    onCreateADJUNTO(filter: $filter) {
      id
      URL
      createdAt
      updatedAt
      cOSTOADJUNTOSId
      __typename
    }
  }
`;
export const onUpdateADJUNTO = /* GraphQL */ `
  subscription OnUpdateADJUNTO($filter: ModelSubscriptionADJUNTOFilterInput) {
    onUpdateADJUNTO(filter: $filter) {
      id
      URL
      createdAt
      updatedAt
      cOSTOADJUNTOSId
      __typename
    }
  }
`;
export const onDeleteADJUNTO = /* GraphQL */ `
  subscription OnDeleteADJUNTO($filter: ModelSubscriptionADJUNTOFilterInput) {
    onDeleteADJUNTO(filter: $filter) {
      id
      URL
      createdAt
      updatedAt
      cOSTOADJUNTOSId
      __typename
    }
  }
`;
