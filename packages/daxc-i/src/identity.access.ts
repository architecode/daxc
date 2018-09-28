import { IdentityAccessDTO } from "daxc-common";
import { AnyAttributeOpts, AnyResource, AnyAttributes, MapIdentityAttributes } from "./core";

export interface Access {
  accessible: boolean;
  permissions: { [name: string]: boolean; };
  subjects: { [name: string]: { read: boolean; write: boolean; }; };
}

export interface IdentityAccess<Permissions, Subjects> {
  getIdentity<I = any>(): I;
  access(
    resource: any,
    opts?: AnyAttributeOpts,
    toResource?: (anyResource: any) => AnyResource,
    mapIdentityAttributes?: MapIdentityAttributes,
  ): Access;
  toDTO(): IdentityAccessDTO<Permissions, Subjects>;
}
