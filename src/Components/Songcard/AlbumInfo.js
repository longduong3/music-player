import styles from "./albuminfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function AlbumInfo({ album }) {
  const artists = [];
  album?.artists?.forEach((element) => {
    artists.push(element.name);
  });
  return (
    <div className={cx("wrapper")}>
      <div className={cx("albumName-container")}>
        <div className={cx("album-name")}>
          <p>{album?.name + "-" + artists?.join(",")}</p>
        </div>
      </div>
      <div className={cx("releases")}>
        <span>Release date: {album?.release_date}</span>
      </div>
    </div>
  );
}

export default AlbumInfo;
