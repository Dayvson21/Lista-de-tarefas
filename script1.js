

let listaCompleta = [];


function adicionarTarefa() {

    const tarefa = document.getElementById("input").value;
    const novaTarefa = document.getElementById("lista");

    const novoItem = document.createElement("li");
    novoItem.textContent = tarefa;

    novaTarefa.appendChild(novoItem);
    //tarefa.value(listaCompleta);
    document.getElementById("input").value = "";
    //listaCompleta.push(novoItem);
    listaCompleta.push(tarefa);
    console.log(listaCompleta)
};

function limpar() {
  document.getElementById("lista").innerHTML = "";
};

function mostrar_lista() {
  const tarefas = document.getElementById("lista");
  tarefas.innerHTML = "";

  listaCompleta.forEach((tarefa) => {
    const li = document.createElement("li");
    li.textContent = tarefa;
    tarefas.appendChild(li);
  });
}