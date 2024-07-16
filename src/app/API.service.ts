/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMaquinariaInput = {
  NroVehiculo: string,
  Patentedelvehiculo: string,
  TIPO: string,
  MARCA: string,
  DESCRIPCION: string,
  id?: string | null,
};

export type ModelMaquinariaConditionInput = {
  NroVehiculo?: ModelIDInput | null,
  Patentedelvehiculo?: ModelStringInput | null,
  TIPO?: ModelStringInput | null,
  MARCA?: ModelStringInput | null,
  DESCRIPCION?: ModelStringInput | null,
  and?: Array< ModelMaquinariaConditionInput | null > | null,
  or?: Array< ModelMaquinariaConditionInput | null > | null,
  not?: ModelMaquinariaConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  OPERATIVIDAD?: ModelOPERATIVIDADConnection | null,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelOPERATIVIDADConnection = {
  __typename: "ModelOPERATIVIDADConnection",
  items:  Array<OPERATIVIDAD  >,
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

export type UpdateMaquinariaInput = {
  oPERARIOMAQUINARIAId?:string|null,
  NroVehiculo?: string | null,
  Patentedelvehiculo?: string | null,
  TIPO?: string | null,
  MARCA?: string | null,
  DESCRIPCION?: string | null,
  PHOTO?: string | null,
  id: string,
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
  oPERARIOMAQUINARIAId?:string|null
};

export type DeleteOPERATIVIDADInput = {
  id: string,
  FECHA: string,
};

export type ModelMaquinariaFilterInput = {
  NroVehiculo?: ModelIDInput | null,
  Patentedelvehiculo?: ModelStringInput | null,
  TIPO?: ModelStringInput | null,
  MARCA?: ModelStringInput | null,
  DESCRIPCION?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMaquinariaFilterInput | null > | null,
  or?: Array< ModelMaquinariaFilterInput | null > | null,
  not?: ModelMaquinariaFilterInput | null,
};

export type ModelMaquinariaConnection = {
  __typename: "ModelMaquinariaConnection",
  items:  Array<Maquinaria | null >,
  nextToken?: string | null,
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


export type ModelSubscriptionMaquinariaFilterInput = {
  NroVehiculo?: ModelSubscriptionIDInput | null,
  Patentedelvehiculo?: ModelSubscriptionStringInput | null,
  TIPO?: ModelSubscriptionStringInput | null,
  MARCA?: ModelSubscriptionStringInput | null,
  DESCRIPCION?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMaquinariaFilterInput | null > | null,
  or?: Array< ModelSubscriptionMaquinariaFilterInput | null > | null,
  maquinariaOPERATIVIDADId?: ModelSubscriptionIDInput | null,
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
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    OPERATIVIDAD?: ModelOPERATIVIDADConnection | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
      id: string,
      createdAt: string,
      updatedAt: string,
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
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
    OPERATIVIDAD?:  {
      __typename: "ModelOPERATIVIDADConnection",
      nextToken?: string | null,
    } | null,
    id: string,
    createdAt: string,
    updatedAt: string,
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
