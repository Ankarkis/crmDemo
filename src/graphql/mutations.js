/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMaquinaria = /* GraphQL */ `
  mutation CreateMaquinaria(
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
export const updateMaquinaria = /* GraphQL */ `
  mutation UpdateMaquinaria(
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
export const deleteMaquinaria = /* GraphQL */ `
  mutation DeleteMaquinaria(
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
export const createOPERATIVIDAD = /* GraphQL */ `
  mutation CreateOPERATIVIDAD(
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
`;
export const updateOPERATIVIDAD = /* GraphQL */ `
  mutation UpdateOPERATIVIDAD(
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
`;
export const deleteOPERATIVIDAD = /* GraphQL */ `
  mutation DeleteOPERATIVIDAD(
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
`;
export const createOPERARIO = /* GraphQL */ `
  mutation CreateOPERARIO(
    $input: CreateOPERARIOInput!
    $condition: ModelOPERARIOConditionInput
  ) {
    createOPERARIO(input: $input, condition: $condition) {
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
export const updateOPERARIO = /* GraphQL */ `
  mutation UpdateOPERARIO(
    $input: UpdateOPERARIOInput!
    $condition: ModelOPERARIOConditionInput
  ) {
    updateOPERARIO(input: $input, condition: $condition) {
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
export const deleteOPERARIO = /* GraphQL */ `
  mutation DeleteOPERARIO(
    $input: DeleteOPERARIOInput!
    $condition: ModelOPERARIOConditionInput
  ) {
    deleteOPERARIO(input: $input, condition: $condition) {
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
export const createCOSTO = /* GraphQL */ `
  mutation CreateCOSTO(
    $input: CreateCOSTOInput!
    $condition: ModelCOSTOConditionInput
  ) {
    createCOSTO(input: $input, condition: $condition) {
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
export const updateCOSTO = /* GraphQL */ `
  mutation UpdateCOSTO(
    $input: UpdateCOSTOInput!
    $condition: ModelCOSTOConditionInput
  ) {
    updateCOSTO(input: $input, condition: $condition) {
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
export const deleteCOSTO = /* GraphQL */ `
  mutation DeleteCOSTO(
    $input: DeleteCOSTOInput!
    $condition: ModelCOSTOConditionInput
  ) {
    deleteCOSTO(input: $input, condition: $condition) {
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
export const createADJUNTO = /* GraphQL */ `
  mutation CreateADJUNTO(
    $input: CreateADJUNTOInput!
    $condition: ModelADJUNTOConditionInput
  ) {
    createADJUNTO(input: $input, condition: $condition) {
      id
      URL
      createdAt
      updatedAt
      cOSTOADJUNTOSId
      __typename
    }
  }
`;
export const updateADJUNTO = /* GraphQL */ `
  mutation UpdateADJUNTO(
    $input: UpdateADJUNTOInput!
    $condition: ModelADJUNTOConditionInput
  ) {
    updateADJUNTO(input: $input, condition: $condition) {
      id
      URL
      createdAt
      updatedAt
      cOSTOADJUNTOSId
      __typename
    }
  }
`;
export const deleteADJUNTO = /* GraphQL */ `
  mutation DeleteADJUNTO(
    $input: DeleteADJUNTOInput!
    $condition: ModelADJUNTOConditionInput
  ) {
    deleteADJUNTO(input: $input, condition: $condition) {
      id
      URL
      createdAt
      updatedAt
      cOSTOADJUNTOSId
      __typename
    }
  }
`;
