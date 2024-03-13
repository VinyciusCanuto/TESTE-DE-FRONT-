const profileImage = document.querySelector("#profile-img");
const title = document.querySelector("#title");
const name = document.querySelector("#name");
const info = document.querySelector("#info");
const followerImage = document.querySelector("#follow-img");
const followerName = document.querySelector("#follow-name");
const followersContainer = document.querySelector("#followers");

window.addEventListener("DOMContentLoaded", () => {
  fetchData();
  fetchFollowers();
});

async function fetchData() {
  await fetch("https://api.github.com/users/vinyciusCanuto")
    .then((response) => response.json())
    .then((data) => {
      profileImage.setAttribute("src", data.avatar_url);
      title.innerHTML = data.company;
      name.innerHTML = data.name;
      info.innerHTML = data.bio;
    });
}

async function fetchFollowers() {
  await fetch("https://api.github.com/users/viniciuscanuto/followers")
    .then((response) => response.json())
    .then((followers) => {
      followers.map((follower) => {
        followersContainer.innerHTML += `
          <div id="follower-box">
            <img id="follow-img" src="${follower.avatar_url}" alt="">
            <p id="follow-name">${follower.login}</p>
          </div>
        `;
      });
    });
}


const loginBtn = document.getElementById("bt");
const passwordInput = document.getElementById("senha")
const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;
const emailInput = document.getElementById("email");
const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if(passwordRegex.test(passwordInput.value) && emailRegex.test(emailInput.value)) {
        alert("logado");
    }
    else if (!emailRegex.test(emailInput.value)){
        emailInput.style.border = "2px solid red"
    }
    else if (!passwordRegex.test(passwordInput.value)){
        passwordInput.style.border = "2px solid red"
}
    console.log(emailRegex.test(emailInput.value));
    console.log(passwordRegex.test(passwordInput.value));
});

emailInput.addEventListener("click", () => {
    emailInput.style.border = "none"
});

passwordInput.addEventListener("click", () => {
    passwordInput.style.border = "none"
});