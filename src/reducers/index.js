import { combineReducers } from 'redux'
import todos from '../reducers/todo.js'
import visibilityFilter from '../reducers/VisibilityFilter.js'

export default combineReducers({
  todos,
  visibilityFilter
})