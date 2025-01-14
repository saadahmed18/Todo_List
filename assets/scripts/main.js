document.getElementById("switch").onclick = () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
  }
};
let input = document.getElementById("input");
let task = ``;
let ol = document.getElementById("ol");
document.getElementById("btn-task").onclick = function () {
  if (input.value === "") {
    return;
  }
  task += `<li>${input.value}</li>`;
  ol.innerHTML = task;
  input.value = "";
};
