

const listaCompleta = [];

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
}