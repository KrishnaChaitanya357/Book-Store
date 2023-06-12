import { ActionTypes } from "./Actions"

const initialBooks= {
books:[],

}


export const booksReducer =(state=initialBooks,{type,payload})=>{

    switch(type){

        case ActionTypes.GETBOOKS: return{
            ...state,
            books:payload
        }

        default : return state
    }
}

export const selectedBookReducer =(state={},{type,payload})=>{

    switch(type){

        case ActionTypes.PUTBOOKS : return {
            ...payload,...state
        }
        default : return state

    }

}