export const selectPerson=(peopleId)=>{
    return{
        type:"SELECTED_PERSON",
        selectId:peopleId
    }
}

export const nonePerson=()=>{
    return{
        type:"NONE_SELECTED"
    }
}

export const formUpdate=({prop,value})=>{
    return{
        type:"FORM_UPDATE",
        payload:{prop,value}
    }
}

export const createNewContact=(person)=>{
    return(dispatch)=>{
        fetch('http://192.168.1.21:3000/contact',{
            method:"POST",
            body:JSON.stringify(
                person
            ),
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json",
            }
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
}

export const loadInitialContacts=()=>{
    return(dispatch)=>{
        fetch('http://192.168.1.21:3000/contact')
        .then((response)=>{return response.json()})
        .then((data)=>{
            dispatch({type:"INITIAL_FETCH",payload:data})
        }).catch((error)=>{
            console.log(error)
        })
}
}
export const deleteContact=(id)=>{
    return(dispatch)=>{
        fetch(`http://192.168.1.21:3000/contact/${id}`,{
            method:"DELETE"
        }).then(()=>{
            dispatch({type:"DELETE_CONTACT"})
        })
    }
}


export const updateContact=(person,id)=>{
    return(dispatch)=>{
        fetch(`http://192.168.1.21:3000/contact/${id}`,{
            method:"PUT",
            body:JSON.stringify(
                person
            ),
            headers:{
                "Accept":"application/json",
                "Content-type":"application/json",
            }
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })
    }
}