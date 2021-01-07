import { BUY_CAKE, ADD_CAKE } from './cakeTypes'

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number
  }
}

export const addCake = (number = 1) => {
  return {
    type: ADD_CAKE,
    payload: number
  }
}