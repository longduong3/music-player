import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faHouse,
  faIcons,
  faPlay,
  faSquareRss,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar-nav")}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHouse} />
            <Link to={"/"} className={cx("link-home")}>
              Home
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faCrown} />
            <Link to={"/albums"} className={cx("link-home")}>
              Albums
            </Link>
          </li>
          <li>
            <FontAwesomeIcon className={cx("play-icon")} icon={faPlay} />
            <Link to={"#"} className={cx("link-media")}>
              Player
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareRss} />
            <Link to={"/library"} className={cx("link-media")}>
              Library
            </Link>
          </li>
          <li>
            <FontAwesomeIcon icon={faIcons} />
            <a href="#">Releases</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
