import React from 'react'
import './ArtitstGiphy.css'
const ArtitstGiphy = ({ giphy }) => {
    return (
        <div className='artist-giphy' key={giphy.id}>
            <img src={giphy.images.downsized.url} alt={giphy.title} />
        </div>
    )
}

export default ArtitstGiphy