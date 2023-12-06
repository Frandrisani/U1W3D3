const pageForm = document.getElementById("formPage");

pageForm.addEventListener("submit", function (e) {
  e.preventDefault();

  //campo input form
  const valoreTask = document.getElementById("task");

  //creiamo il paragrafo che conterrà il task salvato
  const inseriamoTask = document.createElement("p");

  //creiamo l'elemento "icona" e lo appendiamo all'elemento p creato qui sopra
  const logoElement = document.createElement("i");
  logoElement.className = "fas fa-thumbtack"; // Aggiungi le classi necessarie per l'icona
  inseriamoTask.appendChild(logoElement);

  //creiamo l'elemento "span"
  const taskText = document.createElement("span");
  taskText.innerText = valoreTask.value;
  inseriamoTask.appendChild(taskText);

  const taskSection = document.getElementById("contenitoreTask");
  taskSection.appendChild(inseriamoTask);

  taskText.setAttribute("id", "taskStile");
  valoreTask.value = " ";
  taskTextGeneral = taskText;

  const line = function () {
    const quandoClicco = "text-decoration: line-through";
    taskTextGeneral.setAttribute("style", quandoClicco);
  };

  taskText.addEventListener("click", line);
});
