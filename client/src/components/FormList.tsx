import React from "react";
import {ITask} from "../interfaces/interface";
import {Container, Card, Button} from "react-bootstrap";

interface Props {
    task: ITask;

    completeTask(taskNameToDelete: string): void;
}

const FormList = ({task, completeTask}: Props) => {
    return (
        <Container className="mt-5">
            <Card className="d-flex flex-row align-items-center justify-content-between">
                <Card.Body>{task.taskName}</Card.Body>
                <Card.Body style={{width: '30px'}}>{task.deadline}</Card.Body>
                <Card.Body>
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
