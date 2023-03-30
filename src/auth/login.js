import React from "react";
import { loginEndpoint } from "../spotify";

import classNames from "classnames/bind";
import images from "../asset/img";
import styles from "./login.module.scss";
const cx = classNames.bind(styles);
function Login() {
  return (
    <div className={cx("login-page")}>
      <img src={images.logo} alt="logo" className={cx("logo")} />
      <a href={loginEndpoint}>
        <div className={cx("login-btn")}>LOG IN</div>
      </a>
    </div>
  );
}

export default Login;
