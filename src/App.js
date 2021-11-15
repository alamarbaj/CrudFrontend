
import NavBar  from "./Components/NavBar";
import AllUsers from "./Components/AllUsers";
import AddUser from "./Components/AddUser";
import NotFound from "./Components/NotFound";
import {BrowserRouter} from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import EditUser from "./Components/EditUser";

function App() {
  return (
 <BrowserRouter>
     <NavBar/>
     <Switch>
       <Route exact path="/" component={AllUsers}/>
       <Route exact path="/add" component={AddUser}/>
       <Route exact path="/edit/:id" component={EditUser}/>
       <Route component={NotFound}/>
       </Switch>
   </BrowserRouter>

  );
}

export default App;
