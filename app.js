calendar_today.onclick = () => {
  todo_input.classList.remove("hideInputPannel");
  targetPanel.classList.remove("showInputPannel");
};

flag.onclick = () => {
  todo_input.classList.add("hideInputPannel");
  targetPanel.classList.add("showInputPannel");
};
todoMenu.onclick = () => {
  todoMenu.classList.toggle("showMenu");
  todoInputsContainer.classList.toggle("showInputPannel");
};
function toDoListFnx() {
  snippetsContainer.classList.add("hidesnippets");
  my_todo_lists.classList.add("showInputPannel");
  noteSect.classList.remove("showInputPannel");
  mybudgets.classList.remove("showInputPannel");
}
function specdatefnc() {
  dueDat.value === ""
    ? specDateDiv.classList.add("displaySpecific")
    : specDateDiv.classList.remove("displaySpecific");
}

toDoList.onclick = () => {
  toDoListFnx();
};

function budgetShowfnx() {
  snippetsContainer.classList.add("hidesnippets");
  my_todo_lists.classList.remove("showInputPannel");
  noteSect.classList.remove("showInputPannel");
  mybudgets.classList.add("showInputPannel");
}
account_balance.onclick = () => {
  budgetShowfnx();
};
edit_note.onclick = () => {
  snippetsContainer.classList.add("hidesnippets");
  my_todo_lists.classList.remove("showInputPannel");
  mybudgets.classList.remove("showInputPannel");
  noteSect.classList.add("showInputPannel");
};

home.onclick = () => {
  my_todo_lists.classList.remove("showInputPannel");
  mybudgets.classList.remove("showInputPannel");
  snippetsContainer.classList.remove("hidesnippets");
  noteSect.classList.remove("showInputPannel");
};
function trkBtmFnx() {
  budget_items_list.classList.add("showInputPannel");
  income_items_list.classList.add("showInputPannel");
  incomeTracking.classList.toggle("showshopping");
  shoppingContainer.classList.remove("showshopping");
}
trkBtn.onclick = () => {
  trkBtmFnx();
};
function directIncomeFnx() {
  budgetShowfnx();
  trkBtmFnx();
}
function directExpFnx() {
  budgetShowfnx();
  trkBtmFnx();
  salariedCnt.classList.add("hideBoth");
  nonsalariedCnt.classList.add("showshopping");
}
function directBudgetFnx() {
  budgetShowfnx();
  shoppingContainer.classList.toggle("showshopping");
}
crtBtn.onclick = () => {
  budget_items_list.classList.remove("showInputPannel");
  income_items_list.classList.remove("showInputPannel");
  incomeTracking.classList.remove("showshopping");
  shoppingContainer.classList.remove("showshopping");
};

AddToDo.onclick = () => {
  shoppingTodo.classList.toggle("showshopping");
};
regIreg.onclick = () => {
  salariedCnt.classList.remove("hideBoth");
  nonsalariedCnt.classList.remove("showshopping");
};
Irregular.onclick = () => {
  salariedCnt.classList.add("hideBoth");
  nonsalariedCnt.classList.add("showshopping");
};

Ideas.onclick = () => {
  notpreviews.style.display = "none";
  ideaspreviews.style.display = "flex";
};
Notes.onclick = () => {
  notpreviews.style.display = "flex";
  ideaspreviews.style.display = "none";
};
addNewNote.onclick = () => {
  noteIntake.classList.add("showInputPannel");
  ideasIntake.classList.remove("showInputPannel");
  myNotes.focus();
};
dropIdea.onclick = () => {
  noteIntake.classList.remove("showInputPannel");
  ideasIntake.classList.add("showInputPannel");
  myIdeasBox.focus();
};

ideaBtnx.onclick = () => {
  ideaBtnx.classList.toggle("showMenu");
  idnBtn.classList.toggle("showidn");
};

for (let i = 0; i < gotoBudgetPage.length; i++) {
  gotoBudgetPage[i].addEventListener("click", (e) => {
    e.target === gotoBudgetPage[0] ? directIncomeFnx() : "";
    e.target === gotoBudgetPage[1] ? directExpFnx() : "";
    e.target === gotoBudgetPage[2] ? budgetShowfnx() : "";
    e.target === gotoBudgetPage[3] ? directBudgetFnx() : "";
  });
}

budgetInputAreaLi.children[0].classList.add("showInputPannel");
for (let i = 0; i < budgetContHeader.children.length; i++) {
  budgetContHeader.children[i].addEventListener("click", (event) => {
    shoppingContainer.classList.remove("showshopping");

    let outPutLi = budgetInputAreaLi.children;
    let clickParent = event.target.parentElement;

    if (clickParent === budgetContHeader.children[0]) {
      for (let i = 0; i < outPutLi.length; i++) {
        outPutLi[i].classList.remove("showInputPannel");
        outPutLi[0].classList.add("showInputPannel");
      }
    } else if (clickParent === budgetContHeader.children[1]) {
      for (let i = 0; i < outPutLi.length; i++) {
        outPutLi[i].classList.remove("showInputPannel");
        outPutLi[1].classList.add("showInputPannel");
      }
    } else if (clickParent === budgetContHeader.children[2]) {
      for (let i = 0; i < outPutLi.length; i++) {
        outPutLi[i].classList.remove("showInputPannel");
        outPutLi[2].classList.add("showInputPannel");
      }
    } else if (clickParent === budgetContHeader.children[3]) {
      for (let i = 0; i < outPutLi.length; i++) {
        outPutLi[i].classList.remove("showInputPannel");
        outPutLi[3].classList.add("showInputPannel");
      }
    } else if (clickParent === budgetContHeader.children[4]) {
      shoppingContainer.classList.toggle("showshopping");
    }
  });
}

