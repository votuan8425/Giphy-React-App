import React, { useEffect, useState } from 'react'
import './Media.css'
import Stories from '../../images/stories.svg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'


const Media = () => {
    //dev
    const UnsplashImage = ({ url, key }) => (
        <div className="image-item" key={key} >
            <img src={url} />
        </div>
    );
    const [images, setImages] = useState([]);
    const [loaded, setIsLoaded] = useState(false);


    const fetchImages = (count = 10) => {
        axios
            .get(`https://api.giphy.com/v1/gifs/search?q="lalisa"&api_key=cFWYJ56iHT3CLYXtgzbZhjz7DuDudzmg&offset=${count}`)
            .then(res => {
                setImages([...images, ...res.data]);
                setIsLoaded(true);
            });
    };
    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <div className="media">
            <div className="row">
                <div className="row-header">
                    <div className="row-header__left">
                        <img src={Stories} alt="" />
                        <h1>Stories</h1>
                    </div>
                    <div className="row-header__right">
                        <Link to="/trending-gifs">All the Gifs </Link>
                        <ChevronRightIcon className="icon-right" />
                    </div>
                </div>
                <div className="stories-container">
                    <InfiniteScroll
                        dataLength={images}
                        next={() => fetchImages(5)}
                        hasMore={true}
                        loader={
                            <img
                                src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                                alt="loading"
                            />}
                    >
                        <div className="image-grid" style={{ marginTop: "30px" }}>
                            {loaded ?
                                images.map((image, index) => (
                                    <UnsplashImage url={image.images.downsized.url} key={index} />
                                )) : ""}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
        </div>
    )
}

export default Media