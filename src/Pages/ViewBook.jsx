import React from 'react'
import { useSelector } from 'react-redux'

function ViewBook() {
    
    const book = useSelector((state) => state.addbookReducer)
  return (
    <div>
      <h1>view book</h1>
      {book.bookdetails.length? (
        <ul>
            <li>{book.bookdetails}</li>
        
        </ul>
      ):null}
    </div>
  )
}

export default ViewBook
