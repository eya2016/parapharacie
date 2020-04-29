import { base_url } from "../../constants";
import { tabListPost } from '../../constants/data';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST_BY_ID = 'GET_POST_BY_ID';


export const getPosts = (tabListPost) => {
    return {
        type:GET_POSTS,
        payload:tabListPost
    }
}

export const getPost = (id)=>{
    return {
        type:GET_POST_BY_ID,
        payloadIndex:id
    }
}