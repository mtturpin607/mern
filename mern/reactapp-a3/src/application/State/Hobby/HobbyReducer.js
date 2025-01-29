import * as ActionTypes from "../ActionTypes";

const Initial_State = {
    Hobby : {
        name : ""
    },
    Hobbies : [],
    Loading : false
}

//write callback/ reducer to generate new state upon action change
let HobbyReducer = (state = Initial_State, action)=>{

    switch (action.type) {
        
        case ActionTypes.ADD_HOBBIES_TOSTORE :
            return { ...state, Hobbies : action.payload.Hobbies } 

        case "SET_LOADING" :
            return { ...state, Loading : action.payload.loading } 

        default:
            return state
    }
}

export default HobbyReducer;