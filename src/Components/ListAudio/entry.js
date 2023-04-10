import styles from "./entry.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Entry({ title, subtitle, image }) {
  return (
    <div className={cx("wrapper")}>
      <img src={image} />
      <div className={cx("entry-right-body")}>
        <p className={cx("entry-title")}>{title}</p>
        <p className={cx("entry-subtitle")}>{subtitle}</p>
      </div>
    </div>
  );
}

export default Entry;
