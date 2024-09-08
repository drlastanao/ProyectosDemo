class Task{
    Id;
    Text;

    constructor(id,text)
    {
        this.Id = id;
        this.Text= text;
    }

    get Text() 
    {
        return this.Text;
    }

    get Id()
    {
        return this.Id;
    }
}


let listTasks = Array();
let index=0;

function addTask(t)
{
    listTasks.push(t);
    index++;
    savecookie();
    
}

function savecookie()
{
    document.cookie= "tareas="+JSON.stringify(listTasks);
}

function getcookie()
{
    let cookie = document.cookie;
    if (cookie!="")
    {
        listTasks = JSON.parse(cookie.replace("tareas=",""));
        if (listTasks.length>0)
            index=listTasks[listTasks.length-1].Id+1;
    }
}

function deleteTask(t)
{
    listTasks=listTasks.filter(x=> x.Id!=t);
    if (index>0) 
        index--;
    savecookie();
    obtenerDiv();
}

function createTask(id,text)
{
    return new Task(id,text);
}

function findTask(texto)
{
    return listTasks.find(x=>x.Text==texto);
}

getcookie();

const miBoton = document.getElementById('buttonAdd');
miBoton.addEventListener('click', function() {
  addTask(createTask(index,document.getElementById('exampleFormControlInput1').value));
  obtenerDiv();
});





function obtenerDiv()
{
    let texto="";
    for (g=0;g<listTasks.length;g++)
    {
        texto = texto + `<li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                        <p class="lead fw-normal mb-0">`
        texto = texto + listTasks[g].Text+`</p><button class="buttonRemove"  onclick="deleteTask(` + listTasks[g].Id+ `)"   type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary">Borrar</button></li>`;
    }
    const capa= document.getElementById('tareas');
    capa.innerHTML=texto;
}

 

obtenerDiv();