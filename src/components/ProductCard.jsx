import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { SERVER_URL } from '../../services/serverUrl'
import { useNavigate } from 'react-router-dom'

// import "./product.css"
function ProductCard({displayData}) {
const navigate = useNavigate()
const handleNaviagte=()=>{
  navigate(`/view/${displayData?._id}`)
}

  return (
    <>
        <Card onClick={handleNaviagte} className='product rounded shadow btn mt-3 mb-3' style={{ width: '21rem' }}>
      <Card.Img height={"250px"} className='rounded' variant="top" src={`${SERVER_URL}/uploads/${displayData?.productImage}`} />
      <Card.Body>
        <Card.Title><span style={{fontSize:"25px"}} className='fw-bolder'>{displayData?.pName}</span></Card.Title>
        <Card.Text>
          Base Bid: {displayData?.baseBid}$
        </Card.Text>
        <Button className='btn rounded' variant="primary">BID NOW</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductCard