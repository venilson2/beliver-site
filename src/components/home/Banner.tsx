import React from 'react';

const Banner = () => {
  return (
    <>
        <section id="featured" className="site-featured">
        <div id="featured-media" className="featured-media has-overlay">
            <div className="wrapper">
                <div className="featured-episode">
                    <div className="featured-episode-text">
                        <div className="sales-box-content ">
                            <h1 className="xxxx-large">Geração Samuel</h1>
                            <br />
                                <p className="alignjustify">
                                    Buscamos impactar vidas, tocar corações e transformar comunidades através da arte teatral. 
                                    Queremos ser <ins>instrumentos de Cristo</ins> para tocar a alma das pessoas, proporcionando momentos de reflexão, 
                                    inspiração e conexão com o Senhor Jesus. Nosso propósito é compartilhar o amor de Deus e a mensagem transformadora de Cristo.
                                </p>
                            <br />
                            <a href="#" className="button button-big button-filled button-primary">Conheça nossa história!</a>
                        </div>
                    </div>
                </div>
                {/* <div className="featured-cover">
                    <a href="single-episode.html" className="shine-on-hover">
                        <picture>
                        <img src="images/sample-featured2.jpg" alt="Geração Samuel" />
                        </picture>
                        <span className="shine-canvas"></span>
                    </a>
                </div> */}
            </div>
        </div>
    </section>
  </>
  );
};

export default  Banner;
