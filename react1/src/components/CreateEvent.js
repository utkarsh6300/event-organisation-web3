import React from 'react'
import { useState } from 'react'
const CreateEvent = (props) => {
const [eventName,setEventName]=useState('');
const [price,setPrice]=useState('');
const [count,setCount]=useState('');
const [datetime,setDatetime]=useState('');
const createEvent=async()=>{
  try {
    
    const dt=new Date(datetime);
    // console.log(props.details.contract);
    const res = await props.details.contract.methods.createEvent(eventName,dt.getTime(),price,count).send({from: props.details.accounts[0],gas : 1000000});
    console.log(res);
  } catch (error) {
    console.error(error);
  }

}
const handleSubmit=async(e)=>{
    e.preventDefault();
    // const dt=new Date(datetime);

    // console.log(dt.getTime(),eventName,count,price,datetime)
   await createEvent();
    setCount(1);
    setPrice(0);
    setEventName('');
    setDatetime('');
    await alert('event created');
}
  return (
    <div className='container'>
     <h2>Event Details</h2>
<input type="text" value={eventName} placeholder='Enter Name of Event' onChange={(e)=>setEventName(e.target.value)}  />
<input type="number" value={price} placeholder='Enter Price of Ticket in Wei' onChange={(e)=>setPrice(e.target.value)}/>
<input type="number" value={count} placeholder='Enter Count of Ticket' onChange={(e)=>setCount(e.target.value)}/>
<p>Enter timing of event below</p>
<input type="datetime-local" value={datetime}  onChange={(e)=>setDatetime(e.target.value)}/>

<button onClick={handleSubmit}>Create Event</button>
    </div>
  )
}

export default CreateEvent