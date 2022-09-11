import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
import SearchContainer from '../SearchContainer/SearchContainer';
import Container from "react-bootstrap/Container";
import axios from 'axios';
import { fetchSearchedGiphys, fetchTrendingGiphys } from '../../api/giphyApi'
import TrendingGiphy from '../TrendingGiphy/TrendingGiphy';
const SearchDetail = () => {
    const { input } = useParams();
    const [data, setData] = useState([]);


    const randomizeData = (content) => {
        return content.data.sort(() => Math.random() - 0.5);
    }


    useEffect(() => {
        const getSearchedGiphys = async (query, setState) => {
            const searched = await fetchSearchedGiphys(query);
            setState(randomizeData(searched.data))
        }
        getSearchedGiphys(input, setData);
    }, [input]);
    console.log(data)
    return (
        <div>
            <Container>
                <Header />
                <SearchContainer />
                <div className="search-title">
                    {input}
                    <div className="all-container">
                    {data?.map((trendingGiphy, index) => {
                        return <TrendingGiphy giphy={trendingGiphy} key={index} />
                    })}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default SearchDetail