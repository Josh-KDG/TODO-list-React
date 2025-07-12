import styles from "./taskInput.module.css";
export const TaskInput = () =>{
    return(
        <div className={`box ${styles.element}`} >
            <h2 className={styles.title}>Ajouter ta prochaine tâche </h2>
        </div>
    )
}