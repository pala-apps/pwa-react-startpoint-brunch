import React from 'react'
import { connect } from 'react-redux'

let AppContainer = ({ dispatch }) =>{
  return(
    <h1>Hello!!</h1>
  )
}

AppContainer = connect()( AppContainer )

export default AppContainer
