import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

const initialValue = {
    username: '',
    quotetext: '',
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        border: "solid black",
        borderColor:'black',
        padding:'12px',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { username, quotetext } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(id);
        setUser(response.data);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
           
            {/* <FormControl> */}
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <textarea onChange={(e) => onValueChange(e)} name='username' id="my-input" aria-describedby="my-helper-text" ></textarea>
                {/* <textarea value =  */}
                <h2    id="my-input" aria-describedby="my-helper-text"value={username} > {username}</h2>

                {/* <textarea> */}
            {/* </FormControl> */}
            <FormControl>
                <InputLabel htmlFor="my-input">quotetext</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='quotetext' value={quotetext} id="my-input" aria-describedby="my-helper-text" />
                <p    id="my-input" aria-describedby="my-helper-text"value={username} > {quotetext}</p>

            </FormControl>
           
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditUser;