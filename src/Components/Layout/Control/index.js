import styles from "./control.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faForwardStep,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Control({ currentTracks }) {
  console.log("album", currentTracks);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("image-songs")}>
          <img src={currentTracks?.images[0]?.url} />
        </div>
        <div className={cx("name-song")}>{currentTracks?.name}</div>
        <div className={cx("control-progress")} isPlaying={true}>
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
        </div>
      </div>
    </div>
  );
}

export default Control;
