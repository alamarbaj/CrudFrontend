
import{AppBar,Toolbar,Typography,makeStyles} from '@material-ui/core'
import { NavLink } from 'react-router-dom'


const useStyle = makeStyles({
    header : {
        background : '#111111'
    },
    tab : {
        color : '#FFFFFF',
        textDecoration : 'none',
        marginRight : 20,
        fontSize : 20
    }

})

const NavBar = () =>{
    const classes = useStyle()
    return(
       <AppBar className={classes.header} position="static">
           <Toolbar>
               <NavLink className={classes.tab} to="./" exact>All User</NavLink>
               <NavLink className={classes.tab} to="add" exact>Add User</NavLink>
            
           </Toolbar>
       </AppBar>
    )
}

export default NavBar; 