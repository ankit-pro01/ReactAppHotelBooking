import React, { Component } from "react";
import classes from "./Rooms.module.css";
import Title from "../../Components/Title/Title";
import Room from "../../Components/Room/Room";
import Input from "../../Components/UI/input/input";
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

    handleModal = (data) => {

            this.setState({...this.state, showModal : !this.state.showModal})
            this.props.handleModalData(data);
        }


    render(){        

        let Search = (
            <form className = {classes.Search} onSubmit = {this.searchButtonHandler}>
                 <Input   type = "input" placeholder = "Room Type"
                 label ="Search Rooms"  onChange = {this.searchHandler} name = "search" />
            </form>  

        )

        let products = (
            this.props.state.searchRoom.map(r => {
                return <Room key = {r.id}  imgSrc = {r.img} name = {r.name} id = {r.id} click = 
                {() => this.handleModal(r)}/>
            })
        )
        
        return(
            <div>
                <Title heading = "OUR ROOMS"/>
                <Modal show = {this.state.showModal} close = {this.handleModal} name =
                 {this.props.state.modalData.name}>
                    <ModalContent  {...this.props} />
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
        handleModalData : (data) => dispatch(actions.modaldata(data))
    }
}


export default connect(mapStateToProps, mapStateToDispatch)(Rooms);