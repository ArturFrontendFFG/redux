import { useSelector } from "react-redux";
import "./App.css";
import Comments from "./Comments";
import Likes from "./Likes.jsx";
import { Spin } from "./Spinn";
import Title from "./Title";

function App() {
  const error = useSelector(state => state.appReducer.error);
  console.log('error >>>>', error)
  return (
    <div className="App">
      <div className="wrap">
        <Spin/>
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="" />
            <Title/>
            <Likes/>
          </div>
          <Comments/>
        </div>
          {error && (
            <div className="error-message">{error}</div>
          )}
      </div>
    </div>
  );
}

export default App;
