// page reducer

const DEFAULT_STATE = {
    pages: [],
    loading: false,
    error: ''
}

const page = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'ADD_PAGE_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'ADD_PAGE_SUCCESS':
            return {
                ...state,
                pages: [...state.pages, { ...action.pages }]
            }
        case 'ADD_PAGE_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'GET_PAGES_REQUEST':
            return{
                ...state,
                loading: true
            }

        case 'GET_PAGES_SUCCESS':
            return {
                ...state,
                pages: action.pages
            }

        case 'GET_PAGES_FAILURE':
            return{
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default page