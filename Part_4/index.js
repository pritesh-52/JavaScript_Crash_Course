
$(document).ready(function () {
  $("p").click(function () {
    console.log("Hello");
  })
})


$(document).ready(function () {
  $(":button").click(function () {
    //console.log("Button Click");
    alert("Click");
  });
})




$(document).ready(function () {
  $(".second").click(function () {
    console.log("Click on the button");
  })
});


$(document).ready(function () {
  $(".third").click(function () {
    abc();
    xyz();
  })
})


function abc() {
  console.log("Function Techholding");
}


function xyz() {
  console.log("Techholding Function");
}


$(document).ready(function(){
  $(".hide").click(function(){
    $("p").hide();
  });
  $(".show").click(function(){
    $("p").show();
  });
});