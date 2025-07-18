//
import { TaskItem } from "../taskitem/taskItem";
import styles from "./taskList.module.css";

export const TaskList = () =>{
    return(
        <div className="box">
            <h2 className= {styles.title}>
                Il te reste encore X têches à accomplir !
            </h2>
            <ul className= {styles.container}>
                <TaskItem />
            </ul>
        </div>
    )
}