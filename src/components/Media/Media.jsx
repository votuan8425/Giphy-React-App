import React, { useEffect, useState } from 'react'
import './Media.css'
import Trending from '../../images/trending.svg'
import Artitsts from '../../images/artists.svg'
import Clip from '../../images/clips.svg'
import Stories from '../../images/stories.svg'
import TrendingGiphy from '../TrendingGiphy/TrendingGiphy'
import giphyArtists from '../../artists'
import { fetchSearchedGiphys, fetchTrendingGiphys } from '../../api/giphyApi'
import ArtitstGiphy from '../ArtitstGiphy/ArtitstGiphy'
import ClipsGiphySection from '../ClipsGiphySection/ClipsGiphySection'
import StoriesGiphySection from '../StoriesGiphySection/StoriesGiphySection'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'


const Media = () => {
    const [trending, setTrending] = useState([]);
    const [artists, setArtists] = useState([]);
    const [clips, setClips] = useState([]);
    const [stories, setStories] = useState([]);

    const randomizeData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    }

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
        const getTrendingGiphys = async () => {
            const trending = await fetchTrendingGiphys();
            setTrending(randomizeData(trending.data))
        }
        const getArtists = async () => {
            const artists = await Promise.all(
                giphyArtists.map((giphyArtists) => {
                    return fetchSearchedGiphys(giphyArtists).then((res) => res.data.data)
                })
            )
            setArtists(artists.flat())
        }
        const getSearchedGiphys = async (query, setState) => {
            const searched = await fetchSearchedGiphys(query);
            setState(randomizeData(searched.data))
        }
        getTrendingGiphys();
        getArtists();
        getSearchedGiphys("bitcoin", setClips);
        // getSearchedGiphys("lalisa", setStories);
        fetchImages();
    }, []);

    return (
        <div className="media">
            <div className="row">
                <div className="row-header">
                    <div className="row-header__left">
                        <img src={Trending} alt="" />
                        <h1>Trending</h1>
                    </div>
                    <div className="row-header__right">
                        <Link to="/trending-gifs">All the Gifs </Link>
                        <ChevronRightIcon className="icon-right" />
                    </div>
                </div>
                <div className="trending-container">
                    {trending?.map((trendingGiphy, index) => {
                        return <TrendingGiphy giphy={trendingGiphy} key={index} />
                    })}
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <div className="row-header__left">
                        <img src={Artitsts} alt="" />
                        <h1>Artists</h1>
                    </div>
                    <div className="row-header__right">
                        <Link to="/trending-gifs">All the Gifs </Link>
                        <ChevronRightIcon className="icon-right" />
                    </div>
                </div>
                <div className="artists-container">
                    {artists?.map((artitstGiphys, index) => {
                        return <ArtitstGiphy giphy={artitstGiphys} key={index} />
                    })}
                </div>
            </div>
            <div className="row">
                <div className="row-header">
                    <div className="row-header__left">
                        <img src={Clip} alt="" />
                        <h1>Clips</h1>
                    </div>
                    <div className="row-header__right">
                        <Link to="/trending-gifs">All the Gifs </Link>
                        <ChevronRightIcon className="icon-right" />
                    </div>
                </div>
                <div className="clips-container">
                    <ClipsGiphySection giphysArray={clips} />
                </div>
            </div>
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