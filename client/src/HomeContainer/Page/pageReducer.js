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
            return {
                ...state,
                loading: true
            }

        case 'GET_PAGES_SUCCESS':
            return {
                ...state,
                pages: action.pages
            }

        case 'GET_PAGES_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'MANAGE_PAGE_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'MANAGE_PAGE_SUCCESS':
            return {
                ...state,
                pages: state.pages.map(function (page) {
                    if (page._id === action.page._id) {
                        page = action.page
                    }
                    return page
                })
            }
        case 'MANAGE_PAGE_FAILURE':
            return {
                ...state,
                error: action.error
            }
        case 'DELETE_PAGE_REQUEST':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_PAGE_SUCCESS':
            return {
                ...state,
                pages: state.pages.filter(item => {
                    return item._id !== action.id;
                })
            }
        case 'DELETE_PAGE_FAILURE':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export default page