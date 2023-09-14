import React, {useState} from "react";
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import Modal from "../UI/Modal";

const AddUser = props => {
    const [enteredUserName, setEnteredusername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title:'Invalid Input',
                message:'Please enter a valid name and age (no empty values).'
            });
            return
        }
        if(+enteredAge < 1){
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age (greate than 0).'
            });
            return
        }
        console.log(enteredUserName, enteredAge);
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredusername('');
        setEnteredAge('');
    }

    const userNameChangeHandler = (event) => {
        setEnteredusername(event.target.value);
        
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorhandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <Modal title={error.title} message={error.message} onConfirm={errorhandler} />}
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="userName">User Name</label>
                <input id="userName" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                <Button type="submit">Add User</Button>
            </form>
            </Card>
        </div>
    )
}

export default AddUser;