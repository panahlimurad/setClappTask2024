// Products.js
import CardContainer from "../../features/components/CardContainer/CardContainer";
import ProductTopSection from "../../features/components/ProductTopSection/ProductTopSection";
import { useQuery } from "@tanstack/react-query";
import { getProducts, getProductsOfCategory, searchProducts } from "../../features/services/api";
import Loading from "../../features/components/Loading/Loading";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  const pattern = /=(.*)/
  const categorySlug = location.search.match(pattern);
  const { pathname } = location;

  const [inputValue, setInputValue] = useState("");

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
    
  const handleSearch = () => {
    setInputValue(inputValue);
  };

  const handleInputValueChange = (value: any) => {
    setInputValue(value);
  };
console.log(dataSearch);

  return (
    <div>
      {pathname === "/products" && (
        <>
          <ProductTopSection onInputChange={handleInputValueChange} onSearch={handleSearch} />
        </>
      )}
      {isLoading ? <Loading /> : <CardContainer data={dataSearch ? dataSearch : categorySlug ? dataCategory : data} />}
    </div>
  );
}

export default Products;
