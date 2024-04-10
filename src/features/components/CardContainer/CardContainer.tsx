import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProducts } from "../../services/api";
import Cards from "../Cards/Cards";
import styles from "./CardContainer.module.css";
import Loading from "../Loading/Loading";

function CardContainer() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({ queryKey: ["products"], queryFn: getProducts });
  

  return (
    <div className={styles.cardContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        data?.products?.map((cardData: any, index: number) => (
          <Cards key={index} data={cardData} />
        ))
      )}
    </div>
  );
}

export default CardContainer;
