// user reducer

const DEFAULT_STATE = {
    session: '',
    user: {},
    username: '',
    isValid: false,
    login: false,
    loading: false,
    error: ''
}

const user = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'AUTH_USER_REQUEST':
            return {
                ...state,
                 loading: false
            }
        case 'AUTH_USER_SUCCESS':
            return {
                ...state,
                session: action.data,
                login: true,
                isValid: true,
                loading: true
            }
        case 'AUTH_USER_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'CHECK_AUTH_REQUEST':
            return {
                ...state,
                loading: false
            }

        case 'CHECK_AUTH_SUCCESS':
            return {
                ...state,
                loading: true,
                isValid: action.valid
            }

        case 'CHECK_AUTH_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'LOGOUT_REQUEST':
            return {
                ...state,
                // loading: false
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                login: false,
                logout:false
            }
        case 'LOGOUT_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'GET_USER_REQUEST':
            return {
                ...state,
                // loading: false
            }
        case 'GET_USER_SUCCESS':
            return {
                ...state,
                user: action.user,
                username: action.user.username,
                session: action.user.session

            }
        case 'GET_USER_FAILURE':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default user