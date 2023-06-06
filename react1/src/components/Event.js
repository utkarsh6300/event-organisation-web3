import React, { useState } from 'react'


const Event = (props) => {
    const [quantity,setQuantity]=useState('');
    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(quantity*props.data2.price);
        // console.log(props.id)
        try {
       
        const res = await props.details.contract.methods.buyTicket(props.id,quantity).send({from: props.details.accounts[0],value:quantity*props.data2.price,gas : 1000000});
        console.log(res);
             
    } catch (error) {
          console.error(error);  
    }
    }
  return (
    <div  className='container' id='entry'>
       {/* add time of event */}
        <p>
       Organizer-{(props.data2.organizer)}
        </p>
        <p>
       Event Name-{(props.data2.name)}
        </p>
        <p>
       Price-{(props.data2.price)} /per ticket
        </p>
        <p>
       Available Tickets- {(props.data2.ticketRemain)}
        </p>
        <input type="number" placeholder='No. of tickets' value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}/>
        <button onClick={handleSubmit}>Book Ticket</button>
    </div>
  )
}

export default Event