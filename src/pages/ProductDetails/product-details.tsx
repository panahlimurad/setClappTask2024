import { useParams } from "react-router-dom";
import { getSingleProducts } from "../../features/services/api";
import { useQuery } from "@tanstack/react-query";
import styles from "./details.module.css";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Loading from "../../features/components/Loading/Loading";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useStore from "../../store/store";


interface Item {
  id: number;
  name: string;
}

function ProductDetails() {
  const savedDataJSON = localStorage.getItem("BasketStore");
  const savedData: Item[] = savedDataJSON ? JSON.parse(savedDataJSON) : [];

  const [localArray, setLocalArray] = useState(savedData);
  const { dataLength, updateDataLength } = useStore();
  const [t] = useTranslation();

  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["singleProducts"],
    queryFn: () => getSingleProducts(id),
  });
  

  const addBasket = () => {
    const newData = [...localArray, data];
    localStorage.setItem("BasketStore", JSON.stringify(newData));
    setLocalArray(newData);
    toast.success("your product added", {autoClose: 1000})
    updateDataLength(newData.length); 
  };



  if (isLoading) {
    return <Loading />; 
  }

  return (
    <div className={styles.container}>
    <div className={styles.detail}>
      <div className={styles.product_img}>
        <img src={data?.thumbnail} alt="detailsPhoto" />
      </div>
      <div className={styles.product_info}>
        <h3>{data?.brand}</h3>
        <h3>{data?.title}</h3>
        <h3>{data?.category}</h3>
        <h3>
          {data?.price} <span>$</span>
        </h3>
        <h3>Stock: {data?.stock}</h3>
        <p>{data?.description}</p>
        <Button onClick={addBasket} variant="contained">
          {t("ADD BASKET")}
        </Button>
      </div>
    </div>
    </div>
  );
}

export default ProductDetails;
