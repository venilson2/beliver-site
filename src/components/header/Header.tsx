interface HeaderProps {
    title: string;
    subTitle?: string;
    imgUrl?: string;
  }

const Header = ({title, subTitle, imgUrl }: HeaderProps) => {
    return (
        <>
            <header id="featured" className="site-featured">
                <div id="featured-media" className="featured-media has-overlay">
                    <div className="wrapper">
                        <div className="page-title">
                            <h1 className="display">{title}</h1>
                            <div className="entry-header">
                                <div className="entry-meta">
                                    <span className="entry-date published">{subTitle}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* eslint-disable @next/next/no-img-element */}
                    <img src={imgUrl} alt="" />
                </div>
            </header>
        </>
    );
}

export default Header