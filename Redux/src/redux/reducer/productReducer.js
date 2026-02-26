const initialState = {
    products : []
}


export const productReducer = (store=initialState, action) =>{
    if(action.type === 'ADD_TO_PRODUCT'){
        console.log("ADDED ")
        return store;
    }else{
        return store;
    }
}