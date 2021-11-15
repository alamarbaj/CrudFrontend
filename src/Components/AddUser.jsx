import { FormControl, FormGroup, InputLabel, Typography,Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import {addUser} from'../Service/api'
import { useHistory } from "react-router";

const useStyles = makeStyles({
    container: {
        width : '50%',
        margin : '5% 0 0 25%',
        '&> *' :{
            marginTop : 20
        }
    }
})


const initialValue = {
    Name : '',
    Email : '',
    Salary : '',
    Designation : ''
}

const AddUser = () =>{
    const[user, setUser] = useState(initialValue)
    const{Name,Email,Salary,Designation} = user; 
    const classes = useStyles();
    const history = useHistory();

const onvalueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user,[e.target.name]: e.target.value })
    console.log(user)
}

const addUserDetails = async () =>{
    await addUser(user)
    history.push('./')
}

    return (
    <FormGroup className= {classes.container}>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=> onvalueChange(e)} name ="Name" value={Name} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> onvalueChange(e)} name ="Email" value={Email}/>
        </FormControl>
        <FormControl>
            <InputLabel>Salary</InputLabel> 
            <Input onChange={(e)=> onvalueChange(e)} name ="Salary" value={Salary}/>
        </FormControl>
        <FormControl>
            <InputLabel>Designation</InputLabel>
            <Input onChange={(e)=> onvalueChange(e)} name ="Designation" value={Designation}/>
        </FormControl>
        <Button variant="contained" onClick={()=>addUserDetails() } color="primary">Add User</Button>
    </FormGroup>
    )
}

export default AddUser;