import styles from "./Media.module.scss";
import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import apiClient from "../../../spotify";
import { useLocation } from "react-router-dom";
import Songcard from "../../Songcard";
import Queue from "../../Queue";
import AudioPlayer from "../../Audio";
import ListAudio from "../../ListAudio";

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
  console.log("this is tracks 1", currentTracks);
  useEffect(() => {
    if (location.state) {
      apiClient
        .get("playlists/" + location.state?.id + "/tracks")
        .then((res) => {
          setTracks(res.data.items);
          setCurrentTracks(res.data.items[0].track);
          console.log("data", res.data.items[0].track);
        });
    }
  }, [location.state]);
  useEffect(() => {
    setCurrentTracks(tracks[currentIndex]?.track);
  }, [currentIndex, tracks]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("left-player-body")}>
          <AudioPlayer
            currentTracks={currentTracks}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            total={tracks}
          />
          <ListAudio artistID={currentTracks?.album?.artists[0]?.id} />
        </div>
        <div className={cx("right-player-body")}>
          <Songcard album={currentTracks?.album} />
          <Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
        </div>
      </div>
    </div>
  );
}

export default Media;
