import React from "react";
import {ITask} from "../interfaces/interface";
import {Container, Card, Button} from "react-bootstrap";

interface Props {
    task: ITask;

    completeTask(taskNameToDelete: string): void;

    toDoList: ITask[];
    setTodoList: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const FormList = ({task, completeTask, toDoList, setTodoList}: Props) => {
    const handleCheckboxChange = () => {
        const updatedTasks = toDoList.map((t) =>
            t.id === task.id ? {...t, completed: !t.completed} : t
        );
        setTodoList(updatedTasks);
    };

    return (
        <Container className={task.completed ? "completed" : ""}>
            <Card className="mt-5 d-flex flex-row align-items-center justify-content-between" id={task.id}>
                <Card.Body>{task.taskName}</Card.Body>
                <Card.Body style={{width: '30px'}}>{task.deadline}</Card.Body>

                <Card.Body>
                    <input
                        type="checkbox"
                        className="me-3"
                        checked={task.completed}
                        onChange={handleCheckboxChange}
                    />
                    <Button
                        onClick={() => {
                            completeTask(task.taskName);
                        }}>
                        X
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default FormList;
