import { FormControl, FormGroup, InputLabel, Typography,Input, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";
import {editUser} from'../Service/api'
import { getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router";

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

const EditUser = () =>{
    const[user, setUser] = useState(initialValue)
    const{Name,Email,Salary,Designation} = user; 
    const { id}  = useParams(); 
    const classes = useStyles();
    const history = useHistory();

    useEffect(()=>{
        loadUserData();
    },[])
    
    const loadUserData = async ()=>{
        const response = await getUsers(id);
        console.log(response)
        setUser(response.data);
    }

const onvalueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user,[e.target.name]: e.target.value })
    console.log(user)
}

const editUserDetails = async () =>{
    console.log(user);
    
    await editUser(user)
    history.push('/')
}

    return (
    <FormGroup className= {classes.container}>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=> onvalueChange(e)} name ="Name" value={Name}/>
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
        <Button variant="contained" onClick={()=>editUserDetails() } color="primary">Add User</Button>
    </FormGroup>
    )
}

export default EditUser;