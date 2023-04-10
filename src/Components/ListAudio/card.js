import styles from "./card.module.scss";
import classNames from "classnames/bind";
import Entry from "./entry";
const cx = classNames.bind(styles);

function Card({ title, similar, featured, newRelease }) {
  console.log("car", title, similar, featured, newRelease);
  return (
    <div className={cx("wrapper")}>
      <p className="widget-title">{title}</p>
      {similar
        ? similar.map((artist) => (
            <Entry
              title={artist?.name}
              subtitle={artist?.followers?.total + " Followers"}
              image={artist?.images[2]?.url}
            />
          ))
        : featured
        ? featured.map((playlist) => (
            <Entry
              title={playlist?.name}
              subtitle={playlist?.tracks?.total + " Songs"}
              image={playlist?.images[0]?.url}
            />
          ))
        : newRelease
        ? newRelease.map((album) => (
            <Entry
              title={album?.name}
              subtitle={album?.artists[0]?.name}
              image={album?.images[2]?.url}
            />
          ))
        : null}
    </div>
  );
}

export default Card;
