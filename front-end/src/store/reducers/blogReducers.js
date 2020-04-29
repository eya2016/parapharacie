import { tabListPost } from '../../constants/data';
import { GET_POSTS, GET_POST_BY_ID } from "../actions/blogActions";


const initState = {
    postListe: tabListPost
}

const blogReducers = (state = initState, actions) => {
    switch(actions.type){
        case GET_POSTS:
        return {...state, postListe: [...state.postListe ] }
        case GET_POST_BY_ID:
        return {...state,postListe:state.postListe.map( (e,i)=> i=== actions.payloadIndex ? e : '' )  }
        default:
        return state;
    }
}

export default blogReducers;