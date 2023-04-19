import { UIState } from ".";

type UItype = 
|   { type: 'UI - Open sidebar'}
|   { type: 'UI - Close sidebar'}

export const uiReducer = (state: UIState, action: UItype): UIState => {
    switch (action.type) {
        case 'UI - Open sidebar':
            return{
                ...state,
                sidemenuOpen: true,
            }
        case 'UI - Close sidebar':
            return{
                ...state,
                sidemenuOpen: false,
            }
        default:
            return state;
    }
}
