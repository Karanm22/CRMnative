import people from "./people.json"

const initialState={
    people,
    detailView:false,
    personSelected:null
}

export default (state=initialState,action)=>{
    switch(action.type){
        case "SELECTED_PERSON":
            console.log("------------",action.payload)
            return {
                ...state,
                detailView:true,
                personSelected:action.selectId
            }
        case "NONE_SELECTED":
            return {
                ...state,
                detailView:false,
                personSelected:null
            }
        default:
            return state
    }
}