import styles from "./DefautlLayout.module.scss";
import classnames from "classnames/bind";
import Sidebar from "./Sidebar";
import Header from "../../../Components/Layout/Components/Header";
import Media from "../Media";
import Footer from "../Components/Footer";

const cx = classnames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("Sidebar")}>
        <Sidebar />
      </div>
      {/* <div className={cx("media")}>
        <Media />
      </div> */}
      <div className={cx("content")}>{children}</div>
      <div className={cx("footer")}>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
