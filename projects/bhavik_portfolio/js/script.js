//window.addEventListener('DOMContentLoaded', function(){

setTimeout( function(){ document.querySelector('body').setAttribute('class' , 'loaded'); } , 3000 );

/*
Not needed anymore
function getsetwidth_testimonials(){
  var get_clientwidth = document.querySelector('.testimonials-block .testimonials-outer-wrapper').clientWidth;
  //console.log(get_clientwidth);
  get_testimonials_item[0].style.width=get_clientwidth+'px';
}
*/

//setInterval(getsetwidth_testimonials , 2000);

/********** Custom SVG Hexagon design *************/
var svg_hexagon =   '<!--- Hexagon SVG with Dynamic width , height -->\
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\
  xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="200px" height="200px" x="0" y="0"\
  viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">\
\
  		<path d="M511.155,252.305l-102.4-213.333c-1.417-2.953-4.403-4.838-7.689-4.838H110.933c-3.285,0-6.272,1.886-7.689,4.838\
      L0.845,252.305c-1.126,2.338-1.126,5.052,0,7.39l102.4,213.333c1.417,2.953,4.403,4.838,7.689,4.838h290.133\
      c3.285,0,6.272-1.886,7.689-4.838l102.4-213.333C512.282,257.357,512.282,254.643,511.155,252.305z"\
      fill="#f0f0f0" data-original="#000000" style="" class=""/>\
  </svg>';

/** Setting Testimonials Block via javascript on services section *****/
var testimonials_html = "<!-- Testimonials     ------------------------------------------->\
<div class='testimonials-block section-block' >\
  <div class='container' >\
\
    <div class='section-header text-center' >\
\
      <h2 class='animate text-over-block' >Testimonials</h2>\
\
      <!--divider-->\
      <div class='divider-draft center' ></div>\
      <!--/divider-->\
\
    </div>\
\
    <div class='row' >\
\
      <div class='col-md-8 col-md-offset-2' >\
\
        <div class='testimonials-slider' >\
          <div class='testimonials-outer-wrapper'>\
            <div class='testimonials-inner-wrapper'>\
              <div class='testimonials-item'>\
          <div class='testimonial' >\
            <p>\
\
              I believe in Knowledge because it is the only thing in this world with greatest power before money that will stay\
              updated at all times and will empower us& nurture us. The internet has enabled us to acquire Knowledge\
              and use it in our daily life and prosper ourselves. I like to Read Books, Write Blogs, Research a lot.\
              Books offer us a great source of detailed content of almost anything. I’m looking forward to work with companies\
              to enhance my skills and benefit your company in many ways.\
\
            </p>\
\
            <div class='author' >\
              <h4>Jack Smith</h4>\
              <p>CEO at Google</p>\
            </div>\
          </div>\
        </div> <!-- End of testimonials item------->\
        <div class='testimonials-item' style='display:none;'>\
          <div class='testimonial' >\
            <p>\
              I want to set its width dynamically in JavaScript. ... using may not work in Firefox, Chrome, and other non-IE browsers. ... These are several ways to apply style to an element. ... className = 'wide'; /* CSS */ .wide{width:500px;} 2. document. ... If you remove the javascript: prefix\
            </p>\
\
            <div class='author' >\
              <h4>Jessica Smith</h4>\
              <p>CEO at Google</p>\
            </div>\
          </div>\
        </div> <!-- End of testimonials item------->\
        <div class='testimonials-item' style='display:none;'>\
          <div class='testimonial' >\
            <p>\
              If you like GeeksforGeeks and would like to contribute, you can also write an article using contribute.geeksforgeeks.org or mail your article to contribute@geeksforgeeks.org. See your article appearing on the GeeksforGeeks main page and help other Geeks.\
            </p>\
\
            <div class='author' >\
              <h4>Jim Smith</h4>\
              <p>CEO at Google</p>\
            </div>\
          </div>\
          </div> <!-- End of testimonials item------->\
\
        </div> <!-- End of testimonials-inner-wrapper--------->\
\
        </div> <!-- End of testimonials Outer Wrapper-------->\
        \
      </div> <!--- End of Testimonials slider------------>\
      <!-- Page sections --------->\
      <div class='control-main'>\
      <div class='controls' id=0 onclick=get_element(id)>\
        <div class=' hexagon pagination active'></div>\
      </div>\
      <div class='controls' id=1 onclick=get_element(id)>\
        <div class=' hexagon pagination '></div>\
      </div>\
      <div class='controls' id=2 onclick=get_element(id)>\
        <div class=' hexagon pagination'></div>\
      </div>\
    </div>\
      </div>\
\
    </div><!-- End of row---------->\
\
  </div> <!-- End of Container ------->\
</div> <!--- End of Testimonials block ------------>";

/*=========================================================================
		Footer Section Adding it to all sections from just one variable dynamically after page loads
	=========================================================================*/
	var footer_content = "<div class='container'>\
              <div class='row' >\
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
						</div>\
            </div><!--End of container-->";

