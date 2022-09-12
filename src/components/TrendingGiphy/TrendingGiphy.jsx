import React from 'react'
import './TrendingGiphy.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const TrendingGiphy = ({ props, giphy }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleItem = () => {
        navigate(`/gifs/${giphy.slug}`, {
            state: {
                item: giphy
            }
        })
        console.log(giphy)
    }
    return (
        <div className='trending-giphy' key={giphy.id}>
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

export default TrendingGiphy