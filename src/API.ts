/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMaquinariaInput = {
  NroVehiculo: string,
  Patentedelvehiculo: string,
  TIPO: string,
  MARCA: string,
  DESCRIPCION: string,
  PHOTO?: string | null,
  id?: string | null,
  oPERARIOMAQUINARIAId?: string | null,
};

export type ModelMaquinariaConditionInput = {
  NroVehiculo?: ModelIDInput | null,
  Patentedelvehiculo?: ModelStringInput | null,
  TIPO?: ModelStringInput | null,
  MARCA?: ModelStringInput | null,
  DESCRIPCION?: ModelStringInput | null,
  PHOTO?: ModelStringInput | null,
  and?: Array< ModelMaquinariaConditionInput | null > | null,
  or?: Array< ModelMaquinariaConditionInput | null > | null,
  not?: ModelMaquinariaConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  oPERARIOMAQUINARIAId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Maquinaria = {
  __typename: "Maquinaria",
  NroVehiculo: string,
  Patentedelvehiculo: string,
  TIPO: string,
  MARCA: string,
  DESCRIPCION: string,
  PHOTO?: string | null,
  OPERATIVIDAD?: ModelOPERATIVIDADConnection | null,
  COSTOS?: ModelCOSTOConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  oPERARIOMAQUINARIAId?: string | null,
};

export type ModelOPERATIVIDADConnection = {
  __typename: "ModelOPERATIVIDADConnection",
  items:  Array<OPERATIVIDAD | null >,
  nextToken?: string | null,
};

export type OPERATIVIDAD = {
  __typename: "OPERATIVIDAD",
  id: string,
  DESCRIPCION: string,
  ACTIVO: boolean,
  FECHA: string,
  createdAt: string,
  updatedAt: string,
  maquinariaOPERATIVIDADId?: string | null,
};

export type ModelCOSTOConnection = {
  __typename: "ModelCOSTOConnection",
  items:  Array<COSTO | null >,
  nextToken?: string | null,
};

export type COSTO = {
  __typename: "COSTO",
  id: string,
  Price: string,
  Date: string,
  ADJUNTOS?: ModelADJUNTOConnection | null,
  createdAt: string,
  updatedAt: string,
  maquinariaCOSTOSId?: string | null,
};

export type ModelADJUNTOConnection = {
  __typename: "ModelADJUNTOConnection",
  items:  Array<ADJUNTO | null >,
  nextToken?: string | null,
};

export type ADJUNTO = {
  __typename: "ADJUNTO",
  id: string,
  URL: string,
  createdAt: string,
  updatedAt: string,
  cOSTOADJUNTOSId?: string | null,
};

export type UpdateMaquinariaInput = {
  NroVehiculo?: string | null,
  Patentedelvehiculo?: string | null,
  TIPO?: string | null,
  MARCA?: string | null,
  DESCRIPCION?: string | null,
  PHOTO?: string | null,
  id: string,
  oPERARIOMAQUINARIAId?: string | null,
};

export type DeleteMaquinariaInput = {
  id: string,
};

export type CreateOPERATIVIDADInput = {
  id?: string | null,
  DESCRIPCION: string,
  ACTIVO: boolean,
  FECHA: string,
  maquinariaOPERATIVIDADId?: string | null,
};

export type ModelOPERATIVIDADConditionInput = {
  DESCRIPCION?: ModelStringInput | null,
  ACTIVO?: ModelBooleanInput | null,
  and?: Array< ModelOPERATIVIDADConditionInput | null > | null,
  or?: Array< ModelOPERATIVIDADConditionInput | null > | null,
  not?: ModelOPERATIVIDADConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  maquinariaOPERATIVIDADId?: ModelIDInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOPERATIVIDADInput = {
  id: string,
  DESCRIPCION?: string | null,
  ACTIVO?: boolean | null,
  FECHA: string,
  maquinariaOPERATIVIDADId?: string | null,
};

export type DeleteOPERATIVIDADInput = {
  id: string,
  FECHA: string,
};

export type CreateOPERARIOInput = {
  id?: string | null,
  NOMBRE: string,
  EMAIL: string,
  TELEFONO?: string | null,
  DIRECCION?: string | null,
};

export type ModelOPERARIOConditionInput = {
  NOMBRE?: ModelStringInput | null,
  EMAIL?: ModelStringInput | null,
  TELEFONO?: ModelStringInput | null,
  DIRECCION?: ModelStringInput | null,
  and?: Array< ModelOPERARIOConditionInput | null > | null,
  or?: Array< ModelOPERARIOConditionInput | null > | null,
  not?: ModelOPERARIOConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type OPERARIO = {
  __typename: "OPERARIO",
  id: string,
  NOMBRE: string,
  EMAIL: string,
  TELEFONO?: string | null,
  DIRECCION?: string | null,
  MAQUINARIA?: ModelMaquinariaConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelMaquinariaConnection = {
  __typename: "ModelMaquinariaConnection",
  items:  Array<Maquinaria | null >,
  nextToken?: string | null,
};

export type UpdateOPERARIOInput = {
  id: string,
  NOMBRE?: string | null,
  EMAIL?: string | null,
  TELEFONO?: string | null,
  DIRECCION?: string | null,
};

export type DeleteOPERARIOInput = {
  id: string,
};

export type CreateCOSTOInput = {
  id?: string | null,
  Price: string,
  Date: string,
  maquinariaCOSTOSId?: string | null,
};

export type ModelCOSTOConditionInput = {
  Price?: ModelStringInput | null,
  Date?: ModelStringInput | null,
  and?: Array< ModelCOSTOConditionInput | null > | null,
  or?: Array< ModelCOSTOConditionInput | null > | null,
  not?: ModelCOSTOConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  maquinariaCOSTOSId?: ModelIDInput | null,
};

export type UpdateCOSTOInput = {
  id: string,
  Price?: string | null,
  Date?: string | null,
  maquinariaCOSTOSId?: string | null,
};

export type DeleteCOSTOInput = {
  id: string,
};

export type CreateADJUNTOInput = {
  id?: string | null,
  URL: string,
  cOSTOADJUNTOSId?: string | null,
};

export type ModelADJUNTOConditionInput = {
  URL?: ModelStringInput | null,
  and?: Array< ModelADJUNTOConditionInput | null > | null,
  or?: Array< ModelADJUNTOConditionInput | null > | null,
  not?: ModelADJUNTOConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  cOSTOADJUNTOSId?: ModelIDInput | null,
};

export type UpdateADJUNTOInput = {
  id: string,
  URL?: string | null,
  cOSTOADJUNTOSId?: string | null,
};

export type DeleteADJUNTOInput = {
  id: string,
};

export type ModelMaquinariaFilterInput = {
  NroVehiculo?: ModelIDInput | null,
  Patentedelvehiculo?: ModelStringInput | null,
  TIPO?: ModelStringInput | null,
  MARCA?: ModelStringInput | null,
  DESCRIPCION?: ModelStringInput | null,
  PHOTO?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMaquinariaFilterInput | null > | null,
  or?: Array< ModelMaquinariaFilterInput | null > | null,
  not?: ModelMaquinariaFilterInput | null,
  oPERARIOMAQUINARIAId?: ModelIDInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelOPERATIVIDADFilterInput = {
  id?: ModelIDInput | null,
  DESCRIPCION?: ModelStringInput | null,
  ACTIVO?: ModelBooleanInput | null,
  FECHA?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOPERATIVIDADFilterInput | null > | null,
  or?: Array< ModelOPERATIVIDADFilterInput | null > | null,
  not?: ModelOPERATIVIDADFilterInput | null,
  maquinariaOPERATIVIDADId?: ModelIDInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOPERARIOFilterInput = {
  id?: ModelIDInput | null,
  NOMBRE?: ModelStringInput | null,
  EMAIL?: ModelStringInput | null,
  TELEFONO?: ModelStringInput | null,
  DIRECCION?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelOPERARIOFilterInput | null > | null,
  or?: Array< ModelOPERARIOFilterInput | null > | null,
  not?: ModelOPERARIOFilterInput | null,
};

export type ModelOPERARIOConnection = {
  __typename: "ModelOPERARIOConnection",
  items:  Array<OPERARIO | null >,
  nextToken?: string | null,
};

export type ModelCOSTOFilterInput = {
  id?: ModelIDInput | null,
  Price?: ModelStringInput | null,
  Date?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCOSTOFilterInput | null > | null,
  or?: Array< ModelCOSTOFilterInput | null > | null,
  not?: ModelCOSTOFilterInput | null,
  maquinariaCOSTOSId?: ModelIDInput | null,
};

export type ModelADJUNTOFilterInput = {
  id?: ModelIDInput | null,
  URL?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelADJUNTOFilterInput | null > | null,
  or?: Array< ModelADJUNTOFilterInput | null > | null,
  not?: ModelADJUNTOFilterInput | null,
  cOSTOADJUNTOSId?: ModelIDInput | null,
};

export type ModelSubscriptionMaquinariaFilterInput = {
  NroVehiculo?: ModelSubscriptionIDInput | null,
  Patentedelvehiculo?: ModelSubscriptionStringInput | null,
  TIPO?: ModelSubscriptionStringInput | null,
  MARCA?: ModelSubscriptionStringInput | null,
  DESCRIPCION?: ModelSubscriptionStringInput | null,
  PHOTO?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMaquinariaFilterInput | null > | null,
  or?: Array< ModelSubscriptionMaquinariaFilterInput | null > | null,
  maquinariaOPERATIVIDADId?: ModelSubscriptionIDInput | null,
  maquinariaCOSTOSId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionOPERATIVIDADFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  DESCRIPCION?: ModelSubscriptionStringInput | null,
  ACTIVO?: ModelSubscriptionBooleanInput | null,
  FECHA?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOPERATIVIDADFilterInput | null > | null,
  or?: Array< ModelSubscriptionOPERATIVIDADFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionOPERARIOFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  NOMBRE?: ModelSubscriptionStringInput | null,
  EMAIL?: ModelSubscriptionStringInput | null,
  TELEFONO?: ModelSubscriptionStringInput | null,
  DIRECCION?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOPERARIOFilterInput | null > | null,
  or?: Array< ModelSubscriptionOPERARIOFilterInput | null > | null,
  oPERARIOMAQUINARIAId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionCOSTOFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  Price?: ModelSubscriptionStringInput | null,
  Date?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCOSTOFilterInput | null > | null,
  or?: Array< ModelSubscriptionCOSTOFilterInput | null > | null,
  cOSTOADJUNTOSId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionADJUNTOFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  URL?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionADJUNTOFilterInput | null > | null,
  or?: Array< ModelSubscriptionADJUNTOFilterInput | null > | null,
};

export type CreateMaquinariaMutationVariables = {
  input: CreateMaquinariaInput,
  condition?: ModelMaquinariaConditionInput | null,
};

export type CreateMaquinariaMutation = {
  createMaquinaria?:  {
    __typename: "Maquinaria",
    NroVehiculo: string,
    Patentedelvehiculo: string,
    TIPO: string,
    MARCA: string,
    DESCRIPCION: string,
    PHOTO?: string | null,
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      items:  Array< {
        __typename: "OPERATIVIDAD",
        id: string,
        DESCRIPCION: string,
        ACTIVO: boolean,
        FECHA: string,
        createdAt: string,
        updatedAt: string,
        maquinariaOPERATIVIDADId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    COSTOS?:  {
      __typename: "ModelCOSTOConnection",
      items:  Array< {
        __typename: "COSTO",
        id: string,
        Price: string,
        Date: string,
        ADJUNTOS?:  {
          __typename: "ModelADJUNTOConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        maquinariaCOSTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    oPERARIOMAQUINARIAId?: string | null,
  } | null,
};

export type UpdateMaquinariaMutationVariables = {
  input: UpdateMaquinariaInput,
  condition?: ModelMaquinariaConditionInput | null,
};

export type UpdateMaquinariaMutation = {
  updateMaquinaria?:  {
    __typename: "Maquinaria",
    NroVehiculo: string,
    Patentedelvehiculo: string,
    TIPO: string,
    MARCA: string,
    DESCRIPCION: string,
    PHOTO?: string | null,
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      items:  Array< {
        __typename: "OPERATIVIDAD",
        id: string,
        DESCRIPCION: string,
        ACTIVO: boolean,
        FECHA: string,
        createdAt: string,
        updatedAt: string,
        maquinariaOPERATIVIDADId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    COSTOS?:  {
      __typename: "ModelCOSTOConnection",
      items:  Array< {
        __typename: "COSTO",
        id: string,
        Price: string,
        Date: string,
        ADJUNTOS?:  {
          __typename: "ModelADJUNTOConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        maquinariaCOSTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    oPERARIOMAQUINARIAId?: string | null,
  } | null,
};

export type DeleteMaquinariaMutationVariables = {
  input: DeleteMaquinariaInput,
  condition?: ModelMaquinariaConditionInput | null,
};

export type DeleteMaquinariaMutation = {
  deleteMaquinaria?:  {
    __typename: "Maquinaria",
    NroVehiculo: string,
    Patentedelvehiculo: string,
    TIPO: string,
    MARCA: string,
    DESCRIPCION: string,
    PHOTO?: string | null,
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      items:  Array< {
        __typename: "OPERATIVIDAD",
        id: string,
        DESCRIPCION: string,
        ACTIVO: boolean,
        FECHA: string,
        createdAt: string,
        updatedAt: string,
        maquinariaOPERATIVIDADId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    COSTOS?:  {
      __typename: "ModelCOSTOConnection",
      items:  Array< {
        __typename: "COSTO",
        id: string,
        Price: string,
        Date: string,
        ADJUNTOS?:  {
          __typename: "ModelADJUNTOConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        maquinariaCOSTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    oPERARIOMAQUINARIAId?: string | null,
  } | null,
};

export type CreateOPERATIVIDADMutationVariables = {
  input: CreateOPERATIVIDADInput,
  condition?: ModelOPERATIVIDADConditionInput | null,
};

export type CreateOPERATIVIDADMutation = {
  createOPERATIVIDAD?:  {
    __typename: "OPERATIVIDAD",
    id: string,
    DESCRIPCION: string,
    ACTIVO: boolean,
    FECHA: string,
    createdAt: string,
    updatedAt: string,
    maquinariaOPERATIVIDADId?: string | null,
  } | null,
};

export type UpdateOPERATIVIDADMutationVariables = {
  input: UpdateOPERATIVIDADInput,
  condition?: ModelOPERATIVIDADConditionInput | null,
};

export type UpdateOPERATIVIDADMutation = {
  updateOPERATIVIDAD?:  {
    __typename: "OPERATIVIDAD",
    id: string,
    DESCRIPCION: string,
    ACTIVO: boolean,
    FECHA: string,
    createdAt: string,
    updatedAt: string,
    maquinariaOPERATIVIDADId?: string | null,
  } | null,
};

export type DeleteOPERATIVIDADMutationVariables = {
  input: DeleteOPERATIVIDADInput,
  condition?: ModelOPERATIVIDADConditionInput | null,
};

export type DeleteOPERATIVIDADMutation = {
  deleteOPERATIVIDAD?:  {
    __typename: "OPERATIVIDAD",
    id: string,
    DESCRIPCION: string,
    ACTIVO: boolean,
    FECHA: string,
    createdAt: string,
    updatedAt: string,
    maquinariaOPERATIVIDADId?: string | null,
  } | null,
};

export type CreateOPERARIOMutationVariables = {
  input: CreateOPERARIOInput,
  condition?: ModelOPERARIOConditionInput | null,
};

export type CreateOPERARIOMutation = {
  createOPERARIO?:  {
    __typename: "OPERARIO",
    id: string,
    NOMBRE: string,
    EMAIL: string,
    TELEFONO?: string | null,
    DIRECCION?: string | null,
    MAQUINARIA?:  {
      __typename: "ModelMaquinariaConnection",
      items:  Array< {
        __typename: "Maquinaria",
        NroVehiculo: string,
        Patentedelvehiculo: string,
        TIPO: string,
        MARCA: string,
        DESCRIPCION: string,
        PHOTO?: string | null,
        OPERATIVIDAD?:  {
          __typename: "ModelOPERATIVIDADConnection",
          nextToken?: string | null,
        } | null,
        COSTOS?:  {
          __typename: "ModelCOSTOConnection",
          nextToken?: string | null,
        } | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        oPERARIOMAQUINARIAId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOPERARIOMutationVariables = {
  input: UpdateOPERARIOInput,
  condition?: ModelOPERARIOConditionInput | null,
};

export type UpdateOPERARIOMutation = {
  updateOPERARIO?:  {
    __typename: "OPERARIO",
    id: string,
    NOMBRE: string,
    EMAIL: string,
    TELEFONO?: string | null,
    DIRECCION?: string | null,
    MAQUINARIA?:  {
      __typename: "ModelMaquinariaConnection",
      items:  Array< {
        __typename: "Maquinaria",
        NroVehiculo: string,
        Patentedelvehiculo: string,
        TIPO: string,
        MARCA: string,
        DESCRIPCION: string,
        PHOTO?: string | null,
        OPERATIVIDAD?:  {
          __typename: "ModelOPERATIVIDADConnection",
          nextToken?: string | null,
        } | null,
        COSTOS?:  {
          __typename: "ModelCOSTOConnection",
          nextToken?: string | null,
        } | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        oPERARIOMAQUINARIAId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOPERARIOMutationVariables = {
  input: DeleteOPERARIOInput,
  condition?: ModelOPERARIOConditionInput | null,
};

export type DeleteOPERARIOMutation = {
  deleteOPERARIO?:  {
    __typename: "OPERARIO",
    id: string,
    NOMBRE: string,
    EMAIL: string,
    TELEFONO?: string | null,
    DIRECCION?: string | null,
    MAQUINARIA?:  {
      __typename: "ModelMaquinariaConnection",
      items:  Array< {
        __typename: "Maquinaria",
        NroVehiculo: string,
        Patentedelvehiculo: string,
        TIPO: string,
        MARCA: string,
        DESCRIPCION: string,
        PHOTO?: string | null,
        OPERATIVIDAD?:  {
          __typename: "ModelOPERATIVIDADConnection",
          nextToken?: string | null,
        } | null,
        COSTOS?:  {
          __typename: "ModelCOSTOConnection",
          nextToken?: string | null,
        } | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        oPERARIOMAQUINARIAId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCOSTOMutationVariables = {
  input: CreateCOSTOInput,
  condition?: ModelCOSTOConditionInput | null,
};

export type CreateCOSTOMutation = {
  createCOSTO?:  {
    __typename: "COSTO",
    id: string,
    Price: string,
    Date: string,
    ADJUNTOS?:  {
      __typename: "ModelADJUNTOConnection",
      items:  Array< {
        __typename: "ADJUNTO",
        id: string,
        URL: string,
        createdAt: string,
        updatedAt: string,
        cOSTOADJUNTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    maquinariaCOSTOSId?: string | null,
  } | null,
};

export type UpdateCOSTOMutationVariables = {
  input: UpdateCOSTOInput,
  condition?: ModelCOSTOConditionInput | null,
};

export type UpdateCOSTOMutation = {
  updateCOSTO?:  {
    __typename: "COSTO",
    id: string,
    Price: string,
    Date: string,
    ADJUNTOS?:  {
      __typename: "ModelADJUNTOConnection",
      items:  Array< {
        __typename: "ADJUNTO",
        id: string,
        URL: string,
        createdAt: string,
        updatedAt: string,
        cOSTOADJUNTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    maquinariaCOSTOSId?: string | null,
  } | null,
};

export type DeleteCOSTOMutationVariables = {
  input: DeleteCOSTOInput,
  condition?: ModelCOSTOConditionInput | null,
};

export type DeleteCOSTOMutation = {
  deleteCOSTO?:  {
    __typename: "COSTO",
    id: string,
    Price: string,
    Date: string,
    ADJUNTOS?:  {
      __typename: "ModelADJUNTOConnection",
      items:  Array< {
        __typename: "ADJUNTO",
        id: string,
        URL: string,
        createdAt: string,
        updatedAt: string,
        cOSTOADJUNTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    maquinariaCOSTOSId?: string | null,
  } | null,
};

export type CreateADJUNTOMutationVariables = {
  input: CreateADJUNTOInput,
  condition?: ModelADJUNTOConditionInput | null,
};

export type CreateADJUNTOMutation = {
  createADJUNTO?:  {
    __typename: "ADJUNTO",
    id: string,
    URL: string,
    createdAt: string,
    updatedAt: string,
    cOSTOADJUNTOSId?: string | null,
  } | null,
};

export type UpdateADJUNTOMutationVariables = {
  input: UpdateADJUNTOInput,
  condition?: ModelADJUNTOConditionInput | null,
};

export type UpdateADJUNTOMutation = {
  updateADJUNTO?:  {
    __typename: "ADJUNTO",
    id: string,
    URL: string,
    createdAt: string,
    updatedAt: string,
    cOSTOADJUNTOSId?: string | null,
  } | null,
};

export type DeleteADJUNTOMutationVariables = {
  input: DeleteADJUNTOInput,
  condition?: ModelADJUNTOConditionInput | null,
};

export type DeleteADJUNTOMutation = {
  deleteADJUNTO?:  {
    __typename: "ADJUNTO",
    id: string,
    URL: string,
    createdAt: string,
    updatedAt: string,
    cOSTOADJUNTOSId?: string | null,
  } | null,
};

export type GetMaquinariaQueryVariables = {
  id: string,
};

export type GetMaquinariaQuery = {
  getMaquinaria?:  {
    __typename: "Maquinaria",
    NroVehiculo: string,
    Patentedelvehiculo: string,
    TIPO: string,
    MARCA: string,
    DESCRIPCION: string,
    PHOTO?: string | null,
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      items:  Array< {
        __typename: "OPERATIVIDAD",
        id: string,
        DESCRIPCION: string,
        ACTIVO: boolean,
        FECHA: string,
        createdAt: string,
        updatedAt: string,
        maquinariaOPERATIVIDADId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    COSTOS?:  {
      __typename: "ModelCOSTOConnection",
      items:  Array< {
        __typename: "COSTO",
        id: string,
        Price: string,
        Date: string,
        ADJUNTOS?:  {
          __typename: "ModelADJUNTOConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        maquinariaCOSTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    oPERARIOMAQUINARIAId?: string | null,
  } | null,
};

export type ListMaquinariasQueryVariables = {
  filter?: ModelMaquinariaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMaquinariasQuery = {
  listMaquinarias?:  {
    __typename: "ModelMaquinariaConnection",
    items:  Array< {
      __typename: "Maquinaria",
      NroVehiculo: string,
      Patentedelvehiculo: string,
      TIPO: string,
      MARCA: string,
      DESCRIPCION: string,
      PHOTO?: string | null,
      OPERATIVIDAD?:  {
        __typename: "ModelOPERATIVIDADConnection",
        items:  Array< {
          __typename: "OPERATIVIDAD",
          id: string,
          DESCRIPCION: string,
          ACTIVO: boolean,
          FECHA: string,
          createdAt: string,
          updatedAt: string,
          maquinariaOPERATIVIDADId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      COSTOS?:  {
        __typename: "ModelCOSTOConnection",
        items:  Array< {
          __typename: "COSTO",
          id: string,
          Price: string,
          Date: string,
          createdAt: string,
          updatedAt: string,
          maquinariaCOSTOSId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      oPERARIOMAQUINARIAId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOPERATIVIDADQueryVariables = {
  id: string,
  FECHA: string,
};

export type GetOPERATIVIDADQuery = {
  getOPERATIVIDAD?:  {
    __typename: "OPERATIVIDAD",
    id: string,
    DESCRIPCION: string,
    ACTIVO: boolean,
    FECHA: string,
    createdAt: string,
    updatedAt: string,
    maquinariaOPERATIVIDADId?: string | null,
  } | null,
};

export type ListOPERATIVIDADSQueryVariables = {
  id?: string | null,
  FECHA?: ModelStringKeyConditionInput | null,
  filter?: ModelOPERATIVIDADFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListOPERATIVIDADSQuery = {
  listOPERATIVIDADS?:  {
    __typename: "ModelOPERATIVIDADConnection",
    items:  Array< {
      __typename: "OPERATIVIDAD",
      id: string,
      DESCRIPCION: string,
      ACTIVO: boolean,
      FECHA: string,
      createdAt: string,
      updatedAt: string,
      maquinariaOPERATIVIDADId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetOPERARIOQueryVariables = {
  id: string,
};

export type GetOPERARIOQuery = {
  getOPERARIO?:  {
    __typename: "OPERARIO",
    id: string,
    NOMBRE: string,
    EMAIL: string,
    TELEFONO?: string | null,
    DIRECCION?: string | null,
    MAQUINARIA?:  {
      __typename: "ModelMaquinariaConnection",
      items:  Array< {
        __typename: "Maquinaria",
        NroVehiculo: string,
        Patentedelvehiculo: string,
        TIPO: string,
        MARCA: string,
        DESCRIPCION: string,
        PHOTO?: string | null,
        OPERATIVIDAD?:  {
          __typename: "ModelOPERATIVIDADConnection",
          nextToken?: string | null,
        } | null,
        COSTOS?:  {
          __typename: "ModelCOSTOConnection",
          nextToken?: string | null,
        } | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        oPERARIOMAQUINARIAId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListOPERARIOSQueryVariables = {
  filter?: ModelOPERARIOFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOPERARIOSQuery = {
  listOPERARIOS?:  {
    __typename: "ModelOPERARIOConnection",
    items:  Array< {
      __typename: "OPERARIO",
      id: string,
      NOMBRE: string,
      EMAIL: string,
      TELEFONO?: string | null,
      DIRECCION?: string | null,
      MAQUINARIA?:  {
        __typename: "ModelMaquinariaConnection",
        items:  Array< {
          __typename: "Maquinaria",
          NroVehiculo: string,
          Patentedelvehiculo: string,
          TIPO: string,
          MARCA: string,
          DESCRIPCION: string,
          PHOTO?: string | null,
          id: string,
          createdAt: string,
          updatedAt: string,
          oPERARIOMAQUINARIAId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCOSTOQueryVariables = {
  id: string,
};

export type GetCOSTOQuery = {
  getCOSTO?:  {
    __typename: "COSTO",
    id: string,
    Price: string,
    Date: string,
    ADJUNTOS?:  {
      __typename: "ModelADJUNTOConnection",
      items:  Array< {
        __typename: "ADJUNTO",
        id: string,
        URL: string,
        createdAt: string,
        updatedAt: string,
        cOSTOADJUNTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    maquinariaCOSTOSId?: string | null,
  } | null,
};

export type ListCOSTOSQueryVariables = {
  filter?: ModelCOSTOFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCOSTOSQuery = {
  listCOSTOS?:  {
    __typename: "ModelCOSTOConnection",
    items:  Array< {
      __typename: "COSTO",
      id: string,
      Price: string,
      Date: string,
      ADJUNTOS?:  {
        __typename: "ModelADJUNTOConnection",
        items:  Array< {
          __typename: "ADJUNTO",
          id: string,
          URL: string,
          createdAt: string,
          updatedAt: string,
          cOSTOADJUNTOSId?: string | null,
        } | null >,
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      maquinariaCOSTOSId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetADJUNTOQueryVariables = {
  id: string,
};

export type GetADJUNTOQuery = {
  getADJUNTO?:  {
    __typename: "ADJUNTO",
    id: string,
    URL: string,
    createdAt: string,
    updatedAt: string,
    cOSTOADJUNTOSId?: string | null,
  } | null,
};

export type ListADJUNTOSQueryVariables = {
  filter?: ModelADJUNTOFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListADJUNTOSQuery = {
  listADJUNTOS?:  {
    __typename: "ModelADJUNTOConnection",
    items:  Array< {
      __typename: "ADJUNTO",
      id: string,
      URL: string,
      createdAt: string,
      updatedAt: string,
      cOSTOADJUNTOSId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMaquinariaSubscriptionVariables = {
  filter?: ModelSubscriptionMaquinariaFilterInput | null,
};

export type OnCreateMaquinariaSubscription = {
  onCreateMaquinaria?:  {
    __typename: "Maquinaria",
    NroVehiculo: string,
    Patentedelvehiculo: string,
    TIPO: string,
    MARCA: string,
    DESCRIPCION: string,
    PHOTO?: string | null,
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      items:  Array< {
        __typename: "OPERATIVIDAD",
        id: string,
        DESCRIPCION: string,
        ACTIVO: boolean,
        FECHA: string,
        createdAt: string,
        updatedAt: string,
        maquinariaOPERATIVIDADId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    COSTOS?:  {
      __typename: "ModelCOSTOConnection",
      items:  Array< {
        __typename: "COSTO",
        id: string,
        Price: string,
        Date: string,
        ADJUNTOS?:  {
          __typename: "ModelADJUNTOConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        maquinariaCOSTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    oPERARIOMAQUINARIAId?: string | null,
  } | null,
};

export type OnUpdateMaquinariaSubscriptionVariables = {
  filter?: ModelSubscriptionMaquinariaFilterInput | null,
};

export type OnUpdateMaquinariaSubscription = {
  onUpdateMaquinaria?:  {
    __typename: "Maquinaria",
    NroVehiculo: string,
    Patentedelvehiculo: string,
    TIPO: string,
    MARCA: string,
    DESCRIPCION: string,
    PHOTO?: string | null,
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      items:  Array< {
        __typename: "OPERATIVIDAD",
        id: string,
        DESCRIPCION: string,
        ACTIVO: boolean,
        FECHA: string,
        createdAt: string,
        updatedAt: string,
        maquinariaOPERATIVIDADId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    COSTOS?:  {
      __typename: "ModelCOSTOConnection",
      items:  Array< {
        __typename: "COSTO",
        id: string,
        Price: string,
        Date: string,
        ADJUNTOS?:  {
          __typename: "ModelADJUNTOConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        maquinariaCOSTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    oPERARIOMAQUINARIAId?: string | null,
  } | null,
};

export type OnDeleteMaquinariaSubscriptionVariables = {
  filter?: ModelSubscriptionMaquinariaFilterInput | null,
};

export type OnDeleteMaquinariaSubscription = {
  onDeleteMaquinaria?:  {
    __typename: "Maquinaria",
    NroVehiculo: string,
    Patentedelvehiculo: string,
    TIPO: string,
    MARCA: string,
    DESCRIPCION: string,
    PHOTO?: string | null,
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      items:  Array< {
        __typename: "OPERATIVIDAD",
        id: string,
        DESCRIPCION: string,
        ACTIVO: boolean,
        FECHA: string,
        createdAt: string,
        updatedAt: string,
        maquinariaOPERATIVIDADId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    COSTOS?:  {
      __typename: "ModelCOSTOConnection",
      items:  Array< {
        __typename: "COSTO",
        id: string,
        Price: string,
        Date: string,
        ADJUNTOS?:  {
          __typename: "ModelADJUNTOConnection",
          nextToken?: string | null,
        } | null,
        createdAt: string,
        updatedAt: string,
        maquinariaCOSTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    oPERARIOMAQUINARIAId?: string | null,
  } | null,
};

export type OnCreateOPERATIVIDADSubscriptionVariables = {
  filter?: ModelSubscriptionOPERATIVIDADFilterInput | null,
};

export type OnCreateOPERATIVIDADSubscription = {
  onCreateOPERATIVIDAD?:  {
    __typename: "OPERATIVIDAD",
    id: string,
    DESCRIPCION: string,
    ACTIVO: boolean,
    FECHA: string,
    createdAt: string,
    updatedAt: string,
    maquinariaOPERATIVIDADId?: string | null,
  } | null,
};

export type OnUpdateOPERATIVIDADSubscriptionVariables = {
  filter?: ModelSubscriptionOPERATIVIDADFilterInput | null,
};

export type OnUpdateOPERATIVIDADSubscription = {
  onUpdateOPERATIVIDAD?:  {
    __typename: "OPERATIVIDAD",
    id: string,
    DESCRIPCION: string,
    ACTIVO: boolean,
    FECHA: string,
    createdAt: string,
    updatedAt: string,
    maquinariaOPERATIVIDADId?: string | null,
  } | null,
};

export type OnDeleteOPERATIVIDADSubscriptionVariables = {
  filter?: ModelSubscriptionOPERATIVIDADFilterInput | null,
};

export type OnDeleteOPERATIVIDADSubscription = {
  onDeleteOPERATIVIDAD?:  {
    __typename: "OPERATIVIDAD",
    id: string,
    DESCRIPCION: string,
    ACTIVO: boolean,
    FECHA: string,
    createdAt: string,
    updatedAt: string,
    maquinariaOPERATIVIDADId?: string | null,
  } | null,
};

export type OnCreateOPERARIOSubscriptionVariables = {
  filter?: ModelSubscriptionOPERARIOFilterInput | null,
};

export type OnCreateOPERARIOSubscription = {
  onCreateOPERARIO?:  {
    __typename: "OPERARIO",
    id: string,
    NOMBRE: string,
    EMAIL: string,
    TELEFONO?: string | null,
    DIRECCION?: string | null,
    MAQUINARIA?:  {
      __typename: "ModelMaquinariaConnection",
      items:  Array< {
        __typename: "Maquinaria",
        NroVehiculo: string,
        Patentedelvehiculo: string,
        TIPO: string,
        MARCA: string,
        DESCRIPCION: string,
        PHOTO?: string | null,
        OPERATIVIDAD?:  {
          __typename: "ModelOPERATIVIDADConnection",
          nextToken?: string | null,
        } | null,
        COSTOS?:  {
          __typename: "ModelCOSTOConnection",
          nextToken?: string | null,
        } | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        oPERARIOMAQUINARIAId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOPERARIOSubscriptionVariables = {
  filter?: ModelSubscriptionOPERARIOFilterInput | null,
};

export type OnUpdateOPERARIOSubscription = {
  onUpdateOPERARIO?:  {
    __typename: "OPERARIO",
    id: string,
    NOMBRE: string,
    EMAIL: string,
    TELEFONO?: string | null,
    DIRECCION?: string | null,
    MAQUINARIA?:  {
      __typename: "ModelMaquinariaConnection",
      items:  Array< {
        __typename: "Maquinaria",
        NroVehiculo: string,
        Patentedelvehiculo: string,
        TIPO: string,
        MARCA: string,
        DESCRIPCION: string,
        PHOTO?: string | null,
        OPERATIVIDAD?:  {
          __typename: "ModelOPERATIVIDADConnection",
          nextToken?: string | null,
        } | null,
        COSTOS?:  {
          __typename: "ModelCOSTOConnection",
          nextToken?: string | null,
        } | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        oPERARIOMAQUINARIAId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOPERARIOSubscriptionVariables = {
  filter?: ModelSubscriptionOPERARIOFilterInput | null,
};

export type OnDeleteOPERARIOSubscription = {
  onDeleteOPERARIO?:  {
    __typename: "OPERARIO",
    id: string,
    NOMBRE: string,
    EMAIL: string,
    TELEFONO?: string | null,
    DIRECCION?: string | null,
    MAQUINARIA?:  {
      __typename: "ModelMaquinariaConnection",
      items:  Array< {
        __typename: "Maquinaria",
        NroVehiculo: string,
        Patentedelvehiculo: string,
        TIPO: string,
        MARCA: string,
        DESCRIPCION: string,
        PHOTO?: string | null,
        OPERATIVIDAD?:  {
          __typename: "ModelOPERATIVIDADConnection",
          nextToken?: string | null,
        } | null,
        COSTOS?:  {
          __typename: "ModelCOSTOConnection",
          nextToken?: string | null,
        } | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        oPERARIOMAQUINARIAId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCOSTOSubscriptionVariables = {
  filter?: ModelSubscriptionCOSTOFilterInput | null,
};

export type OnCreateCOSTOSubscription = {
  onCreateCOSTO?:  {
    __typename: "COSTO",
    id: string,
    Price: string,
    Date: string,
    ADJUNTOS?:  {
      __typename: "ModelADJUNTOConnection",
      items:  Array< {
        __typename: "ADJUNTO",
        id: string,
        URL: string,
        createdAt: string,
        updatedAt: string,
        cOSTOADJUNTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    maquinariaCOSTOSId?: string | null,
  } | null,
};

export type OnUpdateCOSTOSubscriptionVariables = {
  filter?: ModelSubscriptionCOSTOFilterInput | null,
};

export type OnUpdateCOSTOSubscription = {
  onUpdateCOSTO?:  {
    __typename: "COSTO",
    id: string,
    Price: string,
    Date: string,
    ADJUNTOS?:  {
      __typename: "ModelADJUNTOConnection",
      items:  Array< {
        __typename: "ADJUNTO",
        id: string,
        URL: string,
        createdAt: string,
        updatedAt: string,
        cOSTOADJUNTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    maquinariaCOSTOSId?: string | null,
  } | null,
};

export type OnDeleteCOSTOSubscriptionVariables = {
  filter?: ModelSubscriptionCOSTOFilterInput | null,
};

export type OnDeleteCOSTOSubscription = {
  onDeleteCOSTO?:  {
    __typename: "COSTO",
    id: string,
    Price: string,
    Date: string,
    ADJUNTOS?:  {
      __typename: "ModelADJUNTOConnection",
      items:  Array< {
        __typename: "ADJUNTO",
        id: string,
        URL: string,
        createdAt: string,
        updatedAt: string,
        cOSTOADJUNTOSId?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    maquinariaCOSTOSId?: string | null,
  } | null,
};

export type OnCreateADJUNTOSubscriptionVariables = {
  filter?: ModelSubscriptionADJUNTOFilterInput | null,
};

export type OnCreateADJUNTOSubscription = {
  onCreateADJUNTO?:  {
    __typename: "ADJUNTO",
    id: string,
    URL: string,
    createdAt: string,
    updatedAt: string,
    cOSTOADJUNTOSId?: string | null,
  } | null,
};

export type OnUpdateADJUNTOSubscriptionVariables = {
  filter?: ModelSubscriptionADJUNTOFilterInput | null,
};

export type OnUpdateADJUNTOSubscription = {
  onUpdateADJUNTO?:  {
    __typename: "ADJUNTO",
    id: string,
    URL: string,
    createdAt: string,
    updatedAt: string,
    cOSTOADJUNTOSId?: string | null,
  } | null,
};

export type OnDeleteADJUNTOSubscriptionVariables = {
  filter?: ModelSubscriptionADJUNTOFilterInput | null,
};

export type OnDeleteADJUNTOSubscription = {
  onDeleteADJUNTO?:  {
    __typename: "ADJUNTO",
    id: string,
    URL: string,
    createdAt: string,
    updatedAt: string,
    cOSTOADJUNTOSId?: string | null,
  } | null,
};
