import { IAccessPolicyOptions } from "./IAccessPolicyOptions";
import { IResources } from "./IResources";
import { IRoles } from "./IRoles";

export interface IAccessPolicy {
  resources: IResources;
  roles: IRoles;
  options?: IAccessPolicyOptions;
}
