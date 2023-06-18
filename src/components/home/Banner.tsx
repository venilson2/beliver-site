import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <>
    <header id="featured" className="site-featured">
		<div id="featured-media" className="featured-media has-overlay" style={{ height: '88vh' }}>
			<div className="wrapper" style={{ height: '88vh' }}>
				<div className="featured-episode">
					<div className="featured-episode-text">
						<p className="text-uppercase text-weight-medium text-opacity-75">A Paz do Senhor Jesus</p>
						<h1 className="display">Geração Samuel</h1>
                        <p className="alignjustify">
                            Buscamos impactar vidas, tocar corações e transformar comunidades através da arte teatral. 
                            Queremos ser <ins>instrumentos de Cristo</ins> para tocar a alma das pessoas, proporcionando momentos de reflexão, 
                            inspiração e conexão com o Senhor Jesus. Nosso propósito é compartilhar o amor de Deus e a mensagem transformadora de Cristo.
                        </p>
						<br />
						<p>
							<Link href="/about" className="button button-primary">Conheça Nossa História</Link> 
						</p>
					</div>  
					<div className="episode-player episode-type-audio">
					</div>
				</div>
				<div className="featured-cover">
				</div>
				<div className="featured-actions">
					<div className="featured-actions-main">
						{/* <a href="#"><span className="mdi mdi-podcast"></span> Subscribe on Apple Podcasts</a> */}
						{/* <a href="#"><span className="mdi mdi-rss"></span> Subscribe using RSS Feed</a> */}
					</div>
					<div className="featured-actions-secondary">
						{/* <a href="episodes.html">Browse all episodes <span className="mdi mdi-trending-neutral"></span></a> */}
					</div>
				</div>
			</div>
			{/* <video src="media/galaxy.mp4" poster="tmp/sample-featured-video2.jpg" preload="metadata" muted={true} autoPlay={true} loop={true} width="1320" height="756"></video> */}
		</div>
	</header>
  </>
  );
};

export default  Banner;
