const monthly = document.querySelector(".monthly");
const annually = document.querySelector(".annually");
const check = document.querySelector(".check");

check.addEventListener("click", toggleFunction());

function toggleFunction() {
  if (check.checked) {
    $(".monthly").show();
    $(".annually").hide();
  } else {
    $(".annually").show();
    $(".monthly").hide();
  }
}
