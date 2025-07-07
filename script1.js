

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
  let deletar = document.getElementById("lista");
  deletar.innerHTML = "";
  listaCompleta = [];
};
const novoh2 = document.getElementById("h1")
novoh2.textContent = "Lista de tarefas"

//const novoH1 = document.createElement("h1");
//novoH1.textContent = "Nova lista de tarefas.";
//document.body.appendChild(novoH1);