import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo1.png"

function Footer() {
  return (
    <>
      <div style={{height:'300px',backgroundColor:"steelblue"}} className='container-fluid  w-100 shadow p-4'>
     <div className="footer-content align-items-center d-flex justify-content-between">
        <div style={{width:'400px'}} className="media">
          <div className='d-flex align-items-center gap-2'>
          <img style={{width:"60px",height:"60px"}} src={logo} alt="" />

            <h3 className='fw-bolder text-light'>BidZone</h3></div>
          <p className='text-light'> Unlock treasures through exhilarating auctions. Your gateway to rare finds and captivating experiences awaits.</p>
          <span  className='text-light'>support@bidzone.com</span>
          
        </div>
        <div className="links d-flex flex-column">
            <h5 className='fw-bolder text-warning'>Pages</h5>
            
            <Link to='/' style={{textDecoration:'none', color:'white'}} >Home</Link>
            <Link to='/allproducts' style={{textDecoration:'none', color:'white'}} >Products</Link>
            <Link to='/dashboard' style={{textDecoration:'none', color:'white'}} >Profile</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h5 className='mt-3 fw-bolder text-warning'>Informations</h5 >
            <a  target='_blank'  style={{textDecoration:'none', color:'white'}} >About us</a>
            <a  target='_blank' style={{textDecoration:'none', color:'white'}} >Price List</a>
            <a  target='_blank' style={{textDecoration:'none', color:'white'}} >Registration</a>
            <a  target='_blank' style={{textDecoration:'none', color:'white'}} >News</a>
        </div>
        <div className="contact">
            <h5>Contact Us</h5>
            <div className="d-flex">
                <input type="text" className="form-control" />
                <button className='btn btn-info ms-1'><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="icons d-flex justify-content-between mt-3">
                <a style={{textDecoration:'none', color:'white'}} href="https://twitter.com/?lang=en" target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
                <a style={{textDecoration:'none', color:'white'}} href="https://www.instagram.com/" target='_blank'><i className="fa-brands fa-instagram"></i></a>
                <a style={{textDecoration:'none', color:'white'}} href="https://www.facebook.com/" target='_blank'><i className="fa-brands fa-facebook"></i></a>
                <a style={{textDecoration:'none', color:'white'}} href="https://github.com/" target='_blank'><i className="fa-brands fa-github"></i></a>
                <a style={{textDecoration:'none', color:'white'}} href="" target='_blank'><i className="fa-brands fa-x-twitter"></i></a>
            </div>
           
        </div>
        
     </div>
     <p className='text-center mt-3'>copyright &copy; 2024 E-aution, Built with MERN</p>
        </div>
    </>
  )
}

export default Footer