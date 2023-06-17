import { url } from "inspector"
import SpacerSection from "../spacerSection/SpacerSection";
import AuthorBox from "../authorBox/AuthorBox";

const Content = () => {
    return (
        <>
                <figure className="block-image alignleft shine-on-children-hover">
					<a href="tmp/sample-400x600-3.jpg" data-fancybox="test-gallery">
                        <img src="images/sample-540x540-1.jpg" width="200" height="300" loading="lazy" alt="" />
                        <span className="shine-canvas"></span></a>
					<figcaption className="caption-text">Adipiscing arcu etiam</figcaption>
				</figure>
				<p>
                    Objectively morph e-business synergy through prospective markets. Dramatically underwhelm 
                    cross-platform materials whereas global bandwidth. Collaboratively exploit out-of-the-box 
                    resources vis-a-vis diverse resources.Credibly streamline proactive scenarios through scalable 
                    channels. Quickly reconceptualize flexible processes. Vivamus cursus tempor sem, et pulvinar 
                    velit egestas. Nunc eleifend felis porttitor libero volutpat, porta feugiat ex ornare. Quisque 
                    sit amet lorem. &nbsp;Nunc eleifend felis porttitor libero volutpat, porta feugiat ex ornare. 
                    Quisque sit amet lorem nulla. Nulla convallis placerat dui et sagittis. Maecenas sagittis sem arcu. 
                    Fusce rhoncus elementum rutrum. Mauris aliquet sapien et mauris tristique lobortis. Aenean at dictum 
                    ligula, id semper velit.
                </p>
                <br />
                <h6></h6>
				<div className="block-episode">
					<div className="episode-player episode-type-video-embed shine-on-hover">
						<iframe 
                            data-src="https://player.vimeo.com/video/737566297?h=04a3ee525e&amp;color=fdb750&amp;autoplay=1" 
                            allow="autoplay; fullscreen; picture-in-picture" allowFullScreen width="640" height="360"></iframe>
						<a 
                            href="https://vimeo.com/737566297" 
                            className="media-cover" 
                            style={{backgroundImage: "url('images/sample-540x540-1.jpg')"}}>
                                <span className="media-play-pause"></span>
                        </a>
					<span className="shine-canvas"></span></div>
				</div>
                <p>
                    <strong>
                        Objectively morph e-business synergy through prospective markets. Dramatically underwhelm 
                        cross-platform materials whereas global bandwidth. Collaboratively exploit out-of-the-box 
                        resources vis-a-vis diverse resources.Credibly streamline proactive scenarios through scalable 
                    </strong>
                </p>
        </>
    );
}


export default Content