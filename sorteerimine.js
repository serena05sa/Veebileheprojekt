// kood pärit: https://www.w3schools.com/howto/howto_js_filter_elements.asp

/*https://stackoverflow.com/questions/60444920/im-getting-many-errors-like-expected-use-strict-at-column-4-not-column-2 ütles, et järgmine rida on oluline*/
/*jslint devel: true, browser: true, white: true */

function filterSelection(c) {
  "use strict";
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c === "koik") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

filterSelection("koik")


// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// popup akna avamine
function openModal(title, description) {
  const eventModal = document.getElementById("eventModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");

  modalTitle.innerText = title;
  modalDescription.innerText = description;

  eventModal.style.display = "block";
}

// popup akna sulgemine
function closeModal() {
  const eventModal = document.getElementById("eventModal");
  eventModal.style.display = "none";
}

