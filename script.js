/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
let data;

const usersCard = document.getElementById("output");

async function userInfo() {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((result) => {
      data = result;

      usersCard.innerHTML = "";
      data.forEach((element) => {
        let cardWrapper = document.createElement("div");
        cardWrapper.classList.add("card-wrapper");
        let userLogin = document.createElement("div");
        userLogin.textContent = element.login;

        let userAvatar = document.createElement("img");
        userAvatar.src = element.avatar_url;

        cardWrapper.append(userLogin, userAvatar);
        usersCard.append(cardWrapper);
      });
    })
    .catch((error) => console.error(error));
}

document.querySelector("button").addEventListener("click", userInfo);
