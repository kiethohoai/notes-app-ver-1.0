const creatBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".notes-input");

// clear all
function clearStorage() {
   localStorage.clear();
}
// clearStorage();

// 4. display notes
function displayStorage() {
   notesContainer.innerHTML = localStorage.getItem("notes");
}
displayStorage();

// 3. save notes & updateStorage
function updateStorage() {
   localStorage.setItem("notes", notesContainer.innerHTML);
}

// 1. add notes
creatBtn.addEventListener("click", () => {
   //logic
   let pElement = document.createElement("p");
   pElement.className = "notes-input";
   pElement.setAttribute("contenteditable", "true");
   let imgElement = document.createElement("img");
   imgElement.src = "./images/delete.png";
   notesContainer.appendChild(pElement).appendChild(imgElement);
});

// 2. delete notes
notesContainer.addEventListener("click", (e) => {
   if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      updateStorage();
   } else if (e.target.tagName === "P") {
      let allNotes = document.querySelectorAll(".notes-input");
      allNotes.forEach((note) => {
         note.onkeyup = function () {
            updateStorage();
         };
      });
   }
});

// 5. enter events
document.addEventListener("keydown", (e) => {
   if (e.key === "Enter") {
      document.execCommand("insertLineBreak");
      e.preventDefault();
   }
});
