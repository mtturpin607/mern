import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveHobby } from "../../State/Hobby/HobbyAction";
import DisplayHobbies from "./DisplayHobby";

let HobbyComponent = (props) => {

    let name = useRef(null)

    let Hobby = useSelector((state)=>state.HobbyReducer.Hobby)

    let dispatchHobby = useDispatch();

    useEffect(()=>{
        name.current.value = Hobby.name
    }, [])

    let saveHobbyClick = (evt)=>{
        
        let HobbyToSave = {
            name : name.current.value,
        }

        alert("Saving this Hobby! "+ JSON.stringify(HobbyToSave))

        dispatchHobby(saveHobby(HobbyToSave))
        evt.preventDefault();
    }

    return(
        <div className="col-md-12">
            <h1 className="col-md-12">Hobby Component</h1>

            <form className={"form componentClass"}>
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Hobby Name</b>
                        <input type="text" className="form-control col-md-6 name" ref={name} maxLength={25} 
                        placeholder="Hobby Name" />
                    </div>
                    
                    <input type="button" className={"form-control btn btn-primary col-md-3"} 
                        value={"Save Hobby"} 
                        onClick={saveHobbyClick}/>
                </div>
            </form>
            <hr/>
            <DisplayHobbies />
        </div>
    )

}

export default HobbyComponent;