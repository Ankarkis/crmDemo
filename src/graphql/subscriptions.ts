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
export const onCreateOPERARIO = /* GraphQL */ `subscription OnCreateOPERARIO($filter: ModelSubscriptionOPERARIOFilterInput) {
  onCreateOPERARIO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateOPERARIOSubscriptionVariables,
  APITypes.OnCreateOPERARIOSubscription
>;
export const onUpdateOPERARIO = /* GraphQL */ `subscription OnUpdateOPERARIO($filter: ModelSubscriptionOPERARIOFilterInput) {
  onUpdateOPERARIO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateOPERARIOSubscriptionVariables,
  APITypes.OnUpdateOPERARIOSubscription
>;
export const onDeleteOPERARIO = /* GraphQL */ `subscription OnDeleteOPERARIO($filter: ModelSubscriptionOPERARIOFilterInput) {
  onDeleteOPERARIO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteOPERARIOSubscriptionVariables,
  APITypes.OnDeleteOPERARIOSubscription
>;
export const onCreateCOSTO = /* GraphQL */ `subscription OnCreateCOSTO($filter: ModelSubscriptionCOSTOFilterInput) {
  onCreateCOSTO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCOSTOSubscriptionVariables,
  APITypes.OnCreateCOSTOSubscription
>;
export const onUpdateCOSTO = /* GraphQL */ `subscription OnUpdateCOSTO($filter: ModelSubscriptionCOSTOFilterInput) {
  onUpdateCOSTO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCOSTOSubscriptionVariables,
  APITypes.OnUpdateCOSTOSubscription
>;
export const onDeleteCOSTO = /* GraphQL */ `subscription OnDeleteCOSTO($filter: ModelSubscriptionCOSTOFilterInput) {
  onDeleteCOSTO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCOSTOSubscriptionVariables,
  APITypes.OnDeleteCOSTOSubscription
>;
export const onCreateADJUNTO = /* GraphQL */ `subscription OnCreateADJUNTO($filter: ModelSubscriptionADJUNTOFilterInput) {
  onCreateADJUNTO(filter: $filter) {
    id
    URL
    createdAt
    updatedAt
    cOSTOADJUNTOSId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateADJUNTOSubscriptionVariables,
  APITypes.OnCreateADJUNTOSubscription
>;
export const onUpdateADJUNTO = /* GraphQL */ `subscription OnUpdateADJUNTO($filter: ModelSubscriptionADJUNTOFilterInput) {
  onUpdateADJUNTO(filter: $filter) {
    id
    URL
    createdAt
    updatedAt
    cOSTOADJUNTOSId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateADJUNTOSubscriptionVariables,
  APITypes.OnUpdateADJUNTOSubscription
>;
export const onDeleteADJUNTO = /* GraphQL */ `subscription OnDeleteADJUNTO($filter: ModelSubscriptionADJUNTOFilterInput) {
  onDeleteADJUNTO(filter: $filter) {
    id
    URL
    createdAt
    updatedAt
    cOSTOADJUNTOSId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteADJUNTOSubscriptionVariables,
  APITypes.OnDeleteADJUNTOSubscription
>;
