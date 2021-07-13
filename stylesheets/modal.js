
function dropdownFunction() {
  document.getElementById("dropdown").classList.toggle("expand");
  document.getElementById("triangle").classList.toggle("expand");
}

function searchFunction() {
  document.getElementById("search-modal").classList.toggle("show");
  document.getElementById("overlay").classList.toggle("show");
  document.getElementById("header-links").classList.toggle("hidden");
}

function closeFunction() {
  document.getElementById("search-modal").classList.toggle("show");
  document.getElementById("overlay").classList.toggle("show");
  document.getElementById("header-links").classList.toggle("hidden");
}


// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.shopping-bag-btn')) {
    // var dropdowns = document.getElementsByClassName("dropdown");
    // var i;
    // for (i = 0; i < dropdowns.length; i++) {
    //   var openDropdown = dropdowns[i];
    //   if (openDropdown.classList.contains('expand')) {
    //     openDropdown.classList.remove('expand');
    //   }
//     }
//   }
// }