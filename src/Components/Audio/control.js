import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./audio.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Control({ isPlaying, setIsPlaying, handleNext, handlePrev }) {
  return (
    <div className={cx("control-play")}>
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faForwardStep} />
      </button>
      <button>
        <div
          className={
            isPlaying ? "play-pause-btn flex active" : "play-pause-btn flex"
          }
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <FontAwesomeIcon icon={faPause} />
          ) : (
            <FontAwesomeIcon icon={faPlay} />
          )}
        </div>
      </button>
      <button onClick={handleNext}>
        <FontAwesomeIcon icon={faBackwardStep} />
      </button>
    </div>
  );
}

export default Control;
