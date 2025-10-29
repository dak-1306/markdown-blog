import { Link } from "react-router-dom";

//icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-gradient-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold font-heading">
        <FontAwesomeIcon icon={faBlog} className="mr-2" />
        My Markdown Blog
      </h1>
      <nav className="font-body">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-icon-home hover:underline">
              <FontAwesomeIcon icon={faHome} className="mr-1" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/create" className="text-icon-posts hover:underline">
              <FontAwesomeIcon icon={faAdd} className="mr-1" />
              Create Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
