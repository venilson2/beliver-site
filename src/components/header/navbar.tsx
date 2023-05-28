import Link from "next/link";

const Navbar = () => {
  return (
    <header id="top-header" className="site-header">
      <div className="wrapper">
        <div className="site-identity">
          <a href="index.html" className="custom-logo-link" rel="home" title="Visit homepage">
            <img src="fonts/logo.svg" className="custom-logo" width="131" height="36" alt="Geração Samueel" />
            <img src="fonts/logo-dark.svg" className="custom-logo alt-version" width="131" height="36" alt="Geração Samuel" />
          </a>
          <p className="site-description screen-reader-text">Premium Podcast HTML Template</p>
        </div>
        <div id="menu-toggle" className="mobile-menu-toggle">
          <a href="#menu-main" title="Toggle menu"><em className="mdi mdi-menu"></em><em className="mdi mdi-close"></em></a>
        </div>
        <nav className="main-navigation">
          <ul id="menu-main" className="menu">
            <Link className="current-menu-item" href="/">Home</Link>
            <li className="menu-item-has-children">
              <a href="/">Episódios<em className="mdi mdi-chevron-down"></em></a>
              <ul className="sub-menu">
                <li><a href="/">Season 1</a></li>
                <li><a href="/">Season 2</a></li>
                <li className="menu-item-has-children">
                  <a href="#">Estudo biblíco</a>
                  <ul className="sub-menu">
                    <li><a href="#">Mateus</a></li>
                    <li><a href="#">Lucas</a></li>
                    <li><a href="#">João</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className=""><a>Blog</a></li>
            <li className=""><a href="/contato">Contato</a></li>
            <li className="menu-item-scheme">
              <a href="#" title="Toggle color scheme"><em className="mdi mdi-weather-night"></em><em className="mdi mdi-white-balance-sunny"></em><span>Trocar tema</span></a>
            </li>
            {/* <li className="menu-item-search">
              <a href="#searchform" title="Toggle search"><em className="mdi mdi-magnify"></em><em className="mdi mdi-close"></em></a>
              <form className="searchform" method="get" ac/" role="search">
                <label className="screen-reader-text">Search for:</label>
                <input type="search" value="" name="s" placeholder="Search…">
                  <button type="submit"><em className="mdi mdi-magnify"></em><span className="screen-reader-text">Search</span></button>
              </form>
            </li> */}
          </ul>
        </nav>
        <nav className="social-navigation">
          <ul className="menu">
            <li><a href="https://twitter.com" title="Twitter profile"><span className="screen-reader-text">Twitter profile</span></a></li>
            <li><a href="https://instagram.com" title="Instagram profile"><span className="screen-reader-text">Instagram profile</span></a></li>
            <li><a href="https://youtube.com" title="YouTube page"><span className="screen-reader-text">YouTube page</span></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;