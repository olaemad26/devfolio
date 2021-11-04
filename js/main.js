let homeHeight=$("#about").offset().top;
$(window).scroll(function(){
    let currentOffset=$(window).scrollTop();
    if(currentOffset>homeHeight)
    {
        $(".navbar-dark").css({"background-color":"rgba(0,0,0,0.6)","transition":"all 2s"})  
    }
    else
    {
        $(".navbar-dark").css({"background-color":"transparent"})
    }
})
$("#navbarSupportedContent ul li a").click(function(){
    $("#navbarSupportedContent ul li a").removeClass("active")
    $(this).addClass("active")
   
})
// var typed = new Typed('.element', {
//     strings: ['This is a JavaScript library', 'This is an ES6 module'],
//     smartBackspace: true // Default value
//   });
  var typed3 = new Typed('#typed3', {
    strings: [
        `Freelancer`,
        'photographer',
        'Developer',
        'Designer'
    ],
    typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true, // this is a default
    loop: true
  });
    