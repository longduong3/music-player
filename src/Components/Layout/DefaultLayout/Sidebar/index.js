import styles from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import Media from "../../Media";

const cx = classNames.bind(styles);
function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("sidebar-nav")}>
        <ul>
          <li>Home</li>
          <li>Artisis</li>
          <li>News</li>
          <li>Releases</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
