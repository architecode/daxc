export interface IdentityAccessDTO<Permissions, Subjects> {
  identity: any;
  access: {
    [resource: string]: {
      accessible: boolean;
      permissions: { [permission: string]: Permissions; };
      subjects: { [subject: string]: Subjects; };
    };
  };
}
