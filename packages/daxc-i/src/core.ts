export interface AttributeOpts<Identity, Resource> {
  attributes: (identity: Identity, resource: Resource, optName?: string) => boolean;
  owner: (identity: Identity, resource: Resource, optName?: string) => boolean;
}
export interface AnyAttributeOpts extends AttributeOpts<any, any> { }

export interface AccessReducer<Permissions, Subjects, Identity, Resource> {
  accessible: (accessible: boolean, identity?: Identity, resource?: Resource, mapIdentityAttributes?: MapIdentityAttributes, opts?: AttributeOpts<Identity, Resource>) => boolean;
  permissions: (permission: string, value: Permissions, identity: Identity, resource: Resource, mapIdentityAttributes: MapIdentityAttributes, opts: AttributeOpts<Identity, Resource>) => boolean;
  subjects: (subject: string, value: Subjects, identity: Identity, resource: Resource, mapIdentityAttributes: MapIdentityAttributes, opts: AttributeOpts<Identity, Resource>) => { read: boolean; write: boolean; };
}
export interface AnyAccessReducer extends AccessReducer<any, any, any, any> { }

export type MapIdentityAttributes = (identity: any, resource?: string) => any;

export interface AnyAttributes {
  accessAttrs?: string | string[];
  accessOwner?: string | string[];
  [others: string]: any;
}

export interface AnyResource extends AnyAttributes {
  name: string;
}
