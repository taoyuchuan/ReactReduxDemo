import React from 'react'
import { connect } from 'react-redux'
import { buyCake, addCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - { props.numOfCakes }</h2>
      <button onClick = { props.buyCake }>Buy Cake</button>
      <button onClick = { props.addCake }>Add Cake</button>
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
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)

