function adicionarItem() {
    let item = document.getElementById("item").value;
    let deadline = document.getElementById("deadline").value;

    if(item === '' || deadline.value == ''){
        alert('Error message.');
    }else{
        
        var lista  = document.getElementById("lista");
        var row = lista.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = "<input type='checkbox'>";
        cell2.innerHTML = item;
        cell3.innerHTML = deadline;
        cell4.innerHTML = mostraData();
        cell5.innerHTML = '<input type="button" value="X" onclick="deletarItem(\'' + item + '\')"/>';

        salvarDadosLocalStorage(item, deadline);
        mostraLista();
        limpaLista();
    }  
}

function limpaLista(){
    document.getElementById('item').value='';
    document.getElementById('deadline').value='';
}

function mostraData(){
    var data = new Date(),
        dia  = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (data.getMonth()+1).toString(), 
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = data.getFullYear();   
    return anoF+"-"+mesF+"-"+diaF;
}

function deletarItem(item){
	let arrayTasks = JSON.parse(window.localStorage.getItem('tasks'));
    for(tasks of arrayTasks){
        if(tasks.description == item){
            console.log(tasks.description)
            arrayTasks.splice(task.description, 1);
        }
    }
    window.localStorage.setItem('tasks', JSON.stringify(arrayTasks));
    document.getElementById("lista").deleteRow(item.row);
}

function salvarDadosLocalStorage(item, data){
	let arrayTasks = JSON.parse(window.localStorage.getItem('tasks'));

	if(!arrayTasks) arrayTasks = []; //Inicializando o vetor se ele vier vazio do local Storage

	let objTask = {description: "", deadline: ""};
	objTask.description = item;
	objTask.deadline = data;

	arrayTasks.push(objTask);
	window.localStorage.setItem('tasks', JSON.stringify(arrayTasks));
}

function recuperarDadosLocalStorage(){
	let arrayTasks = JSON.parse(window.localStorage.getItem('tasks'));

	for(task of arrayTasks){
        var lista  = document.getElementById("lista");
        var row = lista.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);

        cell1.innerHTML = "<input type='checkbox'>";
        cell2.innerHTML = task.description;
        cell3.innerHTML = task.deadline;
        cell4.innerHTML = "mostradata";
        cell5.innerHTML = '<input type="button" value="X" onclick="deletarItem(\'' + task.description + '\')"/>';
	}
}

recuperarDadosLocalStorage();
