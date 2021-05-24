import { RolesPermissions } from "daxc-common";

export const RolesPermissionsReducer = {
  reduce: (roles: RolesPermissions[], reinforcement: "positive" | "negative" | undefined): RolesPermissions | undefined => {
    if (reinforcement === "positive") {
      return roles.reduce((result, each) => {
        if (result === "AbsoluteAllowed" || each === "AbsoluteAllowed") {
          return "AbsoluteAllowed";
        } else if (result === "AbsoluteDenied" || each === "AbsoluteDenied") {
          return "AbsoluteDenied";
        } else if (result === "Allowed" || each === "Allowed") {
          return "Allowed";
        } else if (result === "Denied" || each === "Denied") {
          return "Denied";
        } else {
          return "Neutral";
        }
      }, undefined as RolesPermissions | undefined);
    } else if (reinforcement === "negative") {
      return roles.reduce((result, each) => {
        if (result === "AbsoluteDenied" || each === "AbsoluteDenied") {
          return "AbsoluteDenied";
        } else if (result === "AbsoluteAllowed" || each === "AbsoluteAllowed") {
          return "AbsoluteAllowed";
        } else if (result === "Denied" || each === "Denied") {
          return "Denied";
        } else if (result === "Allowed" || each === "Allowed") {
          return "Allowed";
        } else {
          return "Neutral";
        }
      }, undefined as RolesPermissions | undefined);
    } else {
      return roles.reduce((result, each) => {
        if (result === "AbsoluteAllowed" || each === "AbsoluteAllowed") {
          return "AbsoluteAllowed";
        } else if (result === "AbsoluteDenied" || each === "AbsoluteDenied") {
          return "AbsoluteDenied";
        } else if (result === "Allowed" || each === "Allowed") {
          return "Allowed";
        } else if (result === "Denied" || each === "Denied") {
          return "Denied";
        } else {
          return "Neutral";
        }
      }, undefined as RolesPermissions | undefined);
    }
  },
};
