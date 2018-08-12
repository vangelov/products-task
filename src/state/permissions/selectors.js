export const permissionsCanAdd = state =>
    state.permissions.list.includes("CREATE");

export const permissionsCanDelete = state =>
    state.permissions.list.includes("DELETE");

export const permissionsCanRead = state => state.permissions.includes("READ");

export const permissionsCanUpdate = state =>
    state.permissions.list.includes("UPDATE");

export const permissionsIsGetting = state => state.permissions.isGetting;

export const permissionsError = state => state.permissions.error;
