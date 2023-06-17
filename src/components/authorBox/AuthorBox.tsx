const AuthorBox = () => {
    return (
        <>
            <aside className="author-box">
                <div className="wrapper">
                    <figure className="author-box-image">
                        <img src="images/sample-540x540-1.jpg" width="100" height="100" className="avatar" loading="lazy" alt="" decoding="async" />
                    </figure>
                    <div className="author-box-content">
                        <h4 className="author-box-title"><span><a href="" title="Visit o Líder" rel="author external">Nome</a></span></h4>
                        <div className="author-box-description">
                            informaões entre em contato <a href="">Facebook</a> ou <a href="">Instagram</a>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default AuthorBox