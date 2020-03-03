import {combineReducers} from 'redux'
import CounterReducers from './CounterReducers'
// import KataReducers from './KataReducers'

const reducers=combineReducers({
    Count:CounterReducers,
    // Kata:KataReducers
})

export default reducers