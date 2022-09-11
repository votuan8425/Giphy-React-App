import React from 'react'
import './StoriesGiphySection.css'
const StoriesGiphySection = ({ giphysArray }) => {
    const getGiphy = () => {
        let randomIndex = Math.floor(Math.random() * 31);
        let randomGiphy = giphysArray[randomIndex];
        if (randomGiphy) {
            return randomGiphy
        }
    }

    const getColoredBorders = () => {
        const colors = ["purple", "sunshine", "bluepurple", "turqoise"];
        let randomIndex = Math.floor(Math.random() * 4) + 0;
        return colors[randomIndex];
    }

    const GiphyTitle = ({ giphy }) => {
        let giphyURL = giphy ? giphy.images.downsized.url : "";
        let colorBorders = getColoredBorders();
        return (
            <div className="title">
                <div className="giphy-title">
                    <div className="text-title">
                        <p>{giphy?.title}</p>
                    </div>
                    <img src={giphyURL} alt=""/>
                    <div className={`overlay-${colorBorders}`}></div>
                </div>
                <div className="line-box">
                    <div className={`line-top-${colorBorders}`}></div>
                    <div className={`line-middle-${colorBorders}`}></div>
                    <div className={`line-bottom-${colorBorders}`}></div>
                </div>
            </div>
        )
    }

    const gridGiphysConfig = [
        ["landscape-left-row", 3],
        ["landscape-right-row", 3],
        ["no-landscape-row", 4],
        ["landscape-middle-row", 3],
        ["no-landscape-row", 4],
    ]
    const createTiles = (numTiles) => {
        let tiles = [];
        for (let i = 0; i < numTiles; i++) {
            tiles.push(<GiphyTitle giphy={getGiphy()} />);
        }
        return tiles;
    }

    return (
        <div className="stories-section">
            {gridGiphysConfig.map(([layoutClass, numTiles], index) => {
                const tiles = createTiles(numTiles);
                return (
                    <div className={layoutClass}>
                        {tiles}
                    </div>
                )
            })}
        </div>
    )
}

export default StoriesGiphySection