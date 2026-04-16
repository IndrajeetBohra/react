import { Link } from "react-router";
import { Header } from "../components/Header";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <>
      <title>404 Page Not Found</title>

      <link rel="icon" type="image/svg+xml" href="status-notfound-404.svg" />

      <Header />
      <div className="container">
        <div className="section">
          <h1 className="error">404</h1>
          <div className="page">
            Ooops!!! The page you are looking for does not exist
          </div>
          <Link className="back-home" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
}
