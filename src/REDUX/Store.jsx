import {createStore} from "redux"
import { combineReducers } from "redux"
import { booksReducer,selectedBookReducer } from "./Reducer"

const rootReducer= combineReducers({
    allBooks:booksReducer,
    book:selectedBookReducer
})



const store = createStore(rootReducer)

export default store