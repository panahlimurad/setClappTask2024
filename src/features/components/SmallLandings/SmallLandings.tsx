import { getProducts } from "../../services/api";
import styles from "./SmallLandings.module.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";


interface ProductData {
  products: Array<any>;
  total: number;
  skip: number;
  limit: number;
}

function SmallLandings() {
  const { data, isLoading } = useQuery<ProductData>({
    queryKey: ["products"],
    queryFn: getProducts,
  });
console.log(data);

  return (
    <>
      {data?.products?.slice(0, 25).map((data, index) => (
        <button key={index} className={styles.landings}>{data.category}</button>
      ))}
    </>
  );
}

export default SmallLandings;
