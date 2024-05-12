import React, { useContext, useEffect, useState } from 'react'
import { getPurchasesApi } from '../../services/allAPI'
import { expireResopnseContext } from '../../context/ContextApi'

function PurchaseTable() {
  const {expireResponse,setExpireResponse}=useContext(expireResopnseContext)
const [purchases,setPurchases]=useState([])

const getPurchase=async()=>{
    const token =sessionStorage.getItem('token')
    const reqHeader={ 
      "Authorization": `Bearer ${token}`
    }
  try{
     const result= await getPurchasesApi(reqHeader)
     console.log(result);
     if(result.status==200){
      setPurchases(result.data)
     }
  }catch(err){
    console.log(err);
  }
}

useEffect(()=>{
    getPurchase()
},[expireResponse])

  return (
    <>
    <table className='table'>
       <thead>
        <tr>
            <th>#</th>
            <th>PRODUCT NAME</th>
            <th>PRICE</th>
        </tr>
       </thead>
       <tbody>
      {purchases?.map((purchase,index)=>(
          <tr key={index}>
          <td>{index+1}</td>
          <td>{purchase?.productName}</td>
          <td>{purchase?.bidValue}</td>
      </tr>
      ))}
       </tbody>

    </table>
    </>
  )
}

export default PurchaseTable