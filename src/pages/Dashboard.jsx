import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import "./dash.css"
import DashCard from '../components/DashCard'
import uploadImg from "../assets/upload.jpg"
import Add from '../components/Add'
import { getUserProductsApi } from '../../services/allAPI'
import PurchaseTable from '../components/PurchaseTable'
import { useNavigate } from 'react-router-dom'
import { deleteResponseContext } from '../../context/ContextApi'

function Dashboard() {

  const {deleteResponse,setDeleteResponse}=useContext(deleteResponseContext) 
  const [showTab, setShowTab] = useState(1)
  const [userProfile,setUserProfile]= useState("")
const navigate = useNavigate()
const [userProducts,setUserProducts]=useState([])
const getUserProducts=async()=>{
  
    const token =sessionStorage.getItem('token')
    const reqHeader={ 
      "Authorization": `Bearer ${token}`
    }
  try{
     const result= await getUserProductsApi(reqHeader)
     console.log(result);
     if(result.status==200){
      setUserProducts(result.data)
     }
  }catch(err){
    console.log(err);
  }
}

const logout=()=>{
  sessionStorage.clear()
  navigate("/")
}
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      const {username}=JSON.parse(sessionStorage.getItem("existingUser"))
      setUserProfile(username)
      getUserProducts()
    }else{
      setUserProfile("")
    }
  },[deleteResponse])


  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 dash border-left border-primary text-center">
            <div className='d-flex flex-column align-items-center mt-5'>
              <h2>WELCOME</h2>
              <h1>{userProfile}</h1>
              {/* <p>email@email.com</p> */}
              <button onClick={()=>setShowTab(1)} className={`btn btn-primary rounded w-50 mt-3 ${showTab==1? "active":null }`}>Your Products</button>
              <button onClick={()=>setShowTab(2)} className={`btn btn-primary rounded w-50 mt-3 ${showTab==2? "active":null }`}>Add Products</button>
              <button onClick={()=>setShowTab(3)} className={`btn btn-primary rounded w-50 mt-3 ${showTab==3? "active":null }`}>Purchases</button>
          
              <button onClick={logout} className='btn btn-warning rounded-pill shadow mt-5'>LogOut</button>
            </div>
          </div>

          <div className={showTab==1? "active col-lg-8 border-right border-primary":"d-none fade" }>
            <div className="row">
              {userProducts?.map((product,index)=>(
                <div key={index} className="col-lg-4">
                 <DashCard data={product}/>
                </div>
              ))}
                
            </div>
        </div>
          <div className={showTab==2? "active col-lg-8 border-right border-primary":"d-none fade" }>
             <Add/>
        </div>

        <div className={showTab==3? "active col-lg-8 border-right border-primary":"d-none fade" }>
             <PurchaseTable/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Dashboard