const reducer = (state,action) =>{
    switch(action.type){
        case "SEARCH_PRODUCT":
            return{
                ...state,
                search: action.payload
            }
            default:
                return state;
    }
};

export default reducer;