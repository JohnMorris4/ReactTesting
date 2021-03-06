import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';
import axios from 'axios';
export function saveComment(comment){
    return {
      type: SAVE_COMMENT,
      payload: comment
    };
}
export function fetchComment(){
    const response = axios.get('http://my-json-server.typicode.com/typicode/demo/comments');

    return {
        type: FETCH_COMMENTS,
        payload: response
    };
}
