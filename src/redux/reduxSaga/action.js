export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

export const fetchUserRequest = (page) => ({type : FETCH_USERS_REQUEST, page : page})
export const fetchUserSuccess = (users) => ({type : FETCH_USERS_SUCCESS, payload : users})
export const fetchUserFailed = () => ({type : FETCH_USERS_FAILED, payload : []})