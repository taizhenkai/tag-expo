import { EMAIL_CHANGED, PASSWORD_CHANGED, RESET_EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', error: '', loading: '', resetEmail: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            //create new state and return it. DONT RETURN CURRENT STATE!
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case RESET_EMAIL_CHANGED:
            return { ...state, resetEmail: action.payload };
        default:
            return state;
    }
}