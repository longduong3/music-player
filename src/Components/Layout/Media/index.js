import styles from "./Media.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackwardStep,
  faForwardStep,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Media() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("player-img")}>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/421/044/small/Multimedia__28117_29.jpg" />
      </div>
      <div className={cx("player-content")}>
        <div className={cx("player-name")}>Epic Cinematic – AudioPizza</div>
        <div className={cx("player-icon")}>
          <FontAwesomeIcon icon={faForwardStep} />
          <FontAwesomeIcon icon={faPlay} />
          <FontAwesomeIcon icon={faBackwardStep} />
        </div>
      </div>
      <div className={cx("player-progress")}>
        <input id="progress" type="range" max="100" />
      </div>
    </div>
  );
}

export default Media;
