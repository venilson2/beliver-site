const Navbar = () => {
  return (
    <header id="top-header" className="site-header">
      <div className="wrapper">
        <div className="site-identity">
          <a className="custom-logo-link">
            <picture>
              <img src="fonts/logo.svg" className="custom-logo" width="131" height="36" alt="Bateria" />
            </picture>
            <picture>
              <img src="fonts/logo-dark.svg" className="custom-logo alt-version" width="131" height="36" alt="Bateria" />
            </picture>
          </a>
          <p className="site-description screen-reader-text">Premium Podcast HTML Template</p>
        </div>
        <div id="menu-toggle" className="mobile-menu-toggle">
          <a href="#menu-main" title="Toggle menu"><em className="mdi mdi-menu"></em><em className="mdi mdi-close"></em></a>
        </div>
        <nav className="main-navigation">
          <ul id="menu-main" className="menu">
            <li className="menu-item-has-children current-menu-parent collapse">
              <a href="index.html">Home<em className="mdi mdi-chevron-down"></em></a>
              <ul className="sub-menu">
                <li className="current-menu-item"><a href="index.html">Home - Audio</a></li>
                <li><a href="index-video.html">Home - Video</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="episodes.html">Episodes<em className="mdi mdi-chevron-down"></em></a>
              <ul className="sub-menu">
                <li><a href="episodes.html">Episodes (sidebar)</a></li>
                <li><a href="episodes-grid.html">Episodes (grid)</a></li>
                <li><a href="episodes-list.html">Episodes (list)</a></li>
                <li><a href="single-episode.html">Audio episode</a></li>
                <li><a href="single-episode-video.html">Video episode</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="blog.html">Blog<em className="mdi mdi-chevron-down"></em></a>
              <ul className="sub-menu">
                <li><a href="blog.html">Browse posts</a></li>
                <li><a href="single-post.html">Single post</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="shop.html">Shop<em className="mdi mdi-chevron-down"></em></a>
              <ul className="sub-menu">
                <li><a href="shop.html">Right sidebar (2 cols)</a></li>
                <li><a href="shop-wide.html">Fullwidth (3 cols)</a></li>
                <li><a href="shop-cart.html">Cart</a></li>
                <li><a href="shop-checkout.html">Checkout</a></li>
                <li><a href="single-product.html">Single product</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="styleguide.html">Features<em className="mdi mdi-chevron-down"></em></a>
              <ul className="sub-menu">
                <li><a href="styleguide.html">Styleguide</a></li>
                <li className="menu-item-has-children">
                  <a href="#">Submenus</a>
                  <ul className="sub-menu">
                    <li><a href="#">Submenu item 1</a></li>
                    <li><a href="#">Submenu item 2</a></li>
                    <li><a href="#">Submenu item 3</a></li>
                  </ul>
                </li>
                <li><a href="404.html">404 not found</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
            <li className="menu-item-scheme">
              <a href="#" title="Toggle color scheme"><em className="mdi mdi-weather-night"></em><em className="mdi mdi-white-balance-sunny"></em><span>Toggle color scheme</span></a>
            </li>
            {/* <li className="menu-item-search">
              <a href="#searchform" title="Toggle search"><em className="mdi mdi-magnify"></em><em className="mdi mdi-close"></em></a>
              <form className="searchform" method="get" action="blog.html" role="search">
                <label className="screen-reader-text">Search for:</label>
                <input type="search" value="" name="s" placeholder="Search…">
                  <button type="submit"><em className="mdi mdi-magnify"></em><span className="screen-reader-text">Search</span></button>
              </form>
            </li> */}
            <li className="menu-item-cart">
              <a href="shop-cart.html" title="Shopping cart"><em className="mdi mdi-shopping-outline"></em><span className="cart-text">Shopping cart</span><span className="cart-total">3</span></a>
            </li>
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