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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMaquinariasQueryVariables,
  APITypes.ListMaquinariasQuery
>;
export const getOPERARIO = /* GraphQL */ `query GetOPERARIO($id: ID!) {
  getOPERARIO(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetOPERARIOQueryVariables,
  APITypes.GetOPERARIOQuery
>;
export const listOPERARIOS = /* GraphQL */ `query ListOPERARIOS(
  $filter: ModelOPERARIOFilterInput
  $limit: Int
  $nextToken: String
) {
  listOPERARIOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOPERARIOSQueryVariables,
  APITypes.ListOPERARIOSQuery
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
export const getHorometro = /* GraphQL */ `query GetHorometro($id: ID!) {
  getHorometro(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetHorometroQueryVariables,
  APITypes.GetHorometroQuery
>;
export const listHorometros = /* GraphQL */ `query ListHorometros(
  $filter: ModelHorometroFilterInput
  $limit: Int
  $nextToken: String
) {
  listHorometros(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHorometrosQueryVariables,
  APITypes.ListHorometrosQuery
>;
export const getADJUNTO = /* GraphQL */ `query GetADJUNTO($id: ID!) {
  getADJUNTO(id: $id) {
    id
    URL
    createdAt
    updatedAt
    horometroADJUNTOSId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetADJUNTOQueryVariables,
  APITypes.GetADJUNTOQuery
>;
export const listADJUNTOS = /* GraphQL */ `query ListADJUNTOS(
  $filter: ModelADJUNTOFilterInput
  $limit: Int
  $nextToken: String
) {
  listADJUNTOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
}
` as GeneratedQuery<
  APITypes.ListADJUNTOSQueryVariables,
  APITypes.ListADJUNTOSQuery
>;
