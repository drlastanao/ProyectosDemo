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
let indexMax=0;

function addTask(t)
{
    listTasks.push(t);
    indexMax++;
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
            indexMax=listTasks[listTasks.length-1].Id+1;
        else
            indexMax=0;
    }
}

function deleteTask(t)
{
    listTasks=listTasks.filter(x=> x.Id!=t);
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
  addTask(createTask(indexMax,document.getElementById('exampleFormControlInput1').value));
  obtenerDiv();
});





function obtenerDiv()
{
    let texto="";
    for (g=0;g<listTasks.length;g++)
    {
        texto = texto + `<div class="pb-2">
                            <div class="card">
                             <div class="card-body">
                             <div class="d-flex flex-row align-items-center">
                             <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                                <p class="form-control form-control-lg">`
        texto = texto + listTasks[g].Text+`</p><div><button onclick="deleteTask(` + listTasks[g].Id+ `)"   type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-danger">Borrar</button></li>
                                            </div></div></div></div></div>`;
    }
    const capa= document.getElementById('tareas');
    capa.innerHTML=texto;
}

 

obtenerDiv();