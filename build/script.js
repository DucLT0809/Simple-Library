"use strict";
const modal = document.getElementById("myModal");

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

const submitBtn = document.getElementById("submit");

const gridContainer = document.getElementById("gridContainer");

// TODO: new book input value
let title = document.getElementById("title");
let author = document.getElementById("author");
let nop = document.getElementById("nop");
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};
//  When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
submitBtn.onclick = function (event) {
  addNewBook(title.value, author.value, nop.value);
  event.preventDefault();
  modal.style.display = "none";
};
class Book {
  constructor(title, author, nop, status) {
    this.title = title;
    this.author = author;
    this.nop = nop;
    this.status = status;
  }
}

const addNewBook = (title, author, nop) => {
  let b = new Book(title, author, nop, "read");
  //   add new div
  const newGridItem = document.createElement("div");
  newGridItem.classList.add("grid-item"); // add class name to div
  // add book to newly created div
  const image = document.createElement("img");
  image.src = "assets/images/91Sy3S-198L._SL1500_.jpg";
  newGridItem.appendChild(image);
  // add title
  const newTitle = document.createElement("h2");
  newTitle.textContent = b.title;
  newGridItem.appendChild(newTitle);
  // add author
  const newAuthor = document.createElement("h3");
  newAuthor.textContent = "Written by: " + b.author;
  newGridItem.appendChild(newAuthor);
  // add number of pages
  const newNop = document.createElement("p");
  newNop.textContent = "Number of pages: " + b.nop;
  const sCon = document.createElement("div");
  sCon.classList.add("status");
  sCon.appendChild(newNop);

  //add status
  const status = "Read";
  const s = document.createElement("p");
  s.textContent = " - " + status;
  s.style.fontWeight = "bolder";
  sCon.appendChild(s);
  //   add div contain nop and status
  newGridItem.appendChild(sCon);
  // add button
  const x = document.createElement("button");
  const y = document.createElement("button");
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("button-container");
  y.textContent = "Change Status";
  x.textContent = "Remove Book";
  //   remove book
  x.addEventListener("click", function () {
    newGridItem.remove();
  });
  //   change status
  y.addEventListener("click", function () {
    if (s.textContent === " - Read") {
      s.textContent = " - Pending";
    } else if (s.textContent === " - Pending") {
      s.textContent = " - Read";
    }
  });

  btnDiv.appendChild(y);
  btnDiv.appendChild(x);
  newGridItem.appendChild(btnDiv);

  // add div to grid container
  gridContainer.appendChild(newGridItem);
};
