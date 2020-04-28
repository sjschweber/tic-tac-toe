import * as actions from './actions.js'
import * as types from './actions.js'

describe('actions', () => {
  it('should create an action to determine that X is next', () => {
    const boolean = true;
    const expectedAction = {
      type: "X_IS_NEXT",
      boolean
    }
    expect(actions.xIsNext(boolean)).toEqual(expectedAction)
  })
})
