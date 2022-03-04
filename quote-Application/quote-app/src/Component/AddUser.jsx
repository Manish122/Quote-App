import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from '../Service/api';
import { useHistory } from 'react-router-dom';

const initialValue = {
    // name: '',
    username: '',
    quotetext: '',
    // phone: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 10
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { username, quotetext } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        await addUser(user);
        history.push('./all');
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                {/* <InputLabel htmlFor="my-input">Username</InputLabel> */}
                <h3>User Name</h3>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                {/* <InputLabel htmlFor="my-input">quotetext</InputLabel> */}
                <h3>Quotetext</h3>
                <textarea rows="10" cols="50" onChange={(e) => onValueChange(e)} name='quotetext' value={quotetext} id="my-input"></textarea>
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add Quote</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;