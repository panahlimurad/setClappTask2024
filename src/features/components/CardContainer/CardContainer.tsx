// import { useQuery } from "@tanstack/react-query";
// import { getProducts } from "../../services/api";
import Cards from "../Cards/Cards";
import styles from "./CardContainer.module.css";
import Loading from "../Loading/Loading";

function CardContainer({ data }: { data?: any }) {

  // const { data, isLoading } = useQuery({ queryKey: ["products"], queryFn: getProducts });


  return (
    <div className={styles.cardContainer}>
      {data?.products?.map((cardData: any, index: number) => (
        <Cards key={index} data={cardData} />
      ))}
    </div>
  );
}

export default CardContainer;
