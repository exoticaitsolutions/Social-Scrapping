import "../../css/Dstyle.css";
import 'boxicons/css/boxicons.min.css';
import { Link } from "react-router-dom";

export function Sidebar() {

  return (
    <>
      <nav className="sidebar close">
        <header>
          <div className="image-text">
            <span className="image">
              <img src="./logo.png" alt="" />
            </span>
            <div className="text logo-text">
              <span className="name">Scraping</span>
              <span className="profession">Web Scraping</span>
            </div>
          </div>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box" >
              <i className="bx bx-search icon"></i>
              <input type="text" placeholder="Search..." />
            </li>
            <ul className="menu-links">
              <li className="nav-link">
                <Link to="/">
                  <i className="bx bx-home-alt icon"></i>
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>
              <li className="nav-link">
                  <i className='bx bxl-twitter icon'></i>
                  <span className="text nav-text">Twitter
                <ul className="dropdown-menu">
                  <li><Link to="/twitter/tweets-by-profile-name">get tweets by profile name</Link></li>
                  <li><Link to="/twitter/trending-hashtag">get trending hashtag</Link></li>
                  <li><Link to="/twitter/tweets-by-hashtag">get tweets by hashtag name</Link></li>
                  <li><Link to="/twitter/get-tweets-by-post-ids">get tweets by post ids</Link></li>
                  <li><Link to="/twitter/get-tweets-comments-by-postids">get tweets comments post ids</Link></li>
                </ul>
                </span>
              </li>
              <li className="nav-link">
                <Link to="/">
                  <i className='bx bxl-facebook-circle icon'></i>
                  <span className="text nav-text">Facebook</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/">
                  <i className='bx bxl-instagram icon'></i>
                  <span className="text nav-text">Instagram</span>
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/">
                  <i className="bx bx-heart icon"></i>
                  <span className="text nav-text">Likes</span>
                </Link>
              </li>
              <li className="nav-link">
                <a href="#">
                  <i className="bx bx-wallet icon"></i>
                  <span className="text nav-text">Wallets</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li className="">
              <a href="#">
                <i className="bx bx-log-out icon"></i>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
