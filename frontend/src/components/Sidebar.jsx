import React from 'react'
import { FaPlus } from "react-icons/fa6"
const Sidebar = () => {
  return (
    <div className='mt-5 mx-5'>
        <h1 className='fx-3 fw-bold'>LOGO</h1>
        <div className='mt-5 mx-2 rounded-circle d-flex  justify-content-center align-items-center' style={{backgroundColor: "black",height:"50px", width: "50px", cursor: "pointer"}} data-bs-toggle="modal"
        data-bs-target="#exampleModal">
            <FaPlus size={30} className='text-white'></FaPlus>
        </div>
    </div>
  )
}

export default Sidebar