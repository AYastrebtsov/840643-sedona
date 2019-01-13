var map_opener = document.querySelector(".modal");
var main_button = document.querySelector(".element1__index");

  map_opener.classList.add("modal-js");

  main_button.addEventListener("click", function (evt) {
      evt.preventDefault();
      map_opener.classList.toggle("modal-js");
    });

  document.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        if (map_opener.classList.contains("modal")) {
          evt.preventDefault();
          map_opener.classList.add("modal-js");
        }
      }
    });
