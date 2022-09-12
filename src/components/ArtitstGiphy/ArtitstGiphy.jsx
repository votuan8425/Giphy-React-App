import React from 'react'
import './ArtitstGiphy.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ArtitstGiphy = ({ giphy }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleItem = () => {
        navigate(`/gifs/${giphy.slug}`, {
            state: {
                item: giphy
            }
        })
    }
    return (
        <div className='artist-giphy' key={giphy.id}>
            <Link
                to={`/gifs/${giphy.slug}`}
                state={{
                    data: handleItem
                }}>
                <img src={giphy.images.downsized.url} alt={giphy.title} onClick={handleItem} />
            </Link>
        </div>
    )
}

export default ArtitstGiphy