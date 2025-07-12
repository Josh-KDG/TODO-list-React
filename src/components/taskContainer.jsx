import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskinput/taskInput";
import { TaskList } from "./taskList/taskList";
export const TasksContainer = () => {

    return(
        <main>
            <Header />
            <TaskInput />
            <TaskList />
            <Footer />
        </main>
    );
};