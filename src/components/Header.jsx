import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="blue lighten-1">
        <div className="nav-wrapper container">
          <Link to="/" className="brand-logo">
            React shop
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
