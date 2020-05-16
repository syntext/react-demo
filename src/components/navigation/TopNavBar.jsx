import {Menubar} from 'primereact/menubar'
import PropTypes from 'prop-types'
import React from 'react'
import {withRouter} from 'react-router-dom'
import './TopNavBar.scss'

const TopNavBar = ({location, history}) => {
    const items = [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            className: location.pathname === '/' ? 'p-menuitem-active' : null,
            command: () => {
                history.push('/')
            }
        },
        {
            label: 'Demo',
            icon: 'fas fa-cross',
            className: location.pathname === '/demo' ? 'p-menuitem-active' : null,
            command: () => {
                history.push('/demo')
            }
        }
    ]

    return (
        <Menubar
            model={items}
            className='top-nav-bar no-select'
        />
    )
}

TopNavBar.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
}

export default withRouter(TopNavBar)
