import React, {Component}  from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Layout from './Hotel-Room-Booking/HOC/Layout/Layout';
import Auth from './Hotel-Room-Booking/Containers/Auth/Auth';
import Cart from "./Hotel-Room-Booking/Components/Cart/Cart"
import Rooms from './Hotel-Room-Booking/Containers/Rooms/Rooms';
import LandingPage from './Hotel-Room-Booking/Components/landingPage/landingPage';
import CheckOut from './Hotel-Room-Booking/Containers/CheckOut/CheckOut';

class App  extends Component {
    render(){
        return (
            <div className = "App" >
                <Route path = "/" exact component = {LandingPage}></Route>
                <Layout>
                    <Route path = "/login"  component = {Auth}></Route>
                    <Route path = "/rooms" exact component = {Rooms}></Route>
                    <Route path = "/rooms/checkout" exact component = {CheckOut}></Route>
                    <Route path = "/cart" exact component = {Cart}></Route>
                </Layout>
            </div>
        )
    }
}

export default App;