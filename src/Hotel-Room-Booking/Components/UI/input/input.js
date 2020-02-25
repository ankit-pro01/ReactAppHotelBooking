import React from "react";
import classes from './input.module.css'

const input = ( props ) => {
    let inputElement = null;

    switch( props.type ) {
        case ( 'input' ):            
            inputElement = <input className = {classes.InputElement}  {...props}/>;
            break;
        case ( 'textarea' ):
            inputElement = <textarea className = {classes.InputElement} {...props} />
            break;
        case ( 'date' ):
            inputElement = <input className = {classes.InputElement} {...props} />
            break;
        default:
            inputElement = <input className = {classes.InputElement} {...props}/>
    }
    return (
        <div>
            <label className = {classes.Label}> { props.label } </label>
            { inputElement }
        </div>
    )
}
export default input;