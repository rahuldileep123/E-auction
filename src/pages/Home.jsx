import React from 'react'
import "./home.css"
import regImage from "../assets/reg.jpg"
import buyImg from "../assets/buy.png"
import bidImg from "../assets/bid.webp"
import winImg from "../assets/win.jpg"
import aboutImg from "../assets/about.png"
import expImg from "../assets/exp.jpg"
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function Home() {
    const token = sessionStorage.getItem("token")
    return (
        <>
            <Header />
            <div className="container-fluid section-one">
                <div style={{ height: "100%" }} className="row  ">
                    <div className="col-lg-5 d-flex flex-column justify-content-center align-items-center">
                        <h2 className='fw-bolder text-light'>Join Exclusive Auction & Get The Finest.</h2>
                        {token ?
                            <Link to={"/allproducts"}><button className='btn btn-primary rounded ahadow'>EXPLORE</button></Link>

                            :
                            <Link to={"/login"}><button className='btn btn-primary rounded ahadow'>GET STARTED</button></Link>
                        }

                    </div>
                </div>
            </div>
            {/* how it works */}
            <div className="container mt-4">
                <h1 className='text-center'><span className='fw-bolder'>How</span> It Works </h1>
                <div className="row mt-5">
                    <div className="col-lg-3">
                        <div className="work">
                            <div className='d-flex justify-content-between align-items-center'>
                                <img className='work-image' src={regImage} alt="" />
                                <i style={{ fontSize: "30px" }} className="fa-solid fa-greater-than"></i>
                            </div>
                            <h3 className='mt-2 fw-bolder'>Register </h3>
                            <p style={{ textAlign: "justify" }}>To start using our auction, you’ll need to register. It’s completely free and requires just a few clicks!</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="work">
                            <div className='d-flex justify-content-between align-items-center'>
                                <img className='work-image' src={buyImg} alt="" />
                                <i style={{ fontSize: "30px" }} className="fa-solid fa-greater-than"></i>
                            </div>
                            <h3 className='mt-2 fw-bolder'>Buy or Bid </h3>
                            <p style={{ textAlign: "justify" }}>You can instantly buy or place a bid on any desired product right after registration on our website.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="work">
                            <div className='d-flex justify-content-between align-items-center'>
                                <img className='work-image' src={bidImg} alt="" />
                                <i style={{ fontSize: "30px" }} className="fa-solid fa-greater-than"></i>
                            </div>
                            <h3 className='mt-2 fw-bolder'>Submit a bid</h3>
                            <p style={{ textAlign: "justify" }}>Submitting a bid to our auction is quick and easy. The process takes approximately 5 minutes.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="work">
                            <div className='d-flex justify-content-between align-items-center'>
                                <img className='work-image' src={winImg} alt="" />

                            </div>
                            <h3 className='mt-2 fw-bolder'>Win </h3>
                            <p style={{ textAlign: "justify" }}>Easily win at our auction and enjoy owning the product you dream of after the bidding is closed.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us */}
            <div className='container mt-3'>
                <div className="row border rounded p-3">
                    <div className="col-lg-6">
                        <h1 className='fw-bolder'>About us</h1>
                        <div className=" d-flex align-items-center gap-3 mt-3 mb-3">
                            <img className='about-img' src={aboutImg} alt="" />
                            <div>
                                <h5 className='fw-bold'>Quality products for the</h5>
                                <h5 className='fw-bold'>best customers</h5>
                            </div>
                        </div>
                        <div className="row">
                            <p className='' style={{ textAlign: "justify" }}>  Online Auction features a wide variety of quality products at wholesale prices with our main locations in San Francisco, CA and Phoenix, AZ. We strive to make sure our customers are completely satisfied with their purchase.</p>
                        </div>

                        <div className=" d-flex align-items-center gap-3 mt-3 mb-3">
                            <img className='about-img' src={expImg} alt="" />
                            <div>
                                <h5 className='fw-bold'>More than 20 years of</h5>
                                <h5 className='fw-bold'>auction experience</h5>
                            </div>
                        </div>
                        <div className="row">
                            <p className='' style={{ textAlign: "justify" }}>We have the knowledge and ability to handle any type of auction. We handle small local sales, and large multiple-day, multi-million dollar auctions. Our services are tailored to fit each client's needs.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h1 className='fw-bolder'>Events</h1>
                        <div className=" d-flex align-items-center gap-3 mt-4 mb-3">
                            <span style={{ fontSize: "60px", color: "steelblue" }}>01/</span>
                            <div>
                                <h5 className='fw-bold'>Laptops, Smartphones &</h5>
                                <h5 className='fw-bold'>IT Equipment Auction</h5>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <p className='' style={{ textAlign: "justify" }}>Next Saturday, we will be conducting our online auction of IT equipment including smartphones, laptops "Dell", "Apple" and "HP", monitors, printers, servers, network components, switches, and various accessories..</p>
                        </div>

                        <div className=" d-flex align-items-center gap-3 mt-4 mb-2">
                            <span style={{ fontSize: "60px", color: "steelblue" }}>02/</span>
                            <div>
                                <h5 className='fw-bold'>Anitque,painting &</h5>
                                <h5 className='fw-bold'>jewellery collections Auction</h5>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <p className='' style={{ textAlign: "justify" }}>Welcome to our prestigious auction event featuring a captivating array of antique drawings and exquisite jewelry pieces. Immerse yourself in the allure of history and artistry as we unveil a curated collection that embodies elegance, rarity, and timeless beauty.</p>
                        </div>
                    </div>
                </div>



            </div>
           
        </>
    )
}

export default Home