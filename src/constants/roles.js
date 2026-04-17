export const ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager',
  USER: 'user',
  VIEWER: 'viewer',
};

export const PERMISSIONS = {
  VIEW_USERS: 'view:users',
  CREATE_USER: 'create:user',
  EDIT_USER: 'edit:user',
  DELETE_USER: 'delete:user',
  VIEW_REPORTS: 'view:reports',
  EXPORT_DATA: 'export:data',
};

/** Map of roles to their default permissions */
export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: Object.values(PERMISSIONS),
  [ROLES.MANAGER]: [PERMISSIONS.VIEW_USERS, PERMISSIONS.VIEW_REPORTS, PERMISSIONS.EXPORT_DATA],
  [ROLES.USER]: [PERMISSIONS.VIEW_REPORTS],
  [ROLES.VIEWER]: [],
};
