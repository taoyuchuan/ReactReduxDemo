import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCookie, addCookie } from '../redux'

function CookieContainer(props) {
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of Cookies - { props.numOfCookies }</h2>
      <h3>Information - { props.info }</h3>
      <input type = 'text' value = { number } onChange = { e => setNumber(Number(e.target.value)) } />
      <button onClick = { () => props.buyCookie(number) } >Buy { number } Cookie</button>
      <button onClick = { () => props.addCookie(number) } >Add { number } Cookie</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCookies: state.cookie.numOfCookies,
    info: state.cookie.info
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCookie: number => dispatch(buyCookie(number)),
    addCookie: number => dispatch(addCookie(number))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CookieContainer)