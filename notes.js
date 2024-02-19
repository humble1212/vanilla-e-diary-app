//target local storage
const myNotesArray = JSON.parse(localStorage.getItem("myNotesArray")) || [];
const myIdeasArray = JSON.parse(localStorage.getItem("myIdeasArray")) || [];

window.addEventListener("load", () => {
  //my notes
  myNotesArray.forEach((notesObject) => {
    noteprevs.innerHTML += NotesLifnx(notesObject);
    note_snips.innerHTML += NotesLifnx(notesObject);
    for (let i = 0; i < noteprevs.children.length; i++) {
      noteprevs.children[i].addEventListener("click", () => {
        myNoteIntake.innerHTML = "";
        noteIntake.classList.add("showInputPannel");
        ideasIntake.classList.remove("showInputPannel");
        myNotes.focus();
        myNoteIntake.innerHTML += noteprevs.children[i].innerHTML;
      });
    }
  });

  //my ideas
  myIdeasArray.forEach((IdeasObject) => {
    ideaprevs.innerHTML += IdeasLifnx(IdeasObject);
    idea_snips.innerHTML += IdeasLifnx(IdeasObject);
    for (let i = 0; i < ideaprevs.children.length; i++) {
      ideaprevs.children[i].addEventListener("click", () => {
        myideasIntake.innerHTML = "";
        noteIntake.classList.remove("showInputPannel");
        ideasIntake.classList.add("showInputPannel");
        myIdeasBox.focus();
        myideasIntake.innerHTML += ideaprevs.children[i].innerHTML;
      });
    }
  });
});

//appending todo snippets
var NotesLifnx = (notesObject) => `
<li>    
    <div class="timeStmpDiv">
      <span>${notesObject.timeStamp}, ${fullDate}</span>
      <h1 class="material-symbols-outlined"> delete </h1>
    </div>
    <div class="notsDiv"> 
      <p>${notesObject.myNotes}</p>
    </div>
</li>
`;

const notesfnx = () => {
  var notesObject = {
    myNotes: myNotes.value,
    timeStamp,
  };

  myNotesArray.push(notesObject);
  localStorage.setItem("myNotesArray", JSON.stringify(myNotesArray));
  noteprevs.innerHTML += NotesLifnx(notesObject);
  note_snips.innerHTML += NotesLifnx(notesObject);
  myNoteIntake.innerHTML = NotesLifnx(notesObject);

  for (let i = 0; i < noteprevs.children.length; i++) {
    noteprevs.children[i].addEventListener("click", () => {
      myNoteIntake.innerHTML = "";
      myNoteIntake.innerHTML += noteprevs.children[i].innerHTML;
      notpreviews.classList.remove("hideInputPannel");
      ideaspreviews.classList.remove("showInputPannel");
    });
  }
  myNotes.value = "";
};
saveNote.onclick = () => {
  notesfnx();
};

//my ideas
var IdeasLifnx = (IdeasObject) => `
<li>
    <div class="timeStmpDiv">
      <span>${IdeasObject.timeStamp}, ${fullDate}</span> 
      <h1 class="material-symbols-outlined"> delete </h1>
    </div>
    <div class="notsDiv"> 
      <p>${IdeasObject.myIdeaBox}</p>
    </div>
</li>
`;

const ideasfnx = () => {
  var IdeasObject = {
    myIdeaBox: myIdeasBox.value,
    timeStamp,
  };

  myIdeasArray.push(IdeasObject);
  localStorage.setItem("myIdeasArray", JSON.stringify(myIdeasArray));
  ideaprevs.innerHTML += IdeasLifnx(IdeasObject);
  idea_snips.innerHTML += IdeasLifnx(IdeasObject);
  myideasIntake.innerHTML = IdeasLifnx(IdeasObject);

  for (let i = 0; i < ideaprevs.children.length; i++) {
    ideaprevs.children[i].addEventListener("click", () => {
      myideasIntake.innerHTML = "";
      myideasIntake.innerHTML += ideaprevs.children[i].innerHTML;
      notpreviews.classList.add("hideInputPannel");
      ideaspreviews.classList.add("showInputPannel");
    });
  }

  myIdeasBox.value = "";
};

saveIdea.onclick = () => {
  ideasfnx();
};

// deleting events
window.addEventListener("click", (event) => {
  let deletTarget = event.target;
  let deltnt = deletTarget.parentElement.parentElement;

  if (deletTarget.className === "material-symbols-outlined") {
    deltnt.style.animationPlayState = "running";
    deltnt.addEventListener("animationend", () => {
      deltnt.remove();
    });
    if (
      deltnt.parentElement.className ===
      "todo-targ-side idea-snip-section myIdeas"
    ) {
      for (IdeasObject in myIdeasArray) {
        myIdeasArray.splice(0, 1);
        localStorage.removeItem("myIdeasArray");
        localStorage.setItem("myIdeasArray", JSON.stringify(myIdeasArray));
        break;
      }
    } else if (
      deltnt.parentElement.className ===
      "todo-targ-side idea-snip-section myNotes"
    ) {
      for (notesObject in myNotesArray) {
        myNotesArray.splice(0, 1);
        localStorage.removeItem("myNotesArray");
        localStorage.setItem("myNotesArray", JSON.stringify(myNotesArray));
        break;
      }
    }

    if (deltnt.parentElement.className === "noteprevs") {
      //removing from note array
      for (IdeasObject in myIdeasArray) {
        myIdeasArray.splice(0, 1);
        localStorage.removeItem("myIdeasArray");
        localStorage.setItem("myIdeasArray", JSON.stringify(myIdeasArray));
        break;
      }

      //removing from ideas array
    } else if (deltnt.parentElement.className === "ideaprevs") {
      for (notesObject in myNotesArray) {
        myNotesArray.splice(0, 1);
        localStorage.removeItem("myNotesArray");
        localStorage.setItem("myNotesArray", JSON.stringify(myNotesArray));
        break;
      }
    }
  }
});
