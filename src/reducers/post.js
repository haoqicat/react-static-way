import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

const all = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_POSTS_SUCCESS:
      return action.posts
    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_POSTS_REQUEST:
      return true
    case types.LOAD_POSTS_SUCCESS:
      return false
    default:
      return state
  }
}

export default combineReducers({
  all,
  isFetching,
})
