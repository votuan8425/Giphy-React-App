import "./App.css";
import Header from "./components/Header/Header";
import Media from "./components/Media/Media";
import SearchContainer from "./components/SearchContainer/SearchContainer";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <SearchContainer />
        <Media />
      </Container>
    </div>
  );
}

export default App;
