import Cards from '../Cards/Cards'
import styles from './CardContainer.module.css'

function CardContainer() {
  return (
    <div className={styles.cardContainer}>
        <Cards/>
        <Cards/>
    </div>
  )
}

export default CardContainer