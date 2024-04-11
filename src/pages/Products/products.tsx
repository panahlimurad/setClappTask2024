import CardContainer from "../../features/components/CardContainer/CardContainer";
import ProductTopSection from "../../features/components/ProductTopSection/ProductTopSection";
import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductsOfCategory, searchProducts } from "../../features/services/api";
import Loading from "../../features/components/Loading/Loading";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

function Products() {

  const location = useLocation();
  const pattern = /=(.*)/
  const categorySlug = location.search.match(pattern);
  const { pathname } = location;

  const [inputValue, setInputValue] = useState("");
  // const [searchQueryKey, setSearchQueryKey] = useState(["products"]);



  const { data:dataCategory } = useQuery({ queryKey: ["withCategory"], queryFn: () => {
    if(categorySlug){
     return getProductsOfCategory(categorySlug[1])
    }
  } });
 
  
  const { data:dataSearch } = useQuery({ queryKey: ["searchProducts"], queryFn: () => {
    if(inputValue){
     return searchProducts(inputValue)
    }
  } });

  const { data, isLoading } = useQuery({ queryKey: ["products"], queryFn: () => getProducts()});
  
  // console.log("category", dataSearch);
  


  const handleSearch = () => {
    
    setInputValue(inputValue);
  };

  const handleInputValueChange = (value: any) => {
    setInputValue(value);
  };


  return (
    <div>
      {pathname === "/products" && (
        <>
          <Button variant="contained" onClick={handleSearch}>Search</Button>
          <ProductTopSection onInputChange={handleInputValueChange} />
        </>
      )}
      {isLoading ? <Loading /> : <CardContainer data={dataSearch ? dataSearch : categorySlug ? dataCategory : data} />}
    </div>
  );
}

export default Products;
