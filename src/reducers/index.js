import { combineReducers } from 'redux';

// Reducers
import demoReducer from 'src/reducers/demo';

const rootReducer = combineReducers({
  demo: demoReducer,
  // ...autres reducers
});

export default rootReducer;
