import SpecialCard from "../SpecialCard/SpecialCard"
import styles from './SpecialCardsContainer.module.css'

function SpecialCardsContainer() {
  return (
    <div className={styles.container}>
        <SpecialCard/>
        <SpecialCard/>
        <SpecialCard/>
        <SpecialCard/>
    </div>
  )
}

export default SpecialCardsContainer