import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SearchDetail from "./components/SearchDetail/SearchDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import AllTrending from "./components/AllTrending/AllTrending";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import AllArtists from "./components/AllTrending/AllArtists";
import AllClips from "./components/AllTrending/AllClips";
import AllStories from './components/AllTrending/AllStories'
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>;
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<App />} />
        <Route path="/search/:input" element={<SearchDetail />} />
        <Route path="/trending-gifs" element={<AllTrending />} />
        <Route path="/gifs/:itemID" element={<ItemDetail />} />
        <Route path="/artists" element={<AllArtists />} />
        <Route path="/clips" element={<AllClips />} />
        <Route path="/stories" element={<AllStories />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
