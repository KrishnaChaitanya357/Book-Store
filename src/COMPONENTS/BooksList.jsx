
import React, { useEffect } from "react"
import axios from "axios"
import { useSelector,useDispatch } from "react-redux"
import { getBooks } from "../REDUX/Actions"
import BooksComponent from "./Books-Component"

const BooksList = ()=>{
    const  books = useSelector(state=>state)
    const dispatch = useDispatch();
    // console.log(books)



 const fetchBooks = async ()=>{
    const response =  await axios.get("http://68.178.162.203:8080/application-test-v1.1/books")
                .catch(err=> console.log("error",err))
                // console.log(response.data)
                dispatch(getBooks(response.data))
                    
    
 }   

useEffect(()=>{

    fetchBooks();


},[])



    return (
        <>
        <div className="books-container">
           
            <BooksComponent/>
           
         </div>
        
        
        
        </>
    )
}

export default BooksList