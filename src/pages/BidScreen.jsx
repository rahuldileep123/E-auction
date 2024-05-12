import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Countdown from '../components/Countdown'
import { useParams } from 'react-router-dom'
import { getBidApi, getSingleProductApi, getWinnerApi, placeBidApi } from '../../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { io } from "socket.io-client";
import { SERVER_URL } from '../../services/serverUrl'
import { expireResopnseContext } from '../../context/ContextApi'

function BidScreen() {
  const {expireResponse,setExpireResponse}=useContext(expireResopnseContext)

const [product,setProduct]=useState("")
const [bid,setBid]=useState("")
const [bidder,setBidder]=useState("")
const [updatedBid,setUpdatedBid]=useState("")
const [winner,setWinner]=useState("")
// const [socket,setSocket]=useState("")
// console.log(product);
const {pid}=useParams()
const [bidDetails,setBidDetails]=useState({productId:pid,bidValue:"",productName:"",bidId:""})
// console.log(bidDetails);
console.log(bidder);

//get winner

const getWinner=async()=>{
  if(expireResponse){
   
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader={ 
        "Authorization": `Bearer ${token}`
      }
      try{
        const result =await getWinnerApi(bidder,reqHeader)
        console.log(result);
          if(result.status==200){
              setWinner(result.data)
          }
      }catch(err){
        console.log(err);
      }
     
    }
   
   }

  }


//get bid

const getBid=async()=>{
  const token = sessionStorage.getItem("token")
  if(token){
    const reqHeader={ 
      "Authorization": `Bearer ${token}`
    }
    try{
    const productId= pid
      console.log("get bid");
      const result =await getBidApi(productId,reqHeader)
      console.log(result);
      if(result.status==200){
        setBid(result.data.bidValue)
        setBidder(result.data.bidderId)
        setBidDetails({...bidDetails,bidId:result.data._id})
        console.log(result.data);
        console.log("inside get bid");
      }else{
        console.log(result.response.data);
      }
      
    }catch(err){
      console.log(err);
    }
}}

//place bid
const handlebid=async()=>{
    if(bidDetails.bidValue){
      const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader={
        
        "Authorization": `Bearer ${token}`
      }
      try{
       const result =await placeBidApi(bidDetails,reqHeader)
       console.log(result);
       console.log("inside place bid");
       if(result.status==200){
        toast.success("Bid placed successfully")
        getBid()
       }else{
        toast.warning(result.response.data)
       }
      }catch(err){
        console.log(err);
      }
    }else{
      toast.warning("Place a bid amount")
    }
}
getBid()
}

//get product details
const getProduct=async()=>{
  const token = sessionStorage.getItem('token')
  const reqHeader = {
      "Authorization": `Bearer ${token}`
  }
  try{
   const result =await getSingleProductApi(pid,reqHeader)
   if(result.status==200){
     setProduct(result.data[0])
  //    console.log({...bidDetails,productName:result.data[0].pName});
  //  setBidDetails({...bidDetails,productName:result.data[0].pName})
 
   }else{
    console.log(result.response.data);
   }
  }catch(err){
    console.log(err);
  }
  getBid()
  setBidDetails({...bidDetails,bidValue:"",})
}
//set product name
const handleName=(e)=>{
  setBidDetails({...bidDetails,bidValue:e,productName:product?.pName})
  // setBidDetails({...bidDetails,productName:product?.pName})
}

useEffect(()=>{
getProduct()

},[])
useEffect(()=>{
getWinner()
},[expireResponse])


//websocket
// const ENDPOINT ="http://localhost:5000"
// useEffect(()=>{
//     // const socket = io(ENDPOINT);
//     setSocket(io(ENDPOINT))

//     // socket.emit("currentBid",currentBid)   
// },[])
// const handleCurrentBid=()=>{
//   socket.emit("currentBid",currentBid) 
//   socket.on("bidValue",(data)=>{
//     setUpdatedBid(data)
//   })
//   socket.on('messageReceived', (message) => {
//     console.log('Received message:', message);
//     setUpdatedBid(message)
//     // Handle the received message here
// });
// }
  return (
    <>
    <Header/>
    <div style={{width:"100%",height:"100vh"}} className="screen container-fluid d-flex justify-content-center align-items-center">
      <div style={{height:"90vh"}} className="container bg-light border p-5 rounded shadow">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column gap-4">
            <h1>{product?.pName}</h1>
            <img width={"50%"} height={"280px"} src={`${SERVER_URL}/uploads/${product?.productImage}`} alt="" />
            <h3 className='fw-bolder'>Starting Bid:<span className='text-success'>{product?.baseBid}$</span></h3>
            <p style={{textAlign:"justify",fontSize:"18px"}}><span className='fw-bolder'>Description:</span>{product?.description}</p>
          </div>



          <div className="col-lg-6">
             <div className="d-flex flex-column border rounded p-3 bg-light">
              <span style={{fontSize:"20px"}} className='fw-bolder'>Starts at</span>
              <span>{product?.startDate}</span>
              <span style={{fontSize:"20px"}} className='fw-bolder'>Ends at</span>
              <span>{product?.endDate}</span>
             </div>
             <div className="d-flex flex-column border p-3 bg-light rounded">
               <span style={{fontSize:"20px"}} className='fw-bolder'>Time Remaining</span>
               <Countdown start={product?.startDate} end={product?.endDate}/>
               <span style={{fontSize:"20px"}} className='mt-3 fw-bolder'>Current bid:<span className='fw-bolder text-danger'> {bid? bid:"0"}$</span></span>
             </div>
             {expireResponse? null
              :
              <div className="d-flex mt-4 justify-content-center">
                <input value={bidDetails.bidValue} onChange={(e)=>handleName(e.target.value)} className='form-control rounded-pill w-50 shadow me-3' type="text" placeholder='set your Bid' />
                <button onClick={handlebid}  className='btn btn-success rounded-circle shadow'> BID NOW</button>
              </div>}
             <div style={{fontSize:"25px"}} className='mt-5 text-center'><p className='text-success fw-bolder'>{winner}</p></div>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose="1000" />

    </>
  )
}

export default BidScreen