import {X_IS_NEXT} from './actions';

const initialState = {
  xIsNext: 'X_IS_NEXT'
}

function app(state = initialState, action){
  switch(action.type){
    case X_IS_NEXT:
      return Object.assign({}, state, {
        xIsNext: action.filter
      })
    default:
      return state
  }
}