budOutDivUl[0].classList.add("showInputPannel");
for (let i = 0; i < budOutHead.length; i++) {
  budOutHead[i].addEventListener("click", (e) => {
    if (e.target === budOutHead[0]) {
      for (let i = 0; i < budOutDivUl.length; i++) {
        budOutDivUl[i].classList.remove("showInputPannel");
        budOutDivUl[0].classList.add("showInputPannel");
      }
    } else if (e.target === budOutHead[1]) {
      for (let i = 0; i < budOutDivUl.length; i++) {
        budOutDivUl[i].classList.remove("showInputPannel");
        budOutDivUl[1].classList.add("showInputPannel");
      }
    } else if (e.target === budOutHead[2]) {
      for (let i = 0; i < budOutDivUl.length; i++) {
        budOutDivUl[i].classList.remove("showInputPannel");
        budOutDivUl[2].classList.add("showInputPannel");
      }
    } else if (e.target === budOutHead[3]) {
      for (let i = 0; i < budOutDivUl.length; i++) {
        budOutDivUl[i].classList.remove("showInputPannel");
        budOutDivUl[3].classList.add("showInputPannel");
      }
    }
  });
}

cancelButt.onclick = () => {
  clearanceAlert.classList.remove("showclearance");
};
//clearing local storage
clearDiary.onclick = () => {
  clearanceAlert.classList.add("showclearance");
  contButt.addEventListener("click", () => {
    alert("Refresh Page");
    localStorage.clear();
    clearanceAlert.classList.remove("showclearance");
  });
};
//clearing local storage
clear_grapgh.onclick = () => {
  clearanceAlert.classList.add("showclearance");
  contButt.addEventListener("click", () => {
    alert("Refresh Page");
    localStorage.removeItem("totalCanvas");
    clearanceAlert.classList.remove("showclearance");
  });
};

//media queries
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    showNav.onclick = () => {
      navTabs.classList.toggle("showTabs");
    };
    saveDayBtn.onclick = () => {
      budOutAss.classList.toggle("showTabs");
      budgetInputArea.style.display = "none";
    };

    returnBack.forEach((returnBack) => {
      returnBack.onclick = () => {
        budOutAss.classList.toggle("showTabs");
        budgetInputArea.style.display = "flex";
      };
    });

    for (let i = 0; i < view_trk_butt.length; i++) {
      view_trk_butt[0].onclick = () => {
        nonsal_cnt_items[0].classList.add("showTabs");
      };
      view_trk_butt[1].onclick = () => {
        nonsal_cnt_items[1].classList.add("showTabs");
      };
    }

    go_to_Input.forEach((go_to_Input) => {
      go_to_Input.onclick = () => {
        nonsal_cnt_items[0].classList.remove("showTabs");
        nonsal_cnt_items[1].classList.remove("showTabs");
      };
    });
  } else {
    ("");
  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(min-width: 260px) and (max-width: 968px)");

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});

let time,
  currentH,
  alarm,
  currentM,
  activeAlarm = false;
var alarmFunction = () => {
  // Set our variables

  const sound = new Audio(
    "https://freesound.org/data/previews/316/316847_4939433-lq.mp3"
  );

  // Loop alarm sound
  sound.loop = true;

  // Function to display the current time
  function displayTime() {
    const now = new Date();
    time = now.toLocaleTimeString();

    // Check for alarm
    if (time === alarm) {
      sound.play();
    }

    setTimeout(displayTime, 1000);
  }

  displayTime();

  // Add option values for hours, minutes, and seconds
  function addMinSecVals(id) {
    const select = id;
    const min = 59;
    for (let i = 0; i <= min; i++) {
      select.options[select.options.length] = new Option(
        i < 10 ? "0" + i : i,
        i < 10 ? "0" + i : i
      );
    }
  }

  function addHours(id) {
    const select = id;
    const hour = 12;
    for (let i = 1; i <= hour; i++) {
      select.options[select.options.length] = new Option(
        i < 10 ? "0" + i : i,
        i
      );
    }
  }

  addMinSecVals(minutes);
  addMinSecVals(seconds);
  addHours(hours);

  // Set or clear alarm
  startstop.onclick = function () {
    alarm =
      hours.value +
      ":" +
      minutes.value +
      ":" +
      seconds.value +
      " " +
      ampm.value;
    activeAlarm = true;
  };
};

alarmFunction();
