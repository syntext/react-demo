import React from 'react'
import TopNavBar from './TopNavBar'

const withTopNavBar = (Component) => (props) => (
    <>
        <TopNavBar {...props}/>
        <Component {...props}/>
    </>
)

export default withTopNavBar
