import { Link } from "react-router-dom";
import homeImg from "../assets/home-icon.png";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">
        <img src={homeImg} alt="home-img" />
      </Link>
    </nav>
  );
}

export default Navbar;
