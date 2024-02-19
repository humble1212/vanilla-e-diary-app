const dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Frid", "Sat."];
const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const myDate = new Date();
var currentDay = myDate.getDay();
var currentMonth = myDate.getMonth();
var currentYear = myDate.getFullYear();
const fullDate = `${dayArray[currentDay]}, ${monthArray[currentMonth]}, ${currentYear}`;

const tododayz = document.querySelectorAll(".To-Int-Header ol li");

for (let i = 0; i < tododayz.length; i++) {
  tododayz[
    i
  ].innerHTML = `${dayArray[i]} ${monthArray[currentMonth]}, ${currentYear}`;
}
todoIntake[0].classList.add("showdaysIntake");
tododayz[0].classList.add("daysClass");

for (let i = 0; i < tododayz.length; i++) {
  tododayz[i].onclick = (e) => {
    for (let i = 0; i < todoIntake.length; i++) {
      if (e.target === tododayz[0]) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[0].classList.add("showdaysIntake");
        tododayz[0].classList.add("daysClass");
      } else if (e.target === tododayz[1]) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[1].classList.add("showdaysIntake");
        tododayz[1].classList.add("daysClass");
      } else if (e.target === tododayz[2]) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[2].classList.add("showdaysIntake");
        tododayz[2].classList.add("daysClass");
      } else if (e.target === tododayz[3]) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[3].classList.add("showdaysIntake");
        tododayz[3].classList.add("daysClass");
      } else if (e.target === tododayz[4]) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[4].classList.add("showdaysIntake");
        tododayz[4].classList.add("daysClass");
      } else if (e.target === tododayz[5]) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[5].classList.add("showdaysIntake");
        tododayz[5].classList.add("daysClass");
      } else if (e.target === tododayz[6]) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[6].classList.add("showdaysIntake");
        tododayz[6].classList.add("daysClass");
      }
    }
  };
}

//Setting local storages
const todoArrayA = JSON.parse(localStorage.getItem("todoArrayA")) || [];
const todoArrayB = JSON.parse(localStorage.getItem("todoArrayB")) || [];
const todoArrayC = JSON.parse(localStorage.getItem("todoArrayC")) || [];
const todoArrayD = JSON.parse(localStorage.getItem("todoArrayD")) || [];
const todoArrayE = JSON.parse(localStorage.getItem("todoArrayE")) || [];
const todoArrayF = JSON.parse(localStorage.getItem("todoArrayF")) || [];
const todoArrayG = JSON.parse(localStorage.getItem("todoArrayG")) || [];
const targetArray = JSON.parse(localStorage.getItem("targetArray")) || [];

//todo snippets
const todoSnnipArray = JSON.parse(localStorage.getItem("todoSnnipArray")) || [];
const targetSnipArray =
  JSON.parse(localStorage.getItem("targetSnipArray")) || [];

document.addEventListener("DOMContentLoaded", () => {
  todoArrayA.forEach((todoObject) => {
    todoIntake[0].innerHTML += todoLifnx(todoObject);
  });
  todoArrayB.forEach((todoObject) => {
    todoIntake[1].innerHTML += todoLifnx(todoObject);
  });
  todoArrayC.forEach((todoObject) => {
    todoIntake[2].innerHTML += todoLifnx(todoObject);
  });
  todoArrayD.forEach((todoObject) => {
    todoIntake[3].innerHTML += todoLifnx(todoObject);
  });
  todoArrayE.forEach((todoObject) => {
    todoIntake[4].innerHTML += todoLifnx(todoObject);
  });
  todoArrayF.forEach((todoObject) => {
    todoIntake[5].innerHTML += todoLifnx(todoObject);
  });
  todoArrayG.forEach((todoObject) => {
    todoIntake[6].innerHTML += todoLifnx(todoObject);
  });
  targetArray.forEach((targetObject) => {
    targetIntake.innerHTML += targetlifnx(targetObject);
  });
  todoSnnipArray.forEach((todoSnipObject) => {
    todoSide.innerHTML += todoSnipLifnx(todoSnipObject);
  });
  targetSnipArray.forEach((targetsnpObject) => {
    targetSide.innerHTML += targetSnipLifnx(targetsnpObject);
  });
});

