import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { fetchHobbies } from "../../State/Hobby/HobbyAction";
let HobbySelectItemList = ({Hobby})=>{

    let hobbies = useSelector((state)=>state.productReducer.Hobbies)

    let dispatchToFetchHobby = useDispatch();

    useEffect(()=>{
        hobbies && hobbies.length == 0 ? dispatchToFetchHobby(fetchHobbies()) : []
    },[])

    return(
        <>
            {
                hobbies && hobbies.length > 0 ?
                hobbies.map((hobbyItem)=>{
                    return <option value="{hobbyItem.name}" key="{hobbyItem._id}" />
                })
                : <></>>
            }
        </>
    )

}

export default HobbySelectItemList;