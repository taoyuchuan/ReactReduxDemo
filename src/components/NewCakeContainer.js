import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake, addCake } from '../redux'

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of Cakes - { props.numOfCakes }</h2>
      <input type="text" value = { number } onChange = { e => setNumber(Number(e.target.value)) } />
      <button onClick = { () => props.buyCake(number) }>Buy { number } Cake</button>
      <button onClick = { () => props.addCake(number) }>Add { number } Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number)),
    addCake: number => dispatch(addCake(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCakeContainer)

