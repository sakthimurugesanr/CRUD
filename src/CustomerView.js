import React from 'react'
import { useSelector } from 'react-redux'
import { deleteCustomer } from './Slice/CustomerSlice'
import { useDispatch } from 'react-redux'


const CustomerView = () => {
    const dispatch = useDispatch()
    const customers = useSelector((state)=>state.customer)
    function deleteHandler(index){
        dispatch (deleteCustomer(index))

    } 
  return (
    <div>
        <h3>add customers</h3>
        <ul style={{listStyle:"none"}}>
            {
                customers.map((c,index) =><li>{c} <button onClick={()=>deleteHandler(index)}>Delete</button></li>)
            }   
        </ul>
      
    </div>
  )
}

export default CustomerView
