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
    OPERATIVIDAD {
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
    COSTOS {
      items {
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
    OPERATIVIDAD {
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
    COSTOS {
      items {
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
    OPERATIVIDAD {
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
    COSTOS {
      items {
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
export const createOPERARIO = /* GraphQL */ `mutation CreateOPERARIO(
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
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateOPERARIOMutationVariables,
  APITypes.CreateOPERARIOMutation
>;
export const updateOPERARIO = /* GraphQL */ `mutation UpdateOPERARIO(
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
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateOPERARIOMutationVariables,
  APITypes.UpdateOPERARIOMutation
>;
export const deleteOPERARIO = /* GraphQL */ `mutation DeleteOPERARIO(
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
      items {
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
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteOPERARIOMutationVariables,
  APITypes.DeleteOPERARIOMutation
>;
export const createCOSTO = /* GraphQL */ `mutation CreateCOSTO(
  $input: CreateCOSTOInput!
  $condition: ModelCOSTOConditionInput
) {
  createCOSTO(input: $input, condition: $condition) {
    id
    Price
    Date
    ADJUNTOS {
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
    createdAt
    updatedAt
    maquinariaCOSTOSId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCOSTOMutationVariables,
  APITypes.CreateCOSTOMutation
>;
export const updateCOSTO = /* GraphQL */ `mutation UpdateCOSTO(
  $input: UpdateCOSTOInput!
  $condition: ModelCOSTOConditionInput
) {
  updateCOSTO(input: $input, condition: $condition) {
    id
    Price
    Date
    ADJUNTOS {
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
    createdAt
    updatedAt
    maquinariaCOSTOSId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCOSTOMutationVariables,
  APITypes.UpdateCOSTOMutation
>;
export const deleteCOSTO = /* GraphQL */ `mutation DeleteCOSTO(
  $input: DeleteCOSTOInput!
  $condition: ModelCOSTOConditionInput
) {
  deleteCOSTO(input: $input, condition: $condition) {
    id
    Price
    Date
    ADJUNTOS {
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
    createdAt
    updatedAt
    maquinariaCOSTOSId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCOSTOMutationVariables,
  APITypes.DeleteCOSTOMutation
>;
export const createADJUNTO = /* GraphQL */ `mutation CreateADJUNTO(
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
` as GeneratedMutation<
  APITypes.CreateADJUNTOMutationVariables,
  APITypes.CreateADJUNTOMutation
>;
export const updateADJUNTO = /* GraphQL */ `mutation UpdateADJUNTO(
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
` as GeneratedMutation<
  APITypes.UpdateADJUNTOMutationVariables,
  APITypes.UpdateADJUNTOMutation
>;
export const deleteADJUNTO = /* GraphQL */ `mutation DeleteADJUNTO(
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
` as GeneratedMutation<
  APITypes.DeleteADJUNTOMutationVariables,
  APITypes.DeleteADJUNTOMutation
>;
