"use strict";

document.querySelectorAll( ".main-navigation .menu-item-has-children > a" ).forEach( function( menu_link ) {
	menu_link.addEventListener( "click", function(e) {
		// check if we are in mobile view (if mobile hamburger toggle is visible)
		if ( null !== document.querySelector( "#menu-toggle" ).offsetParent ) {
			// Handle sub-menus visibility for mobile view
			var parent = e.target.parentElement;
			if ( ! parent.classList.contains( "menu-item-has-children" ) ) {
				parent = parent.parentElement;
			}
			parent.classList.toggle( "collapse" );
			e.preventDefault();
			return false;
		} else {
			if ( window.matchMedia( "(any-hover: none)" ).matches ) {
				// prevent click events on touch based devices
				e.preventDefault();
				return false;
			}
		}
	});
});

var episode_players = document.querySelectorAll( ".episode-player audio, .episode-player video" );
if ( episode_players.length > 0 ) {
	episode_players.forEach( function( player ) {
		player.addEventListener( "play", function(e) {
			e.target.parentElement.classList.add( "is-loaded", "playing" );
			if ( document.body.classList.contains( "video-sticky" ) && e.target.parentElement.classList.contains( "episode-type-video" ) ) {
				document.body.classList.add( "video-sticky-playing" );
			}
		});
		player.addEventListener( "pause", function(e) {
			e.target.parentElement.classList.remove( "playing" );
		});
		player.addEventListener( "ended", function(e) {
			e.target.parentElement.classList.remove( "playing" );
		});
		player.addEventListener( "timeupdate", function(e) {
			var secs = Math.floor( e.target.currentTime % 60 ).toString().padStart(2, '0');
			var mins = Math.floor( e.target.currentTime / 60 ).toString().padStart(2, '0');
			var hours = Math.floor( mins / 60 );
			if ( hours < 1 ) {
				e.target.parentElement.querySelector( ".media-current-time" ).textContent = mins + ":" + secs;
			} else {
				e.target.parentElement.querySelector( ".media-current-time" ).textContent = hours.toString().padStart(2, '0') + ":" + mins + secs;
			}
			e.target.parentElement.querySelector( ".media-time-rail-current" ).style.width = ( e.target.currentTime/ e.target.duration * 100 ) + "%";
		});
		var play_buttons = player.parentElement.querySelectorAll( ".media-play-pause" );
		play_buttons.forEach( function( play_button ) {
			play_button.addEventListener( "click", function(e) {
				var media = e.target.parentElement.parentElement.querySelector( "audio,video" );
				if ( ! media.paused ) {
					media.pause();
				} else {
					document.querySelectorAll( 'audio, video' ).forEach( function( el ) {
						if ( el != media ) {
							el.pause();
						}
					} );
					media.play();
				}
			});
		} );
		player.addEventListener( "click", function(e) {
			e.target.parentElement.querySelector( ".media-play-pause" ).dispatchEvent( new Event( "click" ) );
		});
		var media_rate = player.parentElement.querySelector( ".media-rate" );
		if ( media_rate ) {
			media_rate.addEventListener( "click", function(e) {
				var media          = e.target.parentElement.parentElement.querySelector( "audio,video" );
				var playback_rates = e.target.dataset.rates.split(' ');
				var current_rate   = playback_rates.shift();
				playback_rates.push( current_rate );
				e.target.dataset.rates = playback_rates.join(' ');
				e.target.textContent   = current_rate + 'x';
				media.playbackRate     = parseFloat( current_rate );
			});
		}
		player.parentElement.querySelector( ".media-time-rail" ).addEventListener( "click", function(e) {
			var media          = e.target.parentElement.parentElement.querySelector( "audio,video" );
			var timeline_width = window.getComputedStyle( e.target ).width;
			var timeline_val   = e.offsetX / parseInt( timeline_width, 10 );
			if ( timeline_val < 0.01 ) {
				media.currentTime = 0;
			} else {
				media.currentTime = timeline_val * media.duration;
			}
		});
		var media_fullscreen = player.parentElement.querySelector( ".media-fullscreen" );
		if ( media_fullscreen ) {
			media_fullscreen.addEventListener( "click", function(e) {
				var parent = e.target.parentElement.parentElement;
				if (document.fullscreenElement) {
					document.exitFullscreen();
				} else {
					parent.requestFullscreen();
				}
			});
			player.parentElement.addEventListener( "fullscreenchange", function(e) {
				if (document.fullscreenElement) {
					e.target.classList.add( "is-fullscreen" );
				} else {
					e.target.classList.remove( "is-fullscreen" );
				}
			});
		}
		var media_pip = player.parentElement.querySelector( ".media-pip" );
		if ( media_pip && ( "pictureInPictureEnabled" in document ) ) {
			media_pip.addEventListener( "click", function(e) {
				if (document.pictureInPictureElement) {
					document.exitPictureInPicture();
				} else if ( document.pictureInPictureEnabled ) {
					var media = e.target.parentElement.parentElement.querySelector( "video" );
					media.requestPictureInPicture();
				}
			});
			player.parentElement.classList.add( "is-pip-supported" );
		}
		if ( player.parentElement.classList.contains( "episode-type-video" ) ) {
			var inactivity_timer;
			var user_activity;
			var activity_check_timer = setInterval( function() {
				if ( user_activity ) {
					// reset activity tracker
					user_activity = false;
					// if the user state was inactive, set the state to active
					if ( player.parentElement.classList.contains( "is-inactive" ) ) {
						player.parentElement.classList.remove( "is-inactive" );
					}
					// clear any existing inactivity timeout to start the timer over
					clearTimeout( inactivity_timer );

					// if no more activity has occurred the user will be considered inactive
					inactivity_timer = setTimeout( function() {
						if ( ! user_activity ) {
							player.parentElement.classList.add( "is-inactive" );
						}
					}, 2000);
				}
			}, 250);
			player.parentElement.addEventListener( "mousemove", function(e) {
				if ( document.documentElement.className.match( "no-touchevents" ) ) {
					user_activity = true;
				}
			});

			var sticky_dismiss = player.parentElement.querySelector( ".sticky-video-dismiss" );
			if ( sticky_dismiss ) {
				sticky_dismiss.addEventListener( "click", function(e) {
					e.preventDefault();
					player.parentElement.classList.add( "dismiss-sticky" );
				});
			}
		}
		var media_cover = player.parentElement.querySelector( ".media-cover" );
		if ( media_cover ) {
			media_cover.addEventListener( "click", function(e) {
				e.preventDefault();
				e.target.parentElement.querySelector( ".media-play-pause" ).dispatchEvent( new Event( "click" ) );
			});
		}
	});
}

