import { PERMISSIONS, SUBJECTS } from "daxc-common";
import { IdentityAttributesMapper } from "./util/identity.attributes.mapper";
import { AccessReducer } from "./core";

export const ACCESS_REDUCER: AccessReducer<PERMISSIONS, SUBJECTS, any, any> = {
  accessible: accessible => accessible,
  permissions: (permission, value, identity, resource, mapIdentityAttributes, opts) => {
    switch (value) {
      case PERMISSIONS.All:
        return true;

      case PERMISSIONS.Attribute:
        return opts.attributes(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, permission);

      case PERMISSIONS.Owner:
        return opts.owner(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, permission);

      case PERMISSIONS.None:
      default:
        return false;
    }
  },
  subjects: (subject, value, identity, resource, mapIdentityAttributes, opts) => {
    switch (value) {
      case SUBJECTS.Read_Write:
        return {
          read: true,
          write: true
        };

      case SUBJECTS.Read_WriteAttribute:
        return {
          read: true,
          write: opts.attributes(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, subject)
        };

      case SUBJECTS.Read_WriteOwner:
        return {
          read: true,
          write: opts.owner(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, subject)
        };

      case SUBJECTS.ReadAttribute_WriteAttribute: {
        const attrs = opts.attributes(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, subject);
        return {
          read: attrs,
          write: attrs
        };
      }
      case SUBJECTS.ReadAttribute_WriteOwner:
        return {
          read: opts.attributes(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, subject),
          write: opts.owner(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, subject)
        };

      case SUBJECTS.ReadOwner_WriteOwner: {
        const owner = opts.owner(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, subject);
        return {
          read: owner,
          write: owner
        };
      }
      case SUBJECTS.ReadOnly:
        return {
          read: true,
          write: false
        };

      case SUBJECTS.ReadAttributeOnly:
        return {
          read: opts.attributes(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, subject),
          write: false
        };

      case SUBJECTS.ReadOwnerOnly:
        return {
          read: opts.owner(IdentityAttributesMapper(identity, resource.name, mapIdentityAttributes), resource, subject),
          write: false
        };

      case SUBJECTS.None:
      default:
        return {
          read: false,
          write: false
        };
    }
  },
};
