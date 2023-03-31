import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <div>
        <h1>404</h1>
        <h2>This page does not exist</h2>
        <span>Go back to</span>
        <Link to="/"> Home page</Link>
      </div>
    </div>
  );
}

export default ErrorPage;