// Handle episode embeds
var episode_embeds = document.querySelectorAll( ".episode-player iframe" );
if ( episode_embeds.length > 0 ) {
	episode_embeds.forEach( function( embed ) {
		embed.parentElement.addEventListener( "click", function(e) {
			var embed = e.target.parentElement.querySelector( "iframe" );
			var embed_src = embed.getAttribute( "data-src" );
			embed.src = embed_src;
			embed.parentElement.classList.add( "is-loaded" );
			if ( document.body.classList.contains( "video-sticky" ) && e.target.parentElement.classList.contains( "episode-type-video-embed" ) ) {
				document.body.classList.add( "video-sticky-playing" );
			}
			e.preventDefault();
		});
	});
}

// Handle episode jumping points
var episode_jumps = document.querySelectorAll( '.episode-jumping-point[href^="#"]' );
if ( episode_jumps.length > 0 ) {
	episode_jumps.forEach( function( jump ) {
		jump.addEventListener( "click", function(e) {
			e.preventDefault();
			var media = document.querySelector( "#featured-media .episode-player audio, #featured-media .episode-player video" );
			var jump_sec = 0, m = 1, p = e.target.getAttribute( "href" ).substr( 1 ).split( ":" );
			if ( p.length > 0  ) {
				media.play();
				while ( p.length > 0 ) {
					jump_sec += m * parseInt( p.pop(), 10 );
					m *= 60;
				}
				media.currentTime = jump_sec;
			}
		});
	});
}

// Toggle color scheme (default or alt, see also detect-support.js).
document.querySelector( ".main-navigation .menu-item-scheme > a" ).addEventListener( "click", function(e) {
	var current_scheme = document.documentElement.getAttribute( "data-scheme" );
	if ( ! current_scheme || "default" === current_scheme ) {
		current_scheme = "alt";
	} else {
		current_scheme = "default";
	}
	document.documentElement.setAttribute( "data-scheme", current_scheme );
	localStorage.setItem( "colorSchemeBateria", current_scheme );

	e.preventDefault();
	return false;
});