import React, { useEffect, useState } from 'react'
import './ClipsGiphySection.css'
import icondark from '../../images/giphyIconDark.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const ClipsGiphySection = ({ giphysArray }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleItem = () => {
        navigate(`/gifs/${giphysArray.slug}`, {
            state: {
                item: giphysArray
            }
        })
    }
    const [giphys, setGiphys] = useState([]);

    const randomizeData = (giphysArray) => {
        return giphysArray.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        let randomData = randomizeData(giphysArray);
        setGiphys(randomData.slice(0, 3));
    }, [giphysArray]);

    return (
        <div className="clips-grid">
            {giphys && giphys.length ? (
                <>
                    <div className="first-column">
                        <Link
                            to={`/gifs/${giphys?.[0].slug}`}
                            state={{
                                data: giphys?.[0]
                            }}>
                            <img src={giphys?.[0]?.images.downsized.url} alt="" onClick={() => { console.log(giphys?.[0]) }} />
                        </Link>
                        <div className="text">
                            <img src={icondark} alt="darklogo" />
                            <p>{giphys?.[0].title}</p>
                        </div>
                    </div>
                    <div className="second-column">
                        <Link
                            to={`/gifs/${giphys?.[1].slug}`}
                            state={{
                                data: giphys?.[1]
                            }}>
                            <img src={giphys?.[1]?.images.downsized.url} alt="" onClick={() => { console.log(giphys?.[1]) }} />
                        </Link>
                        <div className="text">
                            <img src={icondark} alt="darklogo" />
                            <p>{giphys?.[1].title}</p>
                        </div>
                        <Link
                            to={`/gifs/${giphys?.[2].slug}`}
                            state={{
                                data: giphys?.[2]
                            }}>
                        <img src={giphys?.[2]?.images.downsized.url} alt="" />
                        </Link>
                        <div className="text">
                            <img src={icondark} alt="darklogo" />
                            <p>{giphys?.[2].title}</p>
                        </div>
                    </div>
                </>
            ) : null}

        </div>
    )
}

export default ClipsGiphySection