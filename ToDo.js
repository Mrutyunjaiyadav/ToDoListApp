let GetInputText = document.getElementById("InputField");
let AddToDoButton = document.getElementById("btnAdd");
let To_Do_Container = document.getElementById("To_Do_Container");
AddToDoButton.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("paragraph_styling");
  To_Do_Container.appendChild(paragraph);
  paragraph.innerText = GetInputText.value;

  GetInputText.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    To_Do_Container.removeChild(paragraph);
  });
});
