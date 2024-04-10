import { useParams } from "react-router-dom"
import { getSingleProducts } from "../../features/services/api";
import { useQuery } from "@tanstack/react-query";
import styles from './details.module.css'
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

function ProductDetails() {
    const [t, i18n] = useTranslation();

    const {id} = useParams()

   
    console.log(id);
    const { data, isLoading } = useQuery({ queryKey: ["singleProducts"], queryFn: () => getSingleProducts(id) });
    console.log(data);
    
  return (
    <div className={styles.container}>
        <div className={styles.product_img}>
        <img src={data?.thumbnail} alt="detailsPhoto" />
        </div>
        <div className={styles.product_info}>
        <h3>{data?.brand}</h3>
        <h3>{data?.title}</h3>
        <h3>{data?.category}</h3>
        <h3>{data?.price} <span>$</span></h3>
        <h3>Stock: {data?.stock}</h3>
        <p>{data?.description}</p>
        <Button variant="contained">{t('ADD BASKET')}</Button>
        </div>
    </div>
  )
}

export default ProductDetails