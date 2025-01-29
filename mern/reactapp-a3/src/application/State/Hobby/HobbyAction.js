import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const saveHobby = (Hobby)=>{

    return function (dispatch) {
        //dispatch(loading(true));

        axios.post("http://localhost:9000/hobby/api/saveHobby",
            Hobby
        )
        .then((allData)=>{
            let hobbyresp = allData.data;

            dispatch(fetchHobbies());//fetched at the time of save it self
        })
        .catch((err)=>{
            console.log("Error While Saving Hobby", err)
        })
    }
};

export const addHobby = (hobbies)=>{
    return {
        type : actionTypes.ADD_HOBBIES_TOSTORE,
        payload : {hobbies}
    }
}

export const setLoading = (loading)=>{
    return {
        type : "SET_LOADING",
        payload : {loading}
    }
}

export const fetchHobbies = ()=>{

    return function (dispatch) {
        //dispatch(loading(true));

        axios.get("http://localhost:9000/hobby/api/getHobbies")
        .then((allHobbies)=>{
            let hobbyresp = allHobbies.data;
            dispatch(addHobby(hobbyresp))
        })
        .catch((err)=>{
            console.log("Error While Saving Hobby", err)
        })
    }
};
