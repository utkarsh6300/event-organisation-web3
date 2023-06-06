import React,{useEffect,useState} from 'react'
import Event from './Event';


const ShowData = (props) => {
  const [data1,setData1]=useState([]);
      console.log(props);
    const data=async()=>{
      const ids = await props.details.contract.methods.nextId().call();
      console.log(ids);
      setData1([]);
      for (let i = 0; i < ids; i++) {
        const events = await props.details.contract.methods.events(i).call();
        setData1( prev =>[...prev,{events,id:i}]);
      console.log(events);  
      
      }
console.log(data1);
    }
   
useEffect(() => {
  //  data();
  console.log(data1);
}, [props.details])

  return (
    <> 
    <h2  onClick={(e)=>data()}>Upcoming Events-click here to show</h2>


    <div className='events' >
      <div className='events2'>

    {data1.length>0&& 
    data1.map((data2)=> (  <Event key={data2.id} details={props.details} data2={data2.events} id={data2.id}/>
    ))   //filter by date only show upcoming not all.
  }
  </div>
  </div>

    </>
  ) 
}

export default ShowData