import { START_TIMER, PAUSE_TIMER, RESET_TIMER } from "../types";

let initialState = {
  timerRunning: false,
  startTime: 0
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        timerRunning: true
      };
    case PAUSE_TIMER:
      return {
        ...state,
        timerRunning: false
      };
    case RESET_TIMER:
      return {
        ...state,
        timerRunning: false,
        startTime: 0
      };
    default:
      return state;    
  }
};

export default stopwatchReducer;