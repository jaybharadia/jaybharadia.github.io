
setTimeout( function(){ document.querySelector('body').setAttribute('class' , 'loaded'); } , 3000 );


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

// Fetching Process Block ----
var process_block = document.getElementById('process-block');
/***** Adding Tesitimonials Html to various elements ***/
// Fetching ...............
var front_person_hexagon = document.querySelector('.hexagon.front-person-img');
var body = document.querySelector('body');
var timeline_list_hexagon = document.querySelectorAll('.timeline > li:not(.timeline-header)');
var hobby_icon_hexagon = document.querySelectorAll('.hobby .icon');
var skills_bar = document.querySelectorAll('.skill > .skill-bar');
var bar = document.querySelectorAll('.skill > .skill-bar > .bar');
var skills_percent = document.querySelectorAll('.skill > .skill-bar > .bar > .percent');
var services_icon_hexagon = document.querySelectorAll('.services-section .service .hexagon.icon');

const front_person_titles_span = document.querySelector('.front-person-titles span');
const cursorSpan = document.querySelector('.front-person-titles .cursor');
const textArray = [ "Hi, Im Web Developer.", "I am Creative.", "I Love Design.", "I Love to Develop." ];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2500;
var textArrayIndex = 0;
var charIndex = 0;

const contact_icons = document.querySelectorAll('.contact_icons a');
// Function for Typing text using javascript

  function type(){
    if( charIndex < textArray[textArrayIndex].length ){
      if(!cursorSpan.classList.contains('typing')){
        cursorSpan.classList.add('typing');
      }
      front_person_titles_span.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout( type, typingDelay);
    }
    else{
      // erase text
      cursorSpan.classList.remove('typing');
      setTimeout( erase, newTextDelay);
    }
  }

  function erase(){
    if( charIndex > 0){
      front_person_titles_span.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout( erase, erasingDelay);
    }
    else{
      textArrayIndex++;
      if(textArrayIndex >= textArray.length ){
        textArrayIndex = 0;
      }

      setTimeout( type, 1000);
    }
  }
  window.addEventListener('load', function(){
    setTimeout( type, 1000);
  });


// Navigation smoothly across pages through menu
// Select all links with hashes
      if (window.location.hash !== "") {

          // Store hash
          var hash = window.location.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - $('#wrapper').offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if

      $("nav a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - $('#wrapper').offset().top
          }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

/*** Setting SVG hexagon design dynamically to various elements ***/

front_person_hexagon.insertAdjacentHTML('afterbegin', svg_hexagon);


for(var i=0; i < timeline_list_hexagon.length; i++){
  timeline_list_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0;i < hobby_icon_hexagon.length; i++){
  hobby_icon_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0; i<services_icon_hexagon.length; i++){
  services_icon_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

for(var i=0; i< contact_icons.length; i++){
  contact_icons[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}

/* Footer Hexagon icons setting throught javascript ******/
var footer_icons_hexagon = document.querySelectorAll('.footer .footer-social li a');

for(var i=0; i<footer_icons_hexagon.length; i++){
  footer_icons_hexagon[i].insertAdjacentHTML('afterbegin', svg_hexagon);
}


/* Setting Skills percent and bar width ***/
for(var i=0; i< skills_bar.length; i++){
  var data_percent = skills_bar[i].getAttribute('data-percent');
  bar[i].style.width = data_percent+'%';
  skills_percent[i].innerHTML = data_percent + '%';
}
