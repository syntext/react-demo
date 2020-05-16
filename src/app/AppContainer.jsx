import React from 'react'
import DevelopmentBar from '../components/developmentbar/DevelopmentBar'
import config from '../config'
import AppRouter from './AppRouter'
import './styles.scss'

const AppContainer = () => (
    <>
        {config.developmentMode && <DevelopmentBar/>}
        <AppRouter/>
    </>
)

export default AppContainer
