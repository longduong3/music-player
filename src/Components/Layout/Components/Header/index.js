import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSign, faSpinner } from "@fortawesome/free-solid-svg-icons";
import images from "../../../../asset/img";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { DropdownA } from "../../../../Components/Dropdown";
import { Link } from "react-router-dom";
import { privateRoutes } from "../../../../routes";
import Profile from "../../../../Pages/Profile";
import apiClient from "../../../../spotify";

const cx = classNames.bind(styles);
function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);
  const [image, setImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/21/21104.png"
  );

  const inputRef = useRef();
  useEffect(() => {
    apiClient.get("me").then((res) => {
      setImage(res.data.images[0].url);
    });
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <img src={images.logo} />
      </div>
      <div className={cx("header-nav")}>
        <ul>
          <li>
            <Link to={"/profile"} className={cx("link-profile")}>
              Profile
            </Link>
          </li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <Tippy
          interactive
          visible={result.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <DropdownA>
                <p className={cx("search-title")}></p>
                {result.map((result) => (
                  <div key={result.id}>{result.name}</div>
                ))}
              </DropdownA>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input
              ref={inputRef}
              value={searchValue}
              placeholder="Searching here..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {!!searchValue && (
              <button
                className={cx("clear")}
                onClick={() => {
                  setSearchValue("");
                  inputRef.current.focus();
                }}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            )}
            {/* <button className={cx("loading")}>
              <FontAwesomeIcon icon={faSpinner} />
            </button> */}
            <button className={cx("search-btn")}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </Tippy>
      </div>
      <div className={cx("action")}>
        <img src={image} className={cx("user-img")} alt="user" />
      </div>
    </div>
  );
}

export default Header;