var todoLifnx = (todoObject) => `
<li>
    <div class="sectionA">
      <span>
        <h2>${todoObject.activityInput}</h2>
        <div class="todo-ticks">
          <div>
            <label for="priorityId">Mark as Priority</label>
            <input
              type="checkbox"
              id="priorityId"
              name="to-do-Inp"
              class="to-do-Inp" />
          </div>
          <div>
            <label for="CompletedId">Completed</label>
            <input
              type="checkbox"
              name="check-to-do"
              id="CompletedId"
              class="check-to-do" />
          </div>
        </div>
      </span>
      <div class="firstSub">
        <span> Type: <strong>${todoObject.T_Type}</strong></span>.
        <span>
        Category: <h3>${todoObject.category}</h3></span>. <span> Due Date:
          <p>${todoObject.dueDat}</p>. <p>${todoObject.dueDate}</p>
        </span>
        <span>
          <h2 class="material-symbols-outlined del-todo-snip"> alarm </h2>Due time:
          <h2 id="clock" class="clock">${todoObject.alarm}</h2>
          </span>.
      </div>
    </div>
    <div class="sectionB">
      <div>
        <span class="material-symbols-outlined share-todo"> share </span>
        <span class="material-symbols-outlined customize-todo"> settings </span>
        <span class="material-symbols-outlined print-event"> print </span>
        <span class="material-symbols-outlined delete-todo"> delete </span>
      </div>
    </div>
  </li>
`;

//appending todo snippets
var todoSnipLifnx = (todoSnipObject) => `
<li>
  <div class="sectionA">
    <span>
      <h2>${todoSnipObject.activityInput}</h2>
      <div class="todo-ticks">
        <label for="CompletedId">Completed</label>
        <input
          type="checkbox"
          name="check-to-do"
          id="CompletedId"
          class="check-to-do" />
      </div>
    </span>
    <div class="firstSub">
      <span>
       <h1 class="material-symbols-outlined del-todo-snip"> alarm </h1>Due time:
       <h1 id="clock" class="clock">${todoSnipObject.alarm}</h1>
      </span> .
      <div class="del-todo-div">
        <button id="gotoMapping">${todoSnipObject.eventdays} ${monthArray[currentMonth]}, ${currentYear}</button>
        <h1 class="material-symbols-outlined del-todo-snip"> delete </h1>
      </div>
    </div>
  </div>
</li>
`;

for (let i = 0; i < add_td_btn.children.length; i++) {
  add_td_btn.children[i].addEventListener("click", (event) => {
    eventdays = event.target.innerText;
    localStorage.setItem("eventdays", JSON.stringify(eventdays));
    return { eventdays };
  });
}

