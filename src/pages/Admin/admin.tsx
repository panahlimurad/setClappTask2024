import AdminTable from "../../features/components/AdminTable/AdminTable"
import styles from './admin.module.css'

function Admin() {
    return (
      <div className={styles.container}>

      <AdminTable/>

      </div>
    )
  }
  
  export default Admin