// Fetching Process Block ----
var process_block = document.getElementById('process-block');
/***** Adding Tesitimonials Html to various elements ***/
process_block.insertAdjacentHTML('afterend', testimonials_html);
// Fetching ...............
var get_testimonials_item = document.querySelectorAll('.testimonials-block .testimonials-item');
var get_testimonials_pagination = document.querySelectorAll('.testimonials-block .controls .hexagon.pagination');
var footer_list = document.getElementsByClassName('footer');
var front_person_hexagon = document.querySelector('.hexagon.front-person-img');
var about_icons_hexagon = document.querySelectorAll('.about-icons.section-block .hexagon.icon');
var body = document.querySelector('body');
var timeline_list_hexagon = document.querySelectorAll('.timeline > li:not(.timeline-header)');
var hobby_icon_hexagon = document.querySelectorAll('.hobby .icon');
var skills_bar = document.querySelectorAll('.skill > .skill-bar');
var bar = document.querySelectorAll('.skill > .skill-bar > .bar');
var skills_percent = document.querySelectorAll('.skill > .skill-bar > .bar > .percent');
var services_icon_hexagon = document.querySelectorAll('.services-section .service .hexagon.icon');
var work_process_hexagon = document.querySelectorAll('.process .number');
var portfolio_filters = document.querySelectorAll('#portfolio-filters li');
var portfolio_caption_hexagon = document.querySelectorAll('.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li');
var portfolio_items = document.querySelectorAll('.portfolio-items > .item');
var portfolio_project_photo = document.querySelectorAll('.portfolio-items > .item > .inner > .caption > .caption-inner > .links > li > a.image-link');
var album = document.querySelector('.project_album');
/********* Function for opening and closing Navigation link sections***/

function open_link_section(ref){
  var nav_name = ref.getAttribute('data-section');
  var nav_section = document.querySelector('section#'+nav_name);
  body.classList.add('section-show');
  nav_section.classList.add('active');
}

/**************** Testimonials change page dynamically **************/
function get_element(id){
  id = parseInt(id);
  for(var i=0; i<get_testimonials_item.length; i++){
    if(i == id || i == (id+3)){
      get_testimonials_item[id].style.display='block';
      get_testimonials_item[id+3].style.display='block';
      get_testimonials_pagination[id].classList.add('active');
      get_testimonials_pagination[id+3].classList.add('active');
    }
    else{
      get_testimonials_item[i].style.display='none';
      get_testimonials_pagination[i].classList.remove('active');
    }
  }
}




/*** Setting SVG hexagon design dynamically to various elements ***/

front_person_hexagon.insertAdjacentHTML('afterbegin', svg_hexagon);

for(var i=0; i<about_icons_hexagon.length; i++){
  about_icons_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0; i<get_testimonials_pagination.length; i++){
  get_testimonials_pagination[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0; i < timeline_list_hexagon.length; i++){
  timeline_list_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0;i < hobby_icon_hexagon.length; i++){
  hobby_icon_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0; i<services_icon_hexagon.length; i++){
  services_icon_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0; i<work_process_hexagon.length; i++){
  work_process_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0; i< portfolio_filters.length; i++){
  portfolio_filters[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0; i< portfolio_caption_hexagon.length; i++){
  portfolio_caption_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}
/**** Setting Footer Content ********/
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


/* Setting Skills percent and bar width ***/
for(var i=0; i< skills_bar.length; i++){
  var data_percent = skills_bar[i].getAttribute('data-percent');
  bar[i].style.width = data_percent+'%';
  skills_percent[i].innerHTML = data_percent + '%';
}



/** Function for Portfolio grid filter shufftling ****/
function photo_grid_filter(self_obj){
  var data_group = self_obj.getAttribute('data-group');
  var check_active_class_element = document.querySelector('#portfolio-filters li a.active');

  if( !(check_active_class_element.getAttribute('data-group') == data_group ) ) {    // If filter element is not the same as earlier active class then only proceed to set the caller element to active and unset other element which is active to null
    check_active_class_element.setAttribute('class', '');
    self_obj.setAttribute('class', 'active');

    for(var i=0; i< portfolio_items.length; i++){
      var setter = 0;
      var data_groups_list = portfolio_items[i].getAttribute('data-groups').split(',');
      for(var j=0; j< data_groups_list.length; j++){
        if(data_groups_list[j] == data_group){
          setter = 1;
        }
      }
      if(setter == 0){
        portfolio_items[i].style.display = 'none';
      }
      else{
        portfolio_items[i].style.display = 'block';
      }
    }
  }
}

/* Below code to open the photo project in a big album div ***/

for(var i=0; i < portfolio_project_photo.length; i++){
  portfolio_project_photo[i].onclick = function(){
    album.style.display='block';
    album.style.visibility = 'visible';
  };
}

/** Function for closing photo album and having back grid **/
function close_photo_album(){
  album.style.display='none';
  album.style.visibility = 'hidden';
}
//});
