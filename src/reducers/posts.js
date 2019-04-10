export default function (state = {loading:false}, action) {
    switch (action.type) {
        case 'GET_POSTS':
            return { ...state, postlist: action.payload, loading:false };
        case 'GET_POSTS_SUCCEESS':
            return { ...state, postlist: action.payload,loading:false };
        case 'GET_POST_ERROR':
            return { ...state, postlist: action.payload, loading:false };
        case 'SET_LOADING':
            return { ...state, loading:true };
        default:
            return state;
    }
}