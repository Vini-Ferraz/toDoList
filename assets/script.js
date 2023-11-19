function creatNewTask() {
    // Obter elementos necessários do DOM
    let list = document.getElementById('minha-lista');
    let newTask = document.createElement('li');
    let taskContainer = document.createElement('article');
    let myString = document.getElementById('myTask').value;

    // Expressão regular para testar a segurança do texto inserido
    let myRegex = /[^A-Z0-9áàãâéêíóôõúç\s]/gi; 
    let securityTest = myRegex.test(myString);

    // Verificar se o campo de entrada não está vazio e passa no teste de segurança
    if (myString !== "" && securityTest == false) {
        // Configurar o texto da nova tarefa e limpar o campo de entrada
        newTask.textContent = myString;
        document.getElementById('myTask').value = "";

        // Criar botão de exclusão e configurar sua ação
        let deleteBtn = document.createElement('button');
        deleteBtn.onclick = function() {
            newTask.remove();
            deleteBtn.remove();
        }
        deleteBtn.textContent = "x";
        
        // Adicionar elementos à lista no DOM
        list.appendChild(taskContainer);
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(deleteBtn);

        // Adicionar evento de clique à nova tarefa para alternar estilo
        newTask.addEventListener('click', () => {
            if (newTask.style.textDecoration == 'line-through') {
                newTask.style.textDecoration = 'none';
                newTask.style.backgroundColor = '#EAEAEA';
                newTask.style.fontStyle = 'normal';
            } else {
                newTask.style.textDecoration = 'line-through';
                newTask.style.backgroundColor = '#BBEFA2';
                newTask.style.fontStyle = 'italic';
            }
        });
    } else {
        // Alertar o usuário se o campo estiver vazio ou não passar no teste de segurança
        window.alert('INSIRA UM VALOR VÁLIDO');
    }
}
