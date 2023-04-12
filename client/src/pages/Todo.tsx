import React, {ChangeEvent, useState} from "react";
import {useTranslation} from "react-i18next";
import FormInputs from "../components/FormInputs";
import FormList from "../components/FormList";
import {ITask} from "../interfaces/interface";

const Todo = ({t}: { t: any }) => {
    const {t: translate} = useTranslation();

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [toDoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.value === "task") {
            setTask(e.target.value);
        } else {
            setDeadline(Number(e.target.value));
        }
    }

    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline};
        setTodoList([...toDoList, newTask]);
        setTask("");
        setDeadline(0);
    }

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(
            toDoList.filter((task) => {
                return task.taskName != taskNameToDelete;
            })
        );
    };

    return (
        <div>
            <h4 className="mt-5 mb-3">
                {t('translations:title')}
            </h4>
            <FormInputs handleChange={handleChange} addTask={addTask}/>
            <div className="todoList">
                {toDoList.map((task: ITask, key: number) => {
                    return <FormList key={key} task={task} completeTask={completeTask}/>;
                })}
            </div>
        </div>
    )
};

export default Todo;