for (let i = 0; i < add_td_btn.children.length; i++) {
  add_td_btn.children[i].addEventListener("click", (e) => {
    let todoSnipObject = {
      activityInput: activityInput.value,
      eventdays,
      alarm,
    };
    todoSnnipArray.push(todoSnipObject);
    localStorage.setItem("todoSnnipArray", JSON.stringify(todoSnnipArray));
    todoSide.innerHTML += todoSnipLifnx(todoSnipObject);

    if (e.target === add_td_btn.children[0]) {
      for (let i = 0; i < todoIntake.length; i++) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[0].classList.add("showdaysIntake");
        tododayz[0].classList.add("daysClass");
      }
      let todoObject = {
        activityInput: activityInput.value,
        T_Type: T_Type.value,
        category: category.value,
        dueDat: dueDat.value,
        dueDate: dueDate.value,
        alarm,
      };
      todoArrayA.push(todoObject);
      localStorage.setItem("todoArrayA", JSON.stringify(todoArrayA));
      todoIntake[0].innerHTML += todoLifnx(todoObject);
      activityInput.value = "";
    } else if (e.target === add_td_btn.children[1]) {
      for (let i = 0; i < todoIntake.length; i++) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[1].classList.add("showdaysIntake");
        tododayz[1].classList.add("daysClass");
      }
      let todoObject = {
        activityInput: activityInput.value,
        T_Type: T_Type.value,
        category: category.value,
        dueDat: dueDat.value,
        dueDate: dueDate.value,
        alarm,
      };
      todoArrayB.push(todoObject);
      localStorage.setItem("todoArrayB", JSON.stringify(todoArrayB));
      todoIntake[1].innerHTML += todoLifnx(todoObject);
      activityInput.value = "";
    } else if (e.target === add_td_btn.children[2]) {
      for (let i = 0; i < todoIntake.length; i++) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[2].classList.add("showdaysIntake");
        tododayz[2].classList.add("daysClass");
      }
      let todoObject = {
        activityInput: activityInput.value,
        T_Type: T_Type.value,
        category: category.value,
        dueDat: dueDat.value,
        dueDate: dueDate.value,
        alarm,
      };
      todoArrayC.push(todoObject);
      localStorage.setItem("todoArrayC", JSON.stringify(todoArrayC));
      todoIntake[2].innerHTML += todoLifnx(todoObject);
      activityInput.value = "";
    } else if (e.target === add_td_btn.children[3]) {
      for (let i = 0; i < todoIntake.length; i++) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[3].classList.add("showdaysIntake");
        tododayz[3].classList.add("daysClass");
      }
      let todoObject = {
        activityInput: activityInput.value,
        T_Type: T_Type.value,
        category: category.value,
        dueDat: dueDat.value,
        dueDate: dueDate.value,
        alarm,
      };
      todoArrayD.push(todoObject);
      localStorage.setItem("todoArrayD", JSON.stringify(todoArrayD));
      todoIntake[3].innerHTML += todoLifnx(todoObject);
      activityInput.value = "";
    } else if (e.target === add_td_btn.children[4]) {
      for (let i = 0; i < todoIntake.length; i++) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[4].classList.add("showdaysIntake");
        tododayz[4].classList.add("daysClass");
      }
      let todoObject = {
        activityInput: activityInput.value,
        T_Type: T_Type.value,
        category: category.value,
        dueDat: dueDat.value,
        dueDate: dueDate.value,
        alarm,
      };
      todoArrayE.push(todoObject);
      localStorage.setItem("todoArrayE", JSON.stringify(todoArrayE));
      todoIntake[4].innerHTML += todoLifnx(todoObject);
      activityInput.value = "";
    } else if (e.target === add_td_btn.children[5]) {
      for (let i = 0; i < todoIntake.length; i++) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[5].classList.add("showdaysIntake");
        tododayz[5].classList.add("daysClass");
      }
      let todoObject = {
        activityInput: activityInput.value,
        T_Type: T_Type.value,
        category: category.value,
        dueDat: dueDat.value,
        dueDate: dueDate.value,
        alarm,
      };
      todoArrayF.push(todoObject);
      localStorage.setItem("todoArrayF", JSON.stringify(todoArrayF));
      todoIntake[5].innerHTML += todoLifnx(todoObject);
      activityInput.value = "";
    } else if (e.target === add_td_btn.children[6]) {
      for (let i = 0; i < todoIntake.length; i++) {
        tododayz[i].classList.remove("daysClass");
        todoIntake[i].classList.remove("showdaysIntake");
        todoIntake[6].classList.add("showdaysIntake");
        tododayz[6].classList.add("daysClass");
      }
      let todoObject = {
        activityInput: activityInput.value,
        T_Type: T_Type.value,
        category: category.value,
        dueDat: dueDat.value,
        dueDate: dueDate.value,
        alarm,
      };
      todoArrayG.push(todoObject);
      localStorage.setItem("todoArrayG", JSON.stringify(todoArrayG));
      todoIntake[6].innerHTML += todoLifnx(todoObject);
      activityInput.value = "";
    }
  });
}

//Targets
var targetlifnx = (targetObject) => `
<li>
  <div class="typeandcat">
    <h2>Category: ${targetObject.category}</h2>
    <h2>Type: ${targetObject.Type}</h2>
  </div>
  <div class="targetTxt">
    <h4>Goal: </h4>
    <h3>${targetObject.targetInput}</h3>
  </div>

  <div class="timelinPeriods">
    <p>
      <span> Timeline: <span id="timelineMapping">${targetObject.Timeline}</span></span>
    </p>
    <span>
      Alternative Completion Period: <h5> From: ${targetObject.From} </h5> -
      <h5> To: ${targetObject.To}</h5>
    </span>
  </div>

  <div class="sectionB">
    <div>
      <span class="material-symbols-outlined share-target"> share </span>
      <span class="material-symbols-outlined customize-target"> settings </span>
      <span class="material-symbols-outlined print-target"> print </span>
      <span class="material-symbols-outlined deleteTarget"> delete </span>
    </div>
  </div>
</li>
`;

