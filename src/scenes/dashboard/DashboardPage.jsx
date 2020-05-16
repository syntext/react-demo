import React from 'react'
import withTopNavBar from '../../components/navigation/withTopNavBar'

DashboardPage.propTypes = {}

function DashboardPage() {
    return (
        <div className='page dashboard-page'>
            <div className='p-grid'>
                <div className='p-col'>
                    <h1>
                        Welcome
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default withTopNavBar(DashboardPage)
