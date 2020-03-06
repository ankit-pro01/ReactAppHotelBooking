import React , {Component }from "react";
import classes from './Cart.module.css';
import cartImage from "../../assets/img/Cart/cart.svg";
import {connect} from "react-redux";
import axios from "axios";
import Spinner from "../UI/Spinner/spinner";

class Cart extends Component{
    state = {
        loading : false,
        ordersLists : null,
        room : null,
        error : true

    }

    componentDidMount(){
        
        let fetchOrders = async() =>{

            this.setState({loading : true})
            let orders = [];
            let res;
            try{
                let data = await fetch("https://hotel-room-booking-84489.firebaseio.com/orders.json?auth="+this.props.auth.token);            
                res = await data.json();

                if(res.error){
                    this.setState({loading:false,error : true});

                }
                else{
                    console.log("insidde orders");
                    
                    for (let key in res){
                        orders.push({
                            ...res[key],
                            id:key
                        })
                    };
                    console.log(orders);
                    

                    this.setState({loading:false,ordersLists : orders,error : false});

                }
                                
                console.log(this.state.ordersLists);
                    
            }
            catch(err){
                console.log(err);
                this.setState({loading:false, error : true})    
            }

        }
        fetchOrders();
    }


    render(){

        let notLogIn = (<div className = {classes.cart}>
            <div>
                <img src= {cartImage}></img>
            </div>
            <div>
                <h1>PLEASE LOGIN..</h1>
            </div>
        </div>);

        let roomImg,roomName,totalPrice,Username,NumberOfGuests,TotalRoom,UniqueString = null;
        let LogIn = "";

        if(!this.state.error){
            // roomImg = this.state.ordersLists.room.Img;
            // roomName = this.state.ordersLists.room.name;
            // totalPrice =  this.state.ordersLists.room.price;
            // Username = this.state.ordersLists.userData.fullname;
            // NumberOfGuests = this.state.ordersLists.userData.guests;
            // TotalRoom = this.state.ordersLists.userData.addrooms;
            // UniqueString = this.state.ordersLists.userData.UniqueString;
        

        LogIn = (
            <div className = {classes.cart2}>
                <h4 style= {{textAlign : "center"}}>BOOKING HISTORY</h4>
                <div >
                {this.state.ordersLists.map(obj =>
                {return (<div className = {classes.orderRow} key= {obj.id}>
                            <div className = {classes.image}>
                                <img src={obj.data.room.img}></img>
                                <p>{obj.data.room.name}</p>
                            </div>
                            <div>
                                <p><strong>guests :</strong>{obj.data.userData.guests}</p>
                                <p><strong>Rooms :</strong>{obj.data.userData.addrooms}</p>
                                <p><strong>Total Price :</strong>{obj.data.room.price}</p>
                            </div>
                            <div>
                                <p><strong>booked for :</strong>{obj.data.userData.fullname}</p>
                                <p><strong>code :</strong>{obj.data.uniqueString}</p>
                            </div>
                        </div>)})}

                </div>
                
            </div>
            );   
    }

        return((this.state.loading ? <Spinner /> : (this.props.auth.token ? LogIn : notLogIn)))
    }
}

let mapStateToProps = (state) => {
    return{
        auth : state.auth
    }
}

export default connect(mapStateToProps)(Cart);