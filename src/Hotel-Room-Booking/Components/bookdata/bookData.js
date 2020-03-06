import React, { Component } from "react";
import classes from "./bookData.module.css";
import Input from "../UI/input/input";
import * as actions from "../../store/actions/checkOutData";
import {connect} from "react-redux";
import Spinner from "../UI/Spinner/spinner";

class bookData extends Component{
    state = {
        showCard : false,
        load : true
    };

    handleSubmit = () => {
        let UniqueNumberString = Math.random().toString(36).substring(7);
        let checkOutData = {
            room : this.props.selectedRoom,
            userData : this.props.data,
            uniqueString :UniqueNumberString
        }
        this.props.handleCheckOutData(checkOutData,this.props.auth.token);
        this.setState({load : true})
    }

    cardDetail = () => {
        this.setState({...this.state, showCard : !this.state.showCard});
    }

    render(){

        let totalPrice = Math.abs( this.props.selectedRoom.price * this.props.checkout.bookData.guests * this.props.checkout.bookData.addrooms);

        let cardInput = (<div className = {classes.card}><Input placeholder = "Card Number"></Input>
        <Input placeholder = "cvv"></Input>
        <Input placeholder = "expiry date"></Input></div>);

        let paymentFail = "";
        if(this.props.checkout.error){
            paymentFail =  (<p style= {{color : "red"}}>SOMETHING WENT WRONG PLEASE TRY AGAIN..</p>)
        }

        let paymentMethod = ( <div>
                    <h5>Payment Method</h5>
                    <p>Select Payment Mode</p>
                    <Input type = "select" name = "paymentMode">
                        <option>online</option>
                        <option>AtcheckIn</option>
                        
                    </Input>
                    <p>Select Bank</p>
                    <Input type = "select">
                        <option>HDFC</option>
                        <option>AXIS</option>
                        <option>SBI</option>
                        <option>ICICI</option>
                    </Input>
                    <p>Card <button onClick = {this.cardDetail}>
                        {this.state.showCard ? "-" : "+" }
                        </button>
                    </p>
                    {this.state.showCard ? cardInput : ""}
                    <button onClick = {this.handleSubmit} className = {classes.submit}>submit</button>
                    {paymentFail}
                </div>)
        
        let paymentDetails = paymentMethod;

        if(!this.props.checkout.error){
            paymentDetails = (this.props.checkout.message) ? (<h2 style = {{color : "green"}}>{this.props.checkout.message}</h2>) : paymentMethod;
        }
        
        
        let Message = this.props.checkout.loading ?  <Spinner />  : paymentDetails

        let bookData = (
            <React-Fragment>
                <h4 style = {{textAlign : "center"}}>BOOKING DETAILS</h4>

                <div className = {classes.bookData}> 
                    <div className = {classes.Img}>
                        <img src = {this.props.selectedRoom.img}></img>
                    </div>
                    <div>
                        <h5>{this.props.selectedRoom.name}</h5>
                        <p>Name : {this.props.checkout.bookData.fullname}</p>
                        <p>Email : {this.props.checkout.bookData.email}</p>
                        <p>Number : {this.props.checkout.bookData.number}</p>
                        <p>CheckIn : {this.props.checkout.bookData.checkin}</p>
                        <p>CheckOut : {this.props.checkout.bookData.checkout}</p>
                        <p>Rooms : {this.props.checkout.bookData.addrooms}</p>
                        <p>Guests : {this.props.checkout.bookData.guests}</p>
                        <p>Total Amount : {totalPrice} </p>
                    </div> 
                        {Message}                
                </div>
            </React-Fragment>)

    return (bookData)
    }
}

let mapStateToProps = state => {
    return {
        checkout : state.checkOutData,
        auth : state.auth
    }
}

let mapStateToDispatch = dispatch => {
    return{
        handleCheckOutData : (checkOutData,token) => dispatch(actions.checkOutData(checkOutData,token)) 
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(bookData);