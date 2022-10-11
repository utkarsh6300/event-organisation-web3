import React,{useEffect} from 'react'

const ShowData = (props) => {
    console.log(props);
    const data=async()=>{
    const treatcount = await props.details.contract.methods.nextId().call();
    console.log(treatcount);

    }
    const updatedata=async()=>{
        const res = await props.details.contract.methods.createEvent("Fest",1765512698,500,50).send({from: props.details.accounts[0],gas : 1000000});
        console.log(res);

    }
// useEffect(() => {

//     data();
// }, [])
  return (
    <>
    <div onClick={(e)=>data()}>ShowData</div>
    <div onClick={(e)=>updatedata()}>UpdateData</div>

    </>
  ) 
}

export default ShowData