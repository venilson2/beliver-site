import Link from "next/link";

const Footer = () => {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Lógica para processar o envio do formulário aqui
  };

  return (
    <>
      <footer className="site-footer">
        <a id="scroll-to-top" className="scroll-to-top" href="#top-header" title="To the top">
          <em className="mdi mdi-chevron-up"></em>
          <svg width="150" height="50" viewBox="0 0 39.687499 13.229167">
            <path
              d="M-.0035 296.999c9.007 0 11.8302-13.1833 19.8324-13.1852C27.8372 283.8118 30.636 297 39.683 297c9.047 0-48.6935-.001-39.6864-.001z"
              transform="translate(0,-283.77081)"
            >
            </path>
          </svg>
        </a>
        <div className="widget-area">
          <div className="widget widget_logo">
            <h3>
              <Link href="/" className="footer-title">Geração Samuel</Link>
            </h3>
          </div>
          <div className="widget widget_nav_menu">
            <nav className="social-navigation">
              <ul className="menu">
                <li><a href="https://twitter.com"><span className="screen-reader-text">Twitter profile</span></a></li>
                <li><a href="https://instagram.com"><span className="screen-reader-text">Instagram profile</span></a></li>
                <li><a href="https://youtube.com"><span className="screen-reader-text">YouTube page</span></a></li>
              </ul>
            </nav>
          </div>
          <div className="widget widget_text">
            <div className="textwidget">
              <h3 className="widget-title">Não perca nossos episódios semanais</h3>
              <form className="mc4wp-form" onSubmit={handleSubmit}>
                <div className="mc4wp-form-fields">
                  <p>Algum texto bacana Algum texto bacana Algum texto bacana</p>
                  <p className="one-line">
                    <label htmlFor="subscribe_email" className="sr-only">
                      Subscription Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="subscribe_email"
                      placeholder="Seu e-mail"
                      required
                    />
                    <input
                      type="submit"
                      value="Inscreva-se"
                      className="button-color button-filled"
                    />
                  </p>
                </div>
              </form>
            </div>
          </div>
          <div className="copyright">
            <p>© 2023 - Geração Samuel </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;