//appending Target snippets
var targetSnipLifnx = (targetsnpObject) => `
<li>
  <div class="sectionA">
    <span>
      <h2>${targetsnpObject.targetInput}</h2>
      <div class="todo-ticks">
        <label for="CompletedId">Achieved</label>
        <input
          type="checkbox"
          name="check-to-do"
          id="CompletedId"
          class="check-to-do" />
      </div>
    </span>
    <div class="firstSub">
      <span>
        <h4>Click on date to View Details →</h4></span> .
      <div class="del-todo-div">
        <button id="mapTargets">${targetsnpObject.Timeline}</button>
        <h1 class="material-symbols-outlined del-todo-snip"> delete </h1>
      </div>
    </div>
  </div>
</li>
`;

var targetFnx = () => {
  targetObject = {
    To: To.value,
    From: From.value,
    Type: TagType.value,
    Timeline: timeline.value,
    category: Tcategory.value,
    targetInput: targetInput.value,
  };
  targetsnpObject = {
    Timeline: timeline.value,
    targetInput: targetInput.value,
  };

  targetArray.push(targetObject);
  localStorage.setItem("targetArray", JSON.stringify(targetArray));
  targetIntake.innerHTML += targetlifnx(targetObject);
  targetIntake.scrollTop = targetIntake.scrollHeight;

  targetSnipArray.push(targetsnpObject);
  localStorage.setItem("targetSnipArray", JSON.stringify(targetSnipArray));
  targetSide.innerHTML += targetSnipLifnx(targetsnpObject);
  targetSide.scrollTop = targetSide.scrollHeight;

  targetInput.value = "";
};

addTarget.onclick = () => {
  targetFnx();
};

