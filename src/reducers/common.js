import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const isAuthenticated = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return true
    case types.LOGOUT_SUCCESS:
      return false
    default:
      return state
  }
}

export default combineReducers({
  isAuthenticated,
})
