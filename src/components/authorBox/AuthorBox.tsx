const AuthorBox = () => {
    return (
        <>
            <aside className="author-box">
                <div className="wrapper">
                    <figure className="author-box-image">
                        <img src="images/sample-500x500-1.jpg" width="100" height="100" className="avatar" loading="lazy" alt="" decoding="async" />
                    </figure>
                    <div className="author-box-content">
                        <h4 className="author-box-title"><span>Published by <a href="https://liviucerchez.com" title="Visit Liviu Cerchez’s website" rel="author external">Liviu Cerchez</a></span></h4>
                        <div className="author-box-description">
                            Im Liviu, a seasoned web developer and graphic designer living in my home town Cluj-Napoca, Romania. Find me on <a href="https://liviucerchez.com">liviucerchez.com</a>, <a href="https://twitter.com/liviucerchez">Twitter</a>, <a href="https://instagram.com/liviucerchez">Instagram</a> or <a href="https://dribbble.com/liviucerchez">Dribbble</a> for more updates.
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default AuthorBox