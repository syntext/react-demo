import React from 'react'
import withTopNavBar from '../../components/navigation/withTopNavBar'

DemoPage.propTypes = {}

function DemoPage() {
    return (
        <div className='page demo-page'>
            <div className='p-grid'>
                <div className='p-col'>
                    <h1>
                        Demo
                    </h1>
                    <div className='demo-box'>
                        Box
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTopNavBar(DemoPage)
