import React from "react";
import classes from "./bookData.module.css";

const bookData = (props) => {
    
    let bookData = (<div className = {classes.bookData}> 
                        <div>
                            Name : {props.data.fullname}
                            Email : {props.data.email}
                            Number : {props.data.number}
                            CheckIn : {props.data.checkin}
                            CheckOut : {props.data.checkout}
                            Rooms : {props.data.addroom}
                            Guests : {props.data.guests}

                        </div> 
                        <div>

                        </div>
                    </div>
                )
    
    return bookData
   
}

export default bookData;