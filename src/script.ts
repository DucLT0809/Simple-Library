var modal: any = document.getElementById("myModal");
var btn: any = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var submitBtn: any = document.getElementById("submit");
var title: any = document.querySelector("title");
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
submitBtn.onclick = function (event: any): void {
  console.log("Submitted");
  event.preventDefault();
  modal.style.display = "none";
};
