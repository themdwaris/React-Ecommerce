
const reducer = (state,action) =>{

    if(action.type === 'HOME_UPDATE'){
        return{
            ...state,
            fname:action.payload.fname,
            lname:action.payload.lname,
            image:action.payload.image,
            title:action.payload.title,
            toredirect:action.payload.toredirect
        }
    }
    if(action.type === 'ABOUT_UPDATE'){
        return{
            ...state,
            fname:action.payload.fname,
            lname:action.payload.lname,
            image:action.payload.image,
            title:action.payload.title,
            toredirect:action.payload.toredirect
        }
    }
    if(action.type === 'GET_SERVICES'){
        return{
            ...state,
            products:action.payload
        }
    }

    return state
}

export default reducer