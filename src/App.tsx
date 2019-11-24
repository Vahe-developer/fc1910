import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'
import NavBar         from        "./components/NavBar/NavBar";
import Layout         from        "./components/layout/layout";
import Task           from "./components/DavoTask/task"


const App: React.FC = () => {
  return (

<div>
    <Router>
        <NavBar/>
        <Switch>
            <Route path={"/task"}>
                <Task/>
            </Route>
            <Route path={"/"}>
                <Layout/>
            </Route>
        </Switch>
</Router>

</div>



  );
}

export default App;
