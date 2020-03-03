import {combineReducers} from 'redux'
import CounterReducers from './CounterReducers'


const reducers=combineReducers({
    Count:CounterReducers,
})

export default reducers