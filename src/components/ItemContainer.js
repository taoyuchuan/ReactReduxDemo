import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream, addCake, addIceCream } from '../redux'

function ItemContainer(props) {
  return(
    <div>
      <h2>Item - { props.item }</h2>
      <button onClick = { props.buyItem } >Buy Item</button>
      <button onClick = { props.addItem } >Add Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams

  return {
    item: itemState
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchBuyFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

  const dispatchAddFunction = ownProps.cake
    ? () => dispatch(addCake())
    : () => dispatch(addIceCream())

  return {
    buyItem: dispatchBuyFunction,
    addItem: dispatchAddFunction
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer)