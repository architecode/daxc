import { IRolesAccess } from "./IRolesAccess";

export interface IRoles {
  [role: string]: IRolesAccess;
}
