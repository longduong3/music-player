import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer-info")}>
        <h2>Spotify</h2>
        <p>Record Label & Internet Radio, Online music HTML Template.</p>
        <p>support@volna.template</p>
        <p>8 234 567-89-00</p>
      </div>
      <div className={cx("footer-info1")}>
        <h2>The Spotify</h2>
        <ul>
          <li>About</li>
          <li>Profile</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className={cx("footer-info2")}>
        <h2>Browse</h2>
        <ul>
          <li>Artist</li>
          <li>Releases</li>
          <li>Events</li>
        </ul>
      </div>
      <div className={cx("footer-info3")}>
        <h2>Help</h2>
        <ul>
          <li>Account</li>
          <li>Support devices</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
