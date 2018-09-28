export namespace State {
  export interface ResourcesState<Permissions, Subjects> {
    [resource: string]: ResourcesAccess<Permissions, Subjects>;
  }

  export interface RolesState<Permissions, Subjects> {
    [role: string]: {
      resources: {
        [resource: string]: {
          accessible?: boolean;
          permissions?: { [name: string]: Permissions; };
          subjects?: { [name: string]: Subjects; };
        };
      };
    };
  }

  export interface ApplicationState<Permissions, Subjects> {
    resources: ResourcesState<Permissions, Subjects>;
    roles: RolesState<Permissions, Subjects>;
  }

  export interface ResourcesAccess<Permissions, Subjects> {
    accessible?: boolean;
    permissions?: { [name: string]: Permissions; };
    subjects?: { [name: string]: Subjects; };
  }
}
