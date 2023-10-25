function showWrite() {
    let write = document.querySelector("#gma23");
    if($(write).css("display") == "none"){
      $(write).css('display', 'flex');
    } else {
      $(write).css('display', 'none');
    }
  }