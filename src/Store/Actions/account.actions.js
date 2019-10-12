export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export function login(payload) {
    return { type: LOGIN, payload: payload }
}

export function logout() {
    return { type: LOGOUT}
}