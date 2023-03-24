import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSign, faSpinner } from "@fortawesome/free-solid-svg-icons";
import images from "../../../../asset/img";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { DropdownA } from "../../../../Components/Dropdown";

const cx = classNames.bind(styles);
function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [result, setResult] = useState([]);

  const inputRef = useRef();
  useEffect(() => {
    fetch(
      "https://641ce1001a68dc9e4612d0e9.mockapi.io/Song?name=Miss Darrel Mills"
    )
      .then((res) => res.json)
      .then((res) => {
        console.log(res.data);
      });
  }, [searchValue]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("logo")}>
        <img src={images.logo} />
      </div>
      <div className={cx("header-nav")}>
        <ul>
          <li>Profile</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <Tippy
          interactive
          visible={result.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <DropdownA>
                <p className={cx("search-title")}>result</p>
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
        <span>Sign in</span>
        <div className={cx("btn-siginin")}>
          <FontAwesomeIcon icon={faSign} />
        </div>
      </div>
    </div>
  );
}

export default Header;
