import React, { useEffect, useState } from 'react'
import './AllTrending.css'
import Container from "react-bootstrap/Container";
import Header from '../Header/Header';
import SearchContainer from '../SearchContainer/SearchContainer';
import { fetchTrendingGiphys } from '../../api/giphyApi'
import TrendingGiphy from '../TrendingGiphy/TrendingGiphy'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component'
import {Link} from 'react-router-dom'
const AllTrending = () => {
    const [trending, setTrending] = useState([]);
    const [loaded, setIsLoaded] = useState(false);

    const randomizeData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    }
    const fetchImages = (count = 10) => {
        axios
            .get(`https://api.giphy.com/v1/gifs/trending?&api_key=cFWYJ56iHT3CLYXtgzbZhjz7DuDudzmg&limit=${count}`)
            .then(res => {
                setTrending([...trending, ...res.data.data]);
                setIsLoaded(true);
            });
    };
    const UnsplashImage = ({ url, key }) => (
        <div className="image-item" key={key} >
            <img src={url} alt="" />
        </div>
    );
    useEffect(() => {
        fetchImages()
    }, []);
    console.log(trending);

    return (
        <div>
            <Container>
                <Header />
                <SearchContainer />
                <div className="search-title">
                    Trending GIFs
                </div>
                <div className="all-container">
                <InfiniteScroll
                        dataLength={trending}
                        next={() => fetchImages(10)}
                        hasMore={true}
                        loader={
                            <img
                                src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
                                alt="loading"
                            />}
                    >
                        <div className="image-grid" style={{ marginTop: "30px" }}>
                            {loaded ?
                                trending.map((item, index) => (
                                    <Link
                                        to={`/gifs/${item.slug}`}
                                        state={{
                                            data: item
                                        }}>
                                        <UnsplashImage url={item.images.downsized.url} key={index} />
                                    </Link>
                                )) : ""
                            }
                        </div>
                    </InfiniteScroll>
                </div>
            </Container >
        </div >
    )
}

export default AllTrending