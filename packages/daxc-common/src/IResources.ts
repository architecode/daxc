import { IResourcesAccess } from "./IResourcesAccess";

export interface IResources {
  [resource: string]: IResourcesAccess;
}