window.addEventListener("click", (event) => {
  let eventTarget = event.target;
  // deleting to do
  if (eventTarget.className === "material-symbols-outlined delete-todo") {
    let delEvent = eventTarget.parentElement.parentElement.parentElement;
    delEvent.style.animationPlayState = "running";
    delEvent.addEventListener("animationend", () => {
      delEvent.remove();
    });
    if (delEvent.parentElement === todoIntake[0]) {
      localStorage.removeItem(todoArrayA.delEvent);
    } else if (delEvent.parentElement === todoIntake[1]) {
      for (todoObject in todoArrayB) {
        todoArrayB.splice(todoArrayB.indexOf(todoObject), 1);
        localStorage.removeItem("todoArrayB");
        localStorage.setItem("todoArrayB", JSON.stringify(todoArrayB));
        break;
      }
    } else if (delEvent.parentElement === todoIntake[2]) {
      for (todoObject in todoArrayC) {
        todoArrayC.splice(0, 1);
        localStorage.removeItem("todoArrayC");
        localStorage.setItem("todoArrayC", JSON.stringify(todoArrayC));
        break;
      }
    } else if (delEvent.parentElement === todoIntake[3]) {
      for (todoObject in todoArrayD) {
        todoArrayD.splice(todoArrayD.indexOf(todoObject), 1);
        localStorage.removeItem("todoArrayD");
        localStorage.setItem("todoArrayD", JSON.stringify(todoArrayD));
        break;
      }
    } else if (delEvent.parentElement === todoIntake[4]) {
      for (todoObject in todoArrayE) {
        todoArrayE.splice(0, 1);
        localStorage.removeItem("todoArrayE");
        localStorage.setItem("todoArrayE", JSON.stringify(todoArrayE));
        break;
      }
    } else if (delEvent.parentElement === todoIntake[5]) {
      for (todoObject in todoArrayF) {
        todoArrayF.splice(0, 1);

        localStorage.removeItem("todoArrayF");
        localStorage.setItem("todoArrayF", JSON.stringify(todoArrayF));
        break;
      }
    } else if (delEvent.parentElement === todoIntake[6]) {
      for (todoObject in todoArrayG) {
        todoArrayG.splice(0, 1);
        localStorage.removeItem("todoArrayG");
        localStorage.setItem("todoArrayG", JSON.stringify(todoArrayG));
        break;
      }
    }
  }

  //deleting todo snip
  else if (
    eventTarget.className === "material-symbols-outlined del-todo-snip"
  ) {
    let delSnip =
      eventTarget.parentElement.parentElement.parentElement.parentElement;
    delSnip.style.animationPlayState = "running";
    delSnip.addEventListener("animationend", () => {
      delSnip.remove();
    });
    if (delSnip.parentElement.className === "todoSide todo-targ-side") {
      for (todoSnipObject in todoSnnipArray) {
        todoSnnipArray.splice(0, 1);

        localStorage.removeItem("todoSnnipArray");
        localStorage.setItem("todoSnnipArray", JSON.stringify(todoSnnipArray));
        break;
      }
    } else if (
      delSnip.parentElement.className === "targetSide todo-targ-side"
    ) {
      for (targetsnpObject in targetSnipArray) {
        targetSnipArray.splice(0, 1);

        localStorage.removeItem("targetSnipArray");
        localStorage.setItem(
          "targetSnipArray",
          JSON.stringify(targetSnipArray)
        );
        break;
      }
    }
  }
  //deleting target
  else if (eventTarget.className === "material-symbols-outlined deleteTarget") {
    let deltgt = eventTarget.parentElement.parentElement.parentElement;
    deltgt.style.animationPlayState = "running";
    deltgt.addEventListener("animationend", () => {
      deltgt.remove();
      //removing from target array
    });

    for (targetObject in targetArray) {
      targetArray.splice(0, 1);

      localStorage.removeItem("targetArray");
      localStorage.setItem("targetArray", JSON.stringify(targetArray));
      break;
    }
  }

  //checking completed todo target snip
  else if (eventTarget.className === "check-to-do") {
    let eventStyle = eventTarget.parentElement.parentElement.parentElement;
    let eventSiblingStyle = eventTarget.parentElement.parentElement.children[0];

    if (eventStyle.style.textDecoration !== "line-through") {
      eventStyle.style.textDecoration = "line-through";
      eventSiblingStyle.style.opacity = "0";
    } else {
      eventStyle.style.textDecoration = "";
      eventSiblingStyle.style.opacity = "1";
    }
  } else if (eventTarget.className === "to-do-Inp") {
    eventTarget.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle(
      "pin-priority"
    );
  } else if (eventTarget.id === "gotoMapping") {
    toDoListFnx();

    eventTarget.innerText === tododayz[0].innerText
      ? (todoIntake[0].classList.add("showdaysIntake"),
        tododayz[0].classList.add("daysClass"))
      : (todoIntake[0].classList.remove("showdaysIntake"),
        tododayz[0].classList.remove("daysClass"));

    eventTarget.innerText === tododayz[1].innerText
      ? (todoIntake[1].classList.add("showdaysIntake"),
        tododayz[1].classList.add("daysClass"))
      : (todoIntake[1].classList.remove("showdaysIntake"),
        tododayz[1].classList.remove("daysClass"));

    eventTarget.innerText === tododayz[2].innerText
      ? (todoIntake[2].classList.add("showdaysIntake"),
        tododayz[2].classList.add("daysClass"))
      : (todoIntake[2].classList.remove("showdaysIntake"),
        tododayz[2].classList.remove("daysClass"));

    eventTarget.innerText === tododayz[3].innerText
      ? (todoIntake[3].classList.add("showdaysIntake"),
        tododayz[3].classList.add("daysClass"))
      : (todoIntake[3].classList.remove("showdaysIntake"),
        tododayz[3].classList.remove("daysClass"));

    eventTarget.innerText === tododayz[4].innerText
      ? (todoIntake[4].classList.add("showdaysIntake"),
        tododayz[4].classList.add("daysClass"))
      : (todoIntake[4].classList.remove("showdaysIntake"),
        tododayz[4].classList.remove("daysClass"));

    eventTarget.innerText === tododayz[5].innerText
      ? (todoIntake[5].classList.add("showdaysIntake"),
        tododayz[5].classList.add("daysClass"))
      : (todoIntake[5].classList.remove("showdaysIntake"),
        tododayz[5].classList.remove("daysClass"));

    eventTarget.innerText === tododayz[6].innerText
      ? (todoIntake[6].classList.add("showdaysIntake"),
        tododayz[6].classList.add("daysClass"))
      : (todoIntake[6].classList.remove("showdaysIntake"),
        tododayz[6].classList.remove("daysClass"));
  } else if (eventTarget.id === "mapTargets") {
    toDoListFnx();
    for (let i = 0; i < targetIntake.children.length; i++) {
      let targetTxt =
        targetIntake.children[i].children[2].children[0].children[0]
          .children[0];
      let targetTxtParent =
        targetTxt.parentElement.parentElement.parentElement.parentElement;

      eventTarget.innerText === targetTxt.innerText
        ? targetTxtParent.classList.add("animateborder")
        : targetTxtParent.classList.remove("animateborder");
    }
  }
});
