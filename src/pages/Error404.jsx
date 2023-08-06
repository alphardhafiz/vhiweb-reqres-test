import { Link } from "react-router-dom";
import Button from "../components/Button";

const Error404 = () => {
  return (
    <div>
      <div id="oopss">
        <div id="error-text">
          <img
            src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
            alt={404}
          />
          <span>Error 404</span>
          <p className="p-a">Page not found! ...</p>
          <Link to={"/"}>
            <Button text="back to home" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
