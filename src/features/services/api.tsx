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

    
export const searchProducts = async(productName:string)=>{
    try{
        const response = await instanceAxios.get(`products/search?q=${productName}`)
        return response.data
    }catch(error){
        throw error
    }
    }


    export const getAllProductsCategory = async()=>{
        try{
            const response = await instanceAxios.get(`products/categories`)
            return response.data
        }catch(error){
            throw error
        }
        }
    

        export const getProductsOfCategory = async(category:any)=>{
            try{
                const response = await instanceAxios.get(`products/category/${category}`)
                return response.data
            }catch(error){
                throw error
            }
            }
        