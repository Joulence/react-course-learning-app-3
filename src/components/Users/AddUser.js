import { useState } from "react";
import Card from "../UI/Card";
import Button from '../UI/Button';
import classes from "./AddUser.module.css";

const AddUser = props => {
    const [enteredUsername, setEntederUsername] = useState('');
    const [enteredAge, setEntederAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredAge);
    };

    const usernameChangeHandler = (event) => {
        setEntederUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEntederAge(event.target.value);
    };

    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler} />

                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;