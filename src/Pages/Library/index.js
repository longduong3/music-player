import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./libra.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
function Library() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "https://v1.nocodeapi.com/longduong/spotify/CPSAgeQbbWXEPamn/following",
      params: [],
    })
      .then(function (response) {
        // handle success
        setArtists(response.data.artists.items);
        console.log(response.data.artists.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("choose")}>
        <ul>
          <li>Artist</li>
          <li>Albums</li>
          <li>Playlists</li>
        </ul>
      </div>
      <div className={cx("content")}>
        {artists.map((artist) => (
          <div className={cx("children")}>
            <img src={artist.images[1].url} alt="none" />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Library;
