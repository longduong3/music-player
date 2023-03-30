import styles from "./Songcard.module.scss";
import classNames from "classnames/bind";
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";

const cx = classNames.bind(styles);
function Songcard({ album }) {
  return (
    <div className={cx("wrapper")}>
      <AlbumImage url={album?.images[1]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
}

export default Songcard;
