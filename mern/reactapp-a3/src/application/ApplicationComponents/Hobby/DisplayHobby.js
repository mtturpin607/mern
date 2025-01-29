import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHobbies } from "../../State/Hobby/HobbyAction";
import HobbyItemComponent from "./HobbyItemComponent";


let DisplayHobbies = ()=>{

    let Hobbies = useSelector((state)=>state.HobbyReducer.Hobbies)

    let dispatchToFetchHobby = useDispatch();

    useEffect(()=>{
        Hobbies && Hobbies.length == 0 ? dispatchToFetchHobby(fetchHobbies()) : []
    },[])

    return(
        <>
            {
                Hobbies && Hobbies.length > 0 ?
                Hobbies.map((HobbyItem)=>{
                    return <HobbyItemComponent Hobby={HobbyItem} key={HobbyItem._id} />
                })
                : <div><h4>No Hobbies To Display</h4></div>
            }
        </>
    )
}

export default DisplayHobbies;