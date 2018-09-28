export enum PERMISSIONS {
  All = "ALL",
  Attribute = "ATTRIBUTE",
  Owner = "OWNER",
  None = "NONE",
}

export enum SUBJECTS {
  Read_Write = "READ/WRITE",
  Read_WriteAttribute = "READ/WRITE-ATTRIBUTE",
  Read_WriteOwner = "READ/WRITE-OWNER",
  ReadAttribute_WriteAttribute = "READ-ATTRIBUTE/WRITE-ATTRIBUTE",
  ReadAttribute_WriteOwner = "READ-ATTRIBUTE/WRITE-OWNER",
  ReadOwner_WriteOwner = "READ-OWNER/WRITE-OWNER",
  ReadOnly = "READ",
  ReadAttributeOnly = "READ-ATTRIBUTE",
  ReadOwnerOnly = "READ-OWNER",
  None = "NONE",
}
