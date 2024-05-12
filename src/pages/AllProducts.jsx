import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { getAllProductApi } from '../../services/allAPI'
import { all } from 'axios'


function AllProducts() {
    const [showTab, setShowTab] = useState(1)
    const [allproducts, setAllProducts] = useState([])
    console.log(allproducts);
    const getAllProducts = async () => {
        const token = sessionStorage.getItem('token')
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        try {
            const result = await getAllProductApi(reqHeader)
            if (result.status == 200) {
                setAllProducts(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <>
            <Header />
            {/* <div className="container-fluid d-flex align-items-center">
                <button onClick={() => setShowTab(1)} className={`btn w-50 shadow rounded btn-primary me-2 ${showTab === 1 ? "active" : null}`}>Upcoming Auction</button>
                <button onClick={() => setShowTab(2)} className={`btn w-50 shadow rounded btn-primary ${showTab === 2 ? "active" : null}`}>Live Auction</button>
            </div> */}

            {/* upcoming auctions */}
            <div className='container mt-4'>
                <div className={showTab === 1 ? "container active fade show" : " fade d-none"}>
                    <h2>Auctions</h2>
                    <div className="row mt-3">
                        {allproducts?.map(product => (
                            <div className="col-lg-3 d-flex justify-content-center">
                                <ProductCard displayData={product} />
                            </div>
                        ))}

                    </div>
                </div>

                {/* live actions */}
                <div className={showTab === 2 ? "container active fade show" : "fade d-none "}>
                    <h2>Live Auctions</h2>
                    <div className="row">
                        <div className="col-lg-3">
                            <ProductCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts