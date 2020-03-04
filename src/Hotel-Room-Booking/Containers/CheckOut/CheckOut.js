import React, { Component } from "react";
import classes from "./CheckOut.module.css";
import {connect} from "react-redux";
import Input from "../../Components/UI/input/input"
import Button from "../../Components/UI/button/button";
import * as actions from "../../store/actions/index";
import Modal from "../../Components/modal/modal";
import BookData from "../../Components/bookdata/bookData";



class CheckOut extends Component{

    state = {
        modalOpen : false,
        error : "",
        data : ""
    }

    closeModal = () =>{
        this.setState({modalOpen : false})
    }

    submitHandler = (event) => {
        console.log(this.props);
        
        event.preventDefault();
        let data = {
            fullname : event.target.elements.fullname.value,
            email : event.target.elements.email.value,
            number : event.target.elements.number.value,
            specialrequirement : event.target.elements.specialrequirement.value,
            checkin : event.target.elements.checkin.value,
            checkout : event.target.elements.checkout.value,
            addrooms : event.target.elements.addrooms.value,
            guests : event.target.elements.guests.value,
        }        
        if(data.checkout >= data.checkin){
            this.props.goToPayment(data);
            this.setState({...this.state, modalOpen: true, data : data});
            // this.props.goToPayment(this.state.data);
        }  
        else {
            this.setState({...this.state, error : "checkout date should be greater then checkin"})
        }
        
    }

    render(){
        console.log(this.props);
        
        return(
            <React-fragment>
            <Modal show = {this.state.modalOpen} close = {this.closeModal}>
                <BookData data = {this.props.bookingData.bookData}/>
            </Modal>

            <h2>Ready For the booked.....</h2>
            <h2>{this.props.selectedRoom.name}</h2>
            <div className = {classes.checkOut}>
                    <form onSubmit = {this.submitHandler}>
                        <Input placeholder = "FULL NAME" name = "fullname" required />
                        <Input placeholder = "EMAIl" name = "email"required type = "email"/>
                        <Input placeholder = "NUMBER" name = "number"required/>
                        <Input placeholder = "SPECIAL REQUIREMENT" name = "specialrequirement" type = "textarea"/>
                        <Input label="checkIn"name = "checkin" type = "date"/>
                        <Input  label= "checkOut" name = "checkout"type = "date"/>
                        <div style = {{display : "flex", flexFlow:"row wrap"}}>
                             <Input label = "Add rooms" name = "addrooms"
                                    style = {{width : "60px"}}
                                    type = "number" 
                                    min = "1" max = "10"
                                    required/>
                             <Input label = "Guests" name = "guests"
                                    style = {{width : "60px"}}
                                    type = "number" 
                                    min = "1" 
                                    max = "10"
                                    required/>
                             <Button>Submit</Button>
                        </div>
                        <span style = {{fontWeight : "bold",color: "red"}}>{this.state.error}</span>
                    </form>
                <div className = {classes.Image}>
                <img src = {this.props.selectedRoom.img}></img>
                </div>
                <p>{this.props.selectedRoom.info}</p>
            </div>

            </React-fragment>
            
        )

    }
    
}

let mapStateToProps = state => {
    return {
        selectedRoom : state.modalData,
        bookingData : state.bookingData
    }
}
let mapStateToDispatch = dispatch => {
    return {
        goToPayment : (userData) => dispatch(actions.bookData(userData))
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(CheckOut);