import styles from "./listAudio.module.scss";
import classNames from "classnames/bind";
import apiClient from "../../spotify";
import Card from "./card";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
function ListAudio({ artistID }) {
  const [similar, setSimilar] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [newRelease, setNewRelease] = useState([]);
  useEffect(() => {
    if (artistID) {
      apiClient
        .get(`/artists/${artistID}/related-artists`)
        .then((res) => {
          const a = res.data?.artists.slice(0, 3);
          setSimilar(a);
        })
        .catch((err) => console.error(err));

      apiClient
        .get(`/browse/featured-playlists`)
        .then((res) => {
          const a = res.data?.playlists.items.slice(0, 3);
          setFeatured(a);
        })
        .catch((err) => console.error(err));

      apiClient
        .get(`/browse/new-releases`)
        .then((res) => {
          const a = res.data?.albums.items.slice(0, 3);
          setNewRelease(a);
        })
        .catch((err) => console.error(err));
    }
  }, [artistID]);
  return (
    <div className={cx("wrapper")}>
      <Card title="Similar Artists" similar={similar} />
      <Card title="Made For You" featured={featured} />
      <Card title="New Releases" newRelease={newRelease} />
    </div>
  );
}

export default ListAudio;
