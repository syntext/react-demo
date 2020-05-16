import React, {useState} from 'react'
import './DevelopmentBar.scss'

const DevelopmentBar = () => {
    const [title] = useState(document.title)
    document.title = `[dev] ${title}`

    return (
        <div className='development-bar'>
            -= DEVELOPMENT =-
        </div>
    )
}

export default DevelopmentBar
