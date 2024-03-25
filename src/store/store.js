import stopwatchReducer from "./reducers/stopwatchReducer";
import { createStore } from 'redux';

const store = createStore(stopwatchReducer);

export default store;
