//reducer function to modify the store state

const initState = {
    subreddits: {}
}

const reducer = (state = initState, action) => {
    if (action.type === "ADD"){
        return {
            subreddits: action.subreddits
        }
    }
    //console.log(state);
    return state;
}

export default reducer;