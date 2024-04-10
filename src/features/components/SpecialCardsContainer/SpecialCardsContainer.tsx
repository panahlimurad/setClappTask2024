import SpecialCard from "../SpecialCard/SpecialCard";
import styles from "./SpecialCardsContainer.module.css";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import { getProducts } from "../../services/api";

function SpecialCardsContainer() {
  // const queryClient = useQueryClient();

  // const { data, isLoading } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: getProducts,
  // });

  return (
    <>
      <SpecialCard />
    </>
  );
}

export default SpecialCardsContainer;
