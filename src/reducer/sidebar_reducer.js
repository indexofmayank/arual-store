import {
    SIDEBAR_CLOSE,
    SIDEBAR_OPEN
} from '../actions';

const Sidebar_reducer = (state, action) => {

    if(action.type === SIDEBAR_OPEN) {
        return {...state, isSidebarOpen: true}
    }

    if(action.type === SIDEBAR_CLOSE) {
        return {...state, isSidebarOpen: false}
    }


}

export default Sidebar_reducer;