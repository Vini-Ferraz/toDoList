function creatNewTask(){
    
    let list = document.getElementById('minha-lista');
    let newTask = document.createElement('li');
    let taskContainer = document.createElement('article');
    let myString = document.getElementById('myTask').value;
    let myRegex = /[^A-Z0-9áàãâéêíóôõú\s]/gi; 
    let securityTest = myRegex.test(myString);
    console.log(securityTest);
    newTask.textContent = document.getElementById('myTask').value;

    if(document.getElementById('myTask').value !== "" && securityTest == false){
        document.getElementById('myTask').value = "";

        let deleteBtn = document.createElement('button');
        deleteBtn.onclick = function() {
            newTask.remove();
            deleteBtn.remove();
        }
        deleteBtn.textContent = "x";
        
        list.appendChild(taskContainer)
        taskContainer.appendChild(newTask);
        taskContainer.appendChild(deleteBtn);

        newTask.addEventListener('click', () => {
            if (newTask.style.textDecoration == 'line-through'){
                newTask.style.textDecoration = 'none';
                newTask.style.backgroundColor = '#EAEAEA';
                newTask.style.fontStyle = 'normal';

            }else {
                newTask.style.textDecoration = 'line-through';
                newTask.style.backgroundColor = '#BBEFA2';
                newTask.style.fontStyle = 'italic';
            }
        })
    }else{
        window.alert('INSIRA UM VALOR VÁLIDO')
    }
}
