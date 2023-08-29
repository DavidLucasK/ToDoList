//Pegando elementos da página
const inputField = document.querySelector(".input-field textarea"),
    todoLists = document.querySelector(".todoLists"),
    pendingNum = document.querySelector(".pending-num"),
    clearButton = document.querySelector(".clear-button");

    function allTasks() {
        let tasks = document.querySelectorAll(".pending");
        pendingNum.textContent = tasks.length === 0 ? "0" : tasks.length;
    
        let allLists = document.querySelectorAll(".list");
        if (allLists.length > 0) {
            todoLists.style.marginTop = "20px";
            clearButton.style.pointerEvents = "auto";
            clearButton.style.display = "flex";
            return
        }
        todoLists.style.marginTop = "0px";
        clearButton.style.display = "none";
    }


//Adicionando tarefas quando escrever algo e pressionar enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //Função trim remove espaços antes e depois dos valores inseridos

    //Variaveis para feature com timestamps
    // var data = new Date();.
    // var dataFormated = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + ((data.getFullYear()));

    //Se for escrito alguma coisa e apertar Enter isso vira um espaço de lista
    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = `<li class="list pending" onClick="handleStatus(this)">
            <input type="checkbox" />
            <span class="task">${inputVal}</span>
            <i class="uil uil-trash" onClick="deleteTask(this)"></i>
    </li>`;

    todoLists.insertAdjacentHTML("beforeend", liTag);
    inputField.value = ""; //Removendo valor do Input Field
    allTasks();
    }
})

//Checando e deschecando a checkbox quando clicar na tarefa
function handleStatus(e) {
    const checkbox = e.querySelector("input");
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

//Deletando tarefa especifica quando clicar no icone de lixeira
function deleteTask(e) {
    e.parentElement.remove(); // Pegando elemento pai e removendo ele
    allTasks();
}

//Botão para clicar e limpar todas as tarefas
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
})
