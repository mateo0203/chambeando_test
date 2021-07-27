import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Routes/Home/Home"
import {TrabajadoresContextProvider} from "./Context/Context";
import Header from "./Components/Header/Header";
import Trabajadores from "./Routes/Trabajadores/Trabajadores";
import Profesiones from "./Routes/Profesiones/Profesiones";
import "./App.css"
import Trabajador from "./Routes/Trabajador/Trabajador";
import Admin from "./Routes/Admin/Admin";
const App =()=>{
    return(
        <TrabajadoresContextProvider>
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/trabajadores" component={Trabajadores}/>
                        <Route exact path="/servicios/:id" component={Profesiones}/>
                        <Route exact path="/trabajadores/:id" component={Trabajador}/>
                        <Route exact path="/admin" component={Admin}/>
                    </Switch>
                </Router>
            </div>
        </TrabajadoresContextProvider>
    )
}
export default App;