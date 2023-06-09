import {Container, Form, Button} from "react-bootstrap";
import React from "react";

type FormInputsProps = {
    task: string,
    deadline: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    addTask: () => void,
    t: any,
};

const FormInputs = ({task, deadline, handleChange, addTask, t}: FormInputsProps) => {

    return (
        <Container className="mb-5">
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder={t('translations:task')} name="task" value={task}
                              onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="date" placeholder="Deadline" name="deadline" value={deadline}
                              onChange={handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addTask}>
                {t('translations:addtask')}
            </Button>
        </Container>
    )
};

export default FormInputs;
