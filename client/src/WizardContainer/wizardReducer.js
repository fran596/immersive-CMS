// wizard reducer

const DEFAULT_STATE = {
    users: [],
    dbs: [],
    loading: false,
    error: '',
    userAdded: false
}

const wizard = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SETUP_USER_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'SETUP_USER_SUCCESS':
            return {
                ...state,
                users: [...state.users, { ...action.users }],
                userAdded: true
            }
        case 'SETUP_USER_FAILURE':
            return {
                ...state,
                error: action.error
            }

        case 'CHECK_DB_REQUEST':
            return{
                ...state,
                loading: true
            }
        case 'CHECK_DB_SUCCESS':
            return {
                ...state,
                dbs: action.dbs,
            }
        case 'CHECK_DB_FAILURE':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default wizard