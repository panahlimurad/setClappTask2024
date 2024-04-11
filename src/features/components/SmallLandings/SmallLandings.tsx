import { getProducts } from "../../services/api";
import styles from "./SmallLandings.module.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";

function SmallLandings() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <>
      {data?.products?.slice(0, 25).map((data: any, index: any) => (
        <button key={index} className={styles.landings}>{data.category}</button>
      ))}
    </>
  );
}

export default SmallLandings;
