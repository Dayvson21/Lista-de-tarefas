
const listaDeTarefas = [];
while(true){
    
    console.log("----Menu----");
    console.log("1 - adicionar tarefas");
    console.log("2 - listar tarefas");
    console.log("3 - remover tarefas");
    console.log("4 - concluir tarefas"); 
    console.log("5 - Sair");  

    const opcao = parseInt(prompt("Escolha sua opção: "));

    if (opcao === 1){
        function adicionarTarefa() {
            const tarefa = prompt("Adicione sua tarefa: ")
            listaDeTarefas.push(tarefa);
            console.log("Tarefa adicionada!");
        }
        //adicionarTarefa();

    } else if (opcao === 2){
        if (listaDeTarefas.length === 0) {
            console.log("Ainda não possui tarefas.")
        } else {
            console.log("\nLista de Tarefas:")
            for (const [index, value] of listaDeTarefas.entries()){
                console.log(`Índice: ${index} - Tarefa: ${value}`);
            }
        }
    } else if (opcao === 3){
        const indice = parseInt(prompt("Digite o índice para remover: "));
        if (indice >= 0 && indice < listaDeTarefas.length){
            const removido = listaDeTarefas.splice(indice, 1);
            console.log(`Tarefa: "${removido}" removida.`);
        } else {
            console.log("Índice inválido!!");
        }
    } else if (opcao === 4){
        const indice = parseInt(prompt("Digite o índice da tarefa: "));
        if (indice >= 0 && indice < listaDeTarefas.length) {
            const concluida = listaDeTarefas[indice];
            listaDeTarefas[indice] = `[Concluída] ${concluida}`;
            console.log("Tarefa concluída , marcada.");
        } else {
            console.log("Índice inválido.");
        }
    } else if (opcao === 5) {
        console.log("O programa foi encerrado.");
        break;
    } else {
        console.log("Opção inválida, Tente novamente.");
    }
}