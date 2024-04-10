import { instanceAxios } from "../helper/instanceAxios"



export const getProducts = async()=>{
try{
    const response = await instanceAxios.get("products")
    return response.data
}catch(error){
    throw error
}
}


export const getSingleProducts = async(id: undefined | string)=>{
    try{
        const response = await instanceAxios.get(`products/${id}`)
        return response.data
    }catch(error){
        throw error
    }
    }