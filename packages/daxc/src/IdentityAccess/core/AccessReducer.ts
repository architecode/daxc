import { IdentityPermissions } from "daxc-common";
import { MappedAccess } from "./MappedAccess";
import { RolesPermissionsReducer } from "./RolesPermissionsReducer";

export const AccessReducer = {
  accessible: (mappedAccess: MappedAccess, resource: string, reinforcement: "positive" | "negative" | undefined): boolean => {
    const { initial, roles } = mappedAccess[resource].accessible;

    const reduced = roles.reduce((result, each) => {
      if (reinforcement === "positive") {
        if (result === true || each.value === true) {
          return true;
        } else if (result === undefined && each.value === undefined) {
          return undefined;
        } else {
          return false;
        }
      } else if (reinforcement === "negative") {
        if (result === false || each.value === false) {
          return false;
        } else if (result === undefined && each.value === undefined) {
          return undefined;
        } else {
          return true;
        }
      } else {
        if (result === true || each.value === true) {
          return true;
        } else if (result === undefined && each.value === undefined) {
          return undefined;
        } else {
          return false;
        }
      }
    }, undefined);

    return reduced || initial || false;
  },
  permissions: (mappedAccess: MappedAccess, resource: string, reinforcement: "positive" | "negative" | undefined): {
    [permission: string]: IdentityPermissions;
  } => {
    const permissions = Object.keys(mappedAccess[resource].permissions);
    const initialPermissions: { [permission: string]: IdentityPermissions; } = {};

    return permissions.reduce((result, permission) => {
      const { initial, roles } = mappedAccess[resource].permissions[permission];
      const mappedRoles = roles.map((each) => each.value);
      const reducedPermission = RolesPermissionsReducer.reduce(mappedRoles, reinforcement);

      if (reducedPermission) {
        switch (initial) {
          case "All":
            if (reducedPermission === "AbsoluteDenied" || reducedPermission === "Denied") {
              result[permission] = "Denied";
            } else {
              result[permission] = "Allowed";
            }
            break;

          case "Attributes":
            if (reducedPermission === "AbsoluteDenied") {
              result[permission] = "Denied";
            } else if (reducedPermission === "AbsoluteAllowed") {
              result[permission] = "Allowed";
            } else {
              result[permission] = "Attributes";
            }
            break;

          case "Owner":
            if (reducedPermission === "AbsoluteDenied") {
              result[permission] = "Denied";
            } else if (reducedPermission === "AbsoluteAllowed") {
              result[permission] = "Allowed";
            } else {
              result[permission] = "Owner";
            }
            break;

          case "None":
            if (reducedPermission === "AbsoluteAllowed" || reducedPermission === "Allowed") {
              result[permission] = "Allowed";
            } else {
              result[permission] = "Denied";
            }
            break;

          case "Neutral":
          default:
            if (reducedPermission === "AbsoluteDenied" || reducedPermission === "Denied") {
              result[permission] = "Denied";
            } else if (reducedPermission === "AbsoluteAllowed" || reducedPermission === "Allowed") {
              result[permission] = "Allowed";
            } else {
              if (reinforcement === "negative") {
                result[permission] = "Denied";
              } else {
                result[permission] = "Allowed";
              }
            }
            break;
        }
      } else {
        switch (initial) {
          case "All":
            result[permission] = "Allowed";
            break;

          case "Attributes":
            result[permission] = "Attributes";
            break;

          case "Owner":
            result[permission] = "Owner";
            break;

          case "None":
            result[permission] = "Denied";
            break;

          case "Neutral":
          default:
            if (reinforcement === "positive") {
              result[permission] = "Allowed";
            } else if (reinforcement === "negative") {
              result[permission] = "Denied";
            } else {
              result[permission] = "Allowed";
            }

            break;
        }
      }

      return result;
    }, initialPermissions);
  },
};
