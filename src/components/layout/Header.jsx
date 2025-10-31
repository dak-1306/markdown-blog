import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBlog,
  faHome,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../ui/Tooltip";

function Header() {
  return (
    <header className="bg-gradient-primary text-white p-4 flex items-center justify-between gap-4 relative overflow-hidden">
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      <h1 className="text-2xl font-bold font-heading flex items-center gap-2 relative z-10">
        <FontAwesomeIcon icon={faBlog} />
        My Markdown Blog
      </h1>

      <div className="hidden md:block relative z-10">
        <div className="flex space-x-2">
          <input
            type="search"
            className="px-3 py-1.5 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50"
            placeholder="Search..."
          />
          <Button variant="secondary" size="small">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </div>

      <nav className="flex items-center gap-4 mr-4 relative z-10">
        <ul className="flex items-center space-x-4">
          <li>
            <Link
              to="/"
              className="text-white hover:underline flex items-center gap-2"
            >
              <Tooltip content="Home">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary-dark text-white shadow-primary border border-white/20">
                  <FontAwesomeIcon icon={faHome} className="w-4 h-4" />
                </span>
              </Tooltip>
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="text-white hover:underline flex items-center gap-2"
            >
              <Tooltip content="Create Post">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-primary-dark text-white shadow-primary border border-white/20">
                  <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
                </span>
              </Tooltip>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
