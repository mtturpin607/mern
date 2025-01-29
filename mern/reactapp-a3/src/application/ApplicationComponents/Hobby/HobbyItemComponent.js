import React, { useState } from "react";
import { useDispatch} from "react-redux";

let HobbyItemComponent = ({Hobby})=>{

    let [showHide, toggleShowHide] = useState(false)

    let dispatchToAddHobby = useDispatch();

    return(
        <ol className="Hobby col-md-11">
            <li className="Hobby">
           {Hobby.name} 
            </li>
        </ol>
    )

}

export default HobbyItemComponent;

