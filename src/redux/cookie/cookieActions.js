import { BUY_COOKIE, ADD_COOKIE } from './cookieTypes'

export const buyCookie = (number = 1) => {
  return {
    type: BUY_COOKIE,
    payload: number
  }
}

export const addCookie = (number = 1) => {
  return {
    type: ADD_COOKIE,
    payload: number
  }
}