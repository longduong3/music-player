import { useEffect, useRef, useState } from "react";
import styles from "./audio.module.scss";
import classNames from "classnames/bind";

import Control from "./control";

const cx = classNames.bind(styles);

function AudioPlayer({ currentTracks, currentIndex, setCurrentIndex, total }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  console.log("cur", currentTracks);
  let audioSrc = total[currentIndex]?.track.preview_url;
  const audioRef = useRef(new Audio(total[0]?.track.preview_url));

  const intervalRef = useRef();
  const isReady = useRef(false);
  const { duration } = audioRef.current;
  const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        handleNext();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  useEffect(() => {
    if (audioRef.current.src) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    } else {
      if (isPlaying) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play();
        startTimer();
      } else {
        clearInterval(intervalRef.current);
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);

    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [currentIndex]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);
  const handleNext = () => {
    if (currentIndex < total.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else setCurrentIndex(0);
  };

  const handlePrev = () => {
    if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
    else setCurrentIndex(currentIndex - 1);
  };
  const artists = [];
  currentTracks?.album?.artists.forEach((artist) => {
    artists.push(artist.name);
  });
  console.log("name", currentTracks?.name);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("image-songs")}>
          <img src={currentTracks?.album?.images[0]?.url} />
        </div>
        <div className={cx("name-song")}>{currentTracks?.name}</div>
        <div className={cx("control-progress")}>
          <input
            className={cx("progress")}
            type="range"
            percentage={currentPercentage}
            isPlaying={true}
            value="0"
            step="1"
            min="0"
            max="100"
          />
        </div>
        <Control
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleNext={handleNext}
          handlePrev={handlePrev}
          total={total}
        />
      </div>
    </div>
  );
}

export default AudioPlayer;
