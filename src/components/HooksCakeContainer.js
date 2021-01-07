import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, addCake } from '../redux'

function HooksCakeContainer() {
  const [number, setNumber] = useState(1)
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes (hooks) - { numOfCakes }</h2>
      <input type="text" value = { number } onChange = { e => setNumber(Number(e.target.value)) } />
      <button onClick = { () => dispatch(buyCake(number)) }>Buy { number } cake</button>
      <button onClick = { () => dispatch(addCake(number)) }>Add { number } Cake</button>
    </div>
  )
}

export default HooksCakeContainer