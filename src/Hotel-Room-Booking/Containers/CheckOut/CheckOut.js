import React, { Component } from "react";
import classes from "./CheckOut.module.css";
import {connect} from "react-redux";
import Input from "../../Components/UI/input/input"



class CheckOut extends Component{
    render(){
        return(
            <React-fragment>
            <h2>Ready For the booked.....</h2>
            <h2>{this.props.selectedRoom.modalData.name}</h2>
            <div className = {classes.checkOut}>
                    <form>
                        <Input placeholder = "FULL NAME"/>
                        <Input placeholder = "Email"/>
                        <Input placeholder = "FULL NAME"/>
                        <Input/>
                        <Input type = "select" >
                            <option>Male</option>
                            <option>Female</option>
                        </Input>
                    </form>
                <div className = {classes.Image}>
                <img src = {this.props.selectedRoom.modalData.img}></img>
                </div>
                <p>{this.props.selectedRoom.modalData.info}</p>
            </div>

            </React-fragment>
            
        )

    }
    
}

let mapStateToProps = state => {
    return {
        selectedRoom : state
    }
}


export default connect(mapStateToProps)(CheckOut);