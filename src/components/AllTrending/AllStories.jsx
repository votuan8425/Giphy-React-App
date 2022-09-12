import React, { useEffect, useState } from 'react'
import './AllTrending.css'
import Container from "react-bootstrap/Container";
import Header from '../Header/Header';
import SearchContainer from '../SearchContainer/SearchContainer';
import { fetchSearchedGiphys } from '../../api/giphyApi'
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const AddArtists = () => {
    const [artists, setArtists] = useState([]);
    const [loaded, setIsLoaded] = useState(false);

    const UnsplashImage = ({ url, key }) => (
        <div className="image-item" key={key} >
            <img src={url} alt="" />
        </div>
    );
    const fetchImages = (count = 10) => {
        axios
            .get(`https://api.giphy.com/v1/gifs/search?q="lalisa"&api_key=cFWYJ56iHT3CLYXtgzbZhjz7DuDudzmg&limit=${count}`)
            .then(res => {
                setArtists([...artists, ...res.data.data]);
                setIsLoaded(true);
            });
    };
    useEffect(() => {
        fetchImages();

    }, []);
    return (
        <Container>
            <Header />
            <SearchContainer />
            <div className="search-title">
                All Stories
            </div>
            <div className="all-container">
                <InfiniteScroll
                    dataLength={artists}
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
                            artists.map((artists, index) => (
                                <Link
                                    to={`/gifs/${artists.slug}`}
                                    state={{
                                        data: artists
                                    }}>
                                    <UnsplashImage url={artists.images.downsized.url} key={index} />
                                </Link>
                            )) : ""
                        }
                    </div>
                </InfiniteScroll>
            </div>
        </Container>
    )
}

export default AddArtists