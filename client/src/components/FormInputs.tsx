import {Form, Button} from "react-bootstrap";
import React from "react";

const FormInputs = (props: {handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void, addTask: () => void}) => {

    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Task" name="task" onChange={props.handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="date" placeholder="Deadline" name="deadline" onChange={props.handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={props.addTask}>
                Add Task
            </Button>
        </div>
    )
};

export default FormInputs;
