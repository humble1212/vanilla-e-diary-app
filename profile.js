spanNexts.firstElementChild.style.backgroundColor = "lawngreen";
for (let i = 0; i < spanNexts.children.length; i++) {
  spanNexts.children[i].addEventListener("click", (e) => {
    if (e.target === spanNexts.children[0]) {
      spanNexts.children[1].style.backgroundColor = "";
      e.target.style.backgroundColor = "lawngreen";
      nextSection.classList.remove("show-nxt");
    } else if (e.target === spanNexts.children[1]) {
      spanNexts.children[0].style.backgroundColor = "";
      e.target.style.backgroundColor = "lawngreen";
      nextSection.classList.add("show-nxt");
    }
  });
}

editPf.onclick = () => {
  profileInpSide.classList.add("showProfiles");
  profileOutSide.classList.add("hideProfiles");
};
saveDet.onclick = () => {
  profileInpSide.classList.remove("showProfiles");
  profileOutSide.classList.remove("hideProfiles");
};
changePass.onclick = () => {
  changePasswrd.classList.add("showProfiles");
  profileInpSide.classList.remove("showProfiles");
  profileOutSide.classList.add("hideProfiles");
};
pDetails.onclick = () => {
  changePasswrd.classList.remove("showProfiles");
  profileInpSide.classList.remove("showProfiles");
  profileOutSide.classList.remove("hideProfiles");
};

SignUpBtn.onclick = () => {
  Registration.classList.add("show-nxt");
  deleteAccount.classList.remove("show-nxt");
};
loginBtn.onclick = () => {
  Registration.classList.remove("show-nxt");
  deleteAccount.classList.remove("show-nxt");
};
deleteAccountbutton.onclick = () => {
  deleteAccount.classList.add("show-nxt");
  Registration.classList.remove("show-nxt");
};
profile.onclick = () => {
  logReg.classList.toggle("showProfileLinks");
};

account_circle.onclick = () => {
  closeProfile.classList.add("showProfiles");
  showProfile.classList.add("show-nxt");
  registrationPage.classList.remove("show-nxt");
};

login.onclick = () => {
  closeProfile.classList.add("showProfiles");
  registrationPage.classList.add("show-nxt");
  showProfile.classList.remove("show-nxt");
  Registration.classList.remove("show-nxt");
};

logout.onclick = () => {
  closeProfile.classList.add("showProfiles");
  registrationPage.classList.add("show-nxt");
};

closeProfile.onclick = () => {
  registrationPage.classList.remove("show-nxt");
  showProfile.classList.remove("show-nxt");
  closeProfile.classList.remove("showProfiles");
};
