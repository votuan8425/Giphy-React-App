import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../Header/Header';
import SearchContainer from '../SearchContainer/SearchContainer'
import { Container } from 'react-bootstrap'
import './ItemDetail.css'
import fb from '../../images/facebook.png'
import ins from '../../images/instagram.png'
import tw from '../../images/twitter.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CodeIcon from '@mui/icons-material/Code';
const ItemDetail = (props) => {
    const location = useLocation();
    const data = location.state;
    console.log("data item: ", data);

    return (
        <Container>
            <Header />
            <SearchContainer />
            <div className="itemDetail-container">
                <div className="itemDetail-left">
                    <div className="user-detail">
                        <img src={data?.item?.user?.avatar_url ?? data?.data?.user?.avatar_url ?? "data if something null"} alt="" />
                        <div className="name">
                            <h2>{data?.item?.user?.display_name ?? data?.data?.user?.display_name ?? "data if something null"} </h2>
                            <div className="channel">
                                @{data?.item?.user?.username ?? data?.data?.user?.username ?? "data if something null"}
                            </div>
                        </div>
                    </div>
                    <div className="user-desc">
                        {data?.item?.user?.desc ?? data?.data?.user?.desc ?? "data if something null"}
                    </div>

                    <div className="user-social">
                        <img src={fb} alt="" />
                        <img src={ins} alt="" />
                        <img src={tw} alt="" />
                    </div>
                </div>
                <div className="itemDetail-right">
                    <div className="main-img">
                        <img src={data?.data?.images?.downsized?.url ?? data?.item?.images?.downsized?.url} alt="" />
                    </div>
                    <div className="rating">
                        <div className="fb">
                            <FavoriteIcon /> Favorite
                        </div>
                        <div className="share">
                            <ShareIcon /> Share
                        </div>
                        <div className="embed">
                            <CodeIcon /> Favorite
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ItemDetail