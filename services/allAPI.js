import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./serverUrl";

//register
export const registerApi=async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//login
export const loginApi=async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)
}
//add product

export const addProductApi=async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-product`,reqBody,reqHeader)
}

//get all products
export const getAllProductApi=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-product`,"",reqHeader)
}
//get single product

export const getSingleProductApi=async(productId,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/product/${productId}`,"",reqHeader)
}
//get user products
export const getUserProductsApi=async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-product`,"",reqHeader)
}

//place bid
export const placeBidApi=async (reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/bid`,reqBody,reqHeader)
}

//get bid
export const getBidApi=async(productId,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/bid/${productId}`,"",reqHeader)
}
//get purchsae
export const getPurchasesApi=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/purchases`,"",reqHeader)
}
//delete product
export const deleteProductApi=async(productId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/delete-product/${productId}`,{},reqHeader)
}
//get winner
export const getWinnerApi=async(bidderId,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/winner/${bidderId}`,{},reqHeader)
}