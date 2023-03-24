import { useState } from "react";
import axios from "axios";
import Carousels from "../../Components/Layout/Components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import { Col, Container, Row } from "reactstrap";

const cx = classNames.bind(styles);

// const handelStyle = () => {
//   setStyle({});
// };
function Home() {
  // const [song, setSong] = useState([]);
  // axios({
  //   method: "post",
  //   url: "http://localhost:3000/music",
  //   data: { song },
  // });
  return (
    <div className={cx("wrapper")}>
      <Carousels />
      <div className={cx("text-content")}> New releases</div>
      <div className={cx("music-content")}>
        <Container className={cx("container")} fluid>
          <Row className={cx("container-row")}>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img
                  // onMouseEnter={handelStyle}
                  src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg"
                />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
            <Col xs="2" className="container-col">
              <div className={cx("content-song")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
                <div className={cx("song-name")}>Space Melody</div>
                <div className={cx("artist-name")}>
                  VIZE & Alan Walker & Leony
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={cx("text-event")}>Upcoming event</div>
      <div className={cx("event-content")}>
        <Container className={cx("container")} fluid>
          <Row className={cx("event-container")}>
            <Col xs="4">
              <div className={cx("content-event")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
              </div>
            </Col>
            <Col xs="4">
              <div className={cx("content-event")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
              </div>
            </Col>
            <Col xs="4">
              <div className={cx("content-event")}>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;
