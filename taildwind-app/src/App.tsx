import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gaming from "./components/Gaming";
import Learning from "./components/Learning";
import Live from "./components/Live";
import Movies from "./components/Movies";
import Music from "./components/Music";
import News from "./components/News";
import Sports from "./components/Sports";
import Trending from "./components/Trending";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="w-11/12 h-5/6 md:w-9/12 md:h-5/6">
          <Routes>
            <Route path={`/`} element={<Home />} />
            <Route path={`/gaming/`} element={<Gaming />} />
            <Route path={`/learning/`} element={<Learning />} />
            <Route path={`/live/`} element={<Live />} />
            <Route path={`/movies/`} element={<Movies />} />
            <Route path={`/music/`} element={<Music />} />
            <Route path={`/news/`} element={<News />} />
            <Route path={`/sports/`} element={<Sports />} />
            <Route path={`/trending/`} element={<Trending />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
