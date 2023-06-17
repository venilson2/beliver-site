/* eslint-disable @next/next/no-img-element */

const Header = () => {
    return (
        <>
            <header id="featured" className="site-featured">
                <div id="featured-media" className="featured-media has-overlay">
                    <div className="wrapper">
                        <div className="page-title">
                            <h1 className="display">Sobre</h1>
                            <div className="entry-header">
                                <div className="entry-meta">
                                    <span className="entry-date published">Um pouco de nós!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="images/sample-1400x900-1.jpg" alt="" />
                </div>
            </header>
        </>
    );
}

export default Header