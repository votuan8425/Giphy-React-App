import React, { useEffect, useState } from 'react'
import './AllTrending.css'
import Container from "react-bootstrap/Container";
import Header from '../Header/Header';
import SearchContainer from '../SearchContainer/SearchContainer';
import { fetchSearchedGiphys } from '../../api/giphyApi'
import ArtitstGiphy from '../ArtitstGiphy/ArtitstGiphy';

const AllClips = () => {
    const [clips, setClips] = useState([]);
    const randomizeData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    }
    useEffect(() => {
        const getSearchedGiphys = async (query, setState) => {
            const searched = await fetchSearchedGiphys(query);
            setState(randomizeData(searched.data))
        }

        getSearchedGiphys("bitcoin", setClips);
    }, []);
    return (
        <Container>
            <Header />
            <SearchContainer />
            <div className="search-title">
                All Clips
            </div>
            <div className="all-container">
                {clips?.map((trendingGiphy, index) => {
                    return <ArtitstGiphy giphy={trendingGiphy} key={index} />
                })}
            </div>
        </Container>
    )
}

export default AllClips