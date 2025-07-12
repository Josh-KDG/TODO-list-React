
import styles from "./taskItem.module.css";

export const TaskItem = () =>{

    return(
        <li className={`${styles.container} ${styles.default}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>
                    1
                </div>
                <div className= {styles.contentDefault}>
                    Ranger mon Bureau ...
                </div>
            </div>
            <button className="button-primary">
                X
            </button>
        </li>
    )
}