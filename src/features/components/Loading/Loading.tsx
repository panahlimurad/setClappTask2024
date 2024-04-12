import styles from "./loading.module.css";
import { useTranslation } from "react-i18next";

function Loading() {
  const [t, i18n] = useTranslation();

  return (
    <div className={styles.containerLoading}>

  <div className={styles.loading}>
    {t("LOADING")}...
    </div>
    </div>
);
}

export default Loading;
