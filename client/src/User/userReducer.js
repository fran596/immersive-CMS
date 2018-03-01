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
                loading: true
            }
        case 'AUTH_USER_SUCCESS':
            return {
                ...state,
                session: action.data,
                login: true
            }
        case 'AUTH_USER_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'CHECK_AUTH_REQUEST':
            return {
                ...state,
                loading: true
            }

        case 'CHECK_AUTH_SUCCESS':
            return {
                ...state,
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
                loading: true
            }
        case 'LOGOUT_SUCCESS':
            return {
                ...state,
                login: false
            }
        case 'LOGOUT_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'GET_USER_REQUEST':
            return {
                ...state,
                loading: true
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