setTimeout( function(){ document.querySelector('body').setAttribute('class' , 'loaded'); } , 3000 );

var get_testimonials_item = document.querySelectorAll('.testimonials-block .testimonials-item');
var get_testimonials_pagination = document.querySelectorAll('.testimonials-block .controls .hexagon.pagination');
var footer_list = document.getElementsByClassName('footer');
var front_person_hexagon = document.querySelector('.hexagon.front-person-img');
var about_icons_hexagon = document.querySelectorAll('.about-icons.section-block .hexagon.icon');
var body = document.querySelector('body');

/*
Not needed anymore
function getsetwidth_testimonials(){
  var get_clientwidth = document.querySelector('.testimonials-block .testimonials-outer-wrapper').clientWidth;
  //console.log(get_clientwidth);
  get_testimonials_item[0].style.width=get_clientwidth+'px';
}
*/

//setInterval(getsetwidth_testimonials , 2000);

/********* Function for opening and closing Navigation link sections***/

function open_link_section(ref){
  var nav_name = ref.getAttribute('data-section');
  var nav_section = document.querySelector('section#'+nav_name);
  body.classList.add('section-show');
  nav_section.classList.add('active');
}

/**************** Testimonials change page dynamically **************/
function get_element(id){
  for(var i=0; i<get_testimonials_item.length; i++){
    if(i == id){
      get_testimonials_item[id].style.display='block';
      get_testimonials_pagination[id].classList.add('active');
    }
    else{
      get_testimonials_item[i].style.display='none';
      get_testimonials_pagination[i].classList.remove('active');
    }
  }
}



/********** Custom SVG Hexagon design *************/
var svg_hexagon =   '<!--- Hexagon SVG with Dynamic width , height ----------------->\
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\
  xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="200px" height="200px" x="0" y="0"\
  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">\
\
  		<path d="M511.155,252.305l-102.4-213.333c-1.417-2.953-4.403-4.838-7.689-4.838H110.933c-3.285,0-6.272,1.886-7.689,4.838\
      L0.845,252.305c-1.126,2.338-1.126,5.052,0,7.39l102.4,213.333c1.417,2.953,4.403,4.838,7.689,4.838h290.133\
      c3.285,0,6.272-1.886,7.689-4.838l102.4-213.333C512.282,257.357,512.282,254.643,511.155,252.305z"\
      fill="#f0f0f0" data-original="#000000" style="" class=""/>\
  </svg>';

front_person_hexagon.insertAdjacentHTML('afterbegin', svg_hexagon);

for(var i=0; i<about_icons_hexagon.length; i++){
  about_icons_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0; i<get_testimonials_pagination.length; i++){
  get_testimonials_pagination[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

/*=========================================================================
		Footer Section Adding it to all sections from just one variable dynamically after page loads
	=========================================================================*/


	var footer_content = "<div class='row' >\
							\
							<div class='col-xs-6 text-left' style='width : 30%;'>\
								<h4>Bhavik Pansuriya</h4>\
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
						</div>";

		for(var i=0; i < footer_list.length; i++){
		footer_list[i].innerHTML = footer_content;
		}

/* Footer Hexagon icons setting throught javascript ******/
var footer_icons_hexagon = document.querySelectorAll('.footer .footer-social li a');

for(var i=0; i<footer_icons_hexagon.length; i++){
  footer_icons_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

/* ####################### Close button onclick function */

function closebtn(){
  var active_section = document.querySelector('section.active');
  body.classList.remove('section-show');
  active_section.classList.remove('active');
}
