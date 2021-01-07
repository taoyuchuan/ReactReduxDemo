import { BUY_COOKIE, ADD_COOKIE } from './cookieTypes'

const initialState = {
  numOfCookies: 30,
  info: 'Initial Number of Cookies.'
}

const cookieReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_COOKIE: return {
      ...state,
      numOfCookies: state.numOfCookies - action.payload,
      info: 'Buy ' + action.payload + ' cake'
    }

    case ADD_COOKIE: return {
      ...state,
      numOfCookies: state.numOfCookies + action.payload,
      info: 'Add ' + action.payload + ' cake'
    }

    default: return state
  }
}

export default cookieReducer