import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { SERVER_URL } from '../../services/serverUrl'
import { deleteProductApi } from '../../services/allAPI'
import { deleteResponseContext } from '../../context/ContextApi'
import { Link } from 'react-router-dom'

function DashCard({data}) {
const {deleteResponse,setDeleteResponse}=useContext(deleteResponseContext)

const handleDelete=async()=>{

  const token =sessionStorage.getItem('token')
    const reqHeader={ 
      "Authorization": `Bearer ${token}`
    }
    try{
        const result = await deleteProductApi(data._id,reqHeader)
        console.log(result);
        setDeleteResponse(result)
    }catch(err){
      console.log(err);
    }
}

  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Link to={`/view/${data._id}`}><Card.Img width={"200px"} height={"200px"} variant="top" src={`${SERVER_URL}/uploads/${data?.productImage}`}  /></Link>
      <Card.Body>
        <Card.Title>{data?.pName}</Card.Title>
      
        <div className='d-flex justify-content-between'>
            {/* <button className='btn btn-primary'>EDIT</button> */}
            <button onClick={handleDelete} className='btn btn-danger'>DELETE</button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default DashCard