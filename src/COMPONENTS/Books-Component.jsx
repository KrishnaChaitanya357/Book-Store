import React from 'react'
import { useSelector} from 'react-redux'
import "./Book-Store.css"

function BooksComponent() {
const  books = useSelector(state=>state.allBooks.books)
/* const {pagination,data} = books
 console.log(data)
 */
/* const allBooks=books.data;
console.log(allBooks) */

    const  booksList =books.map((book)=>{
  const {author,country,id,language,link,pages,title,year} = book;
  // console.log(author,country,id,language,link,pages,title,year)

  return(
    <div className='books-card'>
      <h4>Author:{author}</h4>
      <h4>Country:{country}</h4>
      <h4>Id:{id}</h4>
      <h4>Language:{language}</h4>
      <h4>link:{link}</h4>
      <h4>Pages:{pages}</h4>
      <h4>Title:{title}</h4>
      <h4>Title:{year}</h4>
    </div>
  )
})    
   

  return (
    <div>

    </div>
  )
}

export default BooksComponent
