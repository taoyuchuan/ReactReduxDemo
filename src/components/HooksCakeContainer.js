import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, addCake } from '../redux'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes (hooks) - { numOfCakes }</h2>
      <button onClick = { () => dispatch(buyCake()) }>Buy cake</button>
      <button onClick = { () => dispatch(addCake()) }>Add Cake</button>
    </div>
  )
}

export default HooksCakeContainer