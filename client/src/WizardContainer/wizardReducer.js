// wizard reducer

const DEFAULT_STATE = {
    users: [],
    loading: false,
    error: ''
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
                companies: [...state.companies, { ...action.company }]
            }
        case 'SETUP_USER_FAILURE':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default wizard