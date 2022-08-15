import {combineReducers} from 'redux'
import contadorReducer from './contadorReducer'
import {shoppingReducer} from './shoppingReducer'
import { crudReducer } from './crudReducers'

const reducer = combineReducers({
    contador:contadorReducer,
    shopping:shoppingReducer,
    crud:crudReducer
})

export default reducer