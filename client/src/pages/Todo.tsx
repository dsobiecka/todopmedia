import React, {ChangeEvent, useState, useEffect} from "react";
import {useTranslation} from "react-i18next";
import FormInputs from "../components/FormInputs";
import FormList from "../components/FormList";
import {ITask} from "../interfaces/interface";
import { getTasks } from '../api/api';

const Todo = ({t}: { t: any }) => {
    const {t: translate} = useTranslation();

    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<string>("");
    const [toDoList, setTodoList] = useState<ITask[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        if (e.target.name === "task") {
            setTask(e.target.value);
        } else {
            setDeadline(e.target.value);
        }
    }

    const addTask = (): void => {
        const newTask = {taskName: task, deadline: deadline};
        setTodoList([...toDoList, newTask]);
        setTask("");
        setDeadline("");
    }

    const completeTask = (taskNameToDelete: string): void => {
        setTodoList(
            toDoList.filter((task) => {
                return task.taskName != taskNameToDelete;
            })
        );
    };

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await getTasks();
            const formattedTasks = tasks.map((task: any) => {
                return {
                    taskName: task.taskName,
                    deadline: task.deadline,
                    completeTask: task.completeTask,
                }
            });
            setTodoList(formattedTasks);
        };
        fetchTasks();
    }, []);

    return (
        <div>
            <h4 className="mt-5 mb-3">
                {t('translations:title')}
            </h4>
            <FormInputs
                task={task}
                deadline={deadline}
                handleChange={handleChange}
                addTask={addTask}
            />
            {toDoList.map((task: ITask, key: number) => {
                return <FormList key={key} task={task} completeTask={completeTask}/>;
            })}
        </div>
    )
};

export default Todo;
