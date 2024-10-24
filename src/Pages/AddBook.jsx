
import React, { useState } from 'react'
import Form from "react-bootstrap/Form";
import { useDispatch, } from 'react-redux';
import { addbook } from '../Redux/Slice/addSlice';
import { Link } from 'react-router-dom';

function AddBook() {
    const dispatch=useDispatch()
  const [value,setValue]=useState([])
  return (
    <div className="container-fluid w-50" style={{marginTop:"100px"}}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    
      <button onClick={() => dispatch(addbook(value))}>add</button>
      <Link to='/view'><button>view</button></Link>
    </div>
  );
}

export default AddBook
