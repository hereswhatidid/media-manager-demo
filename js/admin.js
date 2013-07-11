var mediaPopup = '';
(function ($) {
	"use strict";
	$(function () {
		/**
		 * Displays some generic information about the selected items in the Media Manager
		 * 
		 * @author Gabe Shackle <gabe@hereswhatidid.com>
		 * @return void
		 */
		function handleSelect() {
			var selection = mediaPopup.state().get('selection'),
					output = '';
			if( selection ) {
				selection.each(function(attachment){
					console.log( attachment.attributes );
					output += 'Name: ' + attachment.attributes.name + '\n';
					output += 'File Name: ' + attachment.attributes.filename + '\n';
					output += 'Mime Type: ' + attachment.attributes.mime + '\n';
					output += 'Sub Type: ' + attachment.attributes.subtype + '\n';
					output += '-----------------------------------------------------------------------------------' + '\n';
				});
			}

			$('#output')
					.val($('#output').val() + output);
		}
		/**
		 * Clears any existing Media Manager instances
		 * 
		 * @author Gabe     Shackle       <gabe@hereswhatidid.com>
		 * @return void
		 */
		function clear_existing() {
			if ( typeof mediaPopup !== 'string' ) {
				mediaPopup.detach();
				mediaPopup = '';
			}
		}
		$('#sampleform')
				.on( 'click', '.basic-field', function(e) {
					e.preventDefault();

					clear_existing();

					mediaPopup = wp.media( {
						title: 'Basic Media Chooser'
					} );

					mediaPopup.on( 'select', handleSelect );
					mediaPopup.open();
				})
				.on( 'click', '.multi-field', function(e) {
					e.preventDefault();

					clear_existing();

					mediaPopup = wp.media( {
						multiple: 'add', // add, reset, false
						title: 'Multiple Select',
						button: {
							text: 'Add a Bunch!'
						}
					} );

					mediaPopup.on( 'select', handleSelect );
					mediaPopup.open();
				})
				.on( 'click', '.textfield-field', function(e) {
					e.preventDefault();
					var $self = $(this),
							$inpField = $self.parent('.field-holder').find('input.textfield');

					clear_existing();

					mediaPopup = wp.media( {
						multiple: false, // add, reset, false
						title: 'Populate a Field',
						button: {
							text: 'Add One Item'
						}
					} );

					mediaPopup.on( 'select', function() {
						var selection = mediaPopup.state().get('selection'),
								fileUrl = '';
						if( selection ) {
							fileUrl = selection.first().attributes.url;
							$inpField.val( fileUrl.replace( baseUrl, '' ) );
						}
					});
					mediaPopup.open();
				})
				.on( 'click', '.custom-field', function(e) {
					e.preventDefault();

//					clear_existing();

					mediaPopup = wp.media({
						button: {
							text: 'Add Something'
						},
						states : [
							new wp.media.controller.Library({
								library		:	wp.media.query({
//									uploadedTo: 1, // id of the post this media file was attached to
									type: 'image',
									order: 'DESC',
									orderby: 'dateFormatted' // display order of the media files, 'dateFormatted', 'menuOrder', 'name', 'subtype', 'type'
//									  'name', 'author', 'date', 'title', 'modified', 'uploadedTo', 'id', 'post__in', 'menuOrder'
								}),
								describe: true, // show or hide the image caption
								multiple: 'add', // false, 'add', 'reset'
								sortable: true,
								title		:	'Images',
								sidebar: 'settings', //
								priority	:	20,
								filterable	:	'all', // or 'none'
								syncSelection: true,
								gutter: 8, // space between media items
								edge: 200 // thumbnail display size (square)
							}),
							new wp.media.controller.Library({
								id:         'gallery3',
								title:      'JPEGs Only',
								priority:   60,
								// toolbar:    'main-insert',
								filterable: 'none',
								library:  wp.media.query({
									'post_mime_type': 'image/jpeg',
									// 's': 'small'
									// Available properties:
									// 'search':    's',
									// 'type':      'post_mime_type',
									// 'perPage':   'posts_per_page',
									// 'menuOrder': 'menu_order',
									// 'uploadedTo': 'post_parent'
								})
							}),
							new wp.media.controller.Library({
								id:         'gallery4',
								title:      'PNGs Only',
								priority:   80,
								// toolbar:    'main-insert',
								filterable: 'none',
								multiple: 'add',
								button: {
									text: 'Add it!'
								},
								library:  wp.media.query({
									'post_mime_type': 'image/png'
								})
							}),

							new wp.media.controller.Library({
								id:         'gallery2',
								title:      'PDFs Only',
								priority:   40,
								// toolbar:    'main-insert',
								filterable: 'none',
								library:  wp.media.query({
									'post_mime_type': 'application/pdf'
								})
							}),

						]
					});

					mediaPopup.on( 'select', handleSelect );
					mediaPopup.open();
				})
				.on( 'click', '.events-field', function(e) {
					e.preventDefault();

					clear_existing();

					mediaPopup = wp.media( {
						multiple: 'add', // add, reset, false
						title: 'Multiple Select',
						editable: true,
						button: {
							text: 'Watch the Console!'
						}
					} );



					mediaPopup
							.on( 'open', function( object ) {
								console.log( 'Event: Open' );
								mediaPopup
										.uploader
										.uploader
										.dropzone
										.on( 'dropzone:enter', function() {
											console.log( 'Event: dropzone:enter' );
										})
										.on( 'dropzone:leave', function() {
											console.log( 'Event: dropzone:leave' );
										});
								mediaPopup.state().get('selection')
										.on('add', function( object ) {
											console.log( 'Event: Selection add', object.attributes );
										})
										.on( 'remove', function( object ) {
											console.log( 'Event: Selection remove', object.attributes );
										})
										.on('selection:single', function( object) {
											console.log( 'Event: selection:single', object.attributes)
										})
										.on('selection:unsingle', function( object) {
											console.log( 'Event: selection:unsingle', object.attributes)
										})
							})
							.on( 'title:create:default', function( object ) {
								console.log( 'Event: title:create:default', object );
							})
							.on( 'menu:create:default', function( object ) {
								console.log( 'Event: menu:create:default', object );
							})
							.on( 'content:render', function( object ) {
								console.log( 'Event: Content Render', object );
							})
							.on( 'toolbar:create', function( object ) {
								console.log( 'Event: Toolbar Create', object );
							})
							.on( 'toolbar:render', function( object ) {
								console.log( 'Event: Toolbar Render', object );
							})
							.on( 'attach', function( object ) {
								console.log( 'Event: attach' );
							})
							.on( 'close', function( object ) {
								console.log( 'Event: Close' );
							})
							.on( 'select', function( object ) {
								console.log( 'Event: Select' );
							});
					mediaPopup.on( 'select', handleSelect );
					mediaPopup.open();
				})
		});
	})(jQuery);