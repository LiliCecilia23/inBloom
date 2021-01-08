import React from "react";

function Button(props) {

    return (
        <div>
            <button type="button" id="generic-button" className={props.className} onClick={props.onClick}>{props.text}</button>
        </div>
    )

}

export default Button;