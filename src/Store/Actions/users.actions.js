
export const REMOVE_USER = 'REMOVE_USER'
export const EDIT_USER = 'EDIT_USER'
export const SET_PENDING_EDIT_USER = 'SET_PENDING_EDIT_USER'


export function removeUser(id) {
    return { type: REMOVE_USER, id: id}
}

export function editUser(user) {
    return { type: EDIT_USER, user: user}
}

export function setPendingEditUser(user) {
    return { type: SET_PENDING_EDIT_USER, user: user}
}