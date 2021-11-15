
const initialState={
    people:[],
    detailView:false,
    personSelected:null,
}

export default (state=initialState,action)=>{
    switch(action.type){
        case "INITIAL_FETCH":
            return{
                ...state,
                people:action.payload,
            }
        case "SELECTED_PERSON":
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
  
        case "ADD_PERSON":
            return {
                ...state,
                ...action.newPerson
            }

        case "UPDATE_PERSON":
            return {
                ...state,
                ...action.updatePerson
            }

        case "DELETE_CONTACT":
            return {
                ...state,
                detailView:false,
                personSelected:null
            }
        default:
            return state
    }
}