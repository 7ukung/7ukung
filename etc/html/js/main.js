$(function () {
	//lenis
	const lenis = new Lenis({
	  autoRaf: true,
	});

	lenis.on('scroll', (e) => {
	  console.log(e);
	});

	
  //vis
  $('.vis_slide01').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:8000,
    speed:1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    pauseOnHover:false, 
    pauseOnFocus:false,
    dots:true
  });
	
  //ani
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
  
  });
	
 
	
});