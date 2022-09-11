import React, { useEffect, useState } from 'react'
import './AllTrending.css'
import Container from "react-bootstrap/Container";
import Header from '../Header/Header';
import SearchContainer from '../SearchContainer/SearchContainer';
import { fetchTrendingGiphys } from '../../api/giphyApi'
import TrendingGiphy from '../TrendingGiphy/TrendingGiphy'

const AllTrending = () => {
    const [trending, setTrending] = useState([]);
    const randomizeData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    }
    useEffect(() => {
        const getTrendingGiphys = async () => {
            const trending = await fetchTrendingGiphys();
            setTrending(randomizeData(trending.data))
        }
        getTrendingGiphys();
    }, []);
    return (
        <div>
            <Container>
                <Header />
                <SearchContainer />
                <div className="search-title">
                    Trending GIFs
                </div>
                <div className="all-container">
                    {trending?.map((trendingGiphy, index) => {
                        return <TrendingGiphy giphy={trendingGiphy} key={index} />
                    })}
                </div>
            </Container>
        </div>
    )
}

export default AllTrending