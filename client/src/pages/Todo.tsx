import React, {ChangeEvent, useState, useEffect, useMemo, useCallback} from "react";
import {useTranslation} from "react-i18next";
import FormInputs from "../components/FormInputs";
import FormList from "../components/FormList";
import {ITask} from "../interfaces/interface";
import {v4 as uuidv4} from 'uuid';
import {getTasks} from '../api/api';

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

    const addTask = useCallback((): void => {
        const newTask = {id: uuidv4(), taskName: task, deadline: deadline, completed: false};
        setTodoList([...toDoList, newTask]);
        setTask("");
        setDeadline("");
    }, [toDoList, task, deadline]);

    const completeTask = useCallback((taskNameToDelete: string): void => {
        setTodoList(
            toDoList.filter((task) => {
                return task.taskName != taskNameToDelete;
            })
        );
    }, [toDoList]);

    const formattedTasks = useMemo(() => {
        return toDoList.map((task: any) => {
            return {
                id: uuidv4(),
                taskName: task.taskName,
                deadline: task.deadline,
                completed: task.completed,
                checkbox: task.completed,
            }
        });
    }, [toDoList]);

    useEffect(() => {
        const fetchTasks = async () => {
            const tasks = await getTasks();
            setTodoList(tasks);
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
            {formattedTasks.map((task: ITask, key: number) => {
                return (
                    <FormList
                        key={key}
                        task={task}
                        completeTask={completeTask}
                        toDoList={toDoList}
                        setTodoList={setTodoList}
                    />
                );
            })}
        </div>
    )
};

export default Todo;
