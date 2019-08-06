let obama = document.getElementById("slide");

obama.addEventListener("click", clickEvent());

function clickEvent(){
    console.log("test");
    document.getElementById("slide").src="obama_basketball.jpg";
}

// $("#slideshow > div:gt(0)").hide();
// setInterval(function() {
//  $('#slideshow > div:first')
//    .fadeOut(1000)
//    .next()
//    .fadeIn(1000)
//    .end()
//    .appendTo('#slideshow');
// },  3000);

