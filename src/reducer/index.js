import { combineReducers } from 'redux';
import productReducer from './productReducer';
import authReducer from './authReducer';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    productState: productReducer,
    authState: authReducer,
    form: formReducer
});

export default rootReducer;
