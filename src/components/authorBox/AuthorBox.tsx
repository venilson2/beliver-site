interface AuthorBoxProps {
    img_url: string;
    name: string;
    description: string;
    url_face?: string;
    url_insta?: string;
  }

const AuthorBox = ({img_url, name, description, url_face, url_insta}: AuthorBoxProps) => {
    return (
        <>
            <aside className="author-box">
                <div className="wrapper">
                    <figure className="author-box-image">
                        <picture>
                            <img src={img_url} width="100" height="100" className="avatar" loading="lazy" alt="" decoding="async" />
                        </picture>
                    </figure>
                    <div className="author-box-content">
                        <h4 className="author-box-title"><span title="Visit o Líder" rel="author external">{name}</span></h4>
                        <div className="author-box-description">
                        {description} {/* <a href={url_face}>Facebook</a> ou <a href={url_insta}>Instagram</a> */}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default AuthorBox