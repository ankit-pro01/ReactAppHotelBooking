import React, { Component } from "react";
import classes from "./bookData.module.css";
import Input from "../UI/input/input";
class bookData extends Component{
    state = {
        showCard : false
    }


    cardDetail = () => {
        this.setState({...this.state, showCard : !this.state.showCard});
    }

    render(){
        let totalPrice = Math.abs( this.props.room.price * this.props.data.guests * this.props.data.addrooms);

        let cardInput = (<div className = {classes.card}><Input placeholder = "Card Number"></Input>
        <Input placeholder = "cvv"></Input>
        <Input placeholder = "expiry date"></Input></div>)

        let bookData = (
            <React-Fragment>
                <h4 style = {{textAlign : "center"}}>BOOKING DETAILS</h4>

                <div className = {classes.bookData}> 
                    <div className = {classes.Img}>
                        <img src = {this.props.room.img}></img>
                    </div>
                    <div>
                        <h4>{this.props.room.name}</h4>
                        <p>Name : {this.props.data.fullname}</p>
                        <p>Email : {this.props.data.email}</p>
                        <p>Number : {this.props.data.number}</p>
                        <p>CheckIn : {this.props.data.checkin}</p>
                        <p>CheckOut : {this.props.data.checkout}</p>
                        <p>Rooms : {this.props.data.addrooms}</p>
                        <p>Guests : {this.props.data.guests}</p>
                        <p>Total Amount : {totalPrice} </p>
                    </div> 
                <div>
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
                </div>
                
            </div>

            </React-Fragment>
            
        )
    
    return bookData
        }
}

export default bookData;