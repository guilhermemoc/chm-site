$(document).ready(function () {

  // function viewSomething() {
  //     if ( action == 1 ) {
  //         alert("AEHO");
  //         action = 2;
  //     } else {
  //         $(".overlay").css("visibility", "visible");
  //         action = 1;
  //     }
  // }


  $('#bt01, #submit2').click(function () {
      if (this.id == '#bt01') {
          alert('Submit 1 clicked');
      }
      else if (this.id == 'submit1') {
          alert('Submit 2 clicked');
      }
  });



});
