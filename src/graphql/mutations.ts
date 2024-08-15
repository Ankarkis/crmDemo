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
    id
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
    HOROMETRO {
      items {
        id
        Horometro
        Date
        NroVehiculo
        ADJUNTOS {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        maquinariaHOROMETROId
        __typename
      }
      nextToken
      __typename
    }
    OPERADOR {
      id
      NOMBRE
      EMAIL
      TELEFONO
      DIRECCION
      MAQUINARIA {
        items {
          id
          NroVehiculo
          Patentedelvehiculo
          TIPO
          MARCA
          DESCRIPCION
          PHOTO
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
    id
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
    HOROMETRO {
      items {
        id
        Horometro
        Date
        NroVehiculo
        ADJUNTOS {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        maquinariaHOROMETROId
        __typename
      }
      nextToken
      __typename
    }
    OPERADOR {
      id
      NOMBRE
      EMAIL
      TELEFONO
      DIRECCION
      MAQUINARIA {
        items {
          id
          NroVehiculo
          Patentedelvehiculo
          TIPO
          MARCA
          DESCRIPCION
          PHOTO
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
    id
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
    HOROMETRO {
      items {
        id
        Horometro
        Date
        NroVehiculo
        ADJUNTOS {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        maquinariaHOROMETROId
        __typename
      }
      nextToken
      __typename
    }
    OPERADOR {
      id
      NOMBRE
      EMAIL
      TELEFONO
      DIRECCION
      MAQUINARIA {
        items {
          id
          NroVehiculo
          Patentedelvehiculo
          TIPO
          MARCA
          DESCRIPCION
          PHOTO
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
        id
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
        HOROMETRO {
          nextToken
          __typename
        }
        OPERADOR {
          id
          NOMBRE
          EMAIL
          TELEFONO
          DIRECCION
          createdAt
          updatedAt
          __typename
        }
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
        id
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
        HOROMETRO {
          nextToken
          __typename
        }
        OPERADOR {
          id
          NOMBRE
          EMAIL
          TELEFONO
          DIRECCION
          createdAt
          updatedAt
          __typename
        }
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
        id
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
        HOROMETRO {
          nextToken
          __typename
        }
        OPERADOR {
          id
          NOMBRE
          EMAIL
          TELEFONO
          DIRECCION
          createdAt
          updatedAt
          __typename
        }
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
export const createHorometro = /* GraphQL */ `mutation CreateHorometro(
  $input: CreateHorometroInput!
  $condition: ModelHorometroConditionInput
) {
  createHorometro(input: $input, condition: $condition) {
    id
    Horometro
    Date
    NroVehiculo
    ADJUNTOS {
      items {
        id
        URL
        createdAt
        updatedAt
        horometroADJUNTOSId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    maquinariaHOROMETROId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateHorometroMutationVariables,
  APITypes.CreateHorometroMutation
>;
export const updateHorometro = /* GraphQL */ `mutation UpdateHorometro(
  $input: UpdateHorometroInput!
  $condition: ModelHorometroConditionInput
) {
  updateHorometro(input: $input, condition: $condition) {
    id
    Horometro
    Date
    NroVehiculo
    ADJUNTOS {
      items {
        id
        URL
        createdAt
        updatedAt
        horometroADJUNTOSId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    maquinariaHOROMETROId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateHorometroMutationVariables,
  APITypes.UpdateHorometroMutation
>;
export const deleteHorometro = /* GraphQL */ `mutation DeleteHorometro(
  $input: DeleteHorometroInput!
  $condition: ModelHorometroConditionInput
) {
  deleteHorometro(input: $input, condition: $condition) {
    id
    Horometro
    Date
    NroVehiculo
    ADJUNTOS {
      items {
        id
        URL
        createdAt
        updatedAt
        horometroADJUNTOSId
        __typename
      }
      nextToken
      __typename
    }
    createdAt
    updatedAt
    maquinariaHOROMETROId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHorometroMutationVariables,
  APITypes.DeleteHorometroMutation
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
    horometroADJUNTOSId
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
    horometroADJUNTOSId
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
    horometroADJUNTOSId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteADJUNTOMutationVariables,
  APITypes.DeleteADJUNTOMutation
>;
