$(function(){
	"use strict";

	/*=========================================================================
		Initializing stellar.js Plugin
	=========================================================================*/
/*	$('.section').stellar({
		horizontalScrolling: false
	});
	*/

	$(window).on('load', function(){

		setTimeout( function(){ $('body').addClass('loaded'); } , 1200 );


		/*=========================================================================
			Portfolio Grid
		=========================================================================*/
		var grid = $('#portfolio-grid');
		grid.shuffle({
			itemSelector: '.item'
		});

		$('#portfolio-filters > ul > li > a').on('click', function (e) {
			e.preventDefault();
			var groupName = $(this).attr('data-group');
			$('#portfolio-filters > ul > li > a').removeClass('active');
			$(this).addClass('active');
			grid.shuffle('shuffle', groupName );
		});

		$('a.image-link').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true
			}
		});

	});



	/*=========================================================================
		Links Navigation System
	=========================================================================*/
	$('.front-person-links > ul > li > a[data-section]').on('click', function(e){
		e.preventDefault();
		var section = $('#' + $(this).data('section'));


		if( section.size() != 0 ){

			$('body').addClass('section-show');

			section.addClass('active');

		}

	});

	$('.close-btn').on('click', function(){
		$('body').removeClass('section-show');
		$('section.active').removeClass('active');
	});



	/*=========================================================================
		Testimonials Slider
	=========================================================================*/
	$('.testimonials-slider').owlCarousel({
		singleItem: true
	});


/*=========================================================================
		Footer Section Adding it to all sections from just one variable dynamically after page loads
	=========================================================================*/

	var footer_list = document.getElementsByClassName('footer');
	var footer_content = "<div class='container' >\
						\
						<div class='row' >\
							\
							<div class='col-xs-6 text-left' style='width : 30%;'>\
								<h4>Jay Bharadia</h4>\
							</div>\
							\
							<div class='col-xs-6 text-right' style='width : 70%;'>\
								<ul class='footer-social' >\
									<li>\
										<a href='https://www.linkedin.com/in/jay-bharadia-1030181b4/' target='_blank'>\
											<i class='ion-social-linkedin' ></i>\
										</a>\
									</li>\
									<li>\
										<a href='#' >\
											<i class='ion-social-whatsapp'></i>\
										</a>\
									</li>\
									<li>\
										<a href='https://jpbforyou.blogspot.com' target='_blank'>\
											<i class='ion-link' ></i>\
										</a>\
									</li>\
									<li>\
										<a href='https://github.com/jaybharadia' target='_blank'>\
											<i class='ion-social-github' ></i>\
										</a>\
									</li>\
								</ul>\
							</div>\
							\
						</div>\
						\
						\
					</div> ";

		for(var i=0; i < footer_list.length; i++){
		footer_list[i].innerHTML = footer_content;
		}

	/*=========================================================================
		Skill Bar's Percent Initialization from attribute data-percent
	=========================================================================*/
	var level_count=0;
	$('.skill-bar').each(function(){

		var $this = $(this),
			percent = parseInt( $this.data('percent'), 10 );
		$this.find('.bar').css('width', percent + '%');

		var percent_label_list = document.getElementsByClassName('percent');
		percent_label_list[level_count].innerHTML = percent + '%';
		level_count++;
	});




	/*=========================================================================
		Contact Form
	=========================================================================*/
	
	function isJSON(val){
		var str = val.replace(/\\./g, '@').replace(/"[^"\\\n\r]*"/g, '');
		return (/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/).test(str);
	}
	$('#contact-form').validator().on('submit', function (e) {

		if (!e.isDefaultPrevented()) {
			// If there is no any error in validation then send the message

			e.preventDefault();
			var $this = $(this),

				//You can edit alerts here
				alerts = {

					success:
					"<div class='form-group' >\
						<div class='alert alert-success alert-dismissible' role='alert'> \
							<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
								<i class='ion-ios-close-empty' ></i> \
							</button> \
							<strong>Message Sent!</strong> We'll be in touch as soon as possible\
						</div>\
					</div>",


					error:
					"<div class='form-group' >\
						<div class='alert alert-danger alert-dismissible' role='alert'> \
							<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
								<i class='ion-ios-close-empty' ></i> \
							</button> \
							<strong>Error!</strong> Sorry, an error occurred. Try again.\
						</div>\
					</div>"

				};

			$.ajax({

				url: 'mail.php',
				type: 'post',
				data: $this.serialize(),
				success: function(data){

					if( isJSON(data) ){

						data = $.parseJSON(data);

						if(data['error'] == false){

							$('#contact-form-result').html(alerts.success);

							$('#contact-form').trigger('reset');

						}else{

							$('#contact-form-result').html(
							"<div class='form-group' >\
								<div class='alert alert-danger alert-dismissible' role='alert'> \
									<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
										<i class='ion-ios-close-empty' ></i> \
									</button> \
									"+ data['error'] +"\
								</div>\
							</div>"
							);

						}


					}else{
						$('#contact-form-result').html(alerts.error);
					}

				},
				error: function(){
					$('#contact-form-result').html(alerts.error);
				}
			});
		}
	});


});
