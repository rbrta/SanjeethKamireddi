// var taskData = require("./taskData.json");

async function fetchData() {
  const response = await fetch("./task.json");
  return response.json();
}

function findApp() {
  const element = document.querySelector("#app");
  return element;
}

function addUl(element) {
  const ul = document.createElement("ul");
  element.appendChild(ul);
  return ul;
}

const dictionary = {
  E: "iconE.svg",
  G: "iconG.svg",
  S: "iconS.svg",
};

async function start() {
  try {
    const response = await fetchData();
    const app = findApp();
    const ul = addUl(app);
    for (let item of response) {
      const li = document.createElement("li");
      li.innerHTML = `<div class="task"> </div><img src="${
        dictionary[item.task]
      }" /> <span>${item.value}</span>  </div>`;
      ul.appendChild(li);
    }
    console.log(response, app);
  } catch (error) {
    console.error(error);
  }
}

start();
