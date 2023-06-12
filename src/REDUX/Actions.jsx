

 export  const ActionTypes= {
    GETBOOKS:"GETBOOKS",
    PUTBOOKS:"PUTBOOKS",
    POSTBOOKS:"POSTBOOKS"
}


export  const getBooks =(books)=>{
    return{
        type:ActionTypes.GETBOOKS,
        payload:books
    }
}


export const editBooks =(book)=>{

    return{
        type:ActionTypes.PUTBOOKS,
        payload:book
    }
}
