import { BUY_CAKE } from './cakeType';

const initialState  = { noOfCake: 20};

const cakeReducer = (state=initialState, action ) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                noOfCake: state.noOfCake - 1
            }
        default:
            return state;
    }
}
export default cakeReducer;
