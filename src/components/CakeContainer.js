import React from 'react'
<<<<<<< HEAD
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - { props.numOfCakes }</h2>
      <button onClick = { props.buyCake }>Buy Cake</button>
=======

function CakeContainer() {
  return (
    <div>
      <h2>Number of Cakes</h2>
      <button>Buy Cake</button>
>>>>>>> fbc35b5cb2620f25b0737e6138ae337c6aa33b6e
    </div>
  )
}

<<<<<<< HEAD
const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)
=======
export default CakeContainer
>>>>>>> fbc35b5cb2620f25b0737e6138ae337c6aa33b6e
