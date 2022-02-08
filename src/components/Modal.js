import React, { useState } from "react"
import Card from "./card"

function Modal(props){

    const [show, setShow] = useState(false)

    return(<div className={show ? "modal" : "modal hide"}>
        <Card className="cardModal">
           {props.children}
        </Card>
    </div>)

}

export default Modal