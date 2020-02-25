import React, { Component } from "react";
import classes from "./Rooms.module.css";
import Title from "../../Components/Title/Title";
import * as Data from "../../Data/Data";
import Room from "../../Components/Room/Room";
import Input from "../../Components/UI/input/input";
import Button from "../../Components/UI/button/button";
import * as actions from "../../store/actions/index";
import {connect} from "react-redux";
import Modal from "../../Components/modal/modal";
import ModalContent from "../../Components/ModalContent/ModalContent";

class Rooms extends Component {
    state = {
        showModal : false,
        closeModal : false
    }

    searchHandler = (event) => {
        let value = event.target.value;
        this.props.SearchRoomHandle(value);
    }

    searchButtonHandler = (event) => {
        event.preventDefault();
        let value = event.target.elements.search.value;
        this.props.SearchRoomHandle(value);
    
    }

    handleModal = (name, img, info) => {
        
        console.log(name, img, info);
        

        if(this.state.showModal){
            this.setState({...this.state, showModal : false})
        }
        else{
            this.setState({...this.state, showModal : true})
        };

        this.props.handleModalData(name, img, info);

    }

    render(){

        let Search = (
            <form className = {classes.Search} onSubmit = {this.searchButtonHandler}>
                 <Input   type = "input" placeholder = "search rooms"
                 label ="search rooms"  onChange = {this.searchHandler} name = "search" />
                 <Input  type = "date" placeholder = "checkIn" label = "CheckIn" name = "checkIn" />
                 <Input  type = "date" placeholder = "checkOut" label = "CheckOut" name= "checkOut"/>
                 <Button type = "submit" >search</Button>
            </form>  

        )

        let products = (
            this.props.state.searchRoom.map(r => {
                return <Room key = {r.id}  imgSrc = {r.img} name = {r.name}  click = 
                {() => this.handleModal(r.name, r.img, r.info)}/>
            })
        )
        console.log(this.props.state.modalData);
        
        return(
            <div>
                <Title heading = "Our Rooms"/>
                <Modal show = {this.state.showModal} close = {this.handleModal} name =
                 {this.props.state.modalData.name}>
                    <ModalContent roomData = {this.props.state.modalData}/>
                </Modal>
                {Search}
                <div className = {classes.Rooms}>
                    {products}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        state : state
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        SearchRoomHandle : (value) => dispatch(actions.searchRoom(value)),
        handleModalData : (name, img, info) => dispatch(actions.modaldata(name,img,info))
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(Rooms);