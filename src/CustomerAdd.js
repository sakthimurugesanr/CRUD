import React,{useState} from 'react'

import { addCustomers as addCustomerAction } from './Slice/CustomerSlice';
import { useDispatch } from 'react-redux';
const CustomerAdd = () => {
    const [input,setInput]=useState('');    
    // const [customers,setCustomer]=useState([]);
    const dispatch = useDispatch();

    function addCustomer(){
        if (input){
            // setCustomer((previous)=>[...previous,input]);
            dispatch(addCustomerAction(input)) 
            setInput("")
        }
        
        
    }
  return (
    <>
    <div>
      <h3>Add your Customers</h3>
      <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button onClick={addCustomer}>Add</button>
    </div>
    
    </>
    
  )
}

export default CustomerAdd
