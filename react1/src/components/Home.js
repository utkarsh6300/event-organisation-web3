import React,{useState,useEffect} from 'react'
import getWeb3 from "../getWeb3";
import EventOrganisation from "../contracts/EventOrganisation.json"
import ShowData from './ShowData';
import { Route ,Routes} from 'react-router-dom';
import CreateEvent from './CreateEvent';
import { Nav } from './Nav';

  
  const Home = () => {
    const [details,setDetails]=useState(Object);
  
    const onload=async () => {
        try {
          // Get network provider and web3 instance.
        const web3 = await getWeb3();
    
          // Use web3 to get the user's accounts.
        const   accounts = await web3.eth.getAccounts();
    // console.log(accounts);
          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
        //   const networkId = 5777; 
          const deployedNetwork = EventOrganisation.networks[networkId];
        //   console.log(networkId);
        //   console.log(deployedNetwork);
         const   instance = new web3.eth.Contract(
           EventOrganisation.abi,
            deployedNetwork && deployedNetwork.address,
          );
          
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
        //   console.log(instance)
        setDetails({ web3, accounts, contract: instance });  
    
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };  
      useEffect( () => {
        onload();
        // console.log(details);
      }, [])
    
    return (
      <> 
        <h1>
        Event organisation
        </h1>
      <Nav/>
        <Routes>
   <Route index element={<CreateEvent details={details}/> }/>
   <Route path='/events' element={<ShowData details={details}/> }/>
   <Route path='/createevent' element={  <CreateEvent details={details}/>}/>
        </Routes>
      </>
    )
  }
  
  export default Home 