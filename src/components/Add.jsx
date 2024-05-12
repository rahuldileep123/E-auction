import React, { useEffect, useState } from 'react'
import uploadImg from "../assets/upload.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProductApi } from '../../services/allAPI';

function Add() {
    const [sdate,setSDate]=useState("")
    const [eDate,seteDate]=useState("")
    const [sTime,setsTime]=useState("")
    const [eTime,seteTime]=useState("")
    const [previewImage,setPreviewImage]=useState("")
     const [productDetails,setProductdetails]=useState({pName:"",description:"",category:"",startDate:"",endDate:"",baseBid:"",productImage:""})
    console.log(productDetails);
    const handleStartDate=(time)=>{
        setProductdetails({...productDetails,startDate:`${sdate}T${time}`})
     setsTime(time)
    }
    const handleEndDate=(time)=>{
        setProductdetails({...productDetails,endDate:`${eDate}T${time}`})
        seteTime(time)
    }

 const handleAddProduct=async(e)=>{
    e.preventDefault()
    const {pName,description,category,startDate,endDate,baseBid,productImage}=productDetails
    if(pName&&description&&category&&startDate&&endDate&&baseBid&&productImage){
       const reqBody = new FormData()
       reqBody.append("pName",pName)
       reqBody.append("description",description)
       reqBody.append("category",category)
       reqBody.append("startDate",startDate)
       reqBody.append("endDate",endDate)
       reqBody.append("baseBid",baseBid)
       reqBody.append("productImage",productImage)

       const token = sessionStorage.getItem("token")
       if(token){
        const reqHeader={
            "Content-Type":"multipart/form-data",
            "Authorization": `Bearer ${token}`
          }
          try{
            const result = await addProductApi(reqBody,reqHeader)
            console.log(result);
            if(result.status==200){
               toast.success("Your new product is Live now")
               setProductdetails({pName:"",description:"",category:"",startDate:"",endDate:"",baseBid:"",productImage:""})
               setSDate("")
               seteDate("")
               seteTime("")
               setsTime("")
            }else(
                toast.warning(result.response.data)
            )
          }catch(err){
            console.log(err);
          }
       }

    }else{
        toast.warning("Please fill the form completely")
    }
 }



    useEffect(()=>{
        if(productDetails.productImage.type=="image/png" || productDetails.productImage.type=="image/jpg" || productDetails.productImage.type=="image/jpeg" ){
          
          setPreviewImage(URL.createObjectURL(productDetails.productImage))
        }else{
          setPreviewImage(uploadImg)
          
          setProductdetails({...productDetails,productImage:""})
          
        }
      },[productDetails.productImage])
    return (
        <>

            <div className='row'>

                <div className='col-lg-6'>
                    <div style={{ width: "100%" }} className="d-flex flex-column align-items-center">
                        <h1>Add New Product</h1>
                        <label>
                            <input onChange={(e)=>setProductdetails({...productDetails,productImage:e.target.files[0]})} type="file" style={{ display: "none" }} />
                            <img width={"200px"} height={"150px"} style={{ cursor: "pointer" }} className='img-fluid' src={previewImage} alt="" />
                        </label>

                        <div style={{ width: "100%" }} className=''>
                            <label for="productName" className="form-label mt-4">Product name</label>
                            <input value={productDetails.pName} onChange={((e)=>setProductdetails(({...productDetails,pName:e.target.value})))} type="text" className="form-control rounded shadow w-100" id="productName" placeholder="Enter Product name" />
                        </div>
                        <div style={{ width: "100%" }}>
                            <label for="description" className="form-label mt-4">Describe your product</label>
                            <textarea  value={productDetails.description} onChange={((e)=>setProductdetails(({...productDetails,description:e.target.value})))} className="form-control rounded shadow" id="description" rows="3"></textarea>
                        </div>
                        <div style={{ width: "100%" }} className=''>
                            <label for="category" className="form-label mt-4">category</label>
                            <input  value={productDetails.category} onChange={((e)=>setProductdetails(({...productDetails,category:e.target.value})))} type="text" className="form-control rounded shadow w-100" id="category" placeholder="Enter category" />

                            <div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <div style={{ width: "100%" }} className=''>
                        <label for="startdate" className="form-label mt-4">Start date</label>
                        <input value={sdate} onChange={(e)=>setSDate(e.target.value)} type="date" className="form-control rounded shadow w-100" id="startdate"  />
                    </div>
                    <div style={{ width: "100%" }} className=''>
                        <label for="starttime" className="form-label mt-4">Start Time</label>
                        <input value={sTime} onChange={(e)=>handleStartDate(e.target.value)} type="time" className="form-control rounded shadow w-100" id="starttime"  />
                    </div>
                    <div style={{ width: "100%" }} className=''>
                        <label for="enddate" className="form-label mt-4">End date</label>
                        <input value={eDate}  onChange={(e)=>seteDate(e.target.value)} type="date" className="form-control rounded shadow w-100" id="enddate"  />
                    </div>
                    <div style={{ width: "100%" }} className=''>
                        <label for="endtime" className="form-label mt-4">End Time</label>
                        <input value={eTime} onChange={(e)=>handleEndDate(e.target.value)} type="time" className="form-control rounded shadow w-100" id="endtime" />
                    </div>
                    <div style={{ width: "100%" }} className=''>
                        <label for="baseBid" className="form-label mt-4">starting bid</label>
                        <input  value={productDetails.baseBid} onChange={((e)=>setProductdetails(({...productDetails,baseBid:e.target.value})))} type="text" className="form-control rounded shadow w-100" id="baseBid" placeholder="Enter Starting value" />


                    </div>
                       <button onClick={e=>handleAddProduct(e)} className='btn btn-success mt-4 w-50 rounded-pill'>Add</button>
                </div>
            </div>

            <ToastContainer position='top-center' theme='colored' autoClose="3000" />

        </>
    )
}

export default Add