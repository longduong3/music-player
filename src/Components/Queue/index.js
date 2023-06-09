import styles from "./queue.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Queue({ tracks, setCurrentIndex }) {
  console.log("this is ", tracks?.track?.id);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("queue")}>
        <p className={cx("title-queue")}>Next songs</p>
        <div className={cx("queue-list")}>
          {tracks?.map((track, index) => (
            <div
              key={track?.track?.id}
              className={cx("queue-items")}
              onClick={() => setCurrentIndex(index)}
            >
              <p className={cx("track-name")}>{track?.track?.name}</p>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Queue;
