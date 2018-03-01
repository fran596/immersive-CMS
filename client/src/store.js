import { createStore, applyMiddleware, combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { createLogger } from 'redux-logger'

/*Reducer imports */
import WizardReducer from './WizardContainer/wizardReducer'
import PageReducer from './HomeContainer/Page/pageReducer'
import UserReducer from './User/userReducer'


const logger = createLogger({
    collapsed: true,
    duration: true,
    diff: true,
})

var reducer = combineReducers({
    wizard: WizardReducer,
    form: formReducer,
    page: PageReducer,
    user: UserReducer 
})

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(
        ReduxThunk,
        logger,
    ),
))


export default store