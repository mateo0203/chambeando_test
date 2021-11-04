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
import Footer from "./Components/Footer/Footer";
import ReactGa from 'react-ga'
import { useEffect } from "react";
import AddNewUser from "./Components/AddNewUser/AddNewUser";
import AddReview from './Components/AddNewReview/AddNewReview'
import Login from "./Components/Login/Login";


const App =()=>{
    useEffect(() => {
        ReactGa.initialize('UA-204278502-1')
    },[])


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
                        <Route exact path="/Registro" component={AddNewUser}/>
                        <Route exact path="/admin" component={Admin}/>
                        <Route exact path='/user/crearvaloracion' component={AddReview}/>
                        <Route exact path='/login' component={Login}/>
                    </Switch>
                   
                </Router>
            </div>
        </TrabajadoresContextProvider>
    )
}
export default App;