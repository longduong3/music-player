import styles from "./Media.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import APIKit from "../../../spotify";
import apiClient from "../../../spotify";
import { useLocation } from "react-router-dom";
import Songcard from "../../Songcard";
import Queue from "../../Queue";
import Control from "../Control";

const cx = classNames.bind(styles);
function Media() {
  const [tracks, setTracks] = useState([]);
  const [currentTracks, setCurrentTracks] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  // useEffect(() => {
  //   APIKit.get("me/artists").then(function (res) {
  //     console.log("day la song", res.data);
  //     setSongs(res.data.item);
  //   });
  // }, []);
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          console.log(res.data.items);
          setTracks(res.data.items);
          setCurrentTracks(res.data.items[0].track);
        });
    }
  }, [location.state]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("left-player-body")}>
          <Control currentTracks={currentTracks.album} />
        </div>
        <div className={cx("right-player-body")}>
          <Songcard album={currentTracks.album} />
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>

        {/* <div className={cx("image-songs")}>
          <img src="https://images2.thanhnien.vn/Uploaded/minhnguyet/2022_11_21/nhac-viet2-7478.jpg" />
        </div>
        <div className={cx("name-song")}> A du a du</div>
        <div className={cx("control-progress")}>
          <input id="progress" className={cx("progress")} type="range" />
        </div>
        <div className={cx("control-play")}>
          <button>
            <FontAwesomeIcon icon={faForwardStep} />
          </button>
          <button>
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button>
            <FontAwesomeIcon icon={faBackwardStep} />
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Media;
