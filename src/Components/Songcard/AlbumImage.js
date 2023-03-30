import styles from "./albumimage.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function AlbumImage({ url }) {
  console.log(url);
  return (
    <div className={cx("album-img")}>
      <img src={url} alt="none" />
    </div>
  );
}

export default AlbumImage;
