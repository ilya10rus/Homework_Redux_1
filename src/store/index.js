import { legacy_createStore as createStore } from 'redux'
import { stateGame } from './gameReducers'

export const store = createStore( stateGame )