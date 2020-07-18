$(document).ready(function() {
  //Buttton Filter
  $(".all-button").click(function() {
    $(
      "[data-item='sweet'],[data-item='cake'],[data-item='doughnut'],[data-item='cupcake']"
    ).css("display", "block");
  });
  $(".cake-button").click(function() {
    $("[data-item='sweet'],[data-item='doughnut'],[data-item='cupcake']").css(
      "display",
      "none"
    );
    $("[data-item='cake']").css("display", "block");
  });
  $(".cupcake-button").click(function() {
    $("[data-item='cupcake']").css("display", "block");
    $("[data-item='sweet'],[data-item='cake'],[data-item='doughnut']").css(
      "display",
      "none"
    );
  });
  $(".sweet-button").click(function() {
    $("[data-item='sweet']").css("display", "block");
    $("[data-item='cupcake'],[data-item='cake'],[data-item='doughnut']").css(
      "display",
      "none"
    );
  });
  $(".doughnut-button").click(function() {
    $("[data-item='doughnut']").css("display", "block");
    $("[data-item='sweet'],[data-item='cake'],[data-item='cupcake']").css(
      "display",
      "none"
    );
  });

  //Search bar filter
  const searchBox = $(".search-bar");

  $(searchBox).on("keyup", function() {
    const searchFilter = $(this)
      .val()
      .toLowerCase()
      .trim();
    var i = $(".store-item").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(searchFilter) > -1
      );
    });
  });

  ///////////////////////////////////DIDNOT WORK//////////////////////
  // //Modal
  // //grab item from the DOM
  // let storeItem = document.querySelectorAll(".store-item") || $(".store-item");
  // //grab modal-container
  // let modalContainer =
  //   $(".modal-container") || document.querySelector(".modal-container");
  // //grab div with modal item
  // let modalItem = $(".modal-item") || document.querySelector(".modal-item");
  // //grab all the image from the store item
  // let images = $(".card-img-top") || document.querySelectorAll(".card-img-top");

  // //set up an array for the item
  // let imageList = [];
  // ///set up counter to run through the imageList;
  // let counter = 0;

  // //use foreach loop to push each image into an array(imageList)
  // images.each(function() {
  //   //push each image into an array
  //   imageList.push($(this).attr("src"));
  // });
  // console.log(imageList)
  // //add on click event to each store item
  // storeItem.forEach(function(btn) {
  //   //On click, allow the model container to show
  //   //Change css class from display none to display block
  //   btn.addEventListener("click", function(a) {
  //     //grab the image of the item  that was click
  //     let image = $(a).attr("src");
  //     console.log(image);
  //     //change the background img property of the modal item
  //     modalItem.css("background-image", "url(" + image + ")");
  //     //show the modal with the selected image
  //     modalContainer.addClass("show");
  //     //get the array index number that was selected
  //     counter = imageList.indexOf(image);
  //   });
  // });


  //Modal
  //grab item from the DOM
  let storeItem = document.querySelectorAll(".store-item");
  //grab modal-container
  let modalContainer =
    $(".modal-container") || document.querySelector(".modal-container");
  //grab div with modal item
  let modalItem = $(".modal-item") || document.querySelector(".modal-item");
  //grab all the image from the store item
  let images =  document.querySelectorAll(".card-img-top");

  //set up an array for the item
  let imageList = [];
  ///set up counter to run through the imageList;
  let counter = 0;

  //use foreach loop to push each image into an array(imageList)
  images.forEach(function(item) {
    //push each image into an array
    imageList.push(item.src);
  });
  //add on click event to each store item
  storeItem.forEach(function(btn) {
    //On click, allow the model container to show
    //Change css class from display none to display block
    btn.addEventListener("click", function(e) {
      //grab the image of the item  that was click
      let image = e.target.src;
      //change the background img property of the modal item
      modalItem.css("background-image", "url(" + image + ")");
      //show the modal with the selected image
      modalContainer.addClass("show");
      //get the array index number that was selected
      counter = imageList.indexOf(image);
    });
  });

  //set up for button control
  let btnLeft = $(".btn-left");
  let btnRight = $(".btn-right");
  btnLeft.on("click",function(){
    counter --;
    if(counter < 0 ){
      counter = imageList.length - 1;
    }
    modalItem.css("background-image","url("+ imageList[counter] + ")")
  })

  btnRight.on("click",function(){
    counter++;
    if(counter >= imageList.length){
      counter = 0;
    }
    modalItem.css("background-image","url(" + imageList[counter] + ")")
  })

  let modalClose = $(".modal-close");
  modalClose.on("click", function() {
    modalContainer.removeClass("show");
  });
});
