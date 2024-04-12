
import Cards from "../Cards/Cards";
import styles from "./CardContainer.module.css";

function CardContainer({ data }: { data?: any }) {


  return (
    <div className={styles.cardContainer}>
      {data?.products?.map((cardData: any, index: number) => (
        <Cards key={index} data={cardData} />
      ))}
    </div>
  );
}

export default CardContainer;
