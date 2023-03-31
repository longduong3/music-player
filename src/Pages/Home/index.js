import { useState, useEffect } from "react";
import Carousels from "../../Components/Layout/Components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import { Col, Container, Row } from "reactstrap";
import APIKit from "../../spotify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

// const handelStyle = () => {
//   setStyle({});
// };
function Home() {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    APIKit.get("me/playlists").then(function (res) {
      setPlaylists(res.data.items);
      console.log("day la playlist", res.data);
    });
  }, []);
  const navigate = useNavigate();
  const playPlaylist = (id) => {
    navigate("/media", { state: { id: id } });
  };
  return (
    <div className={cx("wrapper")}>
      <Carousels />
      <div className={cx("text-content")}> Playlists</div>
      <div className={cx("music-content")}>
        <Container className={cx("container")} fluid>
          <Row className={cx("container-row")}>
            {playlists?.map((playlist) => (
              <Col key={playlist.id} xs="2" className="container-col">
                <div className={cx("content-song")}>
                  <img src={playlist.images[0].url} alt="none" />
                  <button
                    className={cx("play-icon")}
                    onClick={() => playPlaylist(playlist.id)}
                  >
                    <FontAwesomeIcon icon={faCirclePlay} />
                  </button>
                  <div className={cx("song-name")}>{playlist.name}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className={cx("text-event")}>Upcoming event</div>
      <div className={cx("event-content")}>
        <Container className={cx("container")} fluid>
          <Row className={cx("event-container")}>
            <Col xs="4">
              <div className={cx("content-event")}>
                <img
                  src="https://i.pinimg.com/736x/4b/92/43/4b924325613089a96886f1f64ce6d657.jpg"
                  alt="none"
                />
              </div>
            </Col>
            <Col xs="4">
              <div className={cx("content-event")}>
                <img
                  src="https://previews.123rf.com/images/singpentinkhappy/singpentinkhappy1901/singpentinkhappy190100002/117709340-vector-colorful-music-festival-for-event-banner-and-poster-colorful-geometric-abstract-background.jpg"
                  alt="none"
                />
              </div>
            </Col>
            <Col xs="4">
              <div className={cx("content-event")}>
                <img
                  src="https://img.freepik.com/free-psd/urban-music-banner-template_23-2149078120.jpg"
                  alt="none"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={cx("text-event")}>Top artists</div>
      <div className={cx("music-content")}>
        <Container className={cx("container")} fluid>
          <Row className={cx("container-row")}>
            {/* {playlists?.map((playlist) => (
              <Col key={playlist.id} xs="2" className="container-col">
                <div className={cx("content-song")}>
                  <img src={playlist.images[0].url} />
                  <div className={cx("song-name")}>{playlist.name}</div>
                </div>
              </Col>
            ))} */}
          </Row>
        </Container>
      </div>
      <div className={cx("songs-content")}></div>
    </div>
  );
}
export default Home